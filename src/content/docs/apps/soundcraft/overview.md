---
title: SoundCraft
description: An open-source digital audio workstation for recording, editing, mixing and bouncing audio.
sidebar:
  order: 0
---

SoundCraft is a digital audio workstation (DAW) for recording, editing and mixing audio. It follows the workflow audio engineers already know: an **Edit** window for arranging and editing, a **Mix** window for balancing, edit modes, tools, playlists and memory locations. It runs on Windows, macOS, Linux, FreeBSD and in a web browser. It is free and open source (MIT or Apache-2.0), and made by the ArtCraft team.

:::caution[Pre-alpha]
SoundCraft is in pre-alpha. Editing, mixing, bouncing, and saving and reopening sessions work end to end, but some things a studio relies on are still missing: recording MIDI from a keyboard or controller, and swapping sessions with other DAWs (AAF and OMF). Many menu items are shown but greyed out until they are built. Keep copies of important work, and tell us what breaks on [GitHub](https://github.com/storytold/soundcraft/issues) or [Discord](https://discord.gg/artcraft).
:::

![The Edit window playing the built-in demo song, Midnight Groove: Kick, Snare, Hats, Bass and Pad audio tracks, Keys and Lead instrument tracks with MIDI notes, a Verb aux and a master fader, with Intro, Verse and Chorus markers above them](/assets/uploads/soundcraft/edit.webp)

## What it does

- **Editing**: Shuffle, Slip, Spot and Grid modes; Zoom, Trim, Selector, Grabber, Scrubber and Pencil tools; separate, duplicate, repeat, heal, consolidate and strip silence; fades and crossfades; playlists; undo for everything.
- **Mixing**: faders, pan, sends, busses, aux inputs, master faders, VCAs and folders, with automatic delay compensation for plugins.
- **Automation**: volume, pan, mute, sends and plugin parameters, drawn by hand or recorded from the faders.
- **Plugins**: EQs, dynamics, reverbs, delay, modulation and more, all built in. It also loads CLAP and VST3 plugins, and Audio Units on a Mac.
- **Instruments and MIDI**: a subtractive synth, a drum synth and a sampler; a MIDI editor with a velocity lane, a score view, quantise and transpose; Standard MIDI File import and export.
- **Recording**: punch in, pre- and post-roll, loop recording, and input monitoring.
- **Video**: a video track with thumbnails, and a **Video** window that follows the playhead.
- **Bounce**: the mix to WAV, AIFF or FLAC, with the peak and loudness (LUFS) reported when it's done.
- **Agents and scripts**: every command can also be run from the command line or by an [AI assistant](/apps/soundcraft/ai-agents/).

## Your files

SoundCraft saves a session as a `.scraft` file in a folder of its own, with its audio in an `Audio Files` folder beside it.

It imports WAV (including BWF and RF64), AIFF, FLAC, MP3, Ogg Vorbis, AAC, ALAC and CAF audio, and MIDI files. It bounces to WAV, AIFF and FLAC. It exports MIDI files and MusicXML for notation programs. Video tracks play MP4 and QuickTime (MOV) movies in H.264, ProRes or Motion JPEG.

Everything runs on your computer. Your sessions stay there.

## What you need

- Windows (64-bit, ARM or 32-bit), macOS 11 or later (Apple silicon or Intel), Linux or FreeBSD.
- Or a modern web browser, for the web version.

## Guides

- [Getting started](/apps/soundcraft/getting-started/): open the demo song, make a session and bounce it.
- [Install and update](/apps/soundcraft/install-update/): download SoundCraft for your system.
- [Workflows](/apps/soundcraft/workflows/): editing, recording, mixing, plugins, automation and MIDI.
- [AI agents](/apps/soundcraft/ai-agents/): let an AI assistant build and mix sessions.
- [Troubleshooting](/apps/soundcraft/troubleshooting/): fix common problems.

[SoundCraft on GitHub](https://github.com/storytold/soundcraft) · [Product page](https://getartcraft.com/apps/soundcraft)
