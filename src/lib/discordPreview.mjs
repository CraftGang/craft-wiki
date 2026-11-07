import { appVisuals } from '../data/appVisuals.mjs';

const siteOrigin = 'https://craft.wiki';

export function previewForEntry(entry) {
  const id = entry.id || 'index';
  const appSlug = /^apps\/([^/]+)\//.exec(id)?.[1];
  const app = appSlug ? appVisuals[appSlug] : undefined;
  const appName = app?.name ?? 'Craft Wiki';
  const pageTitle = id === 'index'
    ? 'Browse the Craft Apps'
    : id.endsWith('/overview') ? 'Overview' : entry.data.title;
  const icon = app ? `/assets/apps/${appSlug}.${app.icon ?? 'webp'}` : '/assets/apps/artcraft-studio.svg';

  return {
    id,
    appSlug,
    appName,
    pageTitle,
    description: entry.data.description ?? 'Guides for ArtCraft and the Craft Apps.',
    color: app?.color ?? '#4f7efa',
    wordmarkColor: app?.inkDark ?? app?.color ?? '#b9cbff',
    icon,
    screenshot: app?.hero ? `/assets/uploads/${appSlug}/${app.hero}` : undefined,
  };
}

export function previewOrigin() {
  // A Quick Tunnel needs its own public URL during local Discord testing.
  return process.env.DISCORD_PREVIEW_ORIGIN || siteOrigin;
}

export function previewImageUrl(preview, origin = previewOrigin()) {
  // Starlight renders a 404 page without a matching content entry/image.
  const imageId = preview.id === '404' ? 'index' : preview.id;
  return new URL(`/discord/${imageId}.png`, origin).href;
}

export function componentEmbed(preview, pagePath, origin = previewOrigin()) {
  const pageUrl = new URL(pagePath, origin).href;
  const title = ['Craft Wiki', preview.appSlug && preview.appName, preview.pageTitle]
    .filter(Boolean).join(' · ');

  return {
    component: {
      type: 17,
      accent_color: Number.parseInt(preview.color.slice(1), 16),
      components: [
        { type: 10, content: `**${title}**` },
        {
          type: 12,
          items: [{
            media: { url: previewImageUrl(preview, origin) },
            description: `${preview.appName}: ${preview.pageTitle}`,
          }],
        },
        {
          type: 1,
          components: [
            { type: 2, style: 5, label: 'Open', url: pageUrl },
            { type: 2, style: 5, label: 'Browse apps', url: new URL('/#apps', origin).href },
            { type: 2, style: 5, label: 'ArtCraft', url: 'https://getartcraft.com/' },
          ],
        },
      ],
    },
  };
}

export function serializeComponentEmbed(payload) {
  // Escape HTML delimiters so page content cannot terminate the JSON script.
  const json = JSON.stringify(payload).replaceAll('<', '\\u003c');
  if (Buffer.byteLength(json, 'utf8') > 3000) {
    throw new Error('Discord component embed exceeds the 3,000-byte limit');
  }
  return json;
}
