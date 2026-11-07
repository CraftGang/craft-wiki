---
title: Open and save files
description: Save documents in the VectorCraft format, pick a format for sharing, save pictures for office documents, add file information, open files from other programs, recover work after a crash and bring files into a document with Place.
sidebar:
  order: 21
---

This guide covers the File menu commands that move work in and out of VectorCraft: saving in the VectorCraft format, choosing a format for sharing, saving a picture for office documents, adding file information, opening files made in other programs, recovering work after a crash, placing files into an open document, and collecting a document with its linked files for someone else.

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
| **Save for Office Documents…** | Saves one artboard as a PNG picture for office documents and slides. |
| **Revert** | Discards the changes since the last save and reloads the saved file in the same tab. VectorCraft asks first. |

![The File menu open over the harbor drawing, with Save As… highlighted among Save, Save a Copy…, Save as Template…, Save as PDF…, Save for Office Documents… and Revert, and the shortcuts of Save, Save As…, Save a Copy… and Revert](/assets/uploads/vectorcraft/file-menu-save-commands.webp)

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

![The SVG Options dialog over the harbor drawing, with SVG Profile set to SVG 1.1, Styling to Internal CSS, Images to Embed, Object IDs to Layer Names and Decimal to 3, and Responsive and Preserve Editing Capabilities turned on](/assets/uploads/vectorcraft/svg-options-preserve-editing.webp)

### Save a PDF

1. Choose **File → Save as PDF…**.
2. Pick a preset from **Preset**, or change the settings in the dialog's sections: General, Compression, Marks and Bleeds, Output, Advanced, Security and Summary.
3. Under **Artboards**, choose **All** or enter a **Range**.
4. Press **Save PDF**.

![The Save PDF dialog over a sunset city drawing, with its Preset and Standard lists, the list of sections, and the General section, where Preserve editing capabilities is turned on and Artboards is set to All](/assets/uploads/vectorcraft/save-pdf-dialog.webp)

:::note
Choosing a PDF standard under **Standard** turns off **Preserve editing capabilities** and clears any passwords.
:::

To check colors, overprints and transparency before you send a PDF to a print shop, see [Manage color and proof](/apps/vectorcraft/manage-color-and-proof/).

## Save a picture for office documents

**File → Save for Office Documents…** saves one artboard as a PNG file that you can insert in a word processor document or a slide.

1. Choose **File → Save for Office Documents…**.
2. Set the options from the following table. **Size** shows the width and height of the picture in pixels.
3. Press **Save…**, then choose a name and a location for the PNG file.

![The Save for Office Documents dialog over the harbor drawing, with Resolution set to Medium (150 ppi), Artboard set to Artboard 1, Size 3333 × 2083 px, and Transparent Background turned off](/assets/uploads/vectorcraft/save-for-office-dialog.webp)

| Option | What it does | When the dialog opens |
|---|---|---|
| **Resolution** | **Screen (72 ppi)**, **Medium (150 ppi)** or **High (300 ppi)** | Medium (150 ppi) |
| **Artboard** | The artboard to save. The list appears only when the document has more than one artboard. | The first artboard |
| **Transparent Background** | Leaves the background transparent. When it is off, the picture has a white background. | Off |

As with Export, the save ends with a warning when an image in the document could not be read or when type is drawn in a substitute font.

## Add file information

File Info stores a title, an author, keywords and copyright details in the document.

1. Choose **File → File Info…** (**Ctrl+Alt+Shift+I**, or **Cmd+Option+Shift+I** on macOS).
2. Fill in the fields from the following table.
3. Press **OK**. The change is one step in the undo history.

![The File Info dialog over the harbor festival poster, with Document Title Harbor Lights, Author Dusk Bay Print Shop, Author Title Poster design, a two-line description, a four-star rating, the keywords harbor, lantern festival, poster and summer, Copyright Status set to Copyrighted with a copyright notice and URL, and the created and modified dates in UTC](/assets/uploads/vectorcraft/file-info.webp)

| Field | What it holds |
|---|---|
| **Document Title** | The document's title. It cannot be empty. |
| **Author** and **Author Title** | Who made the document, and that person's role |
| **Description** | A few lines about the document |
| **Rating** | Zero to five stars. Click a star to set the rating, and click the same star again to clear it. |
| **Keywords** | Type a keyword and press **Enter** or **Add**. Separate several keywords with commas. Each keyword is listed once, and the × on a keyword removes it. |
| **Copyright Status** | **Unknown**, **Copyrighted** or **Public Domain** |
| **Copyright Notice** and **Copyright Info URL** | The copyright line and a web address for it |
| **Created** and **Modified** | The dates the document was created and last modified, in UTC. You cannot edit them. |

PDF and PNG files that VectorCraft writes carry the File Info, and so do SVG files written with **Include Metadata** on. When you open a PDF or a `.ai` file, VectorCraft reads the file information the file carries.

## Open files

1. Choose **File → Open…** (**Ctrl+O**, or **Cmd+O** on macOS).
2. Pick a file in any format that has Yes in the Open column of the format table.
3. To open a file you used recently, choose it from **File → Open Recent Files**. **Clear Recent Files** at the end of that submenu empties the list.

![The File menu open with the Open Recent Files submenu showing harbor-lights.vectorcraft and night-market.vectorcraft, and Clear Recent Files at the end of the submenu](/assets/uploads/vectorcraft/open-recent-files.webp)

What you get depends on the file:

- A PDF opens with one artboard per page.
- A raster image opens as a document the size of the image, at the resolution the file declares, or at 72 ppi when it declares none.
- A template (`.vctemplate` or `.ait`) opens as a new untitled document.
- An EPS file from another program is read as PostScript. When its PostScript cannot be read, it opens as its preview image with a warning.

:::note
VectorCraft looks for linked images at the path saved in the document, then at the same relative path from the document's folder. A missing image shows its saved preview until you relink it with **Relink…** in the Links panel (**Window → Links**). See [Work with placed images](/apps/vectorcraft/work-with-placed-images/).
:::

**File → Show in Folder** shows the active document's file in your system's file manager.

### Add or replace missing fonts

When a document uses fonts that are not installed, the Missing Fonts dialog opens after the document opens, once any questions about missing linked images are answered. Each font in the list is marked **missing** when its family is not installed, or **substituted by** another style when the family is installed but the style is not. The text shows in another font until you add or replace the font. While **Highlight Substituted Fonts** is on in the Type section of Preferences, text set in a missing font is highlighted on the canvas.

![The Missing Fonts dialog over the night market menu, with the tagline Riverside · Since 2019 highlighted above it. Shippori Mincho Regular is marked missing, with ShipporiMincho-Regular.ttf found and checked in the Fonts folder next to the document, and Source Serif 4 Bold is marked substituted by Regular and not found](/assets/uploads/vectorcraft/missing-fonts.webp)

1. To look for the font files, press **Search Fonts Folder** or **Find in Folder…**:
   - **Search Fonts Folder** searches the `Fonts` folder next to the document. It appears only when that folder exists, for example in a folder that **File → Package…** made.
   - **Find in Folder…** asks for a folder and searches it and its subfolders.
2. Under each font, the dialog lists the files it found and checks the first one. A font without a file shows **Not found**. Clear the check box of a file you do not want to add.
3. Press **Add Fonts**. VectorCraft copies the checked files into its own Fonts folder, which the dialog names, and redraws the text set in those fonts. Copy only fonts you own or are licensed to install.

To use another font instead, press **Find Fonts**. It opens **Type → Find Font…** with the first missing font selected. Pick a replacement font, then press **Change** to change it in the selected objects or **Change All** to change it everywhere in the document. **Close** closes the dialog without changing the document. Later, **Find in Folder…** in the Find Font dialog asks for a folder and opens the Missing Fonts dialog with that folder's search results.

![The Find Font dialog over the night market drawing, with Shippori Mincho Regular marked missing among the two fonts in the document, Replace With Font From set to Document, and Source Serif 4 Regular selected as the replacement above the Change and Change All buttons. The tagline Riverside · Since 2019, set in the missing font, is highlighted on the canvas.](/assets/uploads/vectorcraft/find-font-replace-missing.webp)

## Recover work after a crash

VectorCraft keeps recovery copies of documents that have unsaved changes. By default it writes them every 2 minutes in the background, and the status bar shows each copy it saves. Saving, reverting or closing a document removes its copy.

When VectorCraft starts after it did not quit normally, the **Recover Documents** dialog lists the documents that had unsaved changes and the time of each copy.

![The Recover Documents dialog over the harbor drawing, listing harbor-lights.vectorcraft and night-market.vectorcraft with the time of each recovery copy in UTC, and the Discard, Cancel and Restore buttons](/assets/uploads/vectorcraft/recover-documents-dialog.webp)

1. Press **Restore**. Each document opens in its own tab with **[Recovered]** after its name, as a document that has not been saved.
2. Save each restored document to keep it. Save asks for a name and a location.

**Discard** deletes the copies. **Cancel** keeps them, and the dialog asks again the next time VectorCraft starts. The dialog does not list the copies of another VectorCraft that is still running.

The recovery settings are under **Data Recovery** in **Edit → Preferences… → File Handling** on Windows and Linux, and in **VectorCraft → Settings → File Handling…** on macOS:

| Setting | What it does | Default |
|---|---|---|
| **Automatically Save Recovery Data** | Turns recovery copies on or off | On |
| **Every (minutes)** | How often VectorCraft writes the copies, from 1 to 60 minutes | 2 |
| **Folder** | The folder that holds the copies | The folder VectorCraft sets |
| **Turn off Data Recovery for complex documents** | Skips the copies of documents with more than 20,000 objects | Off |

![The File Handling section of Preferences, with Automatically Save Recovery Data turned on, Every (minutes) set to 2, an empty Folder field with a Choose… button, and Turn off Data Recovery for complex documents turned off under Data Recovery](/assets/uploads/vectorcraft/preferences-data-recovery.webp)

If VectorCraft keeps closing unexpectedly, [Troubleshooting](/apps/vectorcraft/troubleshooting/) shows where to find the log to send with a report.

## Place a file instead of opening it

**File → Place…** (**Ctrl+Shift+P**, or **Cmd+Shift+P** on macOS) brings a file into the open document instead of opening it in a new tab.

![The Place dialog over the night market drawing, listing harbor-sunset.png and lantern-string.png with the size, resolution and color mode of each, with Link turned on, Template turned off and Replace unavailable](/assets/uploads/vectorcraft/place-dialog.webp)

1. Choose **File → Place…** and pick one or more files.
2. In the Place dialog, turn on any of the options:
   - **Link** keeps a link to an image file instead of only embedding it. For a VectorCraft document, it places one locked object that updates when the file changes.
   - **Template** places the file on a new locked, dimmed template layer below the current layer.
   - **Replace** swaps the selected object for the file and keeps its place and transform. It is available when you place one file and one object is selected.
3. Press **Place**. A single file is placed in the center of the view.
4. With several files, the pointer is loaded with them one at a time. Click on the canvas to place the current file at 100%, or drag to set its size. The arrow keys switch between files, and Esc skips one.

![The night market drawing with the pointer loaded for placing: a thumbnail of the harbor picture, the first of the two files, and a badge with the number 2](/assets/uploads/vectorcraft/place-loaded-cursor.webp)

Place reads raster images, SVG, PDF and `.ai` pages, EPS, DXF, EMF, WMF and other VectorCraft documents. Text files (`.txt`, `.rtf`, `.docx` and `.doc`) are placed as area type. Raster images are placed at 100% of their physical size, using the resolution the file declares, or 72 ppi when it declares none. A PDF with several pages opens the Place PDF dialog first, where you pick the page.

![The Place PDF dialog over the night market drawing, with a preview of page 1 of 3 showing the harbor drawing, the page number box with its arrows, and Crop To set to Crop](/assets/uploads/vectorcraft/place-pdf-dialog.webp)

## Package a document for someone else

**File → Package…** (**Ctrl+Alt+Shift+P**, or **Cmd+Option+Shift+P** on macOS) collects a saved document with its linked files and fonts in one folder.

1. Save the document. Package asks you to save first when it has never been saved, and saves unsaved changes when you press **Package**.
2. Set **Location** and **Folder Name**.
3. Choose the options: **Copy Links**, **Collect Links in a Separate Folder**, **Relink Linked Files to the Document**, **Copy Fonts Used in the Document** and **Create Report**.
4. Press **Package**.

![The Package dialog over the night market drawing, with Location C:/Art/Print Jobs, Folder Name night-market Folder, and all five options turned on](/assets/uploads/vectorcraft/package-dialog.webp)

:::caution
Package does not copy fonts whose license does not allow embedding.
:::

## Close documents

**File → Close** (**Ctrl+W**, or **Cmd+W** on macOS) closes the active document, and **File → Close All** (**Ctrl+Alt+W**, or **Cmd+Option+W** on macOS) closes every open document. If a document has unsaved changes, VectorCraft asks whether to save them first.

![The prompt that asks whether to save the changes made to harbor-lights.vectorcraft, with the Don't Save, Cancel and Save buttons, over the harbor drawing whose tab shows an asterisk for unsaved changes](/assets/uploads/vectorcraft/close-unsaved-changes.webp)

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
| File Info… | Ctrl+Alt+Shift+I | Cmd+Option+Shift+I |
| Close | Ctrl+W | Cmd+W |
| Close All | Ctrl+Alt+W | Cmd+Option+W |

To change these shortcuts, choose **Edit → Keyboard Shortcuts…**.

## Related

- [Set up a document and artboards](/apps/vectorcraft/set-up-documents-and-artboards/)
- [Export for screens and the web](/apps/vectorcraft/export-for-screens-and-the-web/)
- [Work with placed images](/apps/vectorcraft/work-with-placed-images/)
- [Trace an image](/apps/vectorcraft/trace-an-image/)
- [Print your artwork](/apps/vectorcraft/print-your-artwork/)
- [All VectorCraft workflows](/apps/vectorcraft/workflows/)
