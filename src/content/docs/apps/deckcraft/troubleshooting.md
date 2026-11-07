---
title: Troubleshooting
description: Fix common problems with DeckCraft, get back unsaved work, and find its log when something goes wrong.
sidebar:
  order: 6
---

## The window doesn't open on Windows

If DeckCraft flashes in Task Manager and quits before its window appears, your graphics driver may be the cause. DeckCraft uses DirectX 12 by default. Start it with Vulkan instead. In PowerShell, from the folder that contains `deckcraft.exe`:

```powershell
$env:WGPU_BACKEND = "vulkan"
& .\deckcraft.exe
Remove-Item Env:WGPU_BACKEND   # go back to the default for later launches
```

Avoid `"gl"` here: on some AMD drivers, OpenGL is what crashes.

## It quits with "Parent device is lost"

Update to the latest DeckCraft: current versions no longer need the `dxcompiler.dll` and `dxil.dll` files that caused this. If it still happens, start it with `WGPU_BACKEND` set to `"vulkan"`, as above.

## It won't start on Linux

The `.deb` and `.rpm` install what DeckCraft needs. With the tarball or AppImage, your system must have the window, graphics and sound libraries it loads at start-up: X11 and Wayland client libraries, `libxkbcommon`, a Vulkan driver, Mesa's OpenGL drivers, and ALSA (`libasound`). Install them with your package manager, then try again. Start DeckCraft from a terminal to see the error.

## It's slow on Linux

Without a working Vulkan driver, DeckCraft draws on the processor through Mesa's OpenGL drivers. It works, but slowly. Install your graphics vendor's Vulkan driver.

## Open and Save dialogs don't appear on Linux

DeckCraft's file dialogs go through `xdg-desktop-portal`. Install it with `xdg-desktop-portal-gtk` or `xdg-desktop-portal-kde`. On wlroots desktops such as Sway, whose portal has no file chooser, install `zenity` too.

## There's no sound in the slide show

Check your system's sound output first. On Linux, make sure ALSA (`libasound`) is installed. Audio output problems are written to [the log](#find-the-log).

## DeckCraft closed and I lost my work

Open DeckCraft again. While it runs, it keeps a copy of every presentation with unsaved changes (AutoRecover). After a crash, the next start opens those copies again and says so in the status bar. Save them to keep them. You can also choose **File › Open › Recover Unsaved Presentations**.

## A presentation doesn't look as it does in another app

DeckCraft is in alpha. Some layouts, effects or fonts in .pptx files from other apps may come out differently. Keep the original file, and save your work as .deckcraft to keep everything DeckCraft supports. Please [report the presentation](https://github.com/storytold/deckcraft/issues) if you can share it: real files are how we find these problems.

If a font is missing, **Home › Replace Fonts…** swaps it for one you have.

## Find the log

DeckCraft writes a log you can attach to a bug report. It records crashes, parts of a file it couldn't read, failed recovery saves and sound problems.

| System | Log folder |
| --- | --- |
| Windows | `%APPDATA%\DeckCraft\logs\` |
| macOS | `~/Library/Application Support/DeckCraft/logs/` |
| Linux, FreeBSD | `~/.config/deckcraft/logs/` |

The current log is `deckcraft.log`. The log from the run before is `deckcraft.1.log`, so if DeckCraft crashed, attach that one too.

The folder above `logs` is DeckCraft's settings folder. The web version logs to the browser's console instead.

## Still stuck?

- Ask in the [ArtCraft Discord](https://discord.gg/artcraft).
- [Report a bug on GitHub](https://github.com/storytold/deckcraft/issues), with the log attached.
