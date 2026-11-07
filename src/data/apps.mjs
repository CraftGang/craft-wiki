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
  soundcraft: [['ai-agents', 'AI agents']],
  cadcraft: [['files', 'DWG and DXF files'], ['automation', 'Scripts, LISP and AI agents']],
  gridcraft: [['ai-agents', 'AI agents']],
  photocraft: [['file-formats', 'File formats'], ['automation', 'Automation and AI agents']],
  vectorcraft: [['ai-agents', 'AI agents'], ['print-tiling', 'Print a large poster']],
  designcraft: [['indesign-files', 'InDesign files'], ['ai-agents', 'AI agents']],
  filmcraft: [['ai-agents', 'AI agents']],
  texturecraft: [['ai-agents', 'AI agents']],
  figcraft: [['live-sessions', 'Live sessions'], ['ai-agents', 'AI agents']],
  deckcraft: [['slide-shows', 'Slide shows'], ['ai-agents', 'AI agents']],
  pdfcraft: [['organize-pages', 'Organise pages'], ['forms-and-signing', 'Forms and signing'], ['ai-agents', 'AI agents']],
  effectcraft: [['after-effects', 'After Effects projects'], ['ai-agents', 'AI agents']],
  lightcraft: [['lightroom', 'Move over from Lightroom'], ['ai-agents', 'AI agents']],
};
// ponytail: assumes Troubleshooting is the last shared guide.
export const guidesFor = (slug) => [...guides.slice(0, -1), ...(extraGuides[slug] ?? []), guides.at(-1)];
// Pages the sidebar nests under one of an app's guides, keyed by app slug and then by guide slug.
export const childGuides = {
  vectorcraft: {
    workflows: [
      ['set-up-documents-and-artboards', 'Set up a document and artboards'],
      ['draw-and-transform-shapes', 'Draw and transform shapes'],
      ['draw-and-edit-paths', 'Draw and edit paths'],
      ['fill-stroke-and-color', 'Fill, stroke and color'],
      ['add-and-style-type', 'Add and style type'],
      ['arrange-group-and-align', 'Arrange, group and align'],
      ['combine-and-cut-shapes', 'Combine and cut shapes'],
      ['apply-effects-and-appearance', 'Apply effects and appearance'],
      ['organize-with-layers-and-symbols', 'Organize with layers and symbols'],
      ['trace-an-image', 'Trace an image'],
      ['export-for-screens-and-the-web', 'Export for screens and the web'],
      ['open-and-save-files', 'Open and save files'],
      ['print-your-artwork', 'Print your artwork'],
      ['automate-vectorcraft', 'Automate VectorCraft'],
    ],
  },
};
export const childGuidesFor = (slug, guide) => childGuides[slug]?.[guide] ?? [];
