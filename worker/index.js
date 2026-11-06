// Serves the static wiki and adds two things under /api/:
//   /api/auth             Discord sign-in for the editor. A member of the guild
//                         who holds the editor role gets a short session.
//   /api/github/...       The editor's GitHub API. Sessions use the server's
//                         GitHub token, limited to wiki content. GitHub tokens
//                         from contributors pass straight through.

const SESSION_PREFIX = 'cw1.';
const SESSION_SECONDS = 8 * 60 * 60;
const STATE_COOKIE = 'cw_auth_state';
const REPO = 'storytold/craft-wiki';
const BRANCH = 'main';
const EDITABLE = ['src/content/docs/apps/', 'public/assets/uploads/'];

const encoder = new TextEncoder();

const base64url = (bytes) =>
  btoa(String.fromCharCode(...new Uint8Array(bytes)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

const fromBase64url = (text) =>
  Uint8Array.from(atob(text.replace(/-/g, '+').replace(/_/g, '/')), (c) => c.charCodeAt(0));

const hmacKey = (secret, usage) =>
  crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, [usage]);

export const createSession = async (user, secret, now = Date.now()) => {
  const body = base64url(encoder.encode(JSON.stringify({ ...user, exp: Math.floor(now / 1000) + SESSION_SECONDS })));
  const signature = await crypto.subtle.sign('HMAC', await hmacKey(secret, 'sign'), encoder.encode(body));
  return `${SESSION_PREFIX}${body}.${base64url(signature)}`;
};

export const readSession = async (token, secret, now = Date.now()) => {
  const [body, signature] = token.slice(SESSION_PREFIX.length).split('.');
  if (!body || !signature || !secret) return null;
  try {
    const key = await hmacKey(secret, 'verify');
    if (!(await crypto.subtle.verify('HMAC', key, fromBase64url(signature), encoder.encode(body)))) return null;
    const session = JSON.parse(new TextDecoder().decode(fromBase64url(body)));
    return session.exp > now / 1000 ? session : null;
  } catch {
    return null;
  }
};

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'private, no-store' },
  });

// Sveltia waits for this exchange with the sign-in popup.
const popupResult = (origin, outcome, content) => {
  const message = `authorization:github:${outcome}:${JSON.stringify({ provider: 'github', ...content })}`;
  const script = `
    window.addEventListener('message', ({ data, origin }) => {
      if (data === 'authorizing:github' && origin === ${JSON.stringify(origin)}) {
        window.opener?.postMessage(${JSON.stringify(message).replace(/</g, '\\u003c')}, origin);
      }
    });
    window.opener?.postMessage('authorizing:github', ${JSON.stringify(origin)});`;
  return new Response(`<!doctype html><meta charset="utf-8"><title>Craft Wiki sign-in</title><script>${script}</script>`, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      'Set-Cookie': `${STATE_COOKIE}=; Path=/api/auth; Max-Age=0; HttpOnly; Secure; SameSite=Lax`,
    },
  });
};

const startSignIn = (url, env) => {
  if (!env.DISCORD_CLIENT_SECRET || !env.SESSION_SECRET || !env.GITHUB_TOKEN) {
    return popupResult(url.origin, 'error', { error: 'Discord sign-in is not configured yet.' });
  }
  const state = base64url(crypto.getRandomValues(new Uint8Array(24)));
  const target = new URL('https://discord.com/oauth2/authorize');
  target.search = new URLSearchParams({
    client_id: env.DISCORD_CLIENT_ID,
    response_type: 'code',
    scope: 'identify guilds.members.read',
    redirect_uri: `${url.origin}/api/auth/callback`,
    state,
    prompt: 'none',
  });
  return new Response(null, {
    status: 302,
    headers: {
      Location: target.href,
      'Cache-Control': 'no-store',
      'Set-Cookie': `${STATE_COOKIE}=${state}; Path=/api/auth; Max-Age=600; HttpOnly; Secure; SameSite=Lax`,
    },
  });
};

const finishSignIn = async (request, url, env) => {
  const fail = (error) => popupResult(url.origin, 'error', { error });
  const cookie = request.headers.get('Cookie')?.match(new RegExp(`(?:^|; )${STATE_COOKIE}=([^;]+)`))?.[1];
  const code = url.searchParams.get('code');
  if (!code || !cookie || cookie !== url.searchParams.get('state')) return fail('Sign-in expired. Please try again.');

  const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: env.DISCORD_CLIENT_ID,
      client_secret: env.DISCORD_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code,
      redirect_uri: `${url.origin}/api/auth/callback`,
    }),
  });
  if (!tokenResponse.ok) return fail('Discord did not accept the sign-in. Please try again.');
  const { access_token: accessToken } = await tokenResponse.json();

  const memberResponse = await fetch(`https://discord.com/api/users/@me/guilds/${env.DISCORD_GUILD_ID}/member`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!memberResponse.ok) return fail('You need to be a member of the ArtCraft Discord server.');
  const member = await memberResponse.json();
  if (!member.roles?.includes(env.DISCORD_ROLE_ID)) return fail('Your Discord account does not have the wiki editor role.');

  const { id, username, global_name: globalName, avatar } = member.user;
  const token = await createSession(
    {
      sub: id,
      login: username,
      name: member.nick ?? globalName ?? username,
      avatar: avatar ? `https://cdn.discordapp.com/avatars/${id}/${avatar}.png` : null,
    },
    env.SESSION_SECRET,
  );
  return popupResult(url.origin, 'success', { token });
};

const stripStrings = (query) => query.replace(/"""[\s\S]*?"""|"(?:\\.|[^"\\])*"/g, '""');

// Returns the root field names of a one-operation document, or null.
const rootFields = (query) => {
  const text = stripStrings(query);
  const start = text.indexOf('{');
  if (start < 0) return null;
  const fields = [];
  let depth = 0;
  let parens = 0;
  let closed = false;
  for (let i = start; i < text.length; i += 1) {
    const char = text[i];
    if (closed && /\S/.test(char)) return null;
    if (char === '(') parens += 1;
    else if (char === ')') parens -= 1;
    else if (parens === 0 && char === '{') depth += 1;
    else if (parens === 0 && char === '}') {
      depth -= 1;
      closed = depth === 0;
    } else if (parens === 0 && depth === 1 && /[A-Za-z_]/.test(char)) {
      const [name] = text.slice(i).match(/^\w+/);
      fields.push(name);
      i += name.length - 1;
    }
  }
  return closed ? fields : null;
};

const editablePath = (path) =>
  typeof path === 'string' && EDITABLE.some((prefix) => path.startsWith(prefix)) && !path.split('/').includes('..');

// A session may read anything and may only commit wiki content to main.
export const checkGraphql = (payload, session) => {
  const { query, variables } = payload ?? {};
  if (typeof query !== 'string') return { error: 'Missing query' };
  if (!/\bmutation\b/.test(stripStrings(query))) return { payload };

  const fields = rootFields(query);
  if (
    !/^\s*mutation\s*\(\s*\$input\s*:\s*CreateCommitOnBranchInput!\s*\)/.test(query) ||
    fields?.length !== 1 ||
    fields[0] !== 'createCommitOnBranch' ||
    !/createCommitOnBranch\s*\(\s*input\s*:\s*\$input\s*\)/.test(query)
  ) {
    return { error: 'Only wiki content commits are allowed' };
  }
  const input = variables?.input;
  const paths = [...(input?.fileChanges?.additions ?? []), ...(input?.fileChanges?.deletions ?? [])].map((f) => f.path);
  if (
    input?.branch?.repositoryNameWithOwner !== REPO ||
    input?.branch?.branchName !== BRANCH ||
    !paths.length ||
    !paths.every(editablePath)
  ) {
    return { error: 'Only wiki content commits are allowed' };
  }
  const credit = `Edited on craft.wiki by ${session.name} (Discord ${session.login}, ${session.sub})`;
  const message = { ...input.message, body: [input.message?.body, credit].filter(Boolean).join('\n\n') };
  return { payload: { ...payload, variables: { ...variables, input: { ...input, message } } } };
};

const forward = async (request, target, authorization, body) => {
  const headers = new Headers({ 'User-Agent': 'craft-wiki-editor' });
  for (const name of ['Accept', 'Content-Type', 'If-None-Match', 'X-GitHub-Api-Version']) {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  }
  if (authorization) headers.set('Authorization', authorization);
  const response = await fetch(target, { method: request.method, headers, body, redirect: 'follow' });
  const result = new Response(response.body, response);
  result.headers.delete('Set-Cookie');
  result.headers.set('Cache-Control', 'private, no-store');
  return result;
};

const proxyGithub = async (request, url, env) => {
  const route = url.pathname.slice('/api/github/api'.length);
  const isGraphql = route === '/graphql';
  if (!isGraphql && !route.startsWith('/v3/')) return json({ message: 'Not Found' }, 404);
  const path = isGraphql ? '/graphql' : route.slice('/v3'.length);
  const target = `https://api.github.com${path}${url.search}`;
  const authorization = request.headers.get('Authorization');
  const token = authorization?.replace(/^(token|bearer)\s+/i, '') ?? '';

  if (!token.startsWith(SESSION_PREFIX)) {
    const hasBody = !['GET', 'HEAD'].includes(request.method);
    return forward(request, target, authorization, hasBody ? request.body : undefined);
  }

  const session = await readSession(token, env.SESSION_SECRET);
  if (!session) return json({ message: 'Bad credentials' }, 401);
  const serverToken = `token ${env.GITHUB_TOKEN}`;

  if (isGraphql) {
    if (request.method !== 'POST') return json({ message: 'Method not allowed' }, 405);
    const checked = checkGraphql(await request.json().catch(() => null), session);
    if (checked.error) return json({ message: checked.error }, 403);
    return forward(request, target, serverToken, JSON.stringify(checked.payload));
  }
  if (path === '/user') {
    return json({
      id: session.sub,
      login: session.login,
      name: session.name,
      email: null,
      avatar_url: session.avatar,
      html_url: `https://discord.com/users/${session.sub}`,
    });
  }
  const allowed = path === '/rate_limit' || path === `/repos/${REPO}` || path.startsWith(`/repos/${REPO}/`);
  if (!['GET', 'HEAD'].includes(request.method) || !allowed) return json({ message: 'Not allowed' }, 403);
  return forward(request, target, serverToken);
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/auth') return startSignIn(url, env);
    if (url.pathname === '/api/auth/callback') return finishSignIn(request, url, env);
    if (url.pathname.startsWith('/api/github/')) return proxyGithub(request, url, env);
    return env.ASSETS.fetch(request);
  },
};
