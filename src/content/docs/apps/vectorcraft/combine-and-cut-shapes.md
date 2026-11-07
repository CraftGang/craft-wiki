---
title: Combine and cut shapes
description: Build new shapes from overlapping ones with the Pathfinder panel and the Shape Builder tool, and use compound paths, clipping masks and Live Paint.
sidebar:
  order: 16
---

This page shows how to make new shapes from shapes that overlap. You combine and cut them with the Pathfinder panel or the Shape Builder tool, punch holes with compound paths, show art only inside a shape with a clipping mask, and color the regions of overlapping paths with Live Paint.

## Use the Pathfinder panel

**Window → Pathfinder** (**Ctrl+Shift+F9**, or **Cmd+Shift+F9** on macOS) opens the Pathfinder panel. Its top row, **Shape Modes**, has Unite, Minus Front, Intersect and Exclude, followed by an **Expand** button. Its bottom row, **Pathfinders**, has Divide, Trim, Merge, Crop, Outline and Minus Back.

1. Draw two or more shapes so that they overlap.
2. Select them. A group selected on its own counts as the shapes inside it.
3. Click an operation in the Pathfinder panel.

Divide and Outline work on a single object. Every other operation needs two or more objects, or a group, and its button stays dimmed until the selection has them. The following image shows the same teal square and coral circle after each of the ten Pathfinder operations.

![A grid of ten results from the same teal square and coral circle, one for each Pathfinder operation, labeled Unite, Minus Front, Intersect, Exclude, Divide, Trim, Merge, Crop, Outline and Minus Back. The Divide result is selected and the Pathfinder panel is open](/assets/uploads/vectorcraft/pathfinder-grid.webp)

The operations treat the selection as a stack, from the back-most object to the front-most one.

| Operation | Group | Result |
|---|---|---|
| **Unite** | Shape Modes | One shape that covers every selected shape. It takes the paint of the front-most shape. |
| **Minus Front** | Shape Modes | The back-most shape with every shape in front of it cut away. It keeps the back-most shape's paint. |
| **Intersect** | Shape Modes | Only the area that all the shapes cover. It takes the paint of the front-most shape. |
| **Exclude** | Shape Modes | The areas covered by an odd number of shapes. Where two shapes overlap, a hole appears. |
| **Divide** | Pathfinders | A separate piece for every region. Each piece takes the paint of the front-most shape that covers it. |
| **Trim** | Pathfinders | The hidden parts of each shape are removed, and so are the strokes. Each shape that is still visible stays a separate object. |
| **Merge** | Pathfinders | Trim, and then the visible parts that touch or overlap and have the same fill are joined. |
| **Crop** | Pathfinders | The parts of the lower shapes that lie inside the front-most shape. The front-most shape and the strokes are removed. |
| **Outline** | Pathfinders | The edges of every region as open paths, split where the shapes cross, each stroked in its shape's former fill color. |
| **Minus Back** | Pathfinders | The front-most shape with every shape behind it cut away. It keeps the front-most shape's paint. |

The panel menu has more commands:

- **Trap…** adds overprinting traps where selected objects of different solid colors meet. It needs two or more objects.
- **Repeat Pathfinder** (**Ctrl+4**, or **Cmd+4** on macOS) runs the last operation again on the current selection. After an operation it is named after that operation, for example **Repeat Minus Front**.
- **Pathfinder Options…** sets **Precision**, **Remove Redundant Points** and **Divide and Outline Will Remove Unpainted Artwork**.
- **Make Compound Shape**, **Release Compound Shape** and **Expand Compound Shape** work with compound shapes.

:::tip
Alt-click (Option-click on macOS) a Shape Mode button to make a compound shape instead of a permanent result. The shapes stay separate and editable, and the **Expand** button next to the Shape Modes turns the compound shape into a final shape when you are done.
:::

:::tip
To keep the original shapes and change the result later, group the shapes and choose an operation from **Effect → Pathfinder**. The effect runs the operation on the members of the group each time they change.
:::

## Build shapes with the Shape Builder tool

The Shape Builder tool (Shift+M) merges and deletes the regions that overlapping shapes make, directly on the canvas.

1. Select the overlapping shapes.
2. Choose the Shape Builder tool. The region under the pointer is highlighted with a hatch pattern.
3. Drag across the regions you want to join. When you release the mouse button, they become one shape.
4. To delete regions, hold **Alt** (**Option** on macOS) and click or drag over them. The pointer shows a minus sign, and the regions to be deleted are highlighted in red.

If you hold Shift when you press the mouse button, the drag draws a rectangle instead of a line. The regions the rectangle reaches are merged, or deleted if you also hold **Alt** (**Option** on macOS). Press Escape during a drag to cancel it.

![Three overlapping circles, coral, yellow and blue, selected with the Shape Builder tool. A drag runs from the coral circle into the small region where all three overlap, and the three regions it has crossed (the coral circle, the overlap of coral and yellow, and the overlap of all three) are covered by a hatch pattern](/assets/uploads/vectorcraft/shape-builder.webp)

Double-click the tool to open **Shape Builder Tool Options**. These options change how it works:

| Option | Default | What it does |
|---|---|---|
| **Pick Color From** | Artwork | With **Artwork**, a merged shape takes the look of the object where the drag starts. With **Color Swatches**, it takes the current fill, and the Left and Right arrow keys step the current fill through the document's color swatches. |
| **Highlight: Fill** | On | Shades the regions under the pointer or touched by the drag. |
| **In Merge Mode, Clicking Stroke Splits the Path** | Off | A click on a stroke splits that path where the pointer is. |
| **Gap Detection** | Off | Closes small gaps between paths when the tool finds regions. **Gap Length** sets the largest gap it closes. |

## Make a compound path

A compound path joins several paths into one object with one paint. Where a path in front overlaps the back-most path, it cuts a hole.

1. Draw the outer shape, and then draw the shapes for the holes in front of it.
2. Select all of them.
3. Choose **Object → Compound Path → Make** (**Ctrl+8**, or **Cmd+8** on macOS).

The compound path takes the paint of the back-most path. To split it into separate paths again, choose **Object → Compound Path → Release** (**Ctrl+Alt+Shift+8**, or **Cmd+Option+Shift+8** on macOS). Each released path keeps the compound path's paint.

## Clip art with a clipping mask

A clipping mask shows the objects under it only where they fall inside its shape.

1. Place the shape for the mask on top of the art you want to clip. The mask can be a path, a compound path or text.
2. Select the mask and the art.
3. Choose **Object → Clipping Mask → Make** (**Ctrl+7**, or **Cmd+7** on macOS).

The top-most selected object becomes the clipping path, and it loses its own fill and stroke. The result is a clip group.

<img src="/assets/uploads/vectorcraft/clipping-mask.webp" alt="A five-pointed star filled with sunset stripes from violet through coral to pale yellow on a night sky, made by clipping a set of striped rectangles with a star-shaped clipping mask" width="360" style="display: block; margin-inline: auto;" />

To work with a clip group, select it and use the other commands in **Object → Clipping Mask**:

- **Edit Contents** selects the clipped art, so you can move or restyle it inside the mask.
- **Edit Clipping Path** selects the clipping path, so you can reshape it.
- **Release** (**Ctrl+Alt+7**, or **Cmd+Option+7** on macOS) turns the clip group into an ordinary group. The clipping path stays in the group. It has no fill or stroke unless you painted it after you made the mask.

:::note
A fill you give the clipping path after you make the mask shows behind the clipped art, and a stroke shows over it.
:::

## Color regions with Live Paint

Live Paint treats overlapping paths as a set of regions, called faces, and the path segments between crossings, called edges. You can fill each face and stroke each edge on its own.

1. Select the paths.
2. Choose **Object → Live Paint → Make** (**Ctrl+Alt+X**, or **Cmd+Option+X** on macOS). Each face starts with the fill of the front-most path that covers it.
3. Choose the Live Paint Bucket (K) and pick a fill color.
4. Click a face to fill it with the current fill. Shift-click near an edge to paint it with the current stroke.

The Live Paint Selection tool (Shift+L) selects faces and edges. Click a face to select it, Shift-click a face to add it to the selection or remove it, and Alt-click (Option-click on macOS) to select an edge. Drag to select every face and edge the marquee touches.

The **Object → Live Paint** menu also has **Merge**, which adds other selected paths to a Live Paint group, **Release**, which gives back the original paths, **Gap Options…**, and **Expand**, which turns the Live Paint group into an ordinary group of its painted faces and edges.

:::tip
You can skip step 2. Clicking selected paths with the Live Paint Bucket makes them a Live Paint group first.
:::

:::caution
Live Paint works with paths, compound paths and groups of them. If the selection holds type, images or other objects, Make does not change anything.
:::

## Shortcuts

| Command | Windows and Linux | macOS |
|---|---|---|
| Pathfinder panel | Ctrl+Shift+F9 | Cmd+Shift+F9 |
| Repeat Pathfinder | Ctrl+4 | Cmd+4 |
| Shape Builder tool | Shift+M | Shift+M |
| Make Compound Path | Ctrl+8 | Cmd+8 |
| Release Compound Path | Ctrl+Alt+Shift+8 | Cmd+Option+Shift+8 |
| Make Clipping Mask | Ctrl+7 | Cmd+7 |
| Release Clipping Mask | Ctrl+Alt+7 | Cmd+Option+7 |
| Make Live Paint | Ctrl+Alt+X | Cmd+Option+X |
| Live Paint Bucket | K | K |
| Live Paint Selection tool | Shift+L | Shift+L |

**Edit → Keyboard Shortcuts…** changes them.

## Related

- [Draw and transform shapes](/apps/vectorcraft/draw-and-transform-shapes/)
- [Draw and edit paths](/apps/vectorcraft/draw-and-edit-paths/)
- [Fill, stroke and color](/apps/vectorcraft/fill-stroke-and-color/)
- [Arrange, group and align](/apps/vectorcraft/arrange-group-and-align/)
- [Apply effects and appearance](/apps/vectorcraft/apply-effects-and-appearance/)
- [VectorCraft workflows](/apps/vectorcraft/workflows/)
