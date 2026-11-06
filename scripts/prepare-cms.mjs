import { cp, mkdir, rm } from 'node:fs/promises';

await rm('public/admin/vendor', { recursive: true, force: true });
await mkdir('public/admin/vendor', { recursive: true });
await cp('node_modules/@sveltia/cms/dist', 'public/admin/vendor', {
  recursive: true,
  filter: (source) => !source.endsWith('.map') && !source.endsWith('.mjs'),
});
