---
title: Workflows
description: Paths, shapes, colour, live effects, type, artboards, tracing, exporting and shortcuts in VectorCraft.
sidebar:
  order: 3
---

VectorCraft's menus are **File**, **Edit**, **Object**, **Type**, **Select**, **Effect**, **View**, **Window** and **Help**. If you can't find a command, choose **Help › Search Commands** and type its name.

:::note
Some menu items are greyed out. Those features aren't built yet; they are listed so you can see what's coming.
:::

## Draw and edit paths

- **Pen Tool** (**P**): click to add a corner point, drag to add a smooth point with handles. Click the first point to close the shape, or press **Enter** or **Esc** to leave it open.
- **Curvature Tool**: click points and VectorCraft draws smooth curves through them.
- **Pencil Tool** (**N**) and **Paintbrush Tool** (**B**) for freehand lines; **Blob Brush Tool** (**Shift+B**) paints filled shapes.
- **Direct Selection Tool** (**A**): click a point or a segment to move it, or drag its handles.
- **Object › Path** has **Join**, **Simplify**, **Smooth**, **Offset Path**, **Outline Stroke** and more.

![The Direct Selection tool showing the anchor points and curve handles of a purple crescent, with the contextual task bar below it offering Offset Path, Simplify and Duplicate](/assets/uploads/vectorcraft/paths.webp)

## Combine shapes

- **Pathfinder** (**Window › Pathfinder**): select two or more shapes, then choose **Unite**, **Minus Front**, **Intersect**, **Exclude**, **Divide**, **Trim**, **Merge**, **Crop**, **Outline** or **Minus Back**.
- **Shape Builder Tool** (**Shift+M**): select overlapping shapes, then drag across the areas you want to join into one. Hold **Alt** (**Option** on a Mac) to remove areas instead.
- **Object › Compound Path › Make** (**Ctrl+8**) turns several shapes into one, with holes where they overlap.
- **Object › Clipping Mask › Make** (**Ctrl+7**) shows the objects only inside the top shape.

## Colour and paint

- Click the **Fill** or **Stroke** swatch in the **Properties** panel to pick from your swatches. **Shift+X** swaps them.
- The **Color**, **Swatches**, **Gradient** and **Stroke** panels are on the **Window** menu. The **Gradient Tool** (**G**) adjusts a gradient on the canvas.
- **Mesh Tool** (**U**) or **Object › Create Gradient Mesh** shades a shape smoothly between colour points.
- **Live Paint Bucket** (**K**) fills the areas where shapes and lines overlap, as in a colouring book. Select the shapes, then click an area to fill it.
- **Object › Pattern › Make** turns artwork into a repeating pattern swatch.
- **Edit › Edit Colors › Recolor Artwork** changes every colour in a selection at once.

## Use live effects

Live effects change how an object looks without changing its path, so you can edit or remove them at any time. They appear in the **Appearance** panel (**Window › Appearance**); click one there to change its settings.

- **Effect › Stylize** has **Drop Shadow**, **Inner Glow**, **Outer Glow**, **Feather**, **Round Corners** and **Scribble**.
- **Effect › Distort & Transform** and **Effect › Warp** bend and twist objects.
- **Object › Blend › Make** (**Ctrl+Alt+B**) fills the space between two objects with steps that change smoothly from one to the other. **Blend Options** sets the spacing: smooth colour, a number of steps, or a distance between them.
- **Object › Repeat** repeats an object in a **Radial**, **Grid** or **Mirror** pattern that updates as you edit it.
- **Object › Envelope Distort** bends artwork, text included, to a warp, a mesh or the shape on top.

![Three wide ribbons blending from yellow to pink and from teal to purple. One blend is selected with its two key paths showing, and the Layers panel lists the clip group, the blends and the background](/assets/uploads/vectorcraft/blends.webp)

To turn an effect into ordinary paths, choose **Object › Expand Appearance**.

## Add 3D

**Effect › 3D and Materials** has **Extrude & Bevel**, **Revolve**, **Inflate** and **Rotate**. **Revolve** spins a profile around an axis, so half a vase outline becomes a whole vase. Drag the rings on the canvas to turn the object, and use the **Lighting** tab to light it.

![A still life of a vase, a bowl, a sphere and a bottle made with Revolve. The vase is selected, with rotation rings drawn over it, and the Revolve dialog shows its Rotation tab with the revolve angle, axis side, offset, cap and view settings](/assets/uploads/vectorcraft/revolve.webp)

## Add type

Choose the **Type Tool** (**T**). Click to start a line of text, or drag to draw a text frame that wraps the text inside it. Click a path to put text inside it (a closed path) or along it (an open path).

- The **Character** and **Paragraph** panels, and their **Styles** panels, are under **Window › Type**.
- **Type › Threaded Text › Create** flows text from one frame into the next.
- **Type › Create Outlines** (**Ctrl+Shift+O**) turns text into shapes, for example before sending a logo to a printer.

## Work with artboards

A document can hold several artboards, such as the pages of a set of icons or the sizes of a social post.

- **Artboard Tool** (**Shift+O**): drag to make a new artboard, or drag an existing one to move or resize it.
- The **Artboards** panel (**Window › Artboards**) lists, names and reorders them.
- **Object › Artboards** fits an artboard to your artwork, or turns selected objects into artboards.

## Draw in perspective

Show the grid with **View › Perspective Grid › Show Grid** (**Ctrl+Shift+I**). Pick one, two or three-point perspective from the same menu. While the grid is showing, the Rectangle, Ellipse, Polygon, Star and Line tools draw on its active plane. Use the **Perspective Selection Tool** (**Shift+V**) to move art along its plane.

![Two lit building facades drawn on the left and right planes of a two-point perspective grid at sunset, with the Perspective Selection tool active and the plane widget in the top-left corner](/assets/uploads/vectorcraft/perspective.webp)

## Measure and dimension

The **Dimension Tool** adds lengths, angles and radii to technical drawings. Choose **Linear**, **Angular** or **Radial** in its bar, then drag out from an edge or click two points. The dimension follows the art when you change it. Set units, precision and style in the **Properties** panel.

![A bracket drawing in the light theme with linear, angular, diameter and radius dimensions in millimetres. The Dimension tool's bar offers Linear, Angular and Radial, and the Properties panel shows the selected dimension's units, precision, line weight and arrow style](/assets/uploads/vectorcraft/dimensions.webp)

## Trace a picture

Place a picture with **File › Place** (**Ctrl+Shift+P**), select it, and choose **Object › Image Trace › Make**. For more control, open the **Image Trace** panel (**Window › Image Trace**) and pick a preset, such as **Black and White Logo**, **Line Art** or **16 Colors**. **Object › Image Trace › Expand** turns the result into ordinary paths.

## Open, save and export

- **File › Open** opens `.vectorcraft`, SVG, PDF, `.ai`, EPS, Affinity documents (`.af`, `.afdesign`, `.afpub`), DXF, EMF, WMF and pictures. Affinity documents keep their layers, artboards, shapes and text; anything that couldn't be brought in is listed in a warning. VectorCraft doesn't save Affinity files.
- **File › Save As** saves as VectorCraft, a VectorCraft template, PDF, SVG, compressed SVG (SVGZ), PDF-compatible `.ai` or EPS.
- **File › Export › Export As** writes pictures and other formats, including PNG, JPEG, WebP, TIFF, PSD and DXF. **Export Selection** exports just what's selected.
- **File › Export › Export for Screens** (**Ctrl+Alt+E**) exports every artboard, or chosen ones, in several sizes and formats in one go.
- **File › Place** adds pictures, PDFs and other drawings to the current document. It also places text from `.txt`, `.rtf` and Word files as a text frame.
- **File › Package** gathers a document with its linked pictures and fonts into one folder.

Converting to another format can lose some details. Keep a `.vectorcraft` copy of anything you might want to edit again.

## Print

**File › Print** (**Ctrl+P**) prints, or saves the print job as a PDF. To print a drawing bigger than your paper, see [Print a large poster](/apps/vectorcraft/print-tiling/).

## Change how VectorCraft looks

- **Edit › Preferences › User Interface** (**VectorCraft › Settings** on a Mac) sets the **Brightness** (from **Dark** to **Light**), the accent colour, the canvas colour and the interface size.
- **Language** on the same page changes the interface language. By default, VectorCraft follows your system's language.
- **Window › Workspace** switches between panel layouts, and saves your own.

## Keyboard shortcuts

On a Mac, use **⌘** in place of **Ctrl**, and **Option** in place of **Alt**. To see or change any shortcut, choose **Edit › Keyboard Shortcuts** (**Ctrl+Alt+Shift+K**).

| Shortcut | What it does |
| --- | --- |
| **V**, **A** | Selection, Direct Selection |
| **P**, **T** | Pen, Type |
| **M**, **L** | Rectangle, Ellipse |
| **H**, **Z** | Hand, Zoom |
| **Ctrl+N**, **Ctrl+O**, **Ctrl+S** | New, Open, Save |
| **Ctrl+Shift+S** | Save As |
| **Ctrl+Z**, **Ctrl+Shift+Z** | Undo, Redo |
| **Ctrl+C**, **Ctrl+X**, **Ctrl+V** | Copy, Cut, Paste |
| **Ctrl+F**, **Ctrl+B** | Paste in Front, Paste in Back |
| **Ctrl+G**, **Ctrl+Shift+G** | Group, Ungroup |
| **Ctrl+]**, **Ctrl+[** | Bring Forward, Send Backward |
| **Ctrl+D** | Transform Again |
| **Ctrl+=**, **Ctrl+-** | Zoom in, zoom out |
| **Ctrl+0** | Fit the artboard in the window |
| **Ctrl+Y** | Outline view on or off |
| **Ctrl+R** | Show or hide rulers |
| **Ctrl+U** | Smart Guides on or off |
| **Ctrl+K** | Preferences |
