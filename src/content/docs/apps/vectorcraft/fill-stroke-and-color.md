---
title: Fill, stroke and color
description: Paint fills and strokes, save colors as swatches, style strokes, and build gradients.
sidebar:
  order: 13
---

On this page you paint the inside and the outline of your art, save the colors you use as swatches, and change how strokes look. You also build linear, radial and freeform gradients and adjust the colors of finished artwork.

## Choose the fill or the stroke

Every object has a fill, which paints its inside, and a stroke, which paints its outline. The Fill and Stroke boxes in the toolbar show the current paint. The box in front is the active one, and the Color panel, the Swatches panel and the None key paint whichever box is in front.

1. Select the objects you want to paint.
2. Press X to bring the Fill box or the Stroke box to the front.
3. Pick a color in the Color panel or click a swatch in the Swatches panel.
4. Press / to set the active box to None.

With nothing selected, the same steps set the paint for the next object you draw.

| Key | What it does |
|---|---|
| D | Sets a white fill and a 1 pt black stroke. Type gets a black fill and no stroke. |
| X | Brings the Fill box or the Stroke box to the front. |
| Shift+X | Swaps the fill and the stroke of the selection. |
| / | Sets the active box to None. |
| I | Selects the Eyedropper Tool. |
| G | Selects the Gradient Tool. |

To change these shortcuts, choose **Edit → Keyboard Shortcuts…**.

## Mix a color

Choose **Window → Color** (F6) to open the Color panel. The panel shows sliders for Grayscale, RGB, HSB, CMYK or Web Safe RGB, with value fields, a hex field, a spectrum bar and None, Black and White chips.

1. Pick a mode from the panel menu, or Shift-click the spectrum to step through the modes.
2. Drag a slider, type a value, or click the spectrum.
3. To keep the color, choose **Create New Swatch…** from the panel menu.

:::tip
Alt-click (Option-click on macOS) the spectrum or a chip to paint the box that is not in front. In every mode except HSB and Grayscale, Shift-drag a slider to move the other sliders with it.
:::

When the selected art uses a global or spot swatch, the Color panel shows that swatch's tint slider instead. Picking a mode from the panel menu turns the color into a plain process color.

## Copy colors with the Eyedropper

1. Select the objects you want to change.
2. Press I to choose the Eyedropper Tool.
3. Click another object. The selection takes that object's attributes, as Eyedropper Options sets them. Double-click the Eyedropper Tool to open Eyedropper Options.

Shift-click samples only the color under the pointer into the active Fill or Stroke box. On a gradient, Shift-click takes the gradient's color at that point. Alt-click (Option-click on macOS) copies the selection's attributes onto the object you click.

## Save and reuse swatches

Choose **Window → Swatches** to open the Swatches panel. Clicking a swatch paints the active box, and Alt-click (Option-click on macOS) paints the other box.

1. Paint the active box with the color, gradient or pattern you want to keep.
2. Click the **New Swatch** button at the bottom of the panel, or choose **New Swatch…** from the panel menu.
3. In the New Swatch dialog, type a **Swatch Name**, choose a **Color Type**, and turn on **Global** if you want the swatch to stay linked to your art.
4. Click **OK**.

For a gradient, a pattern or a tint of a global color, the dialog asks only for a name.

![The Swatches panel with a new color group of five global swatches, next to five squares painted with them](/assets/uploads/vectorcraft/swatches-panel.png)

Art painted with a global swatch stays linked to it. When you edit the swatch with **Swatch Options…**, every object that uses it changes color. To group colors, click **New Color Group** at the bottom of the panel.

:::caution
When you delete a global swatch, art that uses it keeps its color but loses the link, and later edits to a swatch do not change it.
:::

To use ready-made colors, choose **Window → Swatch Libraries** and pick a library. **Open Swatch Library** and **Save Swatch Library…** in the Swatches panel menu open a library file or save the document's swatches as one.

## Style a stroke

Choose **Window → Stroke** (**Ctrl+F10**, or **Cmd+F10** on macOS) to open the Stroke panel. Choose **Show Options** from the panel menu if only the weight is visible.

| Option | Choices |
|---|---|
| **Weight** | The stroke width, in the unit that the Stroke setting on the Units page of Preferences sets. |
| **Cap** | Butt Cap, Round Cap or Projecting Cap, for the ends of open paths. |
| **Corner** | Miter Join, Round Join or Bevel Join. **Limit** sets when a miter join turns into a bevel. |
| **Align Stroke** | Align Stroke to Center, Align Stroke to Inside or Align Stroke to Outside. |
| **Dashed Line** | Dash and gap lengths, with **Exact dash lengths** or **Fit dashes to corners and ends**. |
| **Arrowheads** | A start and an end arrowhead, each with its own **Scale**, and a button that swaps them. |
| **Profile** | A variable width profile, with **Flip Along** and **Flip Across**. |

To change the weight of the selected strokes by one step, press **Ctrl+Alt+.** (**Cmd+Option+.** on macOS) to make them thicker and **Ctrl+Alt+,** (**Cmd+Option+,** on macOS) to make them thinner.

![Five horizontal strokes showing a butt cap, a round cap, a dashed line with round dashes, a line ending in an arrowhead, and a line with a circle at one end and a triangle at the other](/assets/uploads/vectorcraft/stroke-styles.png)

:::tip
A dash length of 0 with a round cap draws a row of dots.
:::

## Build a gradient

Choose **Window → Gradient** (**Ctrl+F9**, or **Cmd+F9** on macOS) to open the Gradient panel. Clicking the ramp or a type button applies a gradient to the active box. A new gradient runs from white to black.

1. Select an object and bring the Fill or Stroke box to the front.
2. Under **Type**, click **Linear Gradient**, **Radial Gradient** or **Freeform Gradient**.
3. For a linear or radial gradient, set the **Angle**. For a radial gradient, also set the **Aspect Ratio**.
4. Click a color stop under the ramp and set its color, **Location** and **Opacity**. Click below the ramp to add a stop.
5. Click **Reverse Gradient** to flip the order of the stops.

| Setting | What it does |
|---|---|
| **Angle** | Rotates the gradient. |
| **Aspect Ratio** | Stretches a radial gradient into an ellipse. |
| **Location** | Moves the selected stop along the gradient. |
| **Opacity** | Sets the selected stop's opacity. |
| **Dither** | Adds fine noise to a linear or radial fill to hide banding. |
| **Method** | **Classic** or **Perceptual** color blending between stops. |
| **Stroke** | With the Stroke box in front: **Gradient within stroke**, **Gradient along stroke** or **Gradient across stroke**. |

To save the gradient as a swatch, choose **Add to Swatches** from the Gradient panel menu.

![A square with a linear gradient, a circle with a radial gradient, and a thick ring whose stroke has a gradient](/assets/uploads/vectorcraft/gradient-types.png)

### Edit a gradient on the canvas

Press G to choose the Gradient Tool. Drag across the selected objects to set where the gradient starts and ends. The annotator then shows a bar from a round start handle to a square end handle.

1. Drag the start handle or the bar to move the gradient.
2. Drag the end handle to change the gradient's length and angle.
3. Click the bar to add a color stop.
4. Drag a stop to move it, or Alt-drag (Option-drag on macOS) to copy it.
5. Drag a stop off the bar to delete it.
6. Double-click a stop to change its color.

Hold Shift while you drag a handle to keep the gradient at 45° steps. On a radial gradient, a dashed ellipse shows its extent, and you drag the dot on it to change the aspect ratio.

![A rounded rectangle filled with a coral-to-yellow linear gradient, with the Gradient tool's annotator bar across it and the Gradient panel showing the two color stops](/assets/uploads/vectorcraft/gradient-tool.png)

:::note
**View → Hide Gradient Annotator** hides the bar while you work with the Gradient Tool.
:::

## Shade with a gradient mesh

A gradient mesh shades a shape smoothly between color points. Select a shape and choose **Object → Create Gradient Mesh…**, or press U to choose the Mesh Tool and click inside the shape to add mesh points.

## Make a pattern

Select the artwork to repeat and choose **Object → Pattern → Make**. VectorCraft adds a pattern swatch to the Swatches panel and opens the pattern for editing. Apply the swatch to a fill or a stroke like any other swatch. **Object → Pattern → Edit Pattern** changes the pattern later.

## Set opacity and blending

Choose **Window → Transparency** (**Ctrl+Shift+F10**, or **Cmd+Shift+F10** on macOS) to open the Transparency panel. Set the opacity and the blend mode of the selected objects there. The panel also makes opacity masks and sets **Isolate Blending** and **Knockout Group**.

## Change the colors of finished art

Select the art, then choose a command from **Edit → Edit Colors**:

| Command | What it does |
|---|---|
| **Recolor Artwork…** | Lists the selection's colors next to the new colors that replace them, with a live preview. |
| **Adjust Color Balance…** | Shows a slider for each color channel, from −100% to 100%, with a live preview. |
| **Blend Front to Back** | Grades the fills of three or more filled objects between the frontmost fill and the backmost fill. |
| **Blend Horizontally** | Grades the fills of three or more filled objects between the leftmost fill and the rightmost fill. |
| **Blend Vertically** | Grades the fills of three or more filled objects between the top fill and the bottom fill. |
| **Convert to CMYK**, **Convert to Grayscale**, **Convert to RGB** | Converts the colors to that color model. |
| **Invert Colors** | Replaces each color with its RGB inverse. |
| **Saturate…** | Raises or lowers the saturation of the colors by a percentage from −100 to 100. |

## Related

- [Workflows](/apps/vectorcraft/workflows/)
- [Draw and transform shapes](/apps/vectorcraft/draw-and-transform-shapes/)
- [Draw and edit paths](/apps/vectorcraft/draw-and-edit-paths/)
- [Add and style type](/apps/vectorcraft/add-and-style-type/)
- [Apply effects and appearance](/apps/vectorcraft/apply-effects-and-appearance/)
