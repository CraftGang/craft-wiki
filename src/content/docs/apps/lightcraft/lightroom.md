---
title: Move over from Lightroom
description: Import a Lightroom Classic catalog into LightCraft, and what comes across and what doesn't.
sidebar:
  order: 4
---

LightCraft reads Lightroom Classic catalogs (`.lrcat` files) directly. You don't need Lightroom installed, and LightCraft never changes your catalog or your original photos.

## Import a catalog

1. Choose **File › Import Lightroom Catalog…**.
2. Pick your catalog, the file that ends in `.lrcat`.
3. LightCraft asks where the catalog should go: into the library that is open now, or **Create a new library**. A new library is named after the catalog and goes next to the open one. Its folder must be new or empty.
4. Wait for the import to finish. It runs in the background, with a progress row at the top left, and a message tells you how many photos were added.

One **Edit › Undo** reverses the whole import.

:::note
If you always want catalogs added to the open library, tick **Don't ask again**. To be asked again, change it in **Settings › General**.
:::

## What comes across

- Ratings, picks and rejects, and colour labels
- Keywords, including nested ones, and other metadata
- Collections and collection sets, which become albums
- Virtual copies
- The develop settings LightCraft can match

Your original files stay where they are, and the library points to them. Photos whose files are missing stay in the library, so you can find them later with **File › Find Missing Photos…**.

## What doesn't match exactly

- Develop settings are an approximation. Camera profiles, Adobe's AI features and some masking and retouching settings aren't reproduced. LightCraft tells you which settings it couldn't match.
- Smart collections become ordinary albums, holding the photos that were in them at the time of the import.
- Lightroom's process version isn't carried over. Imported photos use LightCraft's newest rendering.

## Good to know

- Before it changes anything, LightCraft tries to keep a copy of the catalog's settings, history and collections in the library's `Interop` folder.
- Importing the same catalog again doesn't duplicate virtual copies or collections.
- A large catalog can take a long time. To stop an import, click ✕ on its progress row while LightCraft is still reading the catalog.
- The web version can't import a catalog.
