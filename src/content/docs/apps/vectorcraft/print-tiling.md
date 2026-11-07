---
title: Print a large poster
description: Print a poster, sign or sewing pattern across several sheets of paper with VectorCraft's tiled printing.
sidebar:
  order: 31
---

Tiled printing spreads a drawing that is bigger than your paper across several sheets of A4, Letter or any other size. VectorCraft divides the drawing into numbered tiles at the scale you choose. An overlap repeats a strip of the drawing on neighbouring sheets, so you can line them up when you stick them together.

## Print a poster on several sheets

1. Open your drawing. For a full-size pattern, check that the drawing is the size you want before you print.
2. Choose **File › Print** (**Ctrl+P**, or **⌘P** on a Mac). In **Printer**, choose your printer, or **PDF File** to save the tiled pages as a PDF.
3. In **General**, under **Artboards**, choose **All**, or **Range:** to pick the artboards to print.
4. Under **Media**, set **Size** to the paper in your printer, or choose **Custom** and enter its width and height.
5. In **Advanced**, set **Unprintable margin** to allow for the edges your printer can't print on. VectorCraft uses one value for all four edges, and doesn't read it from the printer.
6. Back in **General**, under **Options**, set **Scaling** to **Tile Imageable Areas** or **Tile Full Pages** (see below). Set **Scale** to `100%` in both boxes to keep the drawing's real size.
7. Set **Overlap**, for example `10 mm`, to give yourself room to line the sheets up.
8. Use the arrows under the preview to look through the sheets. Check **Summary** for warnings.
9. Leave **Tile Range** empty to print every tile, or enter a range such as `1-3, 5`.
10. Choose **Print**. **Done** keeps the settings with the document without printing.

:::note
Print to **PDF File** first and check the pages. When you print that PDF, turn off any "fit to page" option in your PDF viewer, or the sheets come out too small. For a sewing pattern, measure a known length on a printed sheet before you print the whole job.
:::

## Choose a tiling mode

| Scaling | How it divides the drawing | Use it when |
| --- | --- | --- |
| **Tile Imageable Areas** | Each tile is the part of the paper inside the **Unprintable margin** | Your printer can't print to the edge of the paper. This is the safer choice |
| **Tile Full Pages** | Each tile is the whole sheet | Your printer prints borderless. Otherwise, art near the edges of each sheet may be lost unless the overlap covers it |

With **Unprintable margin** set to zero, both modes make the same tiles. **Fit to Page** shrinks the whole artboard onto one sheet instead.

## See the tiles on the canvas

Choose **View › Show Print Tiling** to see each sheet's edges and numbers on the canvas. To move the grid of sheets, choose the **Print Tiling Tool** (press and hold the **Hand Tool** button in the toolbar to find it) and drag on the canvas. Double-click with the tool to put the grid back where it was.

## Reprint one sheet

Tiles are numbered from 1, across each row from left to right, then down. In a grid of three columns and two rows, the top row is `1, 2, 3` and the bottom row is `4, 5, 6`. To reprint a damaged sheet, enter its number in **Tile Range**. Numbering starts again on each artboard.

Changing the paper, scale, margin, overlap or grid position can change the numbering, so check the preview again before you reprint.

## Put the sheets together

Lay the sheets out in order. Line up the repeated artwork in the overlaps, trim the unprinted edges if you need to, and tape or glue the sheets together. Print two neighbouring tiles first to check the scale and overlap before you print a large job.

## If something goes wrong

- **The drawing shrinks onto one sheet**: **Scaling** is set to **Fit to Page**. Choose a tile mode, and check both **Scale** boxes.
- **Art is missing along the edges of sheets**: use **Tile Imageable Areas** with a larger **Unprintable margin**, or a bigger **Overlap**.
- **No tiles show on the canvas**: choose **Done** in the **Print** dialog to keep the settings, then turn on **View › Show Print Tiling**. If the settings aren't valid, no tiles show; check **Summary** in the **Print** dialog.
- **Too many or too few pages**: check **Artboards**, **Tile Range** and **Copies**. Under **Output**, use **Composite** for an ordinary poster.

In the web version, printing goes through the browser's print dialog, and **PDF File** downloads the PDF.
