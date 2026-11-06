# TileDocs import scaffold

This repository contains Markdown starter pages and app icons for building the TileDocs workspace. The TileDocs project should be saved to this repository with the TileDocs GitHub integration.

## Suggested TileDocs tree

```text
Craft Wiki
├── ArtCraft Studio
├── PhotoCraft
├── VectorCraft
├── FilmCraft
├── LightCraft
├── PdfCraft
├── EffectCraft
├── DesignCraft
├── FigCraft
├── TextureCraft
├── MaterialCraft
├── WordCraft
├── SoundCraft
├── DeckCraft
├── CADCraft
├── GridCraft
└── Craft Anything
```

Under each app folder, add these pages in this order:

1. Overview
2. Getting started
3. Install and update
4. Workflows
5. Troubleshooting

Use the matching page files under `content/apps/<app>/` as Markdown import sources. Each overview starts with that app's logo, which lives in `assets/apps/`. In TileDocs, place the logo beside the app name on its Overview page and use an Image Card for each app on the home page. The nested app folders provide the expandable per-app guide list in TileDocs navigation.

`content/index.md` is the home-page draft. The app pages are deliberately outlines: fill them with product-specific steps and verify details before publishing. Keep app names and section order aligned with the app list in the main website.
