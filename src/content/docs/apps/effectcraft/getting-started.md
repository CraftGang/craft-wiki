---
title: Getting started
description: Install EffectCraft, make a composition, animate a title, add an effect and render it as a video.
sidebar:
  order: 1
---

On a Mac, use **⌘** in place of **Ctrl**, and **Option** in place of **Alt**.

## 1. Install EffectCraft

The quickest way is [ArtCraft Launcher](https://github.com/storytold/craft-launcher/releases/latest): install it, then press **Install** on EffectCraft's card. To download EffectCraft on its own, see [Install and update](/apps/effectcraft/install-update/).

## 2. Open EffectCraft

EffectCraft opens on the **Home** screen. From here you can start a **New Composition**, **Open Demo Project**, **Import Footage…**, start **New from Template**, or open a recent project.

To look around before you make anything, choose **Open Demo Project**. It has an animated title and a 3D scene.

## 3. Make a composition

1. Choose **Composition › New Composition...** (**Ctrl+N**), or **New Composition** on the Home screen.
2. Type a **Composition Name**.
3. Pick a **Preset**, such as `HDTV 1080 24` or `UHD 4K 25`, or set the **Width**, **Height**, **Frame Rate** and **Duration** yourself.
4. Choose **OK**. The composition opens in the Composition panel and the Timeline.

To change these later, choose **Composition › Composition Settings...**.

## 4. Add a layer

Choose **Layer › New › Text** and type your text. Other layers are on the same menu: **Solid...**, **Shape Layer**, **Null Object**, **Adjustment Layer**, **Light...** and **Camera...**.

To use your own video or images, choose **File › Import › File...** (**Ctrl+I**), or drop the files on the window. Then drag them from the Project panel into the composition.

## 5. Animate it

1. In the Timeline, twirl the layer open, then open **Transform**.
2. Set a starting **Position**, for example outside the frame.
3. Click the stopwatch beside **Position**. It records a keyframe at the current time.
4. Move the blue current-time indicator later, for example to one second.
5. Drag the layer to its final place in the Composition panel. A second keyframe appears by itself.
6. Select both keyframes and press **F9** (**Easy Ease**), so the layer glides in and settles.
7. Press **Space** to play it. Press it again to stop.

![The Graph Editor under the Timeline, showing an eased curve between two keyframes of the title's text animator, with the Graph Editor's buttons for hold, linear, auto Bezier and Easy Ease along the bottom](/assets/uploads/effectcraft/graph-editor.webp)

## 6. Add an effect

Select the layer, then choose an effect from the **Effect** menu, for example **Effect › Blur & Sharpen › Gaussian Blur**. Or open **Window › Effects & Presets** (**Ctrl+5**), search for the effect, and double-click it.

The effect's settings appear in **Effect Controls** (**F3**). Each setting has a stopwatch, so you can animate it like any other property.

## 7. Save

Choose **File › Save** (**Ctrl+S**). EffectCraft saves an .ecproj project file.

## 8. Render a video

1. Select the composition and choose **Composition › Add to Render Queue** (**Ctrl+M**).
2. In the **Render Queue**, twirl the item open. Click **Output Module** to pick a format. H.264 (.mp4) is the default.
3. Click the file name next to **Output To** to choose where to save it.
4. Choose **Render**.

## Next steps

- [Workflows](/apps/effectcraft/workflows/): footage, image sequences, effects, rendering formats and Lottie.
- [Troubleshooting](/apps/effectcraft/troubleshooting/): if EffectCraft doesn't use your graphics card, or footage goes missing.

**Help › In-App Tutorials...** has guided tutorials inside the app.
