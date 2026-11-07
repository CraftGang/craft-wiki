---
title: Organize with layers and symbols
description: Keep artwork in layers and sublayers, lock and hide them, trace over template layers, and reuse art as symbols.
sidebar:
  order: 18
---

This guide shows how to sort a drawing into layers and sublayers, hide and lock them while you work, and draw over a placed sketch on a template layer. It also shows how to turn art you repeat into a symbol, so that one edit changes every copy.

## Work in the Layers panel

Open the panel with **Window → Layers** (F7). The panel lists layers at the top level, with their sublayers, groups and objects inside them.

![The Layers panel with three layers named Type, Artwork and Background, the Artwork layer expanded to show its three shapes and the Background layer locked, next to a simple poster](/assets/uploads/vectorcraft/layers-panel.png)

1. Click **Create New Layer** at the bottom of the panel, or press **Ctrl+L** (**Cmd+L** on macOS). The new layer goes directly above the current layer. Ctrl-click (Cmd-click on macOS) the button to put the new layer above every other layer, or Alt-click (Option-click on macOS) it to set the layer's options first.
2. Click a layer's row to make it the current layer. New art you draw goes into the current layer.
3. To add a layer inside another one, click **Create New Sublayer**.
4. Drag a row up or down to change the stacking order, or drop it on another layer to move it there. To move the selected art, drag the small selection square in its row onto another layer.
5. Click the eye column of a row to hide or show it, and click the lock column next to it to lock or unlock it.
6. To find a selected object in the list, click **Locate Object**. The panel opens the layers around the object and scrolls to its row.

The other buttons at the bottom of the panel are **Delete Selection**, which deletes the highlighted rows with everything in them, and **Make/Release Clipping Mask**. **Make/Release Clipping Mask** makes the top object of the layer clip the rest of the layer, and a second click releases it.

:::tip
Alt-click (Option-click on macOS) a layer's eye to hide every other layer, and Alt-click (Option-click on macOS) its lock to lock every other layer. Ctrl-click (Cmd-click on macOS) the eye to switch that one layer between preview and outline view.
:::

To send selected art to the current layer from the canvas, choose **Object → Arrange → Send to Current Layer**.

## Set layer options

Double-click a layer's thumbnail, or the empty part of its row, to open **Layer Options**. Double-clicking the name itself lets you rename the layer in place. You can also choose **Options for Selection…** from the panel menu.

| Option | What it does |
|---|---|
| **Name** | Sets the name shown in the Layers panel. |
| **Color** | Sets the layer's color from a list of presets, or from **Custom** for any color. |
| **Template** | Makes the layer a template layer. A template layer is locked, its images are dimmed to 50%, and it is left out of printing and export. Turning **Template** off unlocks the layer and stops the dimming. |
| **Show** | Shows or hides the layer. |
| **Preview** | Draws the layer's art in full. With **Preview** off, the layer's art is drawn in outline. |
| **Dim Images to** | Dims the layer's placed images on the canvas to the percentage you enter. |
| **Lock** | Locks the layer, so its art cannot be selected. |
| **Print** | Includes the layer when the document prints. |

**Lock** and **Print** cannot be changed while **Template** is on. When you open **Layer Options** for a group or an object instead of a layer, the dialog shows only the name, **Show** and **Lock**.

## Trace over a template layer

1. Choose **File → Place…** (**Ctrl+Shift+P**, or **Cmd+Shift+P** on macOS) and pick the sketch or photo you want to draw over.
2. Turn on **Template** in the **Place** dialog, then place the file. The image goes onto a new locked template layer directly below the current layer. The new layer is named **Template** followed by the file name.
3. Click the layer above the template to make it current, and draw over the image.
4. Choose **View → Hide Template** (**Ctrl+Shift+W**, or **Cmd+Shift+W** on macOS) to see your drawing without the image. The same menu item, now named **Show Template**, shows the template again.

:::note
Template layers do not print and are left out of export. A template layer made with **Place** shows its image at full strength. To fade the image, double-click the template layer's thumbnail, turn on **Dim Images to** in **Layer Options**, and enter a percentage.
:::

## Use the Layers panel menu

The panel menu holds commands that work on whole layers. Most of them act on the highlighted rows, or on the current layer when no row is highlighted.

- **Merge Selected** moves the contents of two or more highlighted rows into the row you highlighted last.
- **Flatten Artwork** moves the art of every visible top-level layer into one layer.
- **Collect in New Layer** moves the highlighted rows, or the selected objects, into a new layer.
- **Release to Layers (Sequence)** puts each object of a layer or group into a sublayer of its own. **Release to Layers (Build)** does the same, but each new sublayer also holds copies of the objects below it.
- **Reverse Order** reverses the stacking order of the highlighted rows.
- **Template** turns the highlighted layers into template layers, or back into ordinary layers.
- **Hide Others**, **Outline Others** and **Lock Others** act on every top-level layer except the ones that hold the highlighted rows, or the current layer when no row is highlighted. When every other layer is already hidden, in outline or locked, the menu shows **Show All Layers**, **Preview All Layers** or **Unlock All Layers** in that item's place, and the command shows, previews or unlocks every layer.

:::caution
**Flatten Artwork** deletes hidden layers and the art in them. Show any layer you want to keep before you flatten. Template layers are kept.
:::

## Make and place symbols

A symbol is art stored once in the document. Each copy of it on the canvas is an instance, and every instance changes when you edit the symbol. Open the panel with **Window → Symbols** (**Ctrl+Shift+F11**, or **Cmd+Shift+F11** on macOS).

![Seven leaf shapes of different sizes and angles, all instances of one symbol, with the Symbols panel showing the leaf symbol's thumbnail](/assets/uploads/vectorcraft/symbols-panel.png)

1. Select the art you want to reuse.
2. Click **New Symbol** at the bottom of the Symbols panel. In **Symbol Options**, enter a name and click **OK**. The art is saved as a symbol, and the selection on the canvas becomes its first instance. You can also drag selected art onto the panel.
3. To place another instance, drag the symbol from the panel onto the canvas. The instance is centered where you drop it. **Place Symbol Instance** places one at the center of the artboard.
4. Move, scale and rotate instances like any other object.

| Action | Where |
|---|---|
| **New Symbol** | Symbols panel button, or **New Symbol…** in the panel menu |
| **Place Symbol Instance** | Symbols panel button or panel menu, or drag a symbol onto the canvas |
| **Edit Symbol** | Double-click an instance on the canvas or the symbol in the panel, or choose **Edit Symbol** in the panel menu |
| **Redefine Symbol** | Panel menu: replaces the symbol's art with the selected art |
| **Replace Symbol** | Panel menu, or the **Replace** menu on the Control bar while instances are selected |
| **Break Link to Symbol** | Symbols panel button or panel menu: turns the selected instances into plain art |
| **Select All Instances** | Panel menu: selects every instance of the symbol chosen in the panel |
| **Select All Unused** | Panel menu: selects the symbols that have no instances |

## Edit a symbol

1. Double-click an instance on the canvas with the Selection Tool, or double-click the symbol in the Symbols panel. VectorCraft opens the symbol's art in symbol editing mode.
2. Change the art. Each change appears in every instance of the symbol.
3. Click **Exit Symbol Editing Mode** on the Control bar to return to the document.

![The same group of leaf symbols shown twice: teal on the left, and on the right every leaf turned yellow after the symbol was edited once](/assets/uploads/vectorcraft/symbol-update.png)

:::tip
To change one instance without changing the others, select it and click **Break Link to Symbol**. The instance becomes ordinary art that you can edit on its own.
:::

**Window → Symbol Libraries** opens symbol libraries, including the built-in **Basic Shapes** library. **Save Symbols…** in the same submenu saves the document's symbols as a library of your own, and **Other Library…** opens a library file.

## Spray and adjust symbols

The Symbol Sprayer Tool (Shift+S) paints many instances of the symbol chosen in the Symbols panel as you drag. Alt-drag (Option-drag on macOS) with it to remove instances. The other symbolism tools are in the same tool group and change the instances under the brush.

| Tool | What it does when you drag | With Alt (Option on macOS) |
|---|---|---|
| **Symbol Shifter Tool** | Moves instances in the direction you drag. | |
| **Symbol Scruncher Tool** | Pulls instances toward the pointer. | Pushes them apart. |
| **Symbol Sizer Tool** | Makes instances larger. | Makes them smaller. |
| **Symbol Spinner Tool** | Rotates instances in the direction you drag. | Rotates them the other way. |
| **Symbol Stainer Tool** | Tints instances with the current fill color. | Removes the tint. |
| **Symbol Screener Tool** | Makes instances more transparent. | Makes them more opaque. |
| **Symbol Styler Tool** | Applies a graphic style to instances. | Removes the style. |

Double-click any symbolism tool to open **Symbolism Tools Options**, where **Diameter**, **Intensity** and **Symbol Set Density** set the brush that all eight tools share.

## Keyboard shortcuts

| Action | Windows and Linux | macOS |
|---|---|---|
| Layers panel | F7 | F7 |
| Create a new layer | Ctrl+L | Cmd+L |
| Symbols panel | Ctrl+Shift+F11 | Cmd+Shift+F11 |
| Place a file | Ctrl+Shift+P | Cmd+Shift+P |
| Hide or show template layers | Ctrl+Shift+W | Cmd+Shift+W |
| Symbol Sprayer Tool | Shift+S | Shift+S |

**Edit → Keyboard Shortcuts…** changes them.

## Related

- [Arrange, group and align](/apps/vectorcraft/arrange-group-and-align/)
- [Combine and cut shapes](/apps/vectorcraft/combine-and-cut-shapes/)
- [Apply effects and appearance](/apps/vectorcraft/apply-effects-and-appearance/)
- [Trace an image](/apps/vectorcraft/trace-an-image/)
- [Print your artwork](/apps/vectorcraft/print-your-artwork/)
- [All VectorCraft workflows](/apps/vectorcraft/workflows/)
