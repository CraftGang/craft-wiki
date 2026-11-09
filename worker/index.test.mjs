import assert from 'node:assert/strict';
import { test } from 'node:test';
import worker, {
  checkGraphql,
  createGitHubAppJwt,
  createSession,
  getGitHubInstallationToken,
  getServerToken,
  importAppPrivateKey,
  isConfigured,
  readSession,
  resetTokenCache,
} from './index.js';

const session = { sub: '42', login: 'ada', name: 'Ada', avatar: null };
const env = {
  SESSION_SECRET: 'secret',
  GITHUB_TOKEN: 'server-token',
  DISCORD_CLIENT_ID: '1',
  DISCORD_CLIENT_SECRET: 'client-secret',
  DISCORD_GUILD_ID: '2',
  DISCORD_ROLE_ID: '3',
  ASSETS: { fetch: () => new Response('asset') },
};
const mutation = `mutation($input: CreateCommitOnBranchInput!) {
  createCommitOnBranch(input: $input) { commit { oid file_0: file(path: "src/content/docs/apps/a.md") { oid } } }
}`;
const input = (paths, branch = { repositoryNameWithOwner: 'storytold/craft-wiki', branchName: 'main' }) => ({
  branch,
  expectedHeadOid: 'abc',
  fileChanges: { additions: paths.map((path) => ({ path, contents: '' })), deletions: [] },
  message: { headline: 'Update page' },
});
const request = (path, token, init = {}) =>
  new Request(`https://craft.wiki${path}`, { ...init, headers: { Authorization: `token ${token}`, ...init.headers } });

test('sessions verify, expire and reject tampering', async () => {
  const token = await createSession(session, 'secret', 1_000_000);
  assert.equal((await readSession(token, 'secret', 1_000_000)).login, 'ada');
  assert.equal(await readSession(token, 'other', 1_000_000), null);
  assert.equal(await readSession(`${token}x`, 'secret', 1_000_000), null);
  assert.equal(await readSession(token, 'secret', 1_000_000 + 9 * 3600 * 1000), null);
});

test('queries pass and wiki commits are credited', () => {
  assert.ok(checkGraphql({ query: 'query { viewer { login } }' }, session).payload);
  const { payload } = checkGraphql({ query: mutation, variables: { input: input(['src/content/docs/apps/a.md']) } }, session);
  assert.match(payload.variables.input.message.body, /Ada \(Discord ada, 42\)/);
});

test('commits outside wiki content or main are refused', () => {
  for (const paths of [['public/admin/config.yml'], ['worker/index.js'], ['src/content/docs/apps/../../../x'], []]) {
    assert.ok(checkGraphql({ query: mutation, variables: { input: input(paths) } }, session).error, String(paths));
  }
  const other = { repositoryNameWithOwner: 'storytold/craft-wiki', branchName: 'other' };
  assert.ok(checkGraphql({ query: mutation, variables: { input: input(['src/content/docs/apps/a.md'], other) } }, session).error);
});

test('other mutations are refused, however they are hidden', () => {
  const good = { input: input(['src/content/docs/apps/a.md']) };
  const documents = [
    'mutation { deleteRef(input: {refId: "x"}) { clientMutationId } }',
    `mutation($input: CreateCommitOnBranchInput!) { createCommitOnBranch(input: $input) { commit { oid } } deleteRef(input: {refId: "x"}) { clientMutationId } }`,
    `mutation($input: CreateCommitOnBranchInput!) { a: deleteRef(input: {refId: "x"}) { clientMutationId } }`,
    `query { viewer { login } } mutation x { deleteRef(input: {refId: "x"}) { clientMutationId } }`,
    `${mutation} mutation y { deleteRef(input: {refId: "x"}) { clientMutationId } }`,
  ];
  for (const query of documents) assert.ok(checkGraphql({ query, variables: good }, session).error, query);
});

test('a session gets a Discord profile and cannot write through REST', async () => {
  const token = await createSession(session, 'secret');
  const user = await worker.fetch(request('/api/github/api/v3/user', token), env);
  assert.equal((await user.json()).login, 'ada');
  const write = request('/api/github/api/v3/repos/storytold/craft-wiki/git/refs', token, { method: 'POST', body: '{}' });
  assert.equal((await worker.fetch(write, env)).status, 403);
  const elsewhere = request('/api/github/api/v3/repos/storytold/other', token);
  assert.equal((await worker.fetch(elsewhere, env)).status, 403);
  assert.equal((await worker.fetch(request('/api/github/api/v3/user', 'cw1.bad.bad'), env)).status, 401);
});

test('GitHub tokens pass through and sessions use the server token', async (t) => {
  const seen = [];
  t.mock.method(globalThis, 'fetch', async (url, init) => {
    seen.push([url, init.headers.get('Authorization')]);
    return new Response('{}');
  });
  await worker.fetch(request('/api/github/api/v3/user', 'ghp_contributor'), env);
  const token = await createSession(session, 'secret');
  const res = await worker.fetch(request('/api/github/api/v3/repos/storytold/craft-wiki', token), env);
  assert.equal((await res.json()).permissions.push, true);
  assert.deepEqual(seen, [
    ['https://api.github.com/user', 'token ghp_contributor'],
    ['https://api.github.com/repos/storytold/craft-wiki', 'token server-token'],
  ]);
});

test('sign-in only succeeds with the editor role', async (t) => {
  const run = async (roles) => {
    t.mock.method(globalThis, 'fetch', async (url) =>
      String(url).endsWith('/token')
        ? new Response(JSON.stringify({ access_token: 'discord' }))
        : new Response(JSON.stringify({ roles, user: { id: '42', username: 'ada' } })),
    );
    const callback = new Request('https://craft.wiki/api/auth/callback?code=c&state=s', {
      headers: { Cookie: 'cw_auth_state=s' },
    });
    return (await worker.fetch(callback, env)).text();
  };
  const page = await run(['3']);
  assert.match(page, /authorization:github:success/);
  assert.match(page, /sveltia-cms\.user/);
  assert.match(page, /Signing you in/);
  const refused = await run(['9']);
  assert.match(refused, /authorization:github:error/);
  assert.match(refused, /<p>Your Discord account does not have the wiki editor role\.<\/p>/);
  const forged = new Request('https://craft.wiki/api/auth/callback?code=c&state=s', {
    headers: { Cookie: 'cw_auth_state=other' },
  });
  assert.match(await (await worker.fetch(forged, env)).text(), /authorization:github:error/);
});

test('everything else is served from the static site', async () => {
  assert.equal(await (await worker.fetch(new Request('https://craft.wiki/apps/'), env)).text(), 'asset');
});

test('GitHub App JWT generation and installation token caching', async (t) => {
  resetTokenCache();
  const keyPair = await crypto.subtle.generateKey(
    { name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' },
    true,
    ['sign', 'verify'],
  );
  const exportedPkcs8 = await crypto.subtle.exportKey('pkcs8', keyPair.privateKey);
  const pem = `-----BEGIN PRIVATE KEY-----\n${Buffer.from(exportedPkcs8).toString('base64')}\n-----END PRIVATE KEY-----`;

  // 1. Verify key import and JWT signing
  const importedKey = await importAppPrivateKey(pem);
  const jwt = await createGitHubAppJwt('5674369', importedKey, 1_000_000_000);
  const [headerB64, payloadB64, sigB64] = jwt.split('.');
  assert.ok(headerB64 && payloadB64 && sigB64);
  const payload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString('utf8'));
  assert.equal(payload.iss, '5674369');
  assert.equal(payload.iat, 1_000_000 - 60);
  assert.equal(payload.exp, 1_000_000 + 600);

  // Verify JWT signature using public key
  const valid = await crypto.subtle.verify(
    'RSASSA-PKCS1-v1_5',
    keyPair.publicKey,
    Buffer.from(sigB64, 'base64url'),
    new TextEncoder().encode(`${headerB64}.${payloadB64}`),
  );
  assert.equal(valid, true);

  // 2. Verify token fetching and caching
  let fetchCount = 0;
  t.mock.method(globalThis, 'fetch', async (url, init) => {
    fetchCount += 1;
    assert.match(String(url), /\/app\/installations\/180020940\/access_tokens$/);
    assert.match(init.headers.Authorization, /^Bearer /);
    return new Response(JSON.stringify({ token: 'ghs_cached_test_token', expires_at: new Date(Date.now() + 3600 * 1000).toISOString() }));
  });

  const appEnv = {
    GITHUB_APP_ID: '5674369',
    GITHUB_APP_INSTALLATION_ID: '180020940',
    GITHUB_APP_PRIVATE_KEY: pem,
    SESSION_SECRET: 'secret',
    DISCORD_CLIENT_ID: '1',
    DISCORD_CLIENT_SECRET: 'secret',
    DISCORD_GUILD_ID: '2',
    DISCORD_ROLE_ID: '3',
  };

  assert.equal(isConfigured(appEnv), true);
  const token1 = await getServerToken(appEnv);
  assert.equal(token1, 'ghs_cached_test_token');
  assert.equal(fetchCount, 1);

  // Second call within expiry should use cache
  const token2 = await getServerToken(appEnv);
  assert.equal(token2, 'ghs_cached_test_token');
  assert.equal(fetchCount, 1);

  // 3. Verify proxyGithub uses the installation token
  const seenHeaders = [];
  t.mock.method(globalThis, 'fetch', async (url, init) => {
    seenHeaders.push([String(url), init?.headers?.get('Authorization')]);
    return new Response('{}');
  });

  const userToken = await createSession(session, 'secret');
  await worker.fetch(request('/api/github/api/v3/repos/storytold/craft-wiki', userToken), appEnv);
  assert.deepEqual(seenHeaders, [
    ['https://api.github.com/repos/storytold/craft-wiki', 'token ghs_cached_test_token'],
  ]);
  resetTokenCache();
});
