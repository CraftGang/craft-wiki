import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';

await rm('public/admin/vendor', { recursive: true, force: true });
await mkdir('public/admin/vendor', { recursive: true });
await cp('node_modules/@sveltia/cms/dist', 'public/admin/vendor', {
  recursive: true,
  filter: (source) => !source.endsWith('.map') && !source.endsWith('.mjs'),
});

// Sveltia hardcodes its sign-in button labels and has no option to rename them. Both are rewritten
// here: the top button starts this site's Discord sign-in through the Worker (worker/index.js) even
// though Sveltia labels it after the GitHub backend, and the lower one takes a GitHub token. A
// bundle update that drops a label fails the build instead of shipping wording that misdescribes
// the flow.
const labelPatches = [
  ['sign_in_with_x:`Sign In with {$service}`', 'sign_in_with_x:`Sign In Using Discord`'],
  ['sign_in_using_access_token:`Sign In Using Access Token`', 'sign_in_using_access_token:`Sign In Using GitHub Access Token`'],
];
const bundlePath = 'public/admin/vendor/sveltia-cms.js';
let bundle = await readFile(bundlePath, 'utf8');

for (const [from, to] of labelPatches) {
  if (!bundle.includes(from)) {
    throw new Error(`"${from}" is missing from ${bundlePath}; update this label patch for the new CMS bundle.`);
  }

  bundle = bundle.replaceAll(from, to);
}

await writeFile(bundlePath, bundle);
