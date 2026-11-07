---
title: Export for screens and the web
description: Export artboards and collected assets at several sizes and formats in one pass, and write SVG and PNG files with the options you choose.
sidebar:
  order: 20
---

This page shows how to export every artboard of a document at several scales and formats at once, how to collect pieces of art as assets and export them on their own, and how to write single SVG and PNG files. It also covers the pixel tools for small screen art and the Save for Web (Legacy) dialog.

## Choose an export command

All of these commands are in the **File** menu.

| Command | What it writes | Use it for |
|---|---|---|
| **Export → Export for Screens…** | Every chosen artboard or asset, in every format row, in one pass | Icon sets, app assets and web images at 1x, 2x and other sizes |
| **Export → Export As…** | One file in the format you pick, or one file per artboard | A single SVG, PNG, PDF or other file |
| **Export → Export As SVG…** | An SVG file, with the SVG Options dialog | SVG files for the web |
| **Export → Export As PNG…** | A PNG file, with the PNG Options dialog | A single PNG image |
| **Export → Save for Web (Legacy)…** | One optimized GIF, JPEG, PNG-8 or PNG-24 image, previewed beside the original | Comparing file sizes before you save |
| **Export Selection…** | The selected objects, collected as an asset and opened on the Assets tab of Export for Screens | One icon or element out of a larger design |

## Export artboards with Export for Screens

1. Give each artboard the name you want its files to have. Export for Screens names each file after its artboard.
2. Choose **File → Export → Export for Screens…** (**Ctrl+Alt+E**, or **Cmd+Option+E** on macOS). The dialog opens on the settings the document last exported with. If the Artboard tool is active, the dialog checks the artboards you selected with that tool.
3. On the **Artboards** tab, check the artboards to export. **Grid View** and **List View** change how the thumbnails are shown, and **Clear Selection** unchecks them all.
4. Under **Select:**, choose **All**, **Range:** (for example `1-3`), or **Full Document**. Full Document writes one file per format row for the whole document: a PDF row writes every artboard, and the other rows write the bounds of all visible art.
5. Turn on **Include Bleed** to grow each artboard by the document's bleed. **Include Artboard Fill** draws each artboard's background color behind its art. It is on by default.
6. Under **Export to:**, choose a folder. **Open Location after Export** shows the files in your file manager when the export finishes. **Create Sub-folders** puts each row's files in a sub-folder named by **Scale** (for example `2x`) or by **Format** (for example `SVG`).
7. Under **Formats:**, set each row's **Scale**, **Suffix** and **Format**. **+ Add Scale** adds a PNG row at the next whole factor above the largest factor so far, and the **Remove** button at the end of a row deletes it.
8. Type a **Prefix:** to put the same text in front of every file name.
9. Check the line under the lists, which shows how many items are selected and how many files the export will write.
10. Choose **Export Artboard**. On the Assets tab the button reads **Export Asset**.

![The Export for Screens dialog with three artboards named Icon, Badge and Splash selected, format rows for PNG at 1x, PNG at 2x with the @2x suffix and SVG, and a line saying how many files the export will write](/assets/uploads/vectorcraft/export-for-screens.webp)

### Scales, suffixes and file names

A raster row's **Scale** can be a factor or a target size:

| Scale | What the row writes | Default suffix |
|---|---|---|
| `1x` | The artboard at its own size | None |
| `2x`, `3x` | The artboard at two or three times its size | `@2x`, `@3x` |
| `100w` | An image 100 pixels wide | `@100w` |
| `100h` | An image 100 pixels high | `@100h` |
| `72ppi` | An image at 72 pixels per inch | None |

With these settings, an artboard named Icon and a 2x PNG row with sub-folders by scale gives the file `2x/Icon@2x.png`. Vector rows (SVG, PDF, EPS) leave out size suffixes. When two artboards have the same name, the files of the second and later ones end in `-2`, `-3` and so on. An unnamed artboard is written as `Artboard-N`, where N is its number.

:::tip
The two platform buttons above the format rows replace the rows with a ready set and turn on sub-folders by scale. One set writes PNG at 1x, 2x and 3x. The other writes PNG at screen densities from 0.75x to 4x, each in its own density sub-folder.
:::

The **Format Settings** button (the gear) sets the options that apply to every row of one format, such as the JPEG method or SVG styling. The **Format Presets** menu saves the current rows and settings as a preset with **Save Preset…** and removes one with **Delete Preset**. When you export artboards with a PDF row, **Export PDFs As:** chooses **Single File** (every artboard as a page of one PDF) or **Multiple Files**.

The **Format** list offers these choices:

| Group | Formats |
|---|---|
| Raster | PNG, PNG 8, JPG 100, JPG 80, JPG 50, WebP, GIF, TIFF |
| Vector and documents | SVG, PDF, PDF Print, EPS, AI, VectorCraft |

A **PDF Print** row adds trim marks, registration targets, color bars and page information. EPS, AI and VectorCraft rows write a document that holds the item alone, on its one artboard.

:::caution
WebP rows write lossless WebP files. Lossy WebP is not available.
:::

## Collect and export assets

An asset is a piece of art that Export for Screens exports on its own, cropped to its bounds and named after the asset.

1. Select the art you want to export.
2. Choose **Object → Collect for Export → As Single Asset** to make one asset of the whole selection, or **As Multiple Assets** to make one asset per object. Each asset is named after its object, or Asset 1, Asset 2 and so on.
3. Choose **Window → Asset Export** to see the document's assets as thumbnails with their names.
4. In the panel, double-click an asset to rename it. Click to select assets, and hold **Shift** or **Ctrl** (**Cmd** on macOS) to add to the selection. The bin removes the selected assets from the panel, and their art stays in the document.
5. Set the format rows under **Export Settings**. The panel shares its rows with Export for Screens.
6. Choose **Export** to write the selected assets (or all of them when none is selected) to a folder you pick. With assets selected, the button reads **Export N Selected**. The Export for Screens button in the panel opens the dialog on its **Assets** tab instead.

![A sunset city drawing with the Asset Export panel showing three collected assets, Sun, Crescent and Lantern, as thumbnails with their names. Lantern is selected and the button reads Export 1 Selected](/assets/uploads/vectorcraft/asset-export.webp)

You can also drag art from the canvas into the Asset Export panel, or select it and click **+**. Each object becomes its own asset. Hold **Alt** (**Option** on macOS) to make one asset of all of them.

:::note
An asset stays linked to the objects it was collected from. Moving the art moves the area that is exported, and deleting the art removes it from the asset.
:::

**File → Export Selection…** collects the selected objects as one asset and opens Export for Screens on the Assets tab with that asset checked.

## Export one file with Export As

1. Choose **File → Export → Export As…**.
2. Pick a **Format:**.
3. Turn on **Use Artboards** to write one file per artboard, named `<name>-<artboard>` with the format's extension, and choose **All** or a **Range:**. For a PDF, each artboard becomes a page. With Use Artboards off, the export covers the bounds of the visible art.
4. Choose **Export…** and pick the file name. The options dialog for the format follows, for example PNG Options or SVG Options.

**Export As SVG…** goes straight to SVG Options, and **Export As PNG…** asks for the file and then opens PNG Options.

These formats are available from Export As:

| Kind | Formats |
|---|---|
| Vector | SVG, SVG Compressed (gzipped SVG), PDF, EPS, DXF, EMF, WMF |
| Raster | PNG, PNG-8, JPEG, WebP, GIF, TIFF, BMP, Targa, PSD |
| Text | Text: the document's text, in stacking order from back to front |

## Set SVG options

The SVG Options dialog opens from **Export As SVG…**, from Export As when the format is SVG, and when you save a document as SVG. VectorCraft keeps your choices for the next export.

| Option | Choices |
|---|---|
| **SVG Profile:** | SVG 1.1 or SVG Tiny 1.2 |
| **Styling:** | Internal CSS (the default), Presentation Attributes, Style Attributes, or Style Attributes (Entity References) |
| **Font:** | SVG keeps text as text; Convert To Outlines writes it as shapes |
| **Images:** | Embed puts images inside the SVG; Link writes them as separate files |
| **Object IDs:** | Layer Names, Minimal or Unique |
| **Decimal:** | Digits after the decimal point, from 1 to 7 (default 3) |
| **Encoding:** | Unicode (UTF-8), Unicode (UTF-16) or ISO 8859-1 |
| **Minify** | Writes the file without extra spaces and line breaks |
| **Responsive** | On by default; leaves out the width and height so the SVG scales to its container |
| **Embed Fonts (Glyphs Used)** | Puts the glyphs the text uses into the file |
| **Fewer \<tspan\> Elements** | Writes text with fewer `<tspan>` elements |
| **Include Metadata** | Adds the document's metadata |
| **Use Artboards** | On by default; exports all artboards or a range, one file each |

Embed Fonts and Fewer \<tspan\> Elements are unavailable when Font is set to Convert To Outlines. SVG Tiny 1.2 uses presentation attributes and does not embed fonts. When you save a document as SVG, the dialog shows **Preserve Editing Capabilities** in place of Use Artboards.

Choose **Show Code** to see the SVG markup the current settings write, and **Hide Code** to close it.

![The SVG Options dialog over the badge, with styling, font, image, object ID and decimal settings, Minimal object IDs, 2 decimals and Minify turned on, and the code preview showing the SVG markup](/assets/uploads/vectorcraft/svg-options.webp)

:::tip
To write a smaller SVG, choose Minimal object IDs and a low Decimal value, and turn on Minify. Check the result with Show Code before you export.
:::

## Keep small art sharp on screen

1. Choose **View → Pixel Preview** (**Ctrl+Alt+Y**, or **Cmd+Option+Y** on macOS) to see the art as it will look when written to pixels.
2. Turn on **View → Snap to Pixel** so that the objects you draw or move snap to whole pixels.
3. To fix art you have already drawn, select it and choose **Object → Make Pixel Perfect**. It snaps each object's edges to the pixel grid, places odd stroke weights on half pixels, and rounds stroke weights.

## Compare web image settings

**File → Export → Save for Web (Legacy)…** (**Ctrl+Alt+Shift+S**, or **Cmd+Option+Shift+S** on macOS) previews the art as an optimized GIF, JPEG, PNG-8 or PNG-24 image. The **Original**, **Optimized**, **2-Up** and **4-Up** views show the original beside one or more optimized versions, each with its file size and download time. The dialog also sets colors, dither, transparency and matte, JPEG quality, the color table and the image size.

- **Save…** keeps the settings and writes the files.
- **Done** keeps the settings and does not write any files.

## Keyboard shortcuts

| Command | Windows and Linux | macOS |
|---|---|---|
| Export for Screens… | Ctrl+Alt+E | Cmd+Option+E |
| Pixel Preview | Ctrl+Alt+Y | Cmd+Option+Y |
| Save for Web (Legacy)… | Ctrl+Alt+Shift+S | Cmd+Option+Shift+S |

To change these shortcuts, choose **Edit → Keyboard Shortcuts…**.

## Related

- [Set up a document and artboards](/apps/vectorcraft/set-up-documents-and-artboards/)
- [Open and save files](/apps/vectorcraft/open-and-save-files/)
- [Print your artwork](/apps/vectorcraft/print-your-artwork/)
- [Automate VectorCraft](/apps/vectorcraft/automate-vectorcraft/)
- [All VectorCraft workflows](/apps/vectorcraft/workflows/)
