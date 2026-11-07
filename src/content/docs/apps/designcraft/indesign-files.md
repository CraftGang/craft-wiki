---
title: InDesign files
description: Open InDesign .idml, .indd and .indt files in DesignCraft, fix missing fonts and links, and export IDML back to InDesign.
sidebar:
  order: 4
---

DesignCraft opens InDesign work, and can hand it back. It opens:

- **InDesign Markup (.idml)**, the exchange format InDesign exports.
- **InDesign documents (.indd)** and **templates (.indt)**. DesignCraft converts them to IDML as it opens them, using the open-source [indd-utils](https://github.com/storytold/indd-utils).

It can't open InDesign books (.indb) or libraries (.indl), and it can't save .indd files.

:::caution
Opening InDesign files is new and not yet tested on many real files. Some things can come in differently or go missing. Check the layout carefully after opening, and keep the original file.
:::

## Open a file

1. Choose **File › Open…** (**Ctrl+O**, or **⌘O** on a Mac), or click **Open** on the start screen.
2. Pick the file. The file types list starts with **DesignCraft, IDML or InDesign**.
3. The file opens as a new document.

If parts of the file couldn't be read, DesignCraft still opens it and shows an **Import Warnings** alert listing them. If the file can't be opened at all, it shows **Can't Open the File** with the reason.

## Fonts

Text set in a font DesignCraft can't find is highlighted in pink on screen. The highlight doesn't appear in exports.

To fix it, install the font on your computer, or put the font files in a **Document Fonts** folder next to the file, as InDesign's **Package** command does. DesignCraft looks there first. **Type › Find/Replace Font…** lists the fonts the document uses, flags the missing ones, and can swap one font for another.

## Linked pictures

Keep the file's **Links** folder next to it, as InDesign's **Package** command leaves it. If a picture is missing, open **Window › Links** to see which, select it and choose **Relink…**.

## Save and send back

- **File › Save** (**Ctrl+S**) saves a .designcraft file. The original InDesign file is not changed.
- **File › Export IDML…** writes an .idml file you can open in InDesign.
- **File › Export PDF…** makes a PDF that looks the same everywhere. See [Export a PDF](/apps/designcraft/workflows/#export-a-pdf).

## Report a file that doesn't look right

Real files are how we find these problems. If you can share one, [report it on GitHub](https://github.com/storytold/designcraft/issues) with the file attached, or ask in [Discord](https://discord.gg/artcraft).
