---
title: Getting started
description: Install CADCraft, draw your first shapes at the command line and save them as DXF or DWG.
sidebar:
  order: 1
---

## 1. Install CADCraft

The quickest way is [ArtCraft Launcher](https://github.com/storytold/craft-launcher/releases/latest): install it, then press **Install** on CADCraft's card. To download CADCraft on its own, see [Install and update](/apps/cadcraft/install-update/).

## 2. Open CADCraft

CADCraft opens with a new, empty drawing. Around it you'll find:

- **Tool Sets** on the left, with buttons for drawing, hatching, blocks, editing, text and dimensions.
- **Layers** and **Properties** on the right.
- The **command line** at the bottom of the drawing area, where you type commands.
- The **status bar** along the bottom, with the **Model** and layout tabs and the drafting toggles.

To look around a finished drawing first, choose **Help › Open Sample Drawing**. The **Start** tab, next to your drawing's tab, also lets you open a drawing, start a new one or a new metric one, and reopen recent files.

:::note
New drawings use inches. To start in millimetres, choose **New (metric)** on the **Start** tab, or set **Units of new drawings** in **Tools › Options › Open and Save**.
:::

## 3. Draw at the command line

Click in the command line, or just start typing. Try these, pressing **Enter** after each:

```text
line 0,0 @10,0 @0,5 c
circle 5,2 1
zoom e
```

The first draws a closed triangle: it starts at 0,0, goes 10 units right, then 5 up, and `c` closes it. The second draws a circle with its centre at 5,2 and a radius of 1. `zoom e` zooms to fit the whole drawing.

A few things that work as CAD users expect:

- Most commands have a short alias: `l` for **LINE**, `c` for **CIRCLE**, `pl` for **PLINE**, `o` for **OFFSET**, `tr` for **TRIM**, `z` for **ZOOM**.
- `@` makes a point relative to the last one: `@10,0` is 10 units along X, and `@5<45` is 5 units at 45 degrees.
- Prompts show their options in square brackets. Type the capital letters of one, or click it.
- **Esc** cancels a command. **Enter** or **Space** repeats the last one, and so does **Repeat** at the top of the right-click menu.

You can also click a tool in **Tool Sets** and then click points in the drawing.

## 4. Offset a shape

Type `offset 0.25`, then click the circle and click outside it. CADCraft draws a second circle 0.25 units larger.

## 5. Save

Press **Ctrl+S** (**⌘S** on a Mac). A new drawing is saved as DXF unless you choose otherwise. To save as DWG, choose **File › Save As** and pick **Drawing (DWG)**, or change **Save new drawings as** in **Tools › Options › Open and Save**.

CADCraft also autosaves unsaved drawings every 10 minutes, so it can offer them back after a crash. See [Troubleshooting](/apps/cadcraft/troubleshooting/#cadcraft-closed-and-i-lost-my-work).

## 6. Share as a PDF

Choose **File › Export to PDF...** and pick where to save. The PDF is drawn with real vector lines, so it stays sharp at any zoom.

## Next steps

- [Workflows](/apps/cadcraft/workflows/): object snaps, layers, dimensions, hatches, blocks and layouts.
- [DWG and DXF files](/apps/cadcraft/files/): what is kept when you open and save drawings from other programs.
- [Troubleshooting](/apps/cadcraft/troubleshooting/): if the window doesn't open or something looks wrong.
