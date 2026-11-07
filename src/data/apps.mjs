export const apps = [
  ['artcraft-studio', 'ArtCraft Studio', 'svg'], ['photocraft', 'PhotoCraft'],
  ['vectorcraft', 'VectorCraft'], ['filmcraft', 'FilmCraft'], ['lightcraft', 'LightCraft'],
  ['pdfcraft', 'PdfCraft'], ['effectcraft', 'EffectCraft'], ['designcraft', 'DesignCraft'],
  ['figcraft', 'FigCraft'], ['texturecraft', 'TextureCraft'], ['materialcraft', 'MaterialCraft'],
  ['wordcraft', 'WordCraft'], ['soundcraft', 'SoundCraft'], ['deckcraft', 'DeckCraft'],
  ['cadcraft', 'CADCraft'], ['gridcraft', 'GridCraft'], ['craft-anything', 'Craft Anything'],
];

export const thirdPartyApps = [
  ['solidcraft', 'SolidCraft', 'png'],
];

export const allApps = [...apps, ...thirdPartyApps];
export const guides = [
  ['overview', 'Overview'], ['getting-started', 'Getting started'],
  ['install-update', 'Install and update'], ['workflows', 'Workflows'],
  ['troubleshooting', 'Troubleshooting'],
];
// Pages an app has beyond the shared guides; the sidebar lists them before Troubleshooting.
export const extraGuides = {
  wordcraft: [
    ['languages', 'Languages and spelling'], ['zotero', 'Zotero'],
    ['recovery', 'Document recovery'], ['ai-agents', 'AI agents'],
  ],
};
// ponytail: assumes Troubleshooting is the last shared guide.
export const guidesFor = (slug) => [...guides.slice(0, -1), ...(extraGuides[slug] ?? []), guides.at(-1)];
