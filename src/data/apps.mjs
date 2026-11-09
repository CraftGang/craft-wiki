export const apps = [
  ['artcraft-studio', 'ArtCraft Studio', 'svg'], ['photocraft', 'PhotoCraft'],
  ['vectorcraft', 'VectorCraft'], ['filmcraft', 'FilmCraft'], ['lightcraft', 'LightCraft'],
  ['pdfcraft', 'PdfCraft'], ['effectcraft', 'EffectCraft'], ['designcraft', 'DesignCraft'],
  ['figcraft', 'FigCraft'], ['texturecraft', 'TextureCraft'], ['materialcraft', 'MaterialCraft'],
  ['wordcraft', 'WordCraft'], ['soundcraft', 'SoundCraft'], ['deckcraft', 'DeckCraft'],
  ['cadcraft', 'CADCraft'], ['gridcraft', 'GridCraft'], ['craft-anything', 'Craft Anything'],
];

// The home page's app categories, in its order; the sidebar groups the official apps by them.
export const appCategories = [
  ['AI and generative media', ['artcraft-studio']],
  ['Graphics and design', ['photocraft', 'vectorcraft', 'lightcraft', 'designcraft', 'figcraft', 'texturecraft', 'materialcraft']],
  ['Video and effects', ['filmcraft', 'effectcraft']],
  ['Audio', ['soundcraft']],
  ['CAD and drafting', ['cadcraft']],
  ['Office', ['wordcraft', 'gridcraft', 'deckcraft', 'pdfcraft']],
  ['Developer tools', ['craft-anything']],
];
// An official app without a category would vanish from the sidebar: stop the build instead.
const uncategorized = apps.filter(([slug]) => !appCategories.some(([, slugs]) => slugs.includes(slug)));
if (uncategorized.length) throw new Error(`Add to appCategories in src/data/apps.mjs: ${uncategorized.map(([slug]) => slug).join(', ')}`);

export const thirdPartyApps = [
  ['solidcraft', 'SolidCraft', 'png'],
];

export const allApps = [...apps, ...thirdPartyApps];
// The pages every app has, in sidebar order. The sidebar uses this order for a page that has no
// sidebar.order of its own (src/lib/appSidebar.mjs).
export const guides = [
  ['overview', 'Overview'], ['getting-started', 'Getting started'],
  ['install-update', 'Install and update'], ['workflows', 'Workflows'],
  ['troubleshooting', 'Troubleshooting'],
];
