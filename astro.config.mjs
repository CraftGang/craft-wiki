import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const apps = [
  ['ArtCraft Studio', 'artcraft-studio'], ['PhotoCraft', 'photocraft'],
  ['VectorCraft', 'vectorcraft'], ['FilmCraft', 'filmcraft'], ['LightCraft', 'lightcraft'],
  ['PdfCraft', 'pdfcraft'], ['EffectCraft', 'effectcraft'], ['DesignCraft', 'designcraft'],
  ['FigCraft', 'figcraft'], ['TextureCraft', 'texturecraft'], ['MaterialCraft', 'materialcraft'],
  ['WordCraft', 'wordcraft'], ['SoundCraft', 'soundcraft'], ['DeckCraft', 'deckcraft'],
  ['CADCraft', 'cadcraft'], ['GridCraft', 'gridcraft'], ['Craft Anything', 'craft-anything'],
  ['SolidCraft', 'solidcraft'],
];

export default defineConfig({
  site: 'https://craft.wiki',
  integrations: [starlight({
    title: 'Craft Wiki',
    // Starlight's default, /favicon.svg, isn't in public/, so every page linked a missing icon.
    favicon: '/assets/apps/artcraft-studio.svg',
    customCss: ['./src/styles/custom.css'],
    components: { Header: './src/components/WikiHeader.astro', Sidebar: './src/components/WikiSidebar.astro', PageTitle: './src/components/WikiPageTitle.astro', ThemeProvider: './src/components/WikiThemeProvider.astro', Footer: './src/components/WikiFooter.astro' },
    sidebar: [
      { label: 'Home', link: '/' },
      { label: 'Edit wiki', link: '/admin/' },
      ...apps.map(([label, slug]) => ({ label, collapsed: true, items: [{ autogenerate: { directory: `apps/${slug}` } }] })),
    ],
  })],
});
