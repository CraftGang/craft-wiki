---
title: Getting started
description: Install AniCraft, draw vector artwork on the stage, create keyframes and tweens, and export your animation.
sidebar:
  order: 1
---

## 1. Install AniCraft

Install AniCraft through [ArtCraft Launcher](https://github.com/storytold/craft-launcher/releases/latest) by clicking **Install** on AniCraft's card, or download standalone installers from [Install and update](/apps/anicraft/install-update/).

## 2. Start a new project

Open AniCraft and choose **File › New** (**Ctrl+N** or **⌘N** on macOS).

1. Set your project dimensions (such as `1920×1080` or `1280×720`).
2. Set the frame rate (default is 24 fps).
3. Choose a stage background color.
4. Click **Create**.

## 3. Draw on the stage

Select the **Pencil** or **Pen** tool from the toolbar:

- **Pencil**: Freehand drawing with automated curve smoothing.
- **Pen**: Click to create straight segments; click and drag to pull Bézier tangent handles.
- **Subselection tool**: Select and edit individual anchor points and curve handles.
- **Paint Bucket**: Fill enclosed vector contours with solid colors or gradients.

![Editing Bézier anchors and paths with the Subselection tool](/assets/uploads/anicraft/subselection.webp)

## 4. Work with layers and frames

The timeline sits below the stage:

- Press **F5** to extend a layer's exposure by inserting regular frames.
- Press **F6** to insert a **Keyframe**, copying the previous drawing to a new editable point.
- Press **F7** to insert a **Blank Keyframe**.

![Selecting frame ranges across layers in the timeline](/assets/uploads/anicraft/frames.webp)

## 5. Add a classic tween

1. On frame 1, draw a shape on the stage.
2. Select frame 24 on the timeline and press **F6** to insert a keyframe.
3. With the **Selection** tool (**V**) or **Free Transform** tool (**Q**), move or scale the artwork on frame 24 to its new position or pose.
4. Right-click any frame between the two keyframes and choose **Create Classic Tween**.
5. Select any frame inside the tween span.
6. In the **Properties** panel, pick an easing preset (such as **Ease In/Out**) or adjust the custom Bézier easing curve.
7. Press **Enter** or the **Spacebar** to play your animation on the stage.

## 6. Export

Choose **File › Export › Export Animated GIF...** or **File › Export › Export Video...** to output your work. You can also export PNG image sequences or Lottie JSON files.

## What's next

- [Workflows](/apps/anicraft/workflows/): master tools, symbols, and nested timelines.
- [AI agents](/apps/anicraft/ai-agents/): automate drawing and exporting with AI assistants.
- [Troubleshooting](/apps/anicraft/troubleshooting/): solve startup, performance, and playback issues.
