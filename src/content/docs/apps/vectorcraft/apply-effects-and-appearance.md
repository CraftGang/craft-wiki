---
title: Apply effects and appearance
description: Stack fills, strokes and live effects on one object, change them later in the Appearance panel, and save the look as a graphic style.
sidebar:
  order: 17
---

An object in VectorCraft can have more than one fill and stroke, and live effects such as shadows, rounded corners and warps. This guide shows how to build that stack in the Appearance panel, apply and edit effects from the Effect menu, and save the result as a graphic style that you can apply to other objects with one click.

## Build a look in the Appearance panel

**Window → Appearance** (Shift+F6) lists everything that paints the selected object: its strokes and fills, the effects on each of them and on the whole object, and its opacity. The top row in the panel paints last, in front of the rows below it.

1. Select an object and press Shift+F6 to open the Appearance panel.
2. Press **Ctrl+/** (**Cmd+/** on macOS) to add a new fill, or **Ctrl+Alt+/** (**Cmd+Option+/** on macOS) to add a new stroke. The buttons at the bottom of the panel do the same: **Add New Stroke** and **Add New Fill**.
3. Click the swatch in a row to pick one of the document's swatches, or Shift-click it to mix a color in the Color panel. A stroke row also has a **Weight** field.
4. Drag a row up or down to change the order. Hold **Alt** (**Option** on macOS) while you drag to copy the row instead of moving it.
5. Click the eye at the left of a row to hide that row without deleting it. Click it again to show the row.

The following screenshot shows a teal badge with a thin dark stroke, a wide yellow stroke behind it and a drop shadow, as the Appearance panel lists them.

![A teal badge reading OPEN LATE with a thin dark stroke, a wide yellow stroke behind it and a drop shadow. It is selected, and the Appearance panel lists its two strokes, its fill, the Drop Shadow effect and its opacity](/assets/uploads/vectorcraft/appearance-panel.webp)

The buttons at the bottom of the panel act on the selected object or row:

| Button | What it does |
|---|---|
| **Add New Stroke** | Adds a stroke on top of the object's stack |
| **Add New Fill** | Adds a fill on top of the object's stack |
| **Add New Effect** | Opens a menu of effects to apply |
| **Clear Appearance** | Leaves the object one fill and one stroke, both set to None, and resets its opacity |
| **Duplicate Selected Item** | Copies the selected fill or stroke row with its effects, or the selected effect row |
| **Delete Selected Item** | Removes the selected fill, stroke or effect row |

The panel menu has **Reduce to Basic Appearance**, which keeps one fill and one stroke and removes every effect.

:::tip
Ctrl-click (Cmd-click on macOS) or Shift-click rows to select several fills and strokes, then click **Duplicate Selected Item** or **Delete Selected Item** once for all of them.
:::

## Apply a live effect

Effects in VectorCraft stay live. The object keeps its original path, and VectorCraft draws the effect from that path each time the canvas redraws. You can change or remove an effect at any time.

1. Select an object.
2. Choose an effect from the **Effect** menu, for example **Effect → Stylize → Drop Shadow…**.
3. Change the settings in the dialog. **Preview** is on when the dialog opens, so the canvas shows the result while you change the values.
4. Press **OK**.

To change an effect later, select the object and double-click the effect's row in the Appearance panel, or click its name. The dialog opens with the current values.

To apply an effect to one fill or stroke only, click that row in the Appearance panel first, then choose the effect. Without a selected row, the effect applies to the whole object.

:::note
If you choose an effect that the object already has, VectorCraft asks whether to edit the applied effect or add another one. **Edit** opens the existing effect; **Add New** applies a second copy.
:::

The following image shows the same star with six different live effects. Each star still has its original five-point path.

![Six copies of the same coral star on a night sky, each labeled with its one live effect: a drop shadow, rounded corners, a zigzag edge, a bloated shape, an arc warp and a Gaussian blur. The zigzag star is selected and the Appearance panel lists its effect](/assets/uploads/vectorcraft/effects-gallery.webp)

### The Effect menu

The top of the Effect menu has three commands:

- **Apply Last Effect** applies the last effect again with the same settings.
- **Last Effect…** opens the dialog of the last effect, where you can change the settings before you apply it.
- **Document Raster Effects Settings…** sets the resolution and other options for raster effects.

Under the **Vector Effects** heading, the menu lists 3D and Materials, Color Adjustments, Color Effects, Convert to Shape, Crop Marks, Distort & Transform, Path, Path Effects, Pathfinder, Rasterize…, Stylize, SVG Filters and Warp. Under the **Raster Effects** heading, it lists the Effect Gallery… and pixel-based groups such as Artistic, Blur and Sketch.

The **Stylize** group under Vector Effects holds **Round Corners…**, **Scribble…**, **Drop Shadow…**, **Inner Glow…**, **Outer Glow…** and **Feather…**.

### Common effects

When you add one of these effects, its dialog opens with these values. After you confirm a warp once, the Arc dialog opens with the warp settings you last confirmed.

| Effect | Menu path | Defaults |
|---|---|---|
| **Drop Shadow** | **Effect → Stylize → Drop Shadow…** | Multiply mode, 75% opacity, X and Y offset 7 pt, blur 5 pt, black |
| **Round Corners** | **Effect → Stylize → Round Corners…** | Radius 10 pt |
| **Outer Glow** | **Effect → Stylize → Outer Glow…** | Screen mode, 75% opacity, blur 5 pt, yellow |
| **Feather** | **Effect → Stylize → Feather…** | Radius 5 pt |
| **Offset Path** | **Effect → Path → Offset Path…** | Offset 10 pt, miter joins, miter limit 4 |
| **Zig Zag** | **Effect → Distort & Transform → Zig Zag…** | Size 10 pt, 4 ridges per segment, smooth points |
| **Pucker & Bloat** | **Effect → Distort & Transform → Pucker & Bloat…** | 0%; negative values pucker and positive values bloat, from -200% to 200% |
| **Arc** | **Effect → Warp → Arc…** | Bend 50%, horizontal |
| **Gaussian Blur** | **Effect → Blur → Gaussian Blur…** (under Raster Effects) | Radius 5 pt |

:::note
When you export a PDF or expand the appearance, VectorCraft draws Drop Shadow, Outer Glow, Feather and Gaussian Blur as images. **Effect → Document Raster Effects Settings…** sets the resolution they use: Screen (72 ppi), Medium (150 ppi), High (300 ppi), or Other for any value from 1 to 2400 ppi.
:::

## Blend, repeat and distort objects

Blends, repeats and envelopes stay live in the same way as effects: you can change the original objects at any time and the result updates.

- **Object → Blend → Make** (**Ctrl+Alt+B**, or **Cmd+Option+B** on macOS) fills the space between two selected objects with steps that change smoothly from one to the other. **Object → Blend → Blend Options…** sets the **Spacing**: **Smooth Color**, **Specified Steps** or **Specified Distance**.
- **Object → Repeat** repeats the selection in a **Radial**, **Grid** or **Mirror** pattern that updates as you edit the original.
- **Object → Envelope Distort** bends artwork, type included, with **Make with Warp…**, **Make with Mesh…** or **Make with Top Object**, which uses the shape on top.

The following screenshot shows three ribbons made with blends. One blend is selected with its two key paths showing.

![Three wide ribbons blending from yellow to pink and from teal to purple. One blend is selected with its two key paths showing, and the Layers panel lists the clip group, the blends and the background](/assets/uploads/vectorcraft/blends.webp)

## Add 3D

**Effect → 3D and Materials** has **Extrude & Bevel…**, **Revolve…**, **Inflate…** and **Rotate…**. **Revolve…** spins a profile around an axis, so the outline of half a vase becomes a whole vase. While the dialog is open, drag the rings on the canvas to turn the object, and use the **Lighting** tab to light it.

![A still life of a vase, a bowl, a sphere and a bottle made with Revolve. The vase is selected, with rotation rings drawn over it, and the Revolve dialog shows its Rotation tab with the revolve angle, axis side, offset, cap and view settings](/assets/uploads/vectorcraft/revolve.webp)

## Make the appearance permanent

**Object → Expand Appearance** turns the selected object's appearance into ordinary objects:

- Each fill and stroke becomes an object of its own, grouped in paint order.
- Effects that change the shape, such as Zig Zag or Round Corners, are applied to the paths.
- Raster effects such as shadows, glows and blurs become embedded images.
- Hidden fills, strokes and effects are dropped.

:::caution
After Expand Appearance, the effects are no longer live and you cannot change their settings in the Appearance panel. Keep a copy of the object, for example on a hidden layer, if you may need to edit the effects later.
:::

## Save and reuse a graphic style

A graphic style stores an object's whole appearance: its fills, strokes, effects, opacity and blend mode. **Window → Graphic Styles** (Shift+F5) lists the styles in the document.

1. Select an object that has the look you want to keep.
2. In the Graphic Styles panel, press **New Graphic Style**. Alt-click the button (Option-click on macOS) to name the style as you make it.
3. Select another object and click the style in the panel to apply it.

An object that you apply a style to stays linked to that style. Alt-click a style (Option-click on macOS) to add its fills, strokes and effects on top of the object's existing appearance instead; this unlinks the object. Double-click a style to open **Graphic Style Options…**.

The following image shows a style saved from one rectangle and applied to the other two.

![Three teal buttons labeled Tickets, Map and Food under the heading Harbor Night Market, sharing the same strokes and shadow. The Food button is selected, and the Graphic Styles panel shows the new style as its last, highlighted thumbnail](/assets/uploads/vectorcraft/graphic-styles.webp)

**Window → Graphic Style Libraries** opens the bundled sets of styles. The panel menu also has **Open Graphic Style Library** and **Save Graphic Style Library…**.

:::tip
If you click a style while nothing is selected, VectorCraft uses that style for the next object you draw.
:::

## Keyboard shortcuts

| Command | Windows and Linux | macOS |
|---|---|---|
| Appearance panel | Shift+F6 | Shift+F6 |
| Add New Fill | Ctrl+/ | Cmd+/ |
| Add New Stroke | Ctrl+Alt+/ | Cmd+Option+/ |
| Apply Last Effect | Ctrl+Shift+E | Cmd+Shift+E |
| Last Effect… | Ctrl+Alt+Shift+E | Cmd+Option+Shift+E |
| Graphic Styles panel | Shift+F5 | Shift+F5 |
| Blend → Make | Ctrl+Alt+B | Cmd+Option+B |

**Edit → Keyboard Shortcuts…** changes them.

## Related

- [Fill, stroke and color](/apps/vectorcraft/fill-stroke-and-color/)
- [Combine and cut shapes](/apps/vectorcraft/combine-and-cut-shapes/)
- [Organize with layers and symbols](/apps/vectorcraft/organize-with-layers-and-symbols/)
- [Export for screens and the web](/apps/vectorcraft/export-for-screens-and-the-web/)
- [Print your artwork](/apps/vectorcraft/print-your-artwork/)
- [All VectorCraft workflows](/apps/vectorcraft/workflows/)
