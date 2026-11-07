---
title: Arrange, group and align
description: Change which object sits in front, group, lock and hide objects, select objects that share an attribute, and line objects up with the Align panel.
sidebar:
  order: 15
---

This guide shows how to change which of several overlapping objects sits in front, group objects so that they move together, and lock or hide the objects you are not working on. It then shows how to select objects that share an attribute and line objects up with the Align panel.

## Change the stacking order

Overlapping objects are drawn in stacking order. An object higher in the order covers the objects below it. In the following image, the square labeled Front is highest in the stacking order and covers the other two.

![Three overlapping rounded squares stacked from back to front, each labeled with its place in the stacking order](/assets/uploads/vectorcraft/stacking-order.png)

1. Select one or more objects with the Selection tool (V).
2. Choose **Object → Arrange**, or right-click the selection and choose Arrange.
3. Choose one of the commands below.

| Command | What it does |
|---|---|
| **Bring to Front** | Moves the selection above every other object in its layer or group |
| **Bring Forward** | Moves the selection up one place |
| **Send Backward** | Moves the selection down one place |
| **Send to Back** | Moves the selection below every other object in its layer or group |
| **Send to Current Layer** | Moves the selection to the top of the current layer |

The first four commands move objects within the layer or group that holds them. To move objects into another layer, make that layer the current layer and choose Send to Current Layer.

:::note
In a clipping group, the clipping path stays at the bottom of the group. Bring to Front, Send to Back and the other Arrange commands do not move art below it.
:::

:::caution
Send to Current Layer stops with an error when the current layer, or a layer that holds it, is hidden or locked. The objects stay where they were. Show and unlock the layer, then choose the command again.
:::

## Group and ungroup objects

A group moves, scales and rotates as one object.

1. Select two or more objects.
2. Choose **Object → Group** (**Ctrl+G**, or **Cmd+G** on macOS).

To take a group apart, select it and choose **Object → Ungroup** (**Ctrl+Shift+G**, or **Cmd+Shift+G** on macOS).

To select an object inside a group without ungrouping it, use the Group Selection tool. The first click selects the object under the pointer. Each further click on it adds the next group that holds it.

### Edit a group in isolation mode

In isolation mode you edit the contents of one group, and you cannot select the rest of the artwork.

1. With the Selection tool, double-click the group. You can also right-click a single selected group and choose Isolate Selected Group.
2. Select, move and edit the objects inside the group.
3. Press Esc, or right-click and choose Exit Isolation Mode.

:::tip
The **Double Click To Isolate** setting turns the double-click on and off. It is on by default. Find it in **Edit → Preferences… → General** on Windows and Linux, and in **VectorCraft → Settings → General…** on macOS.
:::

## Lock and hide objects

A locked object stays visible but cannot be selected. A hidden object is not drawn.

1. Select the objects.
2. Choose **Object → Lock → Selection** (**Ctrl+2**, or **Cmd+2** on macOS) or **Object → Hide → Selection** (**Ctrl+3**, or **Cmd+3** on macOS).

The Lock submenu also has **All Artwork Above** and **Other Layers**. The Hide submenu has those two and **Unselected Artwork**.

To bring everything back, choose **Object → Unlock All** (**Ctrl+Alt+2**, or **Cmd+Option+2** on macOS) or **Object → Show All** (**Ctrl+Alt+3**, or **Cmd+Option+3** on macOS). Afterward, the objects that were locked or hidden are selected.

## Select objects that share an attribute

**Select → Same** selects every object that matches the selected object in one attribute.

1. Select an object with the attribute you want to match, for example a fill color.
2. Choose **Select → Same** and pick the attribute.

| Group | Choices in **Select → Same** |
|---|---|
| **Objects** | Appearance, Appearance Attribute, Blending Mode, Fill & Stroke, Fill Color, Opacity, Stroke Color, Stroke Weight, Graphic Style, Shape, Symbol Instance, Link Block Series |
| **Type** | Font Family, Font Family & Style, Font Family, Style & Size, Font Size, Text Fill Color, Text Stroke Color, Text Fill & Stroke Color |

The Select menu also steps through and changes the selection:

| Command | Windows and Linux | macOS |
|---|---|---|
| **Select → All** | Ctrl+A | Cmd+A |
| **Select → Deselect** | Ctrl+Shift+A | Cmd+Shift+A |
| **Select → Reselect** | Ctrl+6 | Cmd+6 |
| **Select → Next Object Above** | Ctrl+Alt+] | Cmd+Option+] |
| **Select → Next Object Below** | Ctrl+Alt+[ | Cmd+Option+[ |

## Align and distribute objects

The Align panel lines objects up along an edge or center line and spaces them evenly. Open it with **Window → Align** (Shift+F7).

In the following image, Vertical Align Center lines the circles up, and Horizontal Distribute Center spaces their centers evenly.

![Four circles of different sizes scattered on the left, and the same four on the right lined up on their centers and spaced evenly](/assets/uploads/vectorcraft/align-before-after.png)

![The Align panel with its Align Objects, Distribute Objects and Distribute Spacing buttons and the Align To choice, next to four selected circles](/assets/uploads/vectorcraft/align-panel.png)

The panel has four sections:

| Section | Buttons |
|---|---|
| **Align Objects** | Horizontal Align Left, Horizontal Align Center, Horizontal Align Right, Horizontal & Vertical Align Center, Vertical Align Top, Vertical Align Center, Vertical Align Bottom |
| **Distribute Objects** | Vertical Distribute Top, Vertical Distribute Center, Vertical Distribute Bottom, Horizontal Distribute Left, Horizontal Distribute Center, Horizontal Distribute Right |
| **Distribute Spacing** | Vertical Distribute Space, Horizontal Distribute Space, and a spacing field |
| **Align To** | Align to Selection, Align to Key Object, Align to Artboard |

### Line objects up

1. Select the objects with the Selection tool.
2. In the Align To section, choose what the objects line up with.
3. Click a button in the Align Objects section.

| Align To choice | Objects line up with |
|---|---|
| **Align to Selection** | The bounds of all the selected objects |
| **Align to Key Object** | The key object, which stays where it is |
| **Align to Artboard** | The edges or center of the artboard |

When only one object is selected, the Align Objects buttons align it to the artboard. The same alignments are in **Object → Align**.

### Space objects evenly

1. Select the objects. With Align to Selection, select three or more. With Align to Artboard, two are enough.
2. Click a button in the Distribute Objects section.

Distribute Objects spaces the objects' left edges, centers or right edges (or top edges, centers or bottom edges) evenly. With Align to Selection, the first and last objects stay where they are. With Align to Artboard, the first object moves to the artboard's left (or top) edge and the last object moves to its right (or bottom) edge.

Horizontal Distribute Space and Vertical Distribute Space make the gaps between the selected objects equal. With Align to Selection, the outer edges of the first and last objects stay where they are. With Align to Artboard, those outer edges move to the edges of the artboard.

### Use a key object

A key object stays in place, and the other selected objects are aligned to it or spaced from it.

1. Select two or more objects with the Selection tool.
2. Click one of the selected objects again. It becomes the key object and is drawn with a thicker outline.
3. Click an Align Objects button. The other objects line up with the key object.

To set an exact gap between objects:

1. Select the objects and click the one that should stay in place, so that it becomes the key object.
2. Type the gap in the Distribute Spacing field. The field accepts a value only while there is a key object.
3. Click Horizontal Distribute Space or Vertical Distribute Space. The key object stays where it is, and the other objects are placed that distance apart, starting from it.

:::tip
To cancel the key object, click it again, choose **Cancel Key Object** in the panel menu, or choose **Align to Selection** or **Align to Artboard**.
:::

### Measure with strokes

By default the Align panel measures each object's path, without its stroke. Choose **Use Preview Bounds** in the panel menu to measure the drawn object, stroke included. The same setting is in **Edit → Preferences… → General** on Windows and Linux, and in **VectorCraft → Settings → General…** on macOS. The panel menu also has **Hide Options**, which hides the Distribute Spacing and Align To sections, and **Show Options**, which shows them again.

## Shortcuts

| Command | Windows and Linux | macOS |
|---|---|---|
| Bring to Front | Ctrl+Shift+] | Cmd+Shift+] |
| Bring Forward | Ctrl+] | Cmd+] |
| Send Backward | Ctrl+[ | Cmd+[ |
| Send to Back | Ctrl+Shift+[ | Cmd+Shift+[ |
| Group | Ctrl+G | Cmd+G |
| Ungroup | Ctrl+Shift+G | Cmd+Shift+G |
| **Lock → Selection** | Ctrl+2 | Cmd+2 |
| Unlock All | Ctrl+Alt+2 | Cmd+Option+2 |
| **Hide → Selection** | Ctrl+3 | Cmd+3 |
| Show All | Ctrl+Alt+3 | Cmd+Option+3 |
| **Window → Align** | Shift+F7 | Shift+F7 |

To change these shortcuts, choose **Edit → Keyboard Shortcuts…**.

## Related

- [Draw and transform shapes](/apps/vectorcraft/draw-and-transform-shapes/)
- [Combine and cut shapes](/apps/vectorcraft/combine-and-cut-shapes/)
- [Organize with layers and symbols](/apps/vectorcraft/organize-with-layers-and-symbols/)
- [Set up a document and artboards](/apps/vectorcraft/set-up-documents-and-artboards/)
- [All workflows](/apps/vectorcraft/workflows/)
