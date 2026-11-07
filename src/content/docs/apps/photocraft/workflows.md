---
title: Workflows
description: Adjustment layers, selections and masks, text, layer styles, filters, export and shortcuts in PhotoCraft.
sidebar:
  order: 3
---

PhotoCraft's menus are **File**, **Edit**, **Image**, **Layer**, **Type**, **Select**, **Filter**, **View**, **Window** and **Help**. If you can't find a command, choose **Edit › Search…** (**Ctrl+F**, or **⌘F** on a Mac) and type its name.

In this guide, **Ctrl** is **⌘** on a Mac, and **Alt** is **Option**.

## Adjust colours without changing your pixels

An adjustment layer sits above your image and changes how it looks. Your original pixels stay as they were, so you can change or remove the adjustment at any time.

1. In the **Layers** panel, click the layer the adjustment should sit above.
2. Choose **Layer › New Adjustment Layer**, then an adjustment such as **Levels…**, **Curves…**, **Vibrance…** or **Hue/Saturation…**.
3. Change its settings in the **Properties** panel.

The same list is behind the **Create new fill or adjustment layer** button at the bottom of the **Layers** panel.

The adjustments are **Brightness/Contrast**, **Levels**, **Curves**, **Exposure**, **Vibrance**, **Hue/Saturation**, **Color Balance**, **Black & White**, **Photo Filter**, **Channel Mixer**, **Color Lookup**, **Invert**, **Posterize**, **Threshold**, **Gradient Map** and **Selective Color**.

![Monet's Impression, Sunrise with Levels 1 and Vibrance 1 adjustment layers. The Properties panel shows the Levels settings over a histogram, and the Histogram panel below lists the mean, standard deviation and median](/assets/uploads/photocraft/adjustments.webp)

If you don't need to change it later, use **Image › Adjustments** instead, for example **Image › Adjustments › Curves…** (**Ctrl+M**). This changes the layer's pixels directly.

## Select part of an image

Use one of these:

- **Rectangular Marquee Tool** or **Elliptical Marquee Tool** (**M**) for simple shapes.
- **Lasso Tool** (**L**) to draw around something by hand.
- **Quick Selection Tool**, **Object Selection Tool** or **Magic Wand Tool** (**W**) to follow the edges of an object.
- **Select › Subject** to let PhotoCraft find the main subject. If it finds nothing, try the **Object Selection Tool** or the **Lasso Tool**.

Smart selection runs on your computer. It needs no account and no internet connection.

Then refine the selection:

- **Select › Inverse Selection** swaps what is and isn't selected.
- **Select › Modify** has **Border…**, **Smooth…**, **Expand…**, **Contract…** and **Feather…**. Feather softens the edge.
- **Select › Select and Mask…** refines a difficult edge, such as hair.
- **Select › Deselect** (**Ctrl+D**) removes the selection. **Select › Reselect** brings it back.

## Mask a layer

A mask hides part of a layer without erasing it.

1. Make a selection.
2. Click the layer in the **Layers** panel.
3. Choose **Layer › Layer Mask › Reveal Selection** to show only the selected area, or **Hide Selection** to hide it.

This works on adjustment layers too, so you can limit an adjustment to one area.

![Vermeer's Girl with a Pearl Earring with an elliptical selection around her face. A Hue/Saturation 1 layer with Saturation at -100 has a mask that leaves the face in colour and turns the rest of the painting grey](/assets/uploads/photocraft/masks.webp)

**Layer › Layer Mask** also has **Reveal All** and **Hide All** (to paint the mask yourself), **Delete**, **Apply**, and **Enable Layer Mask** to switch the mask on and off.

## Add and edit text

1. Pick the **Horizontal Type Tool** (**T**).
2. Click on the canvas for a single line of text, or drag a box for a paragraph.
3. Type. Set the font, size, leading, tracking, alignment and colour in the options bar or the **Properties** panel.

![A landscape with the headline SIERRA NEVADA being edited on the canvas, a byline below it and a paragraph of body text. The Properties panel shows the Character and Paragraph settings for the Georgia font](/assets/uploads/photocraft/type.webp)

Text stays editable: click it with the Type tool to change it. Text layers from PSD files stay editable too. To start new text on top of an existing text layer, hold **Shift** as you click.

The **Type** menu has **Convert to Paragraph Text** and **Convert to Point Text**, **Warp Text…**, **Convert to Shape** (turn the letters into vector shapes) and **Rasterize Type Layer** (turn them into pixels; you can't edit the words after that).

## Add a layer style

1. Click the layer in the **Layers** panel.
2. Choose **Layer › Layer Style**, then an effect: **Bevel & Emboss…**, **Stroke…**, **Inner Shadow…**, **Inner Glow…**, **Satin…**, **Color Overlay…**, **Gradient Overlay…**, **Pattern Overlay…**, **Outer Glow…** or **Drop Shadow…**.
3. Adjust it in the **Layer Style** dialog and click **OK**. Tick more effects in the list on the left to combine them.

![The Layer Style dialog over a poster with the word EARTHRISE in glowing letters. Stroke and Outer Glow are ticked, and the Outer Glow settings show the blend mode, opacity, colour, spread, size and range](/assets/uploads/photocraft/layer-styles.webp)

Effects are listed under the layer in the **Layers** panel. **Layer › Layer Style** also has **Copy Layer Style**, **Paste Layer Style**, **Clear Layer Style** and **Hide All Effects**.

## Use filters

The **Filter** menu has blurs, sharpening, noise, distortions such as **Twirl** and **Wave**, pixelate, stylise and render filters. Filter dialogs preview on the canvas as you change them. If there is a selection, the filter only changes the selected area.

![The Twirl filter dialog with Angle set to 320 and Preview ticked. On Van Gogh's The Starry Night, the twirl shows live only inside a circular selection](/assets/uploads/photocraft/filters.webp)

To keep a filter editable, run it on a smart object. You can then change, hide or remove it later.

## Transform

**Edit › Free Transform** (**Ctrl+T**) scales, rotates and moves the active layer. **Edit › Transform** has **Scale**, **Rotate**, **Skew**, **Distort**, **Perspective** and **Warp**, exact rotations, and **Flip Horizontal** and **Flip Vertical**. **Edit › Transform › Again** repeats the last transform.

To change the size of the whole image, use **Image › Image Size…**. To add space around it without scaling, use **Image › Canvas Size…**.

## Export an image

**File › Export › Export As…** makes a flat copy of your image for sharing. Your layered document isn't changed.

1. Under **File Settings**, pick a **Format**: **PNG**, **JPG**, **WebP**, **TIFF**, **TGA**, **ICO** or **JPEG XL**.
2. Set the options for that format. **JPG** and lossy **WebP** have a **Quality** slider. **WebP** has a **Lossless** checkbox. **Transparency** keeps transparent areas (JPG has none). **Metadata** is **None**, **EXIF** or **All**.
3. Under **Image Size**, set **Scale** in percent. The size in pixels shows below.
4. Check the preview and the estimated file size, then click **Export**.

![The Export As dialog in the light theme over Klimt's The Kiss. Format is JPG at Quality 90 and Scale 50%, giving 1199 × 1200 px, and the preview reads JPG ≈ 684K](/assets/uploads/photocraft/export.webp)

**File › Export › Quick Export as PNG** exports straight away, using the settings in **File › Export › Export Preferences…**.

To export one layer, use **Layer › Export As…** or **Layer › Quick Export as PNG**. With several layers or artboards selected, each one is exported as its own file.

## Record and replay actions

The **Actions** panel (**Window › Actions**, or **Alt+F9**) records a sequence of steps and plays it back. To run an action on a whole folder of images, use **File › Automate › Batch…**.

## Change how PhotoCraft looks

- **Window › Theme** has dark and light themes, and **Sync with system** to follow your computer's setting.
- **Window › Workspace** switches between panel layouts: **Essentials**, **Photography**, **Painting**, **Pixel Art**, **Graphic and Web** and **Motion**. **Reset Workspace** puts the panels back.
- **Tab** hides and shows all panels. **Shift+Tab** hides and shows only the panels on the right.

To change the interface language, open **Edit › Preferences › Interface…** (on a Mac, also **PhotoCraft › Language**). By default, PhotoCraft follows your system's language.

## Keyboard shortcuts

PhotoCraft uses the shortcuts most image editors use. To see or change them, choose **Edit › Keyboard Shortcuts…** (**Ctrl+Alt+Shift+K**).

| Shortcut | What it does |
| --- | --- |
| **Ctrl+N**, **Ctrl+O** | New, Open |
| **Ctrl+S**, **Ctrl+Shift+S** | Save, Save As |
| **Ctrl+Z**, **Ctrl+Shift+Z** | Undo, Redo |
| **Ctrl+Alt+Z** | Toggle Last State |
| **Ctrl+T** | Free Transform |
| **Ctrl+J** | Layer via Copy: copy the selection, or the whole layer, to a new layer |
| **Ctrl+Shift+N** | New layer |
| **Ctrl+E** | Merge layers |
| **Ctrl+D** | Deselect |
| **Ctrl+L**, **Ctrl+M**, **Ctrl+U** | Levels, Curves, Hue/Saturation |
| **Ctrl+=**, **Ctrl+-** | Zoom in, zoom out |
| **Ctrl+0**, **Ctrl+1** | Fit on screen, 100% |
| **Ctrl+F** | Search for a command |
| **V**, **M**, **L**, **W**, **C** | Move, Marquee, Lasso, selection tools, Crop |
| **B**, **E**, **G**, **T** | Brush, Eraser, Gradient, Type |
| **H**, **Z** | Hand, Zoom |
