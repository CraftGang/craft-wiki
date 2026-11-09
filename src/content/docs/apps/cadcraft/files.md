---
title: DWG and DXF files
description: Open, save and export DWG and DXF drawings in CADCraft, and what is kept when you do.
sidebar:
  order: 4
---

CADCraft's own format is DXF. It also opens and saves DWG, so you can work with drawings from other CAD programs.

## Open a drawing

Choose **File › Open...** (**Ctrl+O**) and pick a file. CADCraft opens:

| Format | Versions |
| --- | --- |
| DXF | R12 and later, text (ASCII) or binary. Binary DXF must be R13 or later |
| DWG | 2000 and later |
| DWT | Drawing templates |
| SVG | Shapes, paths, groups and Inkscape layers become CADCraft objects. Text, fills and images are left out |

To start a new drawing from a template, choose **File › New from Template...**.

## Save a drawing

**File › Save** (**Ctrl+S**) saves in the drawing's own format: a drawing you opened as DWG is saved as DWG. A new drawing is saved as DXF unless you change it.

**File › Save As** (**Ctrl+Shift+S**) saves in another format. CADCraft saves DXF and DWG in versions 2000, 2004, 2007, 2010, 2013 and 2018. To set the format and version for new drawings, use **Tools › Options › Open and Save**, or **File › Default Save Format**.

When you save over a file, CADCraft keeps the old one as a `.bak` backup copy. To turn this off, clear **Create backup copy with each save** in **Tools › Options › Open and Save**.

:::caution[Saving can drop objects]
CADCraft doesn't yet understand everything other CAD programs put in a drawing. Objects it doesn't model, such as 3D solids, are kept when you save as DXF, but some are lost when you save as DWG or as a newer DXF version. Before **File › Save** would remove something from the file, CADCraft asks you: choose **Save Anyway**, **Save As...** to keep the original file as it is, or **Cancel**. Always keep the original of a drawing someone sent you.
:::

## Export and plot

| To get | Choose |
| --- | --- |
| A PDF | **File › Export to PDF...**, or **File › Print...** to set up the plot first |
| A DXF, DWG, SVG or PNG file | **File › Export...**, then give the file the extension you want: `.dxf`, `.dwg`, `.svg` or `.png` |
| Every sheet as its own PDF | **File › Batch Publish...** |

See [Print](/apps/cadcraft/workflows/#print) for paper sizes, scale and plot styles. To add another drawing to the open one, see [Import another drawing](/apps/cadcraft/workflows/#import-another-drawing).

PDFs keep the drawing as vector lines, with layers you can turn on and off in a PDF reader, and can hold several sheets in one file.

## Fonts

CADCraft draws text with the TrueType and OpenType fonts (`.ttf`, `.otf`, `.ttc`) installed on your computer. To use a new font, install it in your system's font folder, then restart CADCraft.

CADCraft reads SHX fonts and big fonts when it can find the `.shx` file: next to the drawing, or in a folder named by the `CADCRAFT_SHXPATH` environment variable. It doesn't look in other CAD programs' folders. If the file isn't found, the text is drawn with CADCraft's own drafting font instead, so it may be a slightly different size from the original.

### Choose a replacement font

Two settings change which fonts CADCraft falls back on. Set them with the `SETVAR` command, or for every session with an environment variable.

| Setting | Environment variable | What it does |
| --- | --- | --- |
| `FONTALT` | `CADCRAFT_FONTALT` | The font used instead of one that can't be found, such as an SHX file. Give a file name or family name, for example `Noto Sans CJK TC`. Empty uses CADCraft's own drafting font |
| `FONTFALLBACK` | `CADCRAFT_FONTFALLBACK` | Fonts tried first for characters the text's font doesn't have, separated by commas, for example `Noto Sans CJK TC, msjh.ttc` |

A single `.` clears either one.

### Right-to-left text

Arabic, Persian, Urdu and Hebrew text is laid out right to left, and Arabic-script letters join correctly. CADCraft's own drafting font has no Arabic letters, so it draws them from an installed font that has them. To choose the font, install one such as [Vazirmatn](https://github.com/rastikerdar/vazirmatn), and either use it in the text style or set `FONTFALLBACK` to its name. Restart CADCraft after you install a font.

## Limits

- DWG files are converted on the way in and out, so very large DWG drawings can be slow to open.
- CADCraft can't yet import PDFs, or open DGN or DWF files.
- The web version opens and saves DXF only, not DWG.
