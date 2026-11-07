---
title: Workflows
description: Precise drawing, editing, layers, dimensions, hatches, blocks, layouts and plotting in CADCraft.
sidebar:
  order: 3
---

Every tool in CADCraft is a command. You can start one from the menus (**File**, **Edit**, **View**, **Insert**, **Format**, **Tools**, **Draw**, **Dimension**, **Modify**, **Window** and **Help**), from **Tool Sets**, or by typing its name or alias at the command line. **F1** opens the command reference, where you can search every command.

## Draw precisely

Type coordinates at a prompt, or click in the drawing.

| Type | Means |
| --- | --- |
| `3,4` | The point at X 3, Y 4 |
| `@10,0` | 10 units along X from the last point |
| `@5<45` | 5 units at 45 degrees from the last point |
| `10` | 10 units in the direction the cursor points (direct distance entry) |

The drafting aids are on the status bar, and each has a function key:

| Key | Turns on or off |
| --- | --- |
| **F3** | Object snaps: endpoint, midpoint, centre, intersection, tangent, perpendicular and more |
| **F7** | Grid |
| **F8** | Ortho: lines only horizontal or vertical |
| **F9** | Grid snap |
| **F10** | Polar tracking |
| **F11** | Object snap tracking |
| **F12** | Dynamic input at the cursor |

Choose which object snaps are on in **Tools › Drafting Settings...**.

## Edit objects

The **Modify** menu has **Move**, **Copy**, **Rotate**, **Scale**, **Mirror**, **Stretch**, **Offset**, **Trim**, **Extend**, **Fillet**, **Chamfer**, **Break**, **Join**, **Explode**, **Array** and more.

- Select objects first and then start a command, or start the command and select when asked.
- Drag from left to right to select objects entirely inside the window. Drag from right to left to also select objects the window crosses.
- Click a selected object's grip to make it hot, then move the mouse. Press **Space** or **Enter** to switch between **STRETCH**, **MOVE**, **ROTATE**, **SCALE** and **MIRROR**.
- **Modify › Match Properties** copies one object's layer, colour and other properties to others.
- **Ctrl+Z** undoes. **Ctrl+Y** or **Ctrl+Shift+Z** redoes.

## Use layers and properties

Layers group objects so you can show, hide, lock and colour them together.

- The **Layers** palette on the right sets the current layer and turns layers on or off, freezes and locks them.
- **Format › Layers** opens the **Layer Properties Manager**, for creating layers and setting their colour, linetype, lineweight and whether they plot.
- **Format › Layer Tools** has **Isolate Layer**, **Freeze Layer**, **Layer Off**, **Lock Layer**, **Layer Match**, **Previous Layer** and others.
- The **Properties** palette (**Ctrl+1**) shows and edits whatever is selected.

## Add text and dimensions

- **Draw › Text** has **Single Line Text** and **Multiline Text...**. CADCraft uses the TrueType and OpenType fonts installed on your computer, and has its own single-stroke drafting font.
- The **Dimension** menu has **Linear**, **Aligned**, **Angular**, **Radius**, **Diameter**, **Arc Length**, **Ordinate**, **Baseline**, **Continue**, **Quick Dimension** and **Multileader**. A dimension attached to an object follows it when the object changes.
- **Dimension › Dimension Style...** sets arrowheads, text and units for dimensions.
- **Draw › Table...** inserts a table.

![A mounting bracket part drawing: a front view with bolt holes, red centre lines and cyan dimensions, a hatched section view, green notes and a title block](/assets/uploads/cadcraft/bracket.webp)

## Hatch areas

Choose **Draw › Hatch...** (or type `h`) to open the hatch dialog. Pick a pattern, a solid fill or, with **Draw › Gradient...**, a gradient. Then click inside a closed area. CADCraft finds the boundary, and leaves islands inside it unfilled.

## Make and insert blocks

A block is a group of objects you can place again and again.

- **Draw › Block › Make...** turns selected objects into a block.
- **Draw › Block › Define Attributes...** adds a field, such as a part number, that each copy can fill in differently.
- **Insert › Block...** places a block.
- **Tools › Block Editor** edits a block's definition.

## Constrain geometry

**Tools › Parametric** has geometric constraints (such as parallel, perpendicular and tangent) and dimensional constraints (fixed lengths and angles). **AutoConstrain** adds geometric constraints for you. **Parameters Manager** lists dimensional constraints, and lets you set them with expressions. Constraints are worked out again after every edit.

## Lay out sheets and plot

Model space is where you draw, at full size. A layout is a sheet of paper with one or more viewports looking into model space at a scale.

![A paper-space layout: a white sheet with a dashed printable area and a viewport showing the apartment plan at scale. The status bar shows the Model, Layout1, Layout2 and A1 Plan tabs and a PAPER button](/assets/uploads/cadcraft/layout.webp)

1. Click a layout tab, such as **Layout1**, on the status bar. **+** adds a new one.
2. Type `mview` (or `mv`) and drag a rectangle to add a viewport.
3. Double-click inside a viewport to work in model space through it. Click **PAPER** or **MODEL** on the status bar to switch between the two.
4. **File › Page Setup Manager...** sets the paper size and plot settings for the layout. See [Print](#print).
5. **File › Print...** (**Ctrl+P**) opens the Plot dialog. **File › Export to PDF...** saves a PDF straight away.

## Print

In CAD, printing is called plotting. **File › Print...** (**Ctrl+P**, **⌘P** on a Mac) opens the **Plot** dialog.

:::note
CADCraft plots to PDF, PNG and SVG files. It can't send a drawing to a printer yet ([#2849](https://github.com/storytold/cadcraft/issues/2849)), so plot to a PDF and print that from a PDF viewer.
:::

### Plot a drawing

1. Open the layout you want to plot, or stay in model space.
2. Choose **File › Print...**.
3. Pick a **Printer/plotter**, a **Paper size** and the other options below.
4. Click **Preview** to check the sheet, then **Close** to go back.
5. Click **OK** and choose where to save the file.

The file is named after the drawing and the layout, such as `Drawing-Layout1.pdf`, and its type follows the device you picked.

**File › Export to PDF...** skips the dialog and plots the current page setup straight to a PDF.

### Plot options

| Option | What it does |
| --- | --- |
| **Printer/plotter** | **CADCraft PDF**, **CADCraft PNG** or **CADCraft SVG** writes that file type. **None** writes a PDF on any standard paper size. Devices you make in the Plotter Manager are listed too. |
| **Paper size** | The sizes the device offers. |
| **Orientation** | **Portrait** or **Landscape**. |
| **Plot area** | A layout always plots the whole sheet. In model space, choose **Extents**, **Display**, **Limits** or **Window**. |
| **Fit to paper** | Scales the drawing to fill the sheet. |
| **Scale** | Model space only. Type a ratio such as `1:50`. Turn off **Fit to paper** first. |
| **Center the plot** | Model space only. Turn it off to place the drawing with **X offset (mm)** and **Y offset (mm)** instead. |
| **Plot object lineweights**, **Plot transparency** | Keep lineweights and transparency on paper. |
| **Plot style table** | Changes how colors and lines print (see [Plot styles](#plot-styles)). **None** prints the colors as they are. |

To plot part of model space, set **Plot area** to **Window**, click **Window <** and pick two corners in the drawing.

In a layout, **Apply to Layout** keeps your choices for next time.

### Page Setup Manager

**File › Page Setup Manager...** saves plot settings for each layout, so **Ctrl+P** starts from them. Pick a layout in the list and change its settings. Changes are saved as you make them. This is also where you set **Scale** and **Center the plot** for a layout.

### Plot styles

A plot style table changes how objects print: their color, grayscale, screening, linetype and lineweight. The built-in tables are `default.ctb`, `monochrome.ctb` (everything prints black), `grayscale.ctb`, `default.stb` and `monochrome.stb`.

- **Color-dependent** (`.ctb`) tables style objects by their color.
- **Named** (`.stb`) tables style objects by a plot style name. Set it with **Format › Plot Style...**, or on the layer.

To make your own, open **File › Plot Styles...**, pick a table and choose **Copy**, **New CTB** or **New STB**. Then edit each style's **Color**, **Grayscale**, **Screening**, **Linetype** and **Lineweight**. **Use for this layout** applies the table to the open layout, and **Display plot styles** shows the result on screen.

Plot style tables are saved in the drawing. CADCraft can't read AutoCAD's `.ctb`, `.stb` or `.pc3` files yet ([#2752](https://github.com/storytold/cadcraft/issues/2752)).

### Plotter Manager

**File › Plotter Manager...** runs at the command line. Choose **New** to make a device that writes PDF, PNG or SVG, then **Paper** to add custom paper sizes to it, in millimeters. `?` lists your devices and **Delete** removes one. The built-in devices can't be changed.

Your devices are saved in the `plotters` folder: `%APPDATA%\CADCraft\plotters` on Windows, `~/Library/Application Support/CADCraft/plotters` on a Mac and `~/.config/cadcraft/plotters` on Linux.

### Plot every sheet at once

**File › Batch Publish...** plots model space and every layout, each to its own PDF. Name the set, such as `set.pdf`, and the files are called `set-<sheet>.pdf`.

## Measure

**Tools › Inquiry** has **Distance**, **Area**, **Radius**, **Angle**, **ID Point** and **List**. The answer appears on the command line. For quick sums, **Window › QuickCalc** opens a calculator.

## Change how CADCraft looks

- **View › Interface Theme**: **Light**, **Dark** or **Use System Setting**.
- **Edit › Interface Language**: choose one of 19 languages, or **Auto** to follow your system. Some languages need a font for their script installed on your computer.
- The **Window** menu shows or hides **Tool Sets**, the **Command Line**, the **Status Bar** and the palettes. Drag a palette's header to move it. **Window › Reset Panel Layout** puts everything back.
- **Tools › Options...** has the rest, such as the background colour, crosshair size and what a right-click does.

## Keyboard shortcuts

On a Mac, use **⌘** in place of **Ctrl**.

| Shortcut | What it does |
| --- | --- |
| **Ctrl+N**, **Ctrl+O** | New drawing, open a drawing |
| **Ctrl+S**, **Ctrl+Shift+S** | Save, Save As |
| **Ctrl+P** | Plot |
| **Ctrl+Z** | Undo |
| **Ctrl+Y** or **Ctrl+Shift+Z** | Redo |
| **Ctrl+C**, **Ctrl+X**, **Ctrl+V** | Copy, cut, paste |
| **Ctrl+Shift+C** | Copy with a base point |
| **Ctrl+Shift+V** | Paste as a block |
| **Ctrl+A** | Select all |
| **Ctrl+F** | Find and replace text |
| **Ctrl+1** | Properties palette |
| **Ctrl+3** | Tool Sets |
| **Ctrl+9** | Command line |
| **F1** | Command reference |
| **F2** | Command history |
| **Esc** | Cancel the current command |
| **Enter** or **Space** | Repeat the last command, or finish the current one |
