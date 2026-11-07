import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { previewForEntry } from '../../lib/discordPreview.mjs';
import { renderDiscordPreview } from '../../lib/renderDiscordPreview.mjs';

export const getStaticPaths = (async () => {
  const entries = await getCollection('docs');
  return entries
    .filter((entry) => entry.id !== '404' && !entry.id.endsWith('/404'))
    .map((entry) => ({ params: { slug: entry.id }, props: { entry } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const png = await renderDiscordPreview(previewForEntry(props.entry));
  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
