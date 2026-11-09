---
title: Getting started
description: Install SoundCraft, play the demo song, make your first session and bounce it to a file.
sidebar:
  order: 1
---

## 1. Install SoundCraft

The quickest way is [ArtCraft Launcher](https://github.com/storytold/craft-launcher/releases/latest): install it, then press **Install** on SoundCraft's card. To download SoundCraft on its own, see [Install and update](/apps/soundcraft/install-update/).

## 2. Play the demo song

SoundCraft opens on an empty session called **Untitled**. To hear what it can do, choose **File › New**, select **Start from the demo session**, and press **Create**. The demo song has drums, bass, a pad, keys and a lead, a reverb aux and a master fader. Every sound in it is synthesized by SoundCraft itself.

Press **Space** to play and **Space** again to stop.

:::note
On a Mac, the shortcuts in this guide use **⌘**. On Windows and Linux, use **Ctrl** in its place.
:::

## 3. Check your audio device

SoundCraft plays through your system's default output. To pick another one, such as an audio interface, choose **Setup › Playback Engine**. Choose the **Output device**, the **Input device**, the **Sample rate** and the **Buffer size**, then press **Apply**.

## 4. Start your own session

1. Choose **File › New** (**⌘N**). Give the session a **Name**, choose a **Sample Rate**, and press **Create**.
2. Choose **Track › New** (**⇧⌘N**). Each row makes one or more tracks: set how many, mono or stereo, the kind of track (for example **Audio Track** or **Instrument Track**) and a name. Use **+** to add another row. Press **Create**.
3. To bring in audio, choose **File › Import › Audio** (**⇧⌘I**) and pick a file, or drag audio or MIDI files from your file manager onto the window.

Press **⌘=** to switch between the **Edit** and **Mix** windows.

## 5. Save

Press **⌘S**. The first time, SoundCraft asks where to save, and suggests a folder named after the session. The session is saved as a `.scraft` file, and any audio that exists only in SoundCraft (such as recordings) goes into an `Audio Files` folder beside it.

SoundCraft also keeps a copy of unsaved work in the background. If it closes unexpectedly, it offers to recover that work the next time it starts.

## 6. Bounce your mix

Choose **File › Bounce Mix** (**⌥⌘B**). Pick a file name, the **Format** (WAV, AIFF or FLAC) and the **Bit Depth** (16, 24 or 32-bit float). You can also select **Normalize to -0.1 dBFS**, or **Dither (TPDF)** for 16- and 24-bit files. Press **Bounce**.

SoundCraft bounces the edit selection, or the whole session when nothing is selected. When it's done, it shows the file's peak level and loudness in LUFS.

## Next steps

- [Workflows](/apps/soundcraft/workflows/): editing, recording, mixing, plugins, automation and MIDI.
- [Troubleshooting](/apps/soundcraft/troubleshooting/): if the window doesn't open or there's no sound.
