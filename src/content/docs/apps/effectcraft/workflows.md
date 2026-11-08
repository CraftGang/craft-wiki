---
title: Workflows
description: Footage and image sequences, keyframes, effects, rendering, Lottie and plug-ins in EffectCraft.
sidebar:
  order: 3
---

On a Mac, use **⌘** in place of **Ctrl**, and **Option** in place of **Alt**.

## Panels and workspaces

EffectCraft's panels follow After Effects: **Project**, **Composition**, **Timeline**, **Effect Controls**, **Effects & Presets**, **Properties**, **Preview**, **Character**, **Paragraph**, **Align**, **Info**, **Audio** and the **Render Queue**, among others. Open any of them from the **Window** menu.

The workspace buttons at the top right (**Default**, **Animation**, **Standard**, **Small Screen** and more) rearrange the panels for different jobs.

## Import footage

Choose **File › Import › File...** (**Ctrl+I**) to pick a file, or **File › Import › Multiple Files...** for several. You can also drop files or folders on the window. Files dropped on the Composition panel become layers there.

Photoshop, PDF and Illustrator files ask whether to import them as footage or as a composition. **Window › Media Browser** browses your folders and imports what you pick.

### Image sequences

Numbered stills, such as `shot_0001.png`, `shot_0002.png` and so on, can import as one clip:

1. Choose **File › Import › File...** and pick any one file of the run.
2. In the **Import Image Sequence** window, select the sequence option. It's named after the file type, for example **PNG Sequence**, and it's off by default.
3. Set **Frame rate (fps)**, then confirm.

If a frame is missing, EffectCraft shows color bars for it. Add the missing file and choose **File › Reload Footage** (**Ctrl+Alt+L**).

### Change how footage is read

Select the footage in the Project panel and choose **File › Interpret Footage › Main...** (**Ctrl+Alt+G**) to change its alpha, frame rate or start timecode. **File › Replace Footage › File...** (**Ctrl+H**) points the item at another file.

## Animate

- Click the stopwatch beside a property to start animating it. Change the value at another time and a new keyframe appears.
- **F9** applies **Easy Ease** to the selected keyframes. **Shift+F9** eases in and **Ctrl+Shift+F9** eases out. They are under **Animation › Keyframe Assistant**.
- **Animation › Toggle Hold Keyframe** makes a keyframe jump instead of moving smoothly.
- **Animation › Keyframe Interpolation...** and **Keyframe Velocity...** set the curve exactly.
- The **Graph Editor** shows value and speed graphs with handles you can drag. Turn it on with the **Graph Editor** button at the top of the Timeline.
- **Alt**+click a stopwatch to add an expression. Expressions are JavaScript, with familiar functions such as `wiggle` and `loopOut`.

### Show one property in the Timeline

Select layers and press a key to show only that property:

| Key | Shows |
| --- | --- |
| **P** | Position |
| **S** | Scale |
| **R** | Rotation |
| **T** | Opacity |
| **A** | Anchor Point |
| **E** | Effects |
| **M** | Masks |
| **F** | Mask Feather |
| **L** | Audio Levels (press twice for the waveform) |

## Add effects

Select a layer, then choose an effect from the **Effect** menu, where effects are grouped by category. Or open **Window › Effects & Presets** (**Ctrl+5**), search, and double-click the effect or drag it onto a layer.

Change its settings in **Effect Controls** (**F3**).

![A CC Particle World burst of yellow streaks in the Composition panel, with the Effect Controls panel on the left listing the particle system's settings, such as Birth Rate, Longevity, Velocity and Gravity](/assets/uploads/effectcraft/effects.webp)

- **Effect › Last Effect** applies the effect you used last.
- **Effect › Remove All** removes every effect from the selected layers.
- In **Effects & Presets**, click the star beside an effect to add it to your favorites. Recently used effects are listed too.

For drop shadows, glows and bevels, use **Layer › Layer Styles**. It has **Drop Shadow**, **Inner Shadow**, **Outer Glow**, **Inner Glow**, **Bevel and Emboss** and **Satin**, among others.

## Render

1. Select a composition and choose **Composition › Add to Render Queue** (**Ctrl+M**). You can also drag compositions onto the **Render Queue** panel (**Window › Render Queue**, **Ctrl+Alt+0**).
2. Twirl the item open. Click **Output Module:** to choose the format, and the file name next to **Output To:** to choose where it goes.
3. Click **Render Settings:** to render the work area only or the whole composition, at best or draft quality, or at full, half, third or quarter resolution.
4. Make sure the item's **Render** box is checked, then choose **Render**. **Stop** cancels.

Select **Notify** to get a notification when the queue finishes.

![The Render Queue panel with two compositions queued, EffectCraft Intro and 3D Showcase, each with its Render box checked and the Render button at the top right](/assets/uploads/effectcraft/render-queue.webp)

### Formats

| Output Module format | File |
| --- | --- |
| H.264 | `.mp4` |
| HEVC (H.265) | `.mp4` |
| AV1 | `.mp4` |
| QuickTime (ProRes) | `.mov` |
| QuickTime (Uncompressed) | `.mov` |
| WebM (VP9 + Opus) | `.webm` |
| PNG, JPEG, TIFF, Targa or OpenEXR Sequence | One image per frame |
| Animated GIF | `.gif` |
| WAV, AIFF | Audio only |

To keep transparency, choose **Channels: RGB + Alpha** in the **Output Module:** menu. It's there for formats that can store it, such as ProRes and PNG Sequence. H.264, HEVC and AV1 can't.

EffectCraft encodes everything itself. You don't need FFmpeg or any other software.

## Lottie

Choose **File › Export › Lottie JSON...** to save a composition as a Lottie animation (`.json` or `.lottie`) for websites and apps. EffectCraft lists anything Lottie can't express. **File › Import › Lottie...** opens a Lottie file as a new composition.

## Plug-ins

EffectCraft can't run After Effects plug-ins, but it has its own:

- **Effect › Plug-in Library...** lets you search, install and update community effects.
- **Effect › Install Effect Plug-in...** installs a plug-in file you have downloaded.

## Settings and shortcuts

Choose **Edit › Preferences** on Windows and Linux, or **EffectCraft › Settings...** on a Mac. The pages include **General**, **Startup & Repair**, **Import**, **Previews**, **Appearance** and **Audio**.

Roto Brush and face tracking can use optional trained models, which you download from the settings window.

**Help › Keyboard Shortcuts...** shows every shortcut.
