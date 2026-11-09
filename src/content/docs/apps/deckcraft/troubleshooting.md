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

## Print opens a PDF, or nothing happens

That's how DeckCraft prints: it opens a PDF in your PDF viewer, and you print from there. Printing straight to a printer is requested in [#607](https://github.com/storytold/deckcraft/issues/607).

If no viewer opens, install a PDF viewer and try again. On Linux, a viewer sometimes doesn't open even when one is installed ([#1734](https://github.com/storytold/deckcraft/issues/1734)). Use **File › Export › Create PDF Document** and open the file yourself.

If **Print** is dimmed, check the slide range, or select **Print Hidden Slides** if every slide in it is hidden.

## Spelling finds almost nothing

DeckCraft doesn't come with a spelling dictionary. Without one, it finds only common misspellings, so you see few red underlines and **F7** reports little. It reads standard Hunspell dictionaries (an `.aff` and a `.dic` file, such as the ones LibreOffice uses). Put both files in one of these folders, then restart DeckCraft:

| System | Folder |
| --- | --- |
| Windows | `%APPDATA%\DeckCraft\Dictionaries` |
| macOS | `~/Library/Application Support/DeckCraft/Dictionaries`, or `~/Library/Spelling` |
| Linux | `~/.local/share/deckcraft/dictionaries`, or `~/.local/share/hunspell` |

On Linux, DeckCraft also finds dictionaries in `/usr/share/hunspell` and `/usr/share/myspell`. To use a different folder, set `DECKCRAFT_DICTIONARIES` to it. **Review › Language** marks every language that has a dictionary.

## Copy and paste doesn't work

Copying between DeckCraft windows, or pasting a picture from another app, doesn't always work. See [Known problems](#known-problems-not-fixed-yet).

## My file has no extension, or other apps can't open it

**Ctrl+S** on a new presentation saves DeckCraft's own .deckcraft format, which other apps can't open. To share a copy, choose **File › Export › Change File Type** and pick **PowerPoint Presentation (\*.pptx)**.

If a file has no extension, add .pptx to its name. If a presentation disappeared, see [DeckCraft closed and I lost my work](#deckcraft-closed-and-i-lost-my-work).

## Fonts look wrong or show as boxes

If a font is missing, **Home › Replace Fonts…** swaps it for one you have. After you install a font while DeckCraft is open, open the font list on the **Home** tab and choose **Rescan Installed Fonts**, so DeckCraft sees it.

## Known problems, not fixed yet

- Pasting a picture on Windows 11 doesn't work for some people ([#1732](https://github.com/storytold/deckcraft/issues/1732)), and copying between windows can fail ([#1924](https://github.com/storytold/deckcraft/issues/1924)).
- **Save As** to .pptx can write a file without an extension ([#1929](https://github.com/storytold/deckcraft/issues/1929)), and the Save As dialog may not let you change the file name ([#1826](https://github.com/storytold/deckcraft/issues/1826)).
- A presentation can disappear, and the file that replaces it can load with only some of its slides ([#1910](https://github.com/storytold/deckcraft/issues/1910)).
- Audio doesn't play in some files ([#1933](https://github.com/storytold/deckcraft/issues/1933)), or when you click an object ([#1676](https://github.com/storytold/deckcraft/issues/1676)). Video may not play smoothly in the slide show ([#1664](https://github.com/storytold/deckcraft/issues/1664)).
- Full-screen playback can drop to about 2 frames per second ([#1908](https://github.com/storytold/deckcraft/issues/1908)), and transitions lag on slides with several GIFs ([#1657](https://github.com/storytold/deckcraft/issues/1657)).
- On KDE Plasma, the taskbar can stay visible over the slide show while Presenter View is on ([#1715](https://github.com/storytold/deckcraft/issues/1715)), and the interface text can corrupt after you leave a .ppsx show on Wayland ([#1822](https://github.com/storytold/deckcraft/issues/1822)).
- Wingdings symbols can be drawn as boxes ([#1916](https://github.com/storytold/deckcraft/issues/1916)), and Japanese fonts aren't kept when you import a .pptx ([#1727](https://github.com/storytold/deckcraft/issues/1727)).

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
