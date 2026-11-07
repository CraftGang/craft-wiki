---
title: Draw and edit paths
description: Draw straight and curved paths with the Pen, Curvature and Pencil tools, then reshape them with Direct Selection and the Object → Path commands.
sidebar:
  order: 12
---

On this page you draw paths with the Pen, Curvature and Pencil tools and then change their shape. You move anchor points and handles with the Direct Selection tool, cut paths with the Scissors and Knife, and use the commands in the **Object → Path** menu.

## How a path is built

A path is a line made of segments. Each segment runs between two anchor points. A curved segment also has direction handles at its anchor points, and the length and angle of each handle set the shape of the curve.

A smooth anchor point has two handles that stay in line, so the path passes through it without a bend. A corner anchor point has no handles, or handles that move on their own, so the path changes direction there. The following image shows a path with a smooth anchor point in the middle and a corner anchor point at each end.

![A curved ridge line over a sunset sky with three anchor points. The middle point is smooth, with two direction handles in line, and labels point to an anchor point, a direction handle and a segment](/assets/uploads/vectorcraft/path-anatomy.webp)

## Path tools

| Tool | Key | What it does |
|---|---|---|
| **Pen** | P | Places a corner anchor point where you click and a smooth anchor point where you drag |
| **Add Anchor Point** | + | Adds an anchor point where you click a segment, without changing the shape |
| **Delete Anchor Point** | - | Removes the anchor point you click and refits the curve around it |
| **Anchor Point** | Shift+C | Switches anchor points between smooth and corner, and moves one handle on its own |
| **Curvature** | Shift+~ | Draws a path that curves through each point you click |
| **Pencil** | N | Draws a path where you drag |
| **Direct Selection** | A | Selects and moves anchor points, segments and handles |
| **Scissors** | C | Splits a path where you click it |

The Add Anchor Point, Delete Anchor Point and Anchor Point tools are in the Pen tool's group in the Tools panel. The Smooth and Path Eraser tools share a group with the Pencil, and the Scissors and Knife are in the Eraser tool's group. You can change these keys in **Edit → Keyboard Shortcuts…**.

## Draw with the Pen tool

1. Press P to choose the Pen tool.
2. Click to place a corner anchor point. Click again somewhere else to draw a straight segment to it.
3. To place a smooth anchor point, press and drag. The drag pulls out its two handles and curves the segment.
   - Hold **Alt** (**Option** on macOS) while you drag to break the handles. The incoming handle stays where it was and only the outgoing handle follows the pointer.
   - Hold Shift to keep the handle at 45° steps.
   - Hold Space to move the anchor point together with its handles.
4. To close the path, click the first anchor point. To leave the path open, press Enter or Esc.
5. To add to an open path later, click one of its ends with the Pen tool and keep drawing.

While you draw, a preview of the next segment follows the pointer. When you click the last anchor point you placed, the Pen tool removes its outgoing handle, so the next segment leaves that point as a corner.

![The Pen tool part way through a mountain ridge over a sunset: a corner anchor, a smooth anchor with its handles pulled out, and the preview of the next segment following the pointer with its distance and angle readout. The status bar shows the Pen tool's hints](/assets/uploads/vectorcraft/pen-drawing.webp)

:::tip
When a path is selected and you are not drawing one, the Pen tool adds an anchor point where you click one of its segments and deletes an anchor point you click. Hold Shift to start a new path instead. To turn this off, open **Edit → Preferences…**, choose General and turn on **Disable Auto Add/Delete**.
:::

:::note
While you draw, click an end of another open path to join the two paths into one.
:::

## Draw with the Curvature tool

The Curvature tool places points, and the path curves smoothly through all of them.

1. Press Shift+~ to choose the Curvature tool.
2. Click to place each point. The curve updates as you add points.
3. To make a point a corner, Alt-click (Option-click on macOS) or double-click it. Do the same again to make it smooth.
4. To move a point, drag it.
5. To remove the point you last placed or moved, press Backspace or Delete.
6. To close the path, click the first point. To leave the path open, press Esc or Enter.

The Curvature tool also edits any selected path, whichever tool drew it. Click a segment to add a smooth point without changing the shape, and drag a point to move it. Only the two segments at that point change.

## Draw freehand with the Pencil tool

1. Press N to choose the Pencil tool.
2. Drag to draw. VectorCraft fits a path to your stroke when you release the mouse button.
3. To close the path, end the stroke near its start, or hold **Alt** (**Option** on macOS) as you release.

To continue an open path, select it and start your stroke near one of its ends. To draw a straight line at 45° steps, hold Shift as you press.

Two more tools in the Pencil tool's group change paths you have already drawn:

- **Smooth** smooths the selected paths along the part you drag over.
- **Path Eraser** erases the parts of the selected paths that you drag over.

## Paint with the Paintbrush and Blob Brush

- The **Paintbrush** tool (B) draws a freehand path where you drag, like the Pencil. With a drawing tablet, it also records the pen pressure along the stroke.
- The **Blob Brush** tool (**Shift+B**) paints filled shapes instead of stroked paths. Press [ or ] while it is active to make its tip smaller or larger.

## Edit anchor points with Direct Selection

1. Press A to choose the Direct Selection tool.
2. Click an anchor point to select it. Shift-click to add more anchor points to the selection, or to remove one.
3. Drag a selected anchor point to move the selected anchor points. Hold Shift to keep the move at 45° steps.
4. Click a segment to select that segment on its own.
5. Drag a direction handle to change the curve. Hold Shift to keep the handle at 45° steps around its anchor point, or hold **Alt** (**Option** on macOS) to move that handle on its own.
6. To select several anchor points at once, drag a marquee around them.

The following screenshot shows the anchor points and handles of a crescent selected with the Direct Selection tool.

![The Direct Selection tool showing the anchor points and curve handles of a purple crescent, with the Contextual Task Bar below it offering Offset Path, Simplify and Duplicate](/assets/uploads/vectorcraft/paths.webp)

The Anchor Point tool (Shift+C) converts anchor points:

- Click a smooth anchor point to make it a corner.
- Drag an anchor point to pull out smooth handles.
- Drag a handle to move it on its own.
- Drag a segment to change its curve.

:::tip
While the Pen tool is active, hold **Alt** (**Option** on macOS) over a handle, an anchor point or a segment of a selected path to use it as the Anchor Point tool without switching tools.
:::

## Cut paths

- With the **Scissors** tool (C), click a path where you want to cut it. A closed path opens at that point, and an open path becomes two paths.
- With the **Knife** tool, drag across closed shapes to cut them along the drag. The Knife cuts the selected shapes, or every shape when nothing is selected. Hold **Alt** (**Option** on macOS) as you press to cut along a straight line, and hold Shift as well to keep that line at 45° steps.

## Object → Path commands

Select one or more paths, then choose a command from **Object → Path**. Clean Up… works on the whole document and does not need a selection.

| Command | Windows and Linux | macOS | What it does |
|---|---|---|---|
| **Join** | Ctrl+J | Cmd+J | Joins two or more open paths into one path, or closes a single open path |
| **Average…** | Ctrl+Alt+J | Cmd+Option+J | Moves the selected anchor points to their average position, horizontally, vertically or both |
| **Average & Join…** | Ctrl+Alt+Shift+J | Cmd+Option+Shift+J | Moves two open ends to the point between them and joins them there, as one step |
| **Outline Stroke** | | | Replaces a stroked path with a filled shape the size of the stroke |
| **Offset Path…** | | | Adds a new path a set distance outside the original, or inside it with a negative Offset, with Miter, Round or Bevel joins |
| **Reverse Path Direction** | | | Reverses the direction of the selected paths |
| **Simplify…** | | | Reduces the number of anchor points while keeping the shape close to the original |
| **Smooth…** | | | Smooths the selected paths by an amount you set with a slider |
| **Add Anchor Points** | | | Adds an anchor point halfway along each segment without changing the shape |
| **Remove Anchor Points** | | | Removes the anchor points you selected with Direct Selection, without opening the path |
| **Divide Objects Below** | | | Cuts the objects below with the selected path, and removes that path |
| **Split Into Grid…** | | | Replaces the selected paths with a grid of rectangles, with the rows, columns and gutters you set |
| **Clean Up…** | | | Deletes stray points, unpainted objects and empty text paths |

Offset Path… places the new path above the original. The dialog has **Offset**, **Joins** and **Miter Limit** fields. The following image shows, from left to right, a stroked path, the same path after Outline Stroke, and a path with a rounded offset path sent behind it.

![Three stars on a night sky, labeled Stroked path, Outline Stroke and Offset Path: a plain amber stroked outline, the same star after Outline Stroke turned its stroke into a filled shape, selected so its new anchor points show, and a coral star with a rounded purple offset path behind it](/assets/uploads/vectorcraft/offset-and-outline.webp)

:::caution
Outline Stroke replaces the stroke with a filled shape. To change the stroke weight afterward, undo the command or start again from a copy of the original path.
:::

## Related

- [Workflows](/apps/vectorcraft/workflows/)
- [Draw and transform shapes](/apps/vectorcraft/draw-and-transform-shapes/)
- [Reshape with the warp tools](/apps/vectorcraft/reshape-with-warp-tools/)
- [Cut, join and refine paths](/apps/vectorcraft/cut-join-and-refine-paths/)
- [Fill, stroke and color](/apps/vectorcraft/fill-stroke-and-color/)
- [Combine and cut shapes](/apps/vectorcraft/combine-and-cut-shapes/)
