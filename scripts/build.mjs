import { cp, mkdir, rm, stat } from 'node:fs/promises';

await stat('site/index.html');
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('site', 'dist', { recursive: true });
