---
title: Troubleshooting
description: Fix common issues with AniCraft, locate log files, and get help.
sidebar:
  order: 5
---

## AniCraft doesn't start

If AniCraft fails to launch, it usually means your graphics drivers need an update or your GPU lacks modern API support (Vulkan, Metal, or DirectX 12). A dialog box will display the error reason, and details are written to `errors.log`:

| Operating System | Log Directory                               |
|------------------|---------------------------------------------|
| Windows          | `%APPDATA%\AniCraft\data\`                  |
| macOS            | `~/Library/Application Support/AniCraft/`   |
| Linux / FreeBSD  | `~/.local/share/anicraft/`                  |

Try updating your graphics drivers to the latest version. If running on older hardware or inside a virtual machine without GPU acceleration, you can also run the [browser version](/apps/anicraft/install-update/#in-a-browser).

## It uses the integrated GPU instead of the dedicated card

On laptops or dual-GPU systems, AniCraft automatically prefers high-performance dedicated graphics. To manually specify your GPU, pass a filter string or power preference from the command line:

```bash
# Prefer high performance
anicraft --power-pref high

# Force a specific GPU by name
anicraft --gpu nvidia
```

## Video export fails (MP4 / WebM)

AniCraft relies on **FFmpeg** for video encoding. While animated GIF, PNG sequences, SVG frame bundles, and Lottie JSON export natively without external dependencies, MP4 and WebM video exports require `ffmpeg` to be accessible on your system `PATH`.

- **Windows**: Install via `winget install Gyan.FFmpeg` or download from [ffmpeg.org](https://ffmpeg.org) and add its `bin` folder to your PATH.
- **macOS**: Install via `brew install ffmpeg`.
- **Linux**: Install via your package manager, e.g. `sudo apt install ffmpeg` or `sudo dnf install ffmpeg`.

## Opening `.fla` or `.xfl` files

AniCraft supports reading Adobe Flash/Animate `.fla` archives and uncompressed `.xfl` directories, importing vector paths, shapes, symbols, layers, and classic tweens.

- **ActionScript**: AniCraft is an animation studio and does not execute ActionScript 2 or 3 scripts. Scripts attached to frames or buttons are skipped.
- **Unsupported filters**: Complex proprietary effects (such as certain bevels or glows) are either rendered with compatible approximations or flattened.
- **Legacy binary `.fla`**: Very old Flash files (prior to Flash CS5 / XFL format) should be saved as CS5+ or `.xfl` in Animate before importing into AniCraft.

## Playback lags on complex scenes

If preview playback drops frames on scenes with thousands of vector paths:

1. Enable **Frame Dropping** in the playback controls so audio and timing remain synchronized at the target frame rate.
2. In **Edit › Settings...**, adjust the stage preview quality from High to Medium or Low during editing; final exports always render at full quality.
3. Group static background elements into Symbols so their geometry can be cached efficiently.

## Recovering lost work

AniCraft automatically saves recovery snapshots of your open documents at regular intervals:

- Autosave snapshots are stored in the `autosave` subfolder within your AniCraft user data directory.
- Open the latest backup copy with **File › Open...**.
- You can adjust the autosave interval or disable it under **Edit › Settings... › General › Autosave**.

## View the application log

To inspect runtime warnings, export logs, or error stack traces:

- Choose **Help › Show log...** from the menu bar to open the active session log.
- Include the log output when opening an issue.

## Still stuck?

- Join the [ArtCraft Discord](https://discord.gg/artcraft) to get help from the community and core team.
- [Report an issue on GitHub](https://github.com/storytold/AniCraft/issues). Include your operating system, GPU model, AniCraft version (**Help › About AniCraft...**), and any relevant log entries.
