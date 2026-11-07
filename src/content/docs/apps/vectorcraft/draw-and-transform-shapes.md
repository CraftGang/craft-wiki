---
title: Draw and transform shapes
description: Draw rectangles, ellipses, polygons and stars, round their corners, and move, rotate, scale, reflect and repeat transforms.
sidebar:
  order: 11
---

This guide covers the shape tools, the live corner widgets on rectangles and polygons, and the Selection tool. It ends with the transform tools and the **Object → Transform** commands, including **Transform Again**, which repeats the last transform.

Shortcuts are written for Windows and Linux first, then macOS. **Edit → Keyboard Shortcuts…** changes them.

## Draw a shape

1. Pick a shape tool in the toolbar, or press its key from the following table.
2. Drag on the artboard. The shape follows the pointer until you release the mouse button.
3. While you drag, use these keys to change the shape:
   - Hold **Shift** to draw a square, a circle, or a line at a 45° step. With the Polygon or Star tool, Shift keeps the shape upright.
   - Hold **Alt** (**Option** on macOS) to draw a rectangle, ellipse or line from the center outward. The Polygon and Star tools always draw from the center.
   - Hold **Space** to move the shape you are drawing.
   - With the Polygon or Star tool, press **Up Arrow** or **Down Arrow** to add or remove sides or points.
4. To draw a shape at an exact size, click once without dragging. The tool's dialog opens. Type the values and click **OK**.

![Six shapes in a row on a night sky, each labeled with the tool that drew it: a teal square (Rectangle), a coral rounded square (Rounded Rectangle), a sun-colored circle (Ellipse), a purple hexagon (Polygon), an amber star (Star) and a light blue line (Line). The Star tool is part way through dragging out the star with its two radii showing, and the status bar shows its keys](/assets/uploads/vectorcraft/shape-tools.webp)

| Tool | Key | A drag draws | Keys while dragging |
|---|---|---|---|
| **Rectangle Tool** | M | A rectangle | Shift draws a square |
| **Rounded Rectangle Tool** | | A rectangle with rounded corners | Shift draws a square, and Up Arrow and Down Arrow change the corner radius |
| **Ellipse Tool** | L | An ellipse | Shift draws a circle |
| **Polygon Tool** | | A regular polygon, with 6 sides by default | Up Arrow and Down Arrow change the number of sides |
| **Star Tool** | | A star, with 5 points by default | Up Arrow and Down Arrow change the number of points |
| **Line Segment Tool** | \ | A straight line | Shift keeps the line at 45° steps |

The Arc, Spiral, Rectangular Grid, Polar Grid and Flare tools are in the same toolbar groups as the Line Segment and Rectangle tools. A click with the Arc, Spiral, grid or Flare tools also opens a dialog for exact values.

:::tip
Press **D** to give the selection a white fill and a 1 pt black stroke. New shapes you draw afterward use the same fill and stroke.
:::

## Round corners with the live widgets

Rectangles, rounded rectangles, ellipses and polygons stay live shapes after you draw them. While the Selection tool or the Rectangle, Rounded Rectangle, Ellipse, Polygon or Star tool is active, a selected live shape shows its widgets.

1. Select a rectangle or polygon. A widget appears inside each corner.
2. Drag any corner widget to round all of the shape's corners together, or to make them sharper again.
3. Alt-click (Option-click on macOS) a corner widget to switch the corner kind between round, inverted round and chamfer.
4. Double-click a corner widget to open the **Corners** dialog and type an exact radius.
5. A selected ellipse shows two pie widgets just outside its outline. Drag one to cut a wedge out of the ellipse. Double-click either pie widget to make the ellipse whole again.

The **Transform** panel (**Window → Transform**, or **Shift+F8**) shows the properties of the selected live shape:

| Shape | Panel section | Fields |
|---|---|---|
| Rectangle | **Rectangle Properties** | **Corner Radius** |
| Ellipse | **Ellipse Properties** | **Pie Start Angle**, **Pie End Angle** and the **Invert Pie** button |
| Polygon | **Polygon Properties** | **Sides**, **Angle**, **Corner**, **Corner Radius**, **Radius**, **Side Length** and the **Make Sides Equal** button |

![A sunset postcard rectangle selected with its corner widgets showing inside each corner while one is dragged to round all four corners to a 48 px radius. The Transform panel shows Rectangle Properties with the Corner Radius field](/assets/uploads/vectorcraft/live-corners.webp)

:::note
Stars and paths drawn with the Pen tool are not live shapes. To round their corners, select them with the Direct Selection tool (A), which shows a corner widget at each corner anchor.
:::

## Select objects

Press **V** for the Selection tool.

- Click an object to select it. Shift-click another object to add it to the selection, or Shift-click a selected object to remove it.
- Drag across empty canvas to draw a marquee. Every object the marquee touches is selected.
- Drag a handle of the bounding box to scale the selection. Hold **Shift** to keep its proportions, and hold **Alt** (**Option** on macOS) to scale from the center.
- Drag from just outside a corner handle to rotate the selection. Hold **Shift** to rotate in 45° steps.
- Ctrl-click (Cmd-click on macOS) an object to select the object behind it.
- Double-click a group or an object to enter isolation mode, where you edit it without touching the rest of the artwork. To leave, right-click the canvas and choose **Exit Isolation Mode**.

## Move and copy

1. Drag a selected object to move it. Hold **Shift** while dragging to constrain the direction of the move.
2. Hold **Alt** (**Option** on macOS) while dragging to move a copy and leave the original in place.
3. To move by small steps, press the arrow keys. Each press moves the selection by the Keyboard Increment preference, which is 1 pt by default.
   - **Shift+Arrow** moves the selection 10 times as far.
   - **Alt+Arrow** (**Option+Arrow** on macOS) moves a copy.
4. To move by an exact distance, press **Enter** with the Selection tool active, or choose **Object → Transform → Move…**. Type the distances and click **OK**. Select **Copy (make a transformed copy)** first to move a copy instead. The **Move** dialog opens with the distance of your last move, so pressing **Enter** twice repeats a move at the same spacing.

## Rotate, reflect, scale and shear

The Rotate, Reflect, Scale and Shear tools transform the selection about a reference point. The point starts at the center of the selection.

1. Select the objects and pick a transform tool.
2. Click on the canvas to move the reference point, for example onto a corner. When Smart Guides or **Snap to Point** is on, a clicked point snaps to the nearest anchor or center.
3. Drag to transform about that point. Hold **Shift** to rotate in 45° steps or to scale uniformly.
4. To keep the original and transform a copy, hold **Alt** (**Option** on macOS) as you release the mouse button.
5. To type exact values instead, Alt-click (Option-click on macOS) where the reference point should go. The tool's dialog opens. Pressing **Enter** or double-clicking with the tool active also opens the dialog.

The **Free Transform Tool** (E) shows the bounding box. Drag a handle to scale, drag outside a corner to rotate, and drag inside the box to move.

**Object → Transform** holds the same transforms as dialogs: **Transform Again**, **Move…**, **Rotate…**, **Reflect…**, **Scale…**, **Shear…**, **Transform Each…** and **Reset Bounding Box**. **Transform Each…** transforms every selected object about the reference point of its own bounding box. The same submenu appears when you right-click the canvas with objects selected.

| Command or tool | Windows and Linux | macOS |
|---|---|---|
| **Move…** | Ctrl+Shift+M | Cmd+Shift+M |
| **Transform Again** | Ctrl+D | Cmd+D |
| **Transform Each…** | Ctrl+Alt+Shift+D | Cmd+Option+Shift+D |
| **Rotate Tool** | R | R |
| **Reflect Tool** | O | O |
| **Scale Tool** | S | S |
| **Free Transform Tool** | E | E |
| **Transform** panel | Shift+F8 | Shift+F8 |

## Repeat a transform

**Object → Transform → Transform Again** (**Ctrl+D**, or **Cmd+D** on macOS) applies the last transform to the current selection again. When the last transform made a copy, Transform Again makes another copy.

To make a rosette from one shape:

1. Draw a tall ellipse above the center of the artboard, and keep it selected.
2. Press **R** for the Rotate tool, then Alt-click (Option-click on macOS) the center of the artboard. The **Rotate** dialog opens with that point as the reference point.
3. Set the angle to 30°, select **Copy (make a transformed copy)**, and click **OK**. A rotated copy appears and is selected.
4. Press **Ctrl+D** (**Cmd+D** on macOS) ten times. Each press adds one more rotated copy. After the tenth press, the rosette has twelve petals.

<img src="/assets/uploads/vectorcraft/transform-again.webp" alt="A rosette of twelve overlapping coral-to-magenta petals on a dark indigo square, made from one ellipse that was rotated and copied once and then repeated with Transform Again" width="360" style="display: block; margin-inline: auto;" />

:::caution
Transform Again repeats the last transform on whatever is selected now. If you change the selection between presses, the transform applies to the new selection.
:::

## Related

- [Workflows](/apps/vectorcraft/workflows/)
- [Set up a document and artboards](/apps/vectorcraft/set-up-documents-and-artboards/)
- [Draw and edit paths](/apps/vectorcraft/draw-and-edit-paths/)
- [Reshape with the warp tools](/apps/vectorcraft/reshape-with-warp-tools/)
- [Fill, stroke and color](/apps/vectorcraft/fill-stroke-and-color/)
- [Arrange, group and align](/apps/vectorcraft/arrange-group-and-align/)
- [Draw in perspective](/apps/vectorcraft/draw-in-perspective/)
