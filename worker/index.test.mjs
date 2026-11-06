import assert from 'node:assert/strict';
import { test } from 'node:test';
import worker, { checkGraphql, createSession, readSession } from './index.js';

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
  await worker.fetch(request('/api/github/api/v3/repos/storytold/craft-wiki', token), env);
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
