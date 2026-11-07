---
title: Open and save files
description: Save documents in the VectorCraft format, pick a format for sharing, open files from other programs and bring files into a document with Place.
sidebar:
  order: 21
---

This guide covers the File menu commands that move work in and out of VectorCraft. It shows how to save in the VectorCraft format, choose a format for sharing, open files made in other programs, place files into an open document, and collect a document with its linked files for someone else.

## Start from the Home screen

When no document is open, VectorCraft shows the Home screen. **New file** opens the New Document dialog, **Open** opens a file, **Recent Files** lists the files you opened last, and **Quickly start a new file** makes a document from a preset such as Letter, A4 or Web 1920×1080 in one click. The **Home** button (the house icon before the menus in the application bar) shows the Home screen over open documents, and choosing a document tab returns to that document.

![The Home screen, shown when no document is open, with the New file and Open buttons, Recent Files listing five drawings by name with their folder, and the Quickly start a new file presets](/assets/uploads/vectorcraft/home-screen.webp)

## Save a document

1. Choose **File → Save** (**Ctrl+S**, or **Cmd+S** on macOS).
2. If the document has never been saved, VectorCraft asks for a name and a location first.
3. Later saves write the same file again without asking.

A new document saves as a `.vectorcraft` file. A document that you opened from, or last saved as, SVG, PDF or EPS saves in that format again. Save uses the options you last saved with in that format. A `.ai` file that VectorCraft wrote also saves as `.ai` again when you reopen it. When the document came from a format that Save does not write, such as a PNG image or a DXF drawing, or from a `.ai` file that another program wrote, the first Save asks for a name and a format.

The other save commands are on the same menu:

| Command | What it does |
|---|---|
| **Save As…** | Saves under a new name, location or format. The open document then takes the new file's name, location and format. |
| **Save a Copy…** | Writes a copy. The open document keeps its file name and its unsaved state. |
| **Save as Template…** | Writes a template that opens as a new untitled document. The open document does not change. |
| **Save as PDF…** | Opens the Save PDF dialog with its presets and settings. |
| **Revert** | Discards the changes since the last save and reloads the saved file in the same tab. VectorCraft asks first. |

:::caution
When a format cannot hold everything in the document, the save finishes with a warning that lists the content the file does not hold. Before you save over a file that did not open completely, VectorCraft asks whether to replace it.
:::

In Preferences (**Ctrl+K**, or **Cmd+K** on macOS), the **Use Compression** option in the File Handling section makes VectorCraft compress `.vectorcraft` files when it saves them.

## Choose a format for sharing

Save As writes these formats: VectorCraft, VectorCraft Template, PDF, SVG, SVG Compressed (`.svgz`), `.ai` and EPS. Raster images and the other formats in the following table are written with **File → Export** instead (see [Export for screens and the web](/apps/vectorcraft/export-for-screens-and-the-web/)).

| Format | Open | Save As | Export | Notes |
|---|---|---|---|---|
| **VectorCraft** (`.vectorcraft`) | Yes | Yes | Yes | Keeps the whole document |
| **VectorCraft Template** (`.vctemplate`) | Yes, as a new untitled document | Save as Template… | Yes | |
| **PDF** | Yes, one artboard per page | Yes, and Save as PDF… | Yes | Reopens as the full document when saved with **Preserve editing capabilities** |
| **.ai** | Yes | Yes | Yes | Written as a PDF-compatible file of every artboard that carries the full document |
| **.ait** | Yes, as a new untitled document | Save as Template… | No | Written as a PDF-compatible `.ai` template |
| **SVG** and **SVGZ** | Yes | Yes | Yes | Reopens as the full document when saved with **Preserve Editing Capabilities** |
| **EPS** | Yes | Yes | Yes | Save writes one artboard, the first unless you choose another. Transparency is flattened in the printed appearance. An EPS file VectorCraft wrote reopens as the full document. |
| **DXF** (ASCII) | Yes, each DXF layer as a layer | No | Yes | |
| **EMF** and **WMF** | Yes, on one artboard | No | Yes | |
| **PNG, JPEG, GIF, WebP, TIFF, BMP** | Yes, as an image document | No | Yes | |
| **PSD** | Yes, as its merged image | No | Yes, with layers | |
| **Targa** (`.tga`) | Yes | No | Yes | |
| **Affinity** (`.af`, `.afdesign`, `.afpub`) | Yes | No | No | Keeps layers, artboards, shapes and text; a warning lists anything VectorCraft could not bring in |

:::tip
A `.ai` file that VectorCraft wrote, and a PDF or SVG file saved with its preserve editing option on, reopens in VectorCraft as the full VectorCraft document it carries. If the file was changed in another program since, VectorCraft opens its artwork instead, and the first warning gives the reason.
:::

### Save a PDF

1. Choose **File → Save as PDF…**.
2. Pick a preset from **Preset**, or change the settings in the dialog's sections: General, Compression, Marks and Bleeds, Output, Advanced, Security and Summary.
3. Under **Artboards**, choose **All** or enter a **Range**.
4. Press **Save PDF**.

![The Save PDF dialog over a sunset city drawing, with its Preset and Standard lists, the list of sections, and the General section, where Preserve editing capabilities is turned on and Artboards is set to All](/assets/uploads/vectorcraft/save-pdf-dialog.webp)

:::note
Choosing a PDF standard under **Standard** turns off **Preserve editing capabilities** and clears any passwords.
:::

## Open files

1. Choose **File → Open…** (**Ctrl+O**, or **Cmd+O** on macOS).
2. Pick a file in any format that has Yes in the Open column of the format table.
3. To open a file you used recently, choose it from **File → Open Recent Files**. **Clear Recent Files** at the end of that submenu empties the list.

What you get depends on the file:

- A PDF opens with one artboard per page.
- A raster image opens as a document the size of the image, at the resolution the file declares, or at 72 ppi when it declares none.
- A template (`.vctemplate` or `.ait`) opens as a new untitled document.
- An EPS file from another program is read as PostScript. When its PostScript cannot be read, it opens as its preview image with a warning.

:::note
VectorCraft looks for linked images at the path saved in the document, then at the same relative path from the document's folder. A missing image shows its saved preview until you relink it with **Relink…** in the Links panel (**Window → Links**).
:::

**File → Show in Folder** shows the active document's file in your system's file manager.

## Place a file instead of opening it

**File → Place…** (**Ctrl+Shift+P**, or **Cmd+Shift+P** on macOS) brings a file into the open document instead of opening it in a new tab.

1. Choose **File → Place…** and pick one or more files.
2. In the Place dialog, turn on any of the options:
   - **Link** keeps a link to an image file instead of only embedding it. For a VectorCraft document, it places one locked object that updates when the file changes.
   - **Template** places the file on a new locked, dimmed template layer below the current layer.
   - **Replace** swaps the selected object for the file and keeps its place and transform. It is available when you place one file and one object is selected.
3. Press **Place**. A single file is placed in the center of the view.
4. With several files, the pointer is loaded with them one at a time. Click on the canvas to place the current file at 100%, or drag to set its size. The arrow keys switch between files, and Esc skips one.

Place reads raster images, SVG, PDF and `.ai` pages, EPS, DXF, EMF, WMF and other VectorCraft documents. Text files (`.txt`, `.rtf`, `.docx` and `.doc`) are placed as area type. Raster images are placed at 100% of their physical size, using the resolution the file declares, or 72 ppi when it declares none. A PDF with several pages opens the Place PDF dialog first, where you pick the page.

## Package a document for someone else

**File → Package…** (**Ctrl+Alt+Shift+P**, or **Cmd+Option+Shift+P** on macOS) collects a saved document with its linked files and fonts in one folder.

1. Save the document. Package asks you to save first when it has never been saved, and saves unsaved changes when you press **Package**.
2. Set **Location** and **Folder Name**.
3. Choose the options: **Copy Links**, **Collect Links in a Separate Folder**, **Relink Linked Files to the Document**, **Copy Fonts Used in the Document** and **Create Report**.
4. Press **Package**.

:::caution
Package does not copy fonts whose license does not allow embedding.
:::

## Close documents

**File → Close** (**Ctrl+W**, or **Cmd+W** on macOS) closes the active document, and **File → Close All** (**Ctrl+Alt+W**, or **Cmd+Option+W** on macOS) closes every open document. If a document has unsaved changes, VectorCraft asks whether to save them first.

## File shortcuts

| Command | Windows and Linux | macOS |
|---|---|---|
| New… | Ctrl+N | Cmd+N |
| New from Template… | Ctrl+Shift+N | Cmd+Shift+N |
| Open… | Ctrl+O | Cmd+O |
| Save | Ctrl+S | Cmd+S |
| Save As… | Ctrl+Shift+S | Cmd+Shift+S |
| Save a Copy… | Ctrl+Alt+S | Cmd+Option+S |
| Revert | F12 | F12 |
| Place… | Ctrl+Shift+P | Cmd+Shift+P |
| Package… | Ctrl+Alt+Shift+P | Cmd+Option+Shift+P |
| Close | Ctrl+W | Cmd+W |
| Close All | Ctrl+Alt+W | Cmd+Option+W |

To change these shortcuts, choose **Edit → Keyboard Shortcuts…**.

## Related

- [Set up a document and artboards](/apps/vectorcraft/set-up-documents-and-artboards/)
- [Export for screens and the web](/apps/vectorcraft/export-for-screens-and-the-web/)
- [Trace an image](/apps/vectorcraft/trace-an-image/)
- [Print your artwork](/apps/vectorcraft/print-your-artwork/)
- [All VectorCraft workflows](/apps/vectorcraft/workflows/)
