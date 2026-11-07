---
title: Print your artwork
description: Print artboards at the right size, add printer's marks and bleed, scale or tile large art, and save your print settings as presets.
sidebar:
  order: 22
---

This guide covers the Print dialog. It shows how to choose which artboards print and on what paper, add printer's marks and bleed, scale or tile art that is larger than the paper, and save the settings as a preset for the next job.

## Open the Print dialog

1. Open the document you want to print.
2. Choose **File → Print…** (**Ctrl+P**, or **Cmd+P** on macOS).
3. Pick a section in the section list: **General**, **Marks and Bleed**, **Output**, **Graphics**, **Color Management**, **Advanced** or **Summary**.
4. Check the preview under the section list. It shows each page as it prints. Use the arrows under the preview to step through the pages.
5. Press **Print** to print, or **Done** to keep the settings with the document without printing.

VectorCraft saves the print settings with the document, and the dialog opens with the same choices next time.

:::tip
To move the art on the paper, drag it in the preview. The dialog stores the new position as the **Placement** X and Y offset. Dragging does not move the art while a tiling choice is on.
:::

![The Print dialog on its General section, with the Copies, Artboards, Media and Orientation settings beside a preview of a poster on a letter page](/assets/uploads/vectorcraft/print-general.png)

## Choose what prints

The **General** section sets the printer, the paper and which artboards print.

1. Under **Print Preset**, keep **[Default]** or pick a preset you saved.
2. Under **Printer**, pick a printer. **PDF File** writes a print-ready PDF instead of sending the job to a printer. **Setup…** opens the system's settings for the chosen printer.
3. Set **Copies**. With more than one copy, **Collate** prints whole sets in order. **Reverse Order** prints the last page first.
4. Under **Artboards**, choose **All**, or choose **Range** and type the artboard numbers, for example `1-3, 5`. **Ignore Artboards (all the art as one page)** prints everything in the document on one page. **Skip Blank Artboards** leaves out artboards with no art that prints.
5. Under **Media**, choose a paper **Size**. **Custom** lets you type a width and height.
6. Under **Orientation**, leave **Auto-Rotate** on to turn the paper to match each artboard, or turn it off and pick an orientation.
7. Under **Options**, choose which layers print with **Print Layers**, where the art is placed on the paper with **Placement**, and how it is sized with **Scaling**.

| Option | Choices | Default |
|---|---|---|
| **Copies** | 1 to 999 | 1 |
| **Collate** | On, off | On |
| **Artboards** | All, Range, Ignore Artboards | All |
| **Media Size** | Letter, Legal, Tabloid, A3 to A6, B4 and B5 (ISO), B4 to B6 (JIS), Japanese paper and envelope sizes, Custom | Letter |
| **Auto-Rotate** | On, off | On |
| **Print Layers** | Visible & Printable Layers, Visible Layers, All Layers | Visible & Printable Layers |
| **Placement** | Any of nine reference points, plus an X and Y offset | Center |
| **Scaling** | Do Not Scale, Fit to Page, Custom Scale, Tile Full Pages, Tile Imageable Areas | Do Not Scale |

:::note
Template layers never print, whatever **Print Layers** is set to. A layer with **Print** turned off in its Layer Options is left out by **Visible & Printable Layers**.
:::

## Add printer's marks and bleed

1. Open the **Marks and Bleed** section.
2. Turn on **All printer's marks**, or pick them one at a time: **Trim marks**, **Registration marks**, **Color bars** and **Page information**.
3. Choose a **Printer mark type** (Roman or Japanese), a **Trim mark weight** (0.125 pt, 0.25 pt or 0.5 pt) and an **Offset** from the artboard edge. The defaults are Roman, 0.25 pt and 6 pt.
4. Under **Bleeds**, leave **Use document bleed settings** on to print the bleed set for the document, or turn it off and type **Top**, **Bottom**, **Left** and **Right** values.

![The Marks and Bleed section of the Print dialog with all four printer's marks turned on, Roman marks at 0.25 pt and a 6 pt offset, and Use document bleed settings turned off with a 9 pt bleed on every side](/assets/uploads/vectorcraft/print-marks.png)

:::caution
The printed area is the artboard together with its bleed and marks. When that area is larger than the printable area of the paper, **Summary** shows a warning. Choose larger paper, or set **Scaling** to **Fit to Page** to size the art so it fits with its marks.
:::

## Print separations

The **Output** section chooses between one color page and one page per ink.

1. Set **Mode** to **Composite** to print in color, or to **Separations** to print one gray page for each ink that prints.
2. Set **Emulsion** to **Up (right reading)** or **Down (right reading)**. Down mirrors the page.
3. Set **Image** to **Positive** or **Negative**.
4. With separations, turn on **Convert All Spot Colors to Process** to print spot colors on the process inks instead of their own pages.
5. With separations, the **Document Ink Options** list shows each ink. Turn single inks on or off and set their frequency and angle.

## Scale or tile large art

When the art is larger than the paper, scale it down or split it across several sheets.

1. In the **General** section, open **Scaling** and pick a choice from the following table.
2. For **Custom Scale**, type the width and height percentages under **Scale**.

| Choice | What prints |
|---|---|
| **Do Not Scale** | The art at 100% |
| **Fit to Page** | The art as large as fits the printable area with its marks, keeping its proportions |
| **Custom Scale** | The art at the width and height percentages you type |
| **Tile Full Pages** | Pages the size of the paper, overlapping by the **Overlap** value |
| **Tile Imageable Areas** | Pages the size of the printable area of the paper |

[Print a large poster](/apps/vectorcraft/print-tiling/) covers the two tiling choices step by step: the **Overlap** and **Tile Range** settings, how the tiles are numbered, **View → Show Print Tiling** and the **Print Tiling Tool**.

![A wide banner artboard with dashed page outlines drawn over it and the page numbers 1, 2 and 3 in their corners, showing how the art splits across several pages](/assets/uploads/vectorcraft/print-tiling.png)

When you drag with the **Print Tiling Tool**, the pointer sets the top-left corner of the first page's printable area and snaps to the artboard's edges. Double-clicking the tool's icon in the toolbar also puts the pages back where the **Placement** setting puts them.

:::note
**Placement** is grayed out while a tiling choice is on, and after the Print Tiling Tool places the pages. Press **Reset** next to the note in the General section to use **Placement** again.
:::

## Save print presets

1. In the Print dialog, press **Save Preset…** next to **Print Preset**.
2. Type a name and press **Save**.

To manage presets without opening the Print dialog, choose **Edit → Print Presets…**. The list shows **[Default]** and your saved presets, with the differences from [Default] for the one you select.

| Button | What it does |
|---|---|
| **New…** | Starts a new preset from the selected one |
| **Edit…** | Changes a saved preset |
| **Delete** | Removes a saved preset |
| **Import…** | Loads presets from a file |
| **Export…** | Saves the selected preset to a file |

[Default] cannot be edited or deleted. Press **New…** to start an editable copy.

## Check before you print

1. Choose **View → Overprint Preview** (**Ctrl+Alt+Shift+Y**, or **Cmd+Option+Shift+Y** on macOS) to see how overprinting fills and strokes will print.
2. Choose **Window → Separations Preview** to show or hide each ink plate. Alt-click (Option-click on macOS) a plate's eye to show only that plate.
3. In the Print dialog, open **Summary**. It lists the page count, every option you changed from the default, and warnings such as art larger than the printable area, type that prints in a fallback font, or type that does not fit its frame.

:::tip
For a print shop, choose **File → Save as PDF…** instead. Its dialog has the same marks and bleed settings, and the shop prints the PDF on its own equipment.
:::

## Related

- [Set up a document and artboards](/apps/vectorcraft/set-up-documents-and-artboards/)
- [Organize with layers and symbols](/apps/vectorcraft/organize-with-layers-and-symbols/)
- [Fill, stroke and color](/apps/vectorcraft/fill-stroke-and-color/)
- [Open and save files](/apps/vectorcraft/open-and-save-files/)
- [Print a large poster](/apps/vectorcraft/print-tiling/)
- [All VectorCraft workflows](/apps/vectorcraft/workflows/)
