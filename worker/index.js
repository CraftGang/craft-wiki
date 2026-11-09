// Serves the static wiki and adds two things under /api/:
//   /api/auth             Discord sign-in for the editor. A member of the guild
//                         who holds the editor role gets a short session.
//   /api/github/...       The editor's GitHub API. Sessions use the GitHub App
//                         installation token (or legacy server GITHUB_TOKEN),
//                         limited to wiki content. GitHub tokens from contributors
//                         pass straight through.

const SESSION_PREFIX = 'cw1.';
const SESSION_SECONDS = 8 * 60 * 60;
const STATE_COOKIE = 'cw_auth_state';
const REPO = 'storytold/craft-wiki';
const BRANCH = 'main';
const EDITABLE = ['src/content/docs/apps/', 'public/assets/uploads/'];

let cachedInstallationToken = null;
let cachedInstallationTokenExpiresAt = 0;

export const resetTokenCache = () => {
  cachedInstallationToken = null;
  cachedInstallationTokenExpiresAt = 0;
};

const encoder = new TextEncoder();

const base64url = (bytes) =>
  btoa(String.fromCharCode(...new Uint8Array(bytes)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

const fromBase64url = (text) =>
  Uint8Array.from(atob(text.replace(/-/g, '+').replace(/_/g, '/')), (c) => c.charCodeAt(0));

const pkcs1ToPkcs8 = (pkcs1Bytes) => {
  const algId = new Uint8Array([0x30, 0x0d, 0x06, 0x09, 0x2a, 0x86, 0x48, 0x86, 0xf7, 0x0d, 0x01, 0x01, 0x01, 0x05, 0x00]);
  const encodeLength = (len) => {
    if (len < 128) return [len];
    const bytes = [];
    let temp = len;
    while (temp > 0) {
      bytes.unshift(temp & 0xff);
      temp >>= 8;
    }
    return [0x80 | bytes.length, ...bytes];
  };
  const octetHeader = [0x04, ...encodeLength(pkcs1Bytes.length)];
  const totalInnerLen = 3 + algId.length + octetHeader.length + pkcs1Bytes.length;
  const seqHeader = [0x30, ...encodeLength(totalInnerLen)];
  const pkcs8 = new Uint8Array(seqHeader.length + 3 + algId.length + octetHeader.length + pkcs1Bytes.length);
  let offset = 0;
  pkcs8.set(seqHeader, offset);
  offset += seqHeader.length;
  pkcs8.set([0x02, 0x01, 0x00], offset);
  offset += 3;
  pkcs8.set(algId, offset);
  offset += algId.length;
  pkcs8.set(octetHeader, offset);
  offset += octetHeader.length;
  pkcs8.set(pkcs1Bytes, offset);
  return pkcs8;
};

export const importAppPrivateKey = async (pem) => {
  const isPkcs1 = pem.includes('BEGIN RSA PRIVATE KEY');
  const b64 = pem.replace(/-----.*?-----|\s/g, '');
  const raw = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
  const pkcs8Bytes = isPkcs1 ? pkcs1ToPkcs8(raw) : raw;
  return crypto.subtle.importKey(
    'pkcs8',
    pkcs8Bytes,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign'],
  );
};

export const createGitHubAppJwt = async (appId, privateKey, now = Date.now()) => {
  const issuedAt = Math.floor(now / 1000);
  const header = base64url(encoder.encode(JSON.stringify({ alg: 'RS256', typ: 'JWT' })));
  const payload = base64url(
    encoder.encode(
      JSON.stringify({
        iat: issuedAt - 60,
        exp: issuedAt + 10 * 60,
        iss: String(appId),
      }),
    ),
  );
  const signingInput = `${header}.${payload}`;
  const signature = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', privateKey, encoder.encode(signingInput));
  return `${signingInput}.${base64url(signature)}`;
};

export const getGitHubInstallationToken = async (env, now = Date.now()) => {
  if (cachedInstallationToken && cachedInstallationTokenExpiresAt > now + 60_000) {
    return cachedInstallationToken;
  }
  const pem = env.GITHUB_APP_PRIVATE_KEY;
  const appId = env.GITHUB_APP_ID || env.GITHUB_APP_CLIENT_ID;
  const installationId = env.GITHUB_APP_INSTALLATION_ID;
  if (!pem || !appId || !installationId) return null;

  const key = await importAppPrivateKey(pem);
  const jwt = await createGitHubAppJwt(appId, key, now);

  const response = await fetch(`https://api.github.com/app/installations/${installationId}/access_tokens`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${jwt}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'craft-wiki-editor',
    },
  });
  if (!response.ok) return null;
  const data = await response.json();
  cachedInstallationToken = data.token;
  cachedInstallationTokenExpiresAt = data.expires_at ? new Date(data.expires_at).getTime() : now + 50 * 60 * 1000;
  return cachedInstallationToken;
};

export const getServerToken = async (env, now = Date.now()) => {
  if (env.GITHUB_APP_PRIVATE_KEY && env.GITHUB_APP_INSTALLATION_ID && (env.GITHUB_APP_ID || env.GITHUB_APP_CLIENT_ID)) {
    return getGitHubInstallationToken(env, now);
  }
  return env.GITHUB_TOKEN ?? null;
};

export const isConfigured = (env) =>
  Boolean(
    env.DISCORD_CLIENT_SECRET &&
    env.SESSION_SECRET &&
    (env.GITHUB_TOKEN || (env.GITHUB_APP_PRIVATE_KEY && env.GITHUB_APP_INSTALLATION_ID && (env.GITHUB_APP_ID || env.GITHUB_APP_CLIENT_ID)))
  );

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

const safeJson = (value) => JSON.stringify(value).replace(/</g, '\\u003c');

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

// Sveltia waits for this exchange with the sign-in popup. Discord can finish in
// a tab with no opener, for example after handing off to its desktop app, so
// without a reply the session is saved where Sveltia looks for it on load.
const popupResult = (origin, outcome, content) => {
  const message = `authorization:github:${outcome}:${JSON.stringify({ provider: 'github', ...content })}`;
  const script = `
    const origin = ${safeJson(origin)};
    const message = ${safeJson(message)};
    const token = ${safeJson(content.token ?? null)};
    let answered = false;
    const finish = () => {
      if (answered) return;
      answered = true;
      if (!token) return;
      localStorage.setItem('sveltia-cms.user', JSON.stringify({ backendName: 'github', token }));
      location.replace('/admin/');
    };
    window.addEventListener('message', (event) => {
      if (event.data === 'authorizing:github' && event.origin === origin) {
        answered = true;
        window.opener?.postMessage(message, origin);
      }
    });
    window.opener?.postMessage('authorizing:github', origin);
    setTimeout(finish, window.opener ? 1500 : 0);`;
  // A bare "sign-in" page on a domain that doesn't own the credentials reads as phishing to
  // Safe Browsing's classifier, so the page names the site, explains what happened, and says where
  // the password prompt belongs. The response carries a CSP and the usual framing/referrer headers.
  const nonce = base64url(crypto.getRandomValues(new Uint8Array(16)));
  const detail = outcome === 'success' ? 'Signing you in to Craft Wiki...' : content.error;
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Craft Wiki sign-in</title>
<style nonce="${nonce}">
:root{color-scheme:dark}
body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#111217;color:#f4f3f0;font:16px/1.65 system-ui,sans-serif}
main{width:100%;max-width:30rem;margin:0 1.5rem;padding:2rem 1.75rem;border:1px solid #343641;border-radius:.75rem;background:#1a1b22}
.brand{margin:0 0 1.25rem;color:#b9cbff;font-size:.75rem;font-weight:650;letter-spacing:.16em;text-transform:uppercase}
h1{margin:0 0 .75rem;font-size:1.55rem;line-height:1.2;letter-spacing:-.02em}
p{margin:0 0 1rem;color:#c4c5ce}
.links{margin:1.5rem 0 0;display:flex;gap:1rem;align-items:center;flex-wrap:wrap;font-size:.95rem}
a{color:#b9cbff}
.button{padding:.55rem .9rem;border-radius:.4rem;background:#b9cbff;color:#111217;font-weight:650;text-decoration:none}
</style>
</head>
<body>
<main>
<p class="brand">Craft Wiki</p>
<h1>${outcome === 'success' ? 'Signed in with Discord' : 'Sign-in did not complete'}</h1>
<p>${escapeHtml(detail)}</p>
<p>Craft Wiki signs wiki editors in through Discord to check the editor role. It never asks for a Discord password: any password prompt belongs to discord.com.</p>
<p class="links"><a class="button" href="/admin/">Continue to the editor</a><a href="/">Back to the wiki</a></p>
</main>
<script nonce="${nonce}">${script}</script>
</body>
</html>`;
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      'Content-Security-Policy': `default-src 'none'; script-src 'nonce-${nonce}'; style-src 'nonce-${nonce}'; img-src 'self' data:; base-uri 'none'; form-action 'none'; frame-ancestors 'none'`,
      'X-Frame-Options': 'DENY',
      'Referrer-Policy': 'no-referrer',
      'X-Content-Type-Options': 'nosniff',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      'Set-Cookie': `${STATE_COOKIE}=; Path=/api/auth; Max-Age=0; HttpOnly; Secure; SameSite=Lax`,
    },
  });
};

const startSignIn = (url, env) => {
  if (!isConfigured(env)) {
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

  const rawServerToken = await getServerToken(env);
  if (!rawServerToken) return json({ message: 'Server GitHub integration is not configured' }, 500);
  const serverToken = `token ${rawServerToken}`;

  if (isGraphql) {
    if (request.method !== 'POST') return json({ message: 'Method not allowed' }, 405);
    const checked = checkGraphql(await request.json().catch(() => null), session);
    if (checked.error) return json({ message: checked.error }, 403);
    return forward(request, target, serverToken, JSON.stringify(checked.payload));
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
