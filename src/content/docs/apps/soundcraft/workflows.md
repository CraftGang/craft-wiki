---
title: Workflows
description: Editing, recording, mixing, plugins, automation, MIDI, video and bouncing in SoundCraft.
sidebar:
  order: 3
---

SoundCraft has two main windows. The **Edit** window shows your tracks on a timeline, for arranging and editing. The **Mix** window shows them as channel strips, for balancing. Press **⌘=** to switch between them, or tick **Mix in Separate Window** in the **Window** menu to see both at once, for example one on each monitor.

On a Mac, the shortcuts on this page use **⌘**. On Windows and Linux, use **Ctrl** in its place. **Setup › Keyboard Shortcuts** lists every shortcut.

:::note
SoundCraft is in pre-alpha. Menu items that aren't built yet are shown greyed out.
:::

## Edit audio

Choose an edit mode with **F1** to **F4**, or with the buttons at the top left:

| Key | Mode | What it does |
| --- | --- | --- |
| **F1** | Shuffle | Clips snap against each other; removing one closes the gap |
| **F2** | Slip | Clips move freely |
| **F3** | Spot | Clicking a clip asks where to put it |
| **F4** | Grid | Clips and selections snap to the grid |

Choose a tool with **F5** to **F10**: **Zoom**, **Trim**, **Selector**, **Grabber**, **Scrubber** and **Pencil**.

The **Edit** menu has the everyday editing commands: **Separate** (**⌘E**) splits clips at the selection, on the grid or at transients; **Duplicate** (**⌘D**), **Heal Separation**, **Consolidate** and **Strip Silence**. **Edit › Fades** creates fades and crossfades. **⌘Z** undoes, and **⇧⌘Z** redoes.

Press **Enter** to drop a marker at the playhead. **Window › Memory Locations** (**⌘5**) lists them.

![Volume automation drawn as a line with a breakpoint on the Pad track. The Memory Locations window lists the Intro, Verse, Chorus and Outro markers, and the Big Counter window shows the playhead at bar 13](/assets/uploads/soundcraft/automation.webp)

## Record

1. Make sure your input is chosen in **Setup › Playback Engine** (see [Getting started](/apps/soundcraft/getting-started/#3-check-your-audio-device)).
2. Turn on the record button in the header of each track you want to record on (**⇧R** for the selected tracks). The input button next to it lets you hear the input through the track.
3. Press **F12**, or **⌘Space**, or the record button in the transport. **Space** stops.

The **Options** menu turns on **Loop Record** (**⌥L**), **Pre/Post-Roll** (**⌘K**) and **QuickPunch**. Each take of a loop recording goes onto its own playlist.

:::note
On a Mac, the system may keep **⌘Space** for Spotlight, so use **F12** instead. On a Mac, allow SoundCraft to use the microphone when macOS asks.
:::

## Mix

In the **Mix** window, each track has a fader, a pan control, inserts for plugins, sends, input and output, and mute, solo, record and input buttons.

![The Mix window with nine channel strips, each with inserts, sends, input and output, pan knobs and a fader, and the EQ 7-Band plugin window open for the Kick track](/assets/uploads/soundcraft/mix.webp)

- **Plugins**: click an empty insert slot to choose a plugin. Click a used slot to open the plugin's window, **⌘**-click it to bypass it, or right-click it to change it.
- **Sends** feed an aux input, for example a shared reverb.
- **Groups**, VCA masters and routing folders control several tracks at once. Create them from the **Track** menu.

SoundCraft compensates for plugin delay automatically. You can turn this off with **Delay compensation** in **Setup › Playback Engine**.

## Use plugins

The plugin menu has every built-in plugin under **Built-in**: EQs, a channel strip, a compressor and limiter, expander and gate, de-esser, maximiser, room and plate reverbs, delay, chorus, flanger, phaser, auto pan, saturation and more. Each plugin's window lets you save your own presets.

It also lists your own plugins under **CLAP** and **VST3**, and **Audio Units** on a Mac, grouped by maker. SoundCraft looks for them in the standard plugin folders the first time you open each list.

The **AudioSuite** menu runs a built-in plugin on the selected clips, offline.

:::caution
Third-party plugins are still rough. Not every plugin can show its own window yet (Audio Units can't, and VST3 windows don't open on Linux). On a Mac, the signed app may refuse to load third-party plugins. A plugin that crashes takes SoundCraft with it, so save often.
:::

## Automate

Each track header has a view menu (it starts on **waveform** for audio, **notes** for MIDI) and an automation mode menu (it starts on **read**).

1. In the view menu, choose what to automate: **volume**, **pan**, **mute**, or a parameter of a built-in plugin on the track.
2. Pick the **Pencil** tool (**F10**) and click on the line to add breakpoints. **Alt**-click (**⌥**-click on a Mac) a breakpoint to delete it.
3. To record moves from the faders instead, set the automation mode to **write**, **touch**, **latch**, **touch/latch** or **trim**, then play and move the control. Set it back to **read** to play the automation, or **off** to ignore it.

**Window › Automation** (**⌘4**) has more controls.

## Work with MIDI

1. Create an **Instrument Track** with **Track › New**. Choose its instrument with **Track › Instrument**: a subtractive synth, a drum synth, a sampler, or one of your own instrument plugins.
2. Choose **Clip › New MIDI Clip**, or click on the track with the **Pencil** tool, to make an empty clip.
3. Open **Window › MIDI Editor**, or the **MIDI Editor** tab at the bottom of the Edit window. Click to add a note, drag to move it, drag its edge to resize it, and press **Delete** to remove it. The lane below sets each note's velocity.

![The MIDI editor at the bottom of the Edit window, showing the Lead melody as a piano roll with a velocity lane below it](/assets/uploads/soundcraft/midi.webp)

**Event › MIDI Operations** has **Quantize** and **Transpose** (**⌥T**). **Window › Score Editor** shows a MIDI clip as notation.

To bring MIDI in or out, use **File › Import › MIDI** and **File › Export › MIDI**. **File › Export › Sibelius** saves the MIDI tracks as MusicXML, which most notation programs open.

:::note
SoundCraft can't record from a MIDI keyboard or controller yet. Enter notes in the MIDI editor, or import a MIDI file.
:::

## Add video

Choose **File › Import › Video** to add a movie on a video track, with thumbnails along the timeline. **Window › Video** (**⌘9**) shows the picture, following the playhead. SoundCraft shows H.264, ProRes and Motion JPEG movies in MP4 and MOV files.

## Bounce

**File › Bounce Mix** (**⌥⌘B**) renders the mix to WAV, AIFF or FLAC. See [Getting started](/apps/soundcraft/getting-started/#6-bounce-your-mix) for the options.

## Check a session's audio

**SoundCraft › Session Audio Health** lists audio that isn't loaded, sample-rate mismatches and clips that run past the end of their audio, across every playlist. It suggests how to fix each problem. It checks the audio loaded in the session, not files on disk, levels, plugins or routing.

## Change the look

Choose **Setup › Preferences**, then **UI Theme** on the **Display** page: **System**, **Light** or **Dark**. Most other preferences aren't available yet. The interface is in English only for now.

## Keyboard shortcuts

| Shortcut | What it does |
| --- | --- |
| **Space** | Play or stop |
| **F12** or **⌘Space** | Record |
| **⌘=** | Switch between Edit and Mix |
| **F1** to **F4** | Shuffle, Slip, Spot, Grid |
| **F5** to **F10** | Zoom, Trim, Selector, Grabber, Scrubber, Pencil |
| **⌘E** | Separate at the selection |
| **⌘D** | Duplicate |
| **⌘Z** / **⇧⌘Z** | Undo / redo |
| **Enter** | Add a marker |
| **⇧⌘N** | New tracks |
| **⇧⌘I** | Import audio |
| **⌘S** | Save |
| **⌥⌘B** | Bounce mix |
| **⇧⌘L** | Loop playback |
| **Home** / **End** | Go to the start / end |
