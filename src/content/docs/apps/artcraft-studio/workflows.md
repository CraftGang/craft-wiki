---
title: Workflows
description: Images, video, audio, the Image Editor, the 3D Stage, My Library, credits and connected accounts in ArtCraft Studio.
sidebar:
  order: 3
---

Every tool starts from **Home**. Its cards are grouped under **Create** (such as **Create Image**, **Create Video**, **Create Audio**, **Image to 3D Object**, **Image to 3D World** and **3D Stage**) and **Edit** (such as **Edit Image**, **Remove Background**, **Video Frame Extractor** and **Image Editor**). Cards marked **BETA** or **NEW** are still being worked on.

## Make images

1. Choose **Create Image**.
2. Describe what you want in the prompt box.
3. Choose a model, and set **Aspect Ratio**, **Resolution**, **Quality** and the number of images. Not every model has every option.
4. Click the round arrow button. Its tooltip shows the cost in credits.

To press **Enter** to generate instead, turn on **Enter to generate** in **Settings › General**.

To change part of an existing image, use **Edit Image** on **Home**, or **Edit Image** when you view an image in **My Library**.

## Make video

1. Choose **Create Video**.
2. Choose an image to start from, and describe what should happen.
3. Choose a model. Depending on the model, you can set a **First frame** and **Last frame**, the **Duration** and whether the video has sound.
4. Click the round arrow button.

Video takes longer than images. The task queue in the top bar shows what's still generating.

## Make 3D from an image

Two cards on **Home** start from pictures:

- **Image to 3D Object** turns reference images into a textured 3D asset.
- **Image to 3D World** turns mood boards into a world you can explore.

Results go to **My Library**. Look for them under the **Mesh** and **Splat** tabs.

## Generate new camera angles

**Angles** (marked **NEW**) makes new views of a single photo.

1. Choose **Angles**, then **Upload media** or **Pick from Library**.
2. Set the view with the **Rotation**, **Tilt** and **Zoom** sliders, or drag the sphere next to them.
3. Choose a model and click **Generate**.

The results collect in the history at the right. Click **Download** to save the one you are looking at, or **Change Image** to start from another photo.

## Collect references on a moodboard

**Moodboard** (marked **BETA**) is a space for gathering ideas.

1. Choose **Moodboard**.
2. Drag images in, paste them, or use **Upload** or **From library**. **Add note** and **New section** add text and groups.
3. Select images and choose **Use as reference**. They are added to the prompt of **Create Image**, and ArtCraft Studio switches to it.

Only images can be used as references, not notes.

## Edit video on a timeline

**Video Editor** (marked **BETA**) assembles clips on a timeline. Drop media onto the timeline, move the playhead to preview, and use the panels on the right to change properties, animations and effects. Click **Export** when you're done.

The editor is still being built, so save often. Its keyboard shortcuts are under the project menu, in **Shortcuts**.

## Compose on the 2D canvas

The **Image Editor** is a canvas for building a picture before you generate from it.

| Tool | Key |
| --- | --- |
| **Select & Move** | **1** |
| **Add Shape** | **2** |
| **Brush** | **3** |
| **Mask** | **4** |
| **Eraser** | **5** |

**Upload Image** adds a picture to the canvas, and **Canvas Background** changes the background. Right-click an item to **Remove background**, change its order (**Bring to front**, **Send to back** and so on), **Duplicate** it or **Delete** it. **Reset Canvas** clears everything.

## Stage a scene in 3D

The **3D Stage** lets you set up characters, props and a camera, then generate an image from that view.

- Add things from **ArtCraft Presets** (**B**): characters, objects, sets, creatures, animations and skyboxes. You can also add from **My Library**, or use **Upload 3D Model**, **Upload Image** and **Upload Splat**.
- Move the camera with **W**, **A**, **S** and **D**, **E** and **Q** for up and down, and the arrow keys to look around.
- Select an object, then press **T** to move it, **R** to rotate it and **G** to scale it. **F** focuses on it.
- **Tab** switches between **Build** and **Record** mode. In **Record** mode, **C** captures a still and **R** records a video.
- **Save Scene** keeps your scene. **Load a Saved Scene** opens it again.

Other keys: **Space** switches to the camera's view, **X** switches between local and world space, **K** turns on pose mode for a character, **N** turns snapping on and off, **H** shows or hides the grid, and **Ctrl+D** duplicates the selected object.

The **Shortcuts** button lists every key. On a Mac, use **⌘** where these pages say **Ctrl**.

### Animate on the 3D Stage

In **Build** mode, the timeline lets you move things over time. Press **Shift+T**, or use **Expand timeline**, to open it.

1. Select an object.
2. Move the playhead to a time, then click **Add keyframe at playhead** (or press **I**).
3. Move or pose the object. Add more keyframes at other times.
4. Press **Space** to play and pause. **←** and **→** step one frame, and **Home** and **End** jump to the start and the end. **Set timeline duration (seconds)** changes the length.

To capture the animation as a video, switch to **Record** mode with **Tab**.

### Choose a set of keys

**Settings › Keybinds** has two sets:

- **Gamer** is the default. **W**, **A**, **S** and **D** move the camera, and **T**, **R** and **G** move, rotate and scale.
- **Blender-like** moves the camera with the numpad: **8** forward, **2** back, **4** left, **6** right, **9** up and **3** down. The digit row works as the numpad too. **G** grabs, **R** rotates and **S** scales, and **\\** switches between local and world space.

## My Library

**My Library** holds everything you generate and upload. Its tabs filter by type: **All Assets**, **Image**, **Video**, **Audio**, **Mesh**, **Splat** and **Uploaded**.

Click an item to view it. From there you can **Download** it, or take it further: **Recreate**, **Edit Image**, **Make Video**, **Remove BG**, **Make 3D**, **Make 3D World** or **Add to Scene**.

Downloads go to your system's **Downloads** folder. In **Settings › Downloads** you can:

- Choose another folder with **Choose Directory**, or go back with **Use Default**.
- Turn on **Auto Download** to save every generation as soon as it finishes.
- Turn on **Ask location before download** to pick the folder for each file.
- Choose how files are named under **Preferred download naming scheme**. **ArtCraft convention** names them like `{model}_{date}`. **Custom format** lets you build the name from `{model}`, `{date}`, `{YYYY}`, `{YY}`, `{MM}`, `{DD}`, `{HH}`, `{mm}`, `{SS}` and `{batch_index}`, then click **Save format**. The extension is added for you.

## Credits and plans

Generating with ArtCraft's models uses credits. Click your credit balance in the top bar to see it, open the **Cost calculator**, or **Buy credits**. **Settings › Plan & Credits** shows your plan and balance.

You don't have to buy anything to use ArtCraft Studio, but subscribing or buying credits supports its development.

## Connect Grok or Midjourney

You can generate with your own Grok or Midjourney account.

1. Open **Settings** (the gear in the top bar) and choose **Accounts**.
2. Next to **Grok account** or **Midjourney account**, click **Connect**.
3. Log in to that service in the window that opens.

To remove the connection, click **Disconnect**. ArtCraft Studio doesn't ask for API keys: you sign in to the service itself.

To switch to another ArtCraft account, click **Log Out** in the same **Accounts** section, then log in again.

## Settings

Open **Settings** with the gear in the top bar. Its sections are:

- **General**: **Enter to generate**, **Group models by family** (turn it off to see one flat list of models), and **Keep shortcut cheatsheet open**.
- **Downloads**: where and how files are saved. See [My Library](#my-library).
- **Accounts**: your ArtCraft login and connected services.
- **Plan & Credits**: your plan and balance.
- **Appearance**: the themes **Default**, **Aurora** and **Sunset**.
- **Keybinds**: the key sets described above.
- **Alerts**: sounds for **Delete File Sound**, **Enqueue Success Sound**, **Enqueue Failure Sound**, **Generation Success Sound** and **Generation Failure Sound**.
- **About**: your version, operating system, and the data and downloads folders.
