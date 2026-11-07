---
title: Set up a document and artboards
description: Start a document at the size you need, add and arrange its artboards, set units, bleed and color mode, and move around the canvas.
sidebar:
  order: 10
---

This page shows how to start a new document from a preset or your own size, then add, name and arrange its artboards. It also covers the document's units, bleed and color mode, and the tools and shortcuts you use to move around the canvas.

## Create a document

1. Choose **File → New…** (**Ctrl+N**, or **Cmd+N** on macOS). The **New Document** dialog opens.
2. Pick a category along the top: **Recent**, **Saved**, **Mobile**, **Web**, **Print**, **Film & Video**, **Art & Illustration**, **Branding** or **Social**.
3. Click a preset card. A double-click on a card creates the document straight away.
4. Under **PRESET DETAILS**, change the name, **Width**, **Height**, units, **Orientation** and number of **Artboards** as needed.
5. Click **Create**.

![The New Document dialog with the Print category open, a grid of blank document preset cards with Letter chosen on the left, and the Preset Details column with Width, Height, units, Orientation, Artboards, Bleed and Background Contents on the right](/assets/uploads/vectorcraft/new-document-dialog.png)

**Recent** lists the sizes you used last. To keep a size of your own, click **Save Preset** beside the name, type a **Preset Name** and click **Save**. The preset then appears under **Saved**.

**Advanced Options** holds **Color Mode**, **Raster Effects** and **Preview Mode**. **More Settings** opens the same fields in a longer form, where you also choose how several artboards are laid out.

| Setting | Choices | Default |
|---|---|---|
| **Width** and **Height** | Any size, in the units shown beside **Width** | 612 × 792 pt (Letter) while **Recent** is empty, and the last size you used after that |
| **Units** | Pixels, Points, Picas, Inches, Millimeters, Centimeters, Feet, Yards, Meters, Feet & Inches | Pixels for screen presets, and the general unit set in Preferences for the others |
| **Orientation** | Portrait, Landscape | Set by the preset's width and height |
| **Artboards** | 1 to 1000 | 1 |
| Artboard layout (**More Settings**) | Grid by Row, Grid by Column, Arrange by Row, Arrange by Column, with **Spacing**, **Columns** and **Change to Right-to-Left Layout** | Grid by Row, 20 pt spacing |
| **Bleed** | 0 to 72 pt on each side | 0 |
| **Background Contents** | Transparent, White | Transparent |
| **Color Mode** | RGB Color, CMYK Color | CMYK for Print and Branding presets, RGB for the others |
| **Raster Effects** | Screen (72 ppi), Medium (150 ppi), High (300 ppi) | 300 ppi for Print, Art & Illustration and Branding presets, 72 ppi for the others |
| **Preview Mode** | Default, Pixel, Overprint | Default |

:::tip
**New Without Dialog** (**Ctrl+Alt+N**, or **Cmd+Option+N** on macOS) makes a document with the settings the New Document dialog would open on, without showing the dialog.
:::

To start from a template, choose **File → New from Template…** (**Ctrl+Shift+N**, or **Cmd+Shift+N** on macOS) and pick the file. It opens as a new untitled document.

## Add and arrange artboards

An artboard is a page inside the document. A document can hold many artboards of different sizes.

1. Choose the **Artboard** tool (Shift+O).
2. Drag on the empty area around the artboards to draw a new artboard. Hold Shift and drag to draw a new artboard inside an existing one.
3. Drag inside an artboard to move it, or drag one of its handles to resize it. Hold Shift for a proportional resize, or **Alt** (**Option** on macOS) to resize from the center.
4. Click an object to add an artboard that fits the object's visible bounds.
5. Press Escape to go back to the **Selection** tool.

While the Artboard tool is active, the Control bar shows **Move Artwork with Artboard** (on by default) and **Scale Artwork with Artboard** (off by default). Hold **Alt** (**Option** on macOS) while you drag an artboard to move a copy of it.

![Six artboards in a three-by-two grid, each holding a colored rounded rectangle, with the Artboard tool active and the Artboards panel listing the six artboards by name](/assets/uploads/vectorcraft/artboards-grid.png)

### Use the Artboards panel

Choose **Window → Artboards** to list every artboard in order. The buttons at the bottom of the panel are **Rearrange All Artboards**, **Move Up**, **Move Down**, **New Artboard** and **Delete Artboard**. The panel menu has **New Artboard**, **Duplicate Artboards**, **Delete Artboards**, **Rename**, **Delete Empty Artboards**, **Convert to Artboards**, **Artboard Options…**, **Rearrange All Artboards…** and **Fit to Artwork Bounds**.

**Artboard Options** sets an artboard's name and **Background Color**, and three screen guides: **Show Center Mark**, **Show Cross Hairs** and **Show Video Safe Areas**. The background color and these guides show on the canvas only. They do not appear in exports or prints. To open Artboard Options with the Artboard tool, double-click an empty part of the artboard.

:::tip
Alt-click (Option-click on macOS) **New Artboard** in the Artboards panel to set the new artboard's options before VectorCraft adds it.
:::

### Fit and rearrange artboards

The **Object → Artboards** menu has four commands:

| Command | What it does |
|---|---|
| **Convert to Artboards** | Turns the bounds of each selected object into a new artboard and removes the objects. |
| **Rearrange All Artboards…** | Lays all artboards out again in their panel order. |
| **Fit to Artwork Bounds** | Resizes each selected artboard to the visible art on it. An artboard with no art stays as it is. |
| **Fit to Selected Art** | Resizes the active artboard to the selected art, strokes included. |

**Rearrange All Artboards** opens with **Layout** set to **Grid by Row**, 2 **Columns**, 20 pt **Spacing** and **Move Artwork with Artboard** on. The dialog keeps the spacing you confirmed last time. **Layout Order** switches between left-to-right and right-to-left.

:::note
A locked artboard keeps its size and position. You lock an artboard in the Artboards panel's lock column. Rearrange All Artboards and Fit to Artwork Bounds leave a locked artboard where it is, and the Artboard tool does not move or delete it.
:::

## Set units, bleed and paper

Choose **File → Document Setup…** (**Ctrl+Alt+P**, or **Cmd+Option+P** on macOS). The dialog has **General**, **Transparency** and **Type** tabs.

| Tab | Setting | What it does |
|---|---|---|
| **General** | **Units** | Sets the unit the document shows lengths in. |
| **General** | **Bleed** | Sets the bleed on each side, from 0 to 72 pt. |
| **General** | **Edit Artboards** | Applies the settings, closes the dialog and switches to the Artboard tool. |
| **Transparency** | **Grid Size** and **Grid Colors** | Set the checkerboard that shows behind transparent areas. |
| **Transparency** | **Simulate Colored Paper** | Draws the artboards in the paper color, which is the first of the two grid colors. |

![The General tab of the Document Setup dialog with the Units menu, Top, Bottom, Left and Right bleed fields, and the Edit Artboards button](/assets/uploads/vectorcraft/document-setup.png)

## Choose the color mode

The color mode is set when you create the document. To change it later, choose **File → Document Color Mode → CMYK Color** or **File → Document Color Mode → RGB Color**. VectorCraft converts the colors in the document, including swatches, symbols, brushes and graphic styles, in one step.

:::caution
The conversion changes the stored color values of the artwork. If the result is not what you want, choose **Edit → Undo** to restore the original colors.
:::

## Move around the canvas

- The **Hand** tool (H) pans the view when you drag. With any tool, hold Space and drag, or drag with the middle mouse button.
- The **Zoom** tool (Z) zooms in with a click. Hold **Alt** (**Option** on macOS) and click to zoom out. With any tool, hold **Ctrl+Space** (**Cmd+Space** on macOS) and click to zoom in.

| Command | Windows and Linux | macOS |
|---|---|---|
| **Fit Artboard in Window** | Ctrl+0 | Cmd+0 |
| **Fit All in Window** | Ctrl+Alt+0 | Cmd+Option+0 |
| **Actual Size** | Ctrl+1 | Cmd+1 |
| **Zoom In** | Ctrl+= | Cmd+= |
| **Zoom Out** | Ctrl+- | Cmd+- |
| **Show Rulers** | Ctrl+R | Cmd+R |
| **Hide Guides** | Ctrl+; | Cmd+; |
| **Smart Guides** | Ctrl+U | Cmd+U |
| **Show Grid** | Ctrl+' | Cmd+' |
| **Snap to Grid** | Ctrl+Shift+' | Cmd+Shift+' |
| **Hide Artboards** | Ctrl+Shift+H | Cmd+Shift+H |
| **Outline** | Ctrl+Y | Cmd+Y |

These commands are in the **View** menu and its **Rulers** and **Guides** submenus. **Edit → Keyboard Shortcuts…** changes them.

## Related

- [Workflows](/apps/vectorcraft/workflows/)
- [Draw and transform shapes](/apps/vectorcraft/draw-and-transform-shapes/)
- [Open and save files](/apps/vectorcraft/open-and-save-files/)
- [Export for screens and the web](/apps/vectorcraft/export-for-screens-and-the-web/)
- [Print your artwork](/apps/vectorcraft/print-your-artwork/)
