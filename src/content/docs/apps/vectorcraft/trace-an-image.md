---
title: Trace an image
description: Place a raster image in a document and turn it into editable vector paths with Image Trace.
sidebar:
  order: 19
---

This guide shows how to place a raster image, such as a scan, a sketch or a flat-color logo, and trace it into paths you can edit. You pick a preset, adjust the tracing while the preview updates, and then expand the result into ordinary paths. The following image is the one traced in this guide, a flat-color landscape saved as a PNG file.

![A small flat-color landscape at dusk with a violet sky, a coral band at the horizon, a yellow sun, two teal hills and a dark indigo hill in front, used as the image to trace](/assets/uploads/vectorcraft/trace-source.webp)

## Place the image

1. Choose **File → Place…** (**Ctrl+Shift+P**, or **Cmd+Shift+P** on macOS) and pick the image file.
2. In the Place dialog, choose how VectorCraft places the image:
   - **Link** keeps a link to the image file instead of only embedding a copy of it. Link is on the first time you place a file, and the dialog then keeps the last setting you used.
   - **Template** puts the image on a new locked template layer below the current layer.
   - **Replace** swaps the one selected object for the image and keeps that object's place in the stacking order and its transform.
3. Click **Place**. VectorCraft places the image at 100% of its physical size, using the resolution saved in the file, or 72 ppi when the file has none.

:::tip
To draw over a sketch by hand instead of tracing it, place it with Template on. [Organize with layers and symbols](/apps/vectorcraft/organize-with-layers-and-symbols/) covers template layers.
:::

## Trace it

1. Select the image.
2. Start the trace in one of these ways:
   - Choose **Object → Image Trace → Make**. This traces the image with the Default preset, which gives a black and white result.
   - Click **Image Trace** on the Control bar or in the Properties panel. The button traces with the Default preset, and its arrow lists the other presets.
   - Choose **Window → Image Trace** to open the Image Trace panel, choose a **Preset**, and click **Trace**.
3. The traced object replaces the image on the artboard, and the source image stays inside it. With the traced object selected, the Control bar shows its preset, its view, a button that opens the Image Trace panel, and **Expand**.

**Object → Image Trace → Make and Expand** traces with the Default preset and expands the result into plain paths in one step.

| Command | Result |
|---|---|
| **Make** | Traces the selected image into an Image Trace object that you can still adjust |
| **Make and Expand** | Traces the image and expands the result, leaving only paths |
| **Release** | Puts the source image back in place of the Image Trace object |
| **Expand** | Keeps the traced paths and drops the source image |

All four commands are in **Object → Image Trace**. Release and Expand are also in the Image Trace panel's menu.

:::note
VectorCraft still traces an image larger than 1500 pixels on a side, but more slowly, and the status bar shows a message about it. A lower-fidelity preset or a smaller copy of the image traces faster.
:::

## Choose a preset

The **Preset** list in the Image Trace panel holds these built-in presets.

| Preset | Mode | Colors |
|---|---|---|
| **Default** | Black and white, threshold 128 | 2 |
| **Auto Color** | Color, with the image's own colors for flat art and as many as the tones need otherwise | Set by the image |
| **High Fidelity Photo** | Color, overlapping | 64 |
| **Low Fidelity Photo** | Color, overlapping | 20 |
| **3 Colors** | Color | 3 |
| **6 Colors** | Color | 6 |
| **16 Colors** | Color | 16 |
| **Shades of Gray** | Grayscale, overlapping | 8 grays |
| **Black and White Logo** | Black and white, threshold 128, white left out | 2 |
| **Sketched Art** | Black and white, threshold 150, white left out | 2 |
| **Silhouettes** | Black and white, threshold 200, white left out | 2 |
| **Line Art** | Black and white, threshold 128, white left out | 2 |
| **Technical Drawing** | Black and white, threshold 128, white left out | 2 |
| **Outline** | Black and white, traced as strokes instead of fills | 2 |
| **Flat Logo** | Flat Logo, for logos made of flat colors | Up to 8 found in the image, plus white |

:::tip
Every built-in preset except Flat Logo shows an **Enhanced** checkbox under the Preset list. The enhanced version also turns on Auto Grouping, and Shapes for every preset except High Fidelity Photo.
:::

To keep your own settings, click the **Manage Presets** button next to the Preset list and choose **Save as New Preset…**. The same menu renames or deletes a preset you saved. Built-in presets cannot be renamed or deleted.

## Adjust the tracing

The following screenshot shows the Image Trace panel with the 6 Colors preset and the Advanced section open.

![The traced dusk landscape selected, next to the Image Trace panel set to the 6 Colors preset with its Advanced section open showing the Paths, Corners and Noise sliders, and Preview checked](/assets/uploads/vectorcraft/image-trace-panel.webp)

1. Keep **Preview** checked at the bottom of the panel. Preview is on by default, and VectorCraft traces the selected object again each time you change a setting. With Preview off, click **Trace** to apply your changes.
2. Set **Mode** to Black and White, Grayscale, Color or Flat Logo. In Black and White mode, **Threshold** sets how dark a pixel must be to become black. In Color mode, **Palette** chooses where the colors come from: Limited, Full Tone, Automatic or Document Library.
3. Click **Advanced** to show the rest of the settings.
4. Check the counts above the Preview checkbox. They show how many paths, anchors and colors the current tracing has.

Changing any setting turns the preset name into Custom.

| Setting | What it does |
|---|---|
| **Paths** | Sets how closely the paths follow the pixels. A higher value follows them more tightly. |
| **Corners** | Sets how many corners the paths keep. A higher value keeps more corners. |
| **Noise** | Leaves out areas smaller than this many pixels. |
| **Method** | **Abutting** traces each color on its own, and neighboring shapes share their edges. **Overlapping** stacks the colors, and each one extends under the colors above it. |
| **Create** | **Fills** makes filled areas. **Strokes** makes thin lines into stroked lines up to the **Stroke** width in pixels. |
| **Snap Curves To Lines** | Straightens slightly curved edges and makes lines that are almost level or upright exactly level or upright. |
| **Shapes** | Makes outlines that are a circle, an ellipse, a rectangle or a regular polygon into live shapes. |
| **Auto Grouping** | Groups each path with the paths inside it. |
| **Gradients** | In Grayscale and Color modes, traces an area whose color changes evenly in one direction as one path with a linear gradient. |
| **Ignore Color** | Leaves out the white areas, or the areas of another color that you pick, so no background shape is made. |

:::tip
To start over, choose **Reset to Default** from the Image Trace panel's menu.
:::

## Change the view

The **View** list in the Image Trace panel and on the Control bar changes how the selected Image Trace object is drawn on screen.

| View | What you see |
|---|---|
| **Tracing Result** | The traced paths, filled |
| **Tracing Result with Outlines** | The traced paths with their outlines on top |
| **Outlines** | Only the outlines of the traced paths |
| **Outlines with Source Image** | The outlines over the source image |
| **Source Image** | The image before tracing |

To compare the tracing with the original for a moment, press and hold the eye button next to the View list. The source image shows until you release the button.

![The traced landscape shown two ways under the heading One tracing, two views: on the left filled in color, labeled Tracing Result, and on the right as thin outlines of the traced paths, labeled Outlines and selected, with the Image Trace panel's View list set to Outlines](/assets/uploads/vectorcraft/trace-views.webp)

:::note
The view changes only what you see on screen. Export, printing and Expand always use the tracing result.
:::

## Finish the tracing

1. Select the Image Trace object.
2. Choose **Object → Image Trace → Expand**, or click **Expand** in the Image Trace panel or on the Control bar. The traced paths stay, and the source image is removed.
3. Edit the paths as you would any other paths.

To go back to the image instead, choose **Object → Image Trace → Release**. The source image returns in place of the Image Trace object.

:::caution
After Expand, the tracing settings no longer apply to the paths. Change the settings and check the result before you expand.
:::

## Related

- [Workflows](/apps/vectorcraft/workflows/)
- [Open and save files](/apps/vectorcraft/open-and-save-files/)
- [Work with placed images](/apps/vectorcraft/work-with-placed-images/)
- [Organize with layers and symbols](/apps/vectorcraft/organize-with-layers-and-symbols/)
- [Draw and edit paths](/apps/vectorcraft/draw-and-edit-paths/)
- [Fill, stroke and color](/apps/vectorcraft/fill-stroke-and-color/)
- [Combine and cut shapes](/apps/vectorcraft/combine-and-cut-shapes/)
