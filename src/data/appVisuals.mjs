// Accent colours match the app palette on getartcraft.com/apps.
// The two apps without an ArtCraft palette use a neutral wiki treatment.
export const appVisuals = {
  'artcraft-studio': { name: 'ArtCraft Studio', type: 'GENERATIVE MEDIA', caption: 'Generative images & video', icon: 'svg', color: '#b9cbff' },
  photocraft: { name: 'PhotoCraft', type: 'IMAGE EDITOR', caption: 'Image editor', hero: 'hero.webp', color: '#2f7bf5', inkLight: '#1a5bc4', inkDark: '#7fb0ff' },
  vectorcraft: { name: 'VectorCraft', type: 'VECTOR ILLUSTRATION', caption: 'Vector illustration', hero: 'hero.webp', color: '#e8573f', inkLight: '#b83a24', inkDark: '#ff8a70' },
  filmcraft: { name: 'FilmCraft', type: 'VIDEO EDITOR', caption: 'Video editor', hero: 'hero.webp', color: '#8b5cf6', inkLight: '#6a3fd6', inkDark: '#b69cff' },
  lightcraft: { name: 'LightCraft', type: 'PHOTO LIBRARY', caption: 'Photo library & raw developer', hero: 'hero.webp', color: '#f2a516', inkLight: '#8a5800', inkDark: '#ffc14d' },
  pdfcraft: { name: 'PdfCraft', type: 'PDF WORKBENCH', caption: 'PDF workbench', hero: 'viewer.webp', color: '#e8204f', inkLight: '#b70228', inkDark: '#f23a62' },
  effectcraft: { name: 'EffectCraft', type: 'MOTION GRAPHICS', caption: 'Motion graphics & VFX', hero: 'hero.webp', color: '#e0368f', inkLight: '#b0206c', inkDark: '#ff7ab8' },
  designcraft: { name: 'DesignCraft', type: 'PAGE LAYOUT', caption: 'Page layout & publishing', hero: 'hero.webp', color: '#7bb51c', inkLight: '#457008', inkDark: '#a6e04a' },
  figcraft: { name: 'FigCraft', type: 'INTERFACE DESIGN', caption: 'Interface design', hero: 'hero.webp', color: '#02da96', inkLight: '#017a54', inkDark: '#3fe6ae' },
  texturecraft: { name: 'TextureCraft', type: 'TEXTURE PAINTING', caption: '3D texture painting', hero: 'workspace.webp', color: '#c2672b', inkLight: '#9c4a15', inkDark: '#e58a4e' },
  materialcraft: { name: 'MaterialCraft', type: 'PROCEDURAL MATERIALS', caption: 'Procedural materials', hero: 'workspace.webp', color: '#178a9c', inkLight: '#0e6674', inkDark: '#4fc4d6' },
  wordcraft: { name: 'WordCraft', type: 'WORD PROCESSING', caption: 'Word processing', hero: 'hero.webp', color: '#4c6ef5', inkLight: '#253e99', inkDark: '#8da2fb' },
  soundcraft: { name: 'SoundCraft', type: 'DIGITAL AUDIO', caption: 'Digital audio workstation', hero: 'mix.webp', color: '#14a9c4', inkLight: '#0b6f82', inkDark: '#52d1ea' },
  deckcraft: { name: 'DeckCraft', type: 'PRESENTATIONS', caption: 'Presentations & slide shows', hero: 'editor.webp', color: '#f26b1d', inkLight: '#ad4306', inkDark: '#ff9657' },
  cadcraft: { name: 'CADCraft', type: 'CAD & DRAFTING', caption: 'Computer-aided design & drafting', hero: 'layout.webp', color: '#14a3c7', inkLight: '#09596d', inkDark: '#4cc7e6' },
  gridcraft: { name: 'GridCraft', type: 'SPREADSHEETS', caption: 'Spreadsheets & data analysis', hero: 'hero-sales.webp', color: '#1f9d55', inkLight: '#136938', inkDark: '#5ee089' },
  'craft-anything': { name: 'Craft Anything', type: 'DEVELOPER TOOLS', caption: 'Software exploration & creation', hero: 'workbench.png', color: '#4e7bfb', inkLight: '#1659c4', inkDark: '#74aaff' },
  solidcraft: { name: 'SolidCraft', type: 'THIRD-PARTY APP', caption: 'Independent parametric 3D CAD', icon: 'png', color: '#a5adc0' },
};

// The lineup is numbered in the order the cards appear on the wiki home page.
export const homeAppOrder = [
  'artcraft-studio', 'photocraft', 'vectorcraft', 'lightcraft', 'designcraft',
  'figcraft', 'texturecraft', 'materialcraft', 'filmcraft', 'effectcraft',
  'soundcraft', 'cadcraft', 'wordcraft', 'gridcraft', 'deckcraft', 'pdfcraft',
  'craft-anything', 'solidcraft',
];

export function wordmark(name) {
  const index = name.indexOf('Craft');
  return index < 0
    ? { before: name, accent: '', after: '' }
    : { before: name.slice(0, index), accent: 'Craft', after: name.slice(index + 5) };
}
