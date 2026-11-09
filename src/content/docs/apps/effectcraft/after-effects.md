---
title: After Effects projects
description: Import After Effects projects (.aep and .aepx) into EffectCraft, export projects for After Effects, and what carries over.
sidebar:
  order: 4
---

EffectCraft can import After Effects projects, and save projects that After Effects can open. Both are deliberately careful: what they carry over is tested to match, and anything they can't carry over exactly is listed before anything changes. Expect some parts of a large project to be left out or changed.

On a Mac, use **⌘** in place of **Ctrl**.

## Import an After Effects project

1. Choose **File › Import › After Effects Project...** and pick an `.aep` file, or its XML form, `.aepx`.
2. If some parts can't be imported exactly, EffectCraft lists them first: **Some parts of this project cannot be imported exactly (left out or changed)**. Choose **Import Anyway** to go ahead, or **Cancel** to change nothing.

The project's items arrive in a folder named after the file, as they do when you import a project in After Effects. The first composition opens. **Ctrl+Z** undoes the whole import in one step.

### What comes over

- Folders, compositions, solids and footage items, and the main project and composition settings.
- Solid, null, adjustment, footage, precomposition, text, shape, camera and light layers, with their timing and switches.
- Transform properties, keyframes and expressions.
- Masks, track mattes, markers and time remapping.
- Text, with its character and paragraph settings and text animators.
- Layer styles, and a growing list of common effects.

Anything else is listed in the import report and left out, never dropped silently. After Effects plug-ins don't run in EffectCraft, so their effects are left out too.

### Known gaps

These are open reports. Check the import report for your own project.

- Lumetri Color effects aren't imported: [#3111](https://github.com/storytold/effectcraft/issues/3111).
- Puppet pins are skipped: [#3093](https://github.com/storytold/effectcraft/issues/3093).
- Color Control effects from templates can lose their colors: [#3170](https://github.com/storytold/effectcraft/issues/3170).
- Some layers import at the wrong scale: [#3099](https://github.com/storytold/effectcraft/issues/3099).
- More import bugs are collected in [#3087](https://github.com/storytold/effectcraft/issues/3087).

### Footage and fonts

The import keeps each footage item's path. If a file isn't at that path on your computer, the item shows as missing. Relink it with **File › Dependencies › Relink Missing Footage...**: see [Footage is missing or offline](/apps/effectcraft/troubleshooting/#footage-is-missing-or-offline).

Fonts are matched by name. Fonts you don't have installed are listed.

## Export for After Effects

Choose **File › Export › After Effects Project...** to save the open project as an `.aep` file for After Effects 2026. As with import, EffectCraft first lists anything it can't write exactly. Choose **Export Anyway** to save, or **Cancel** to write nothing.

## Other ways to move work across

- **Lottie**: **File › Export › Lottie JSON...** and **File › Import › Lottie...** move animations between EffectCraft and any app that reads Lottie.
- **Premiere Pro**: **File › Export › Adobe Premiere Pro Project...** writes Final Cut Pro XML, which Premiere Pro imports. **File › Import › Adobe Premiere Pro Project...** reads Final Cut Pro XML, FCPXML, OpenTimelineIO, EDL, AAF and OMF files. EffectCraft doesn't read or write Premiere's own `.prproj` format.
- **Another EffectCraft project**: **File › Import › EffectCraft Project...** merges it into the open one, in a folder named after the file.
- **Photoshop, PDF and Illustrator files** import as footage or as a composition with **File › Import › File...**.

## What carries over in your head

The panels, menus, shortcuts, effect names and expression language follow After Effects, so your skills carry over even when a file doesn't.
