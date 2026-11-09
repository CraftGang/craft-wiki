---
title: Troubleshooting
description: Fix common problems with DesignCraft, and find its log when something goes wrong.
sidebar:
  order: 6
---

## It closes right after it starts on Windows

If DesignCraft shows a spinner and closes with no message, your graphics driver may be the cause. Some drivers crash while the window is being set up.

1. Install the [latest release](https://github.com/storytold/designcraft/releases/latest).
2. Start DesignCraft again. If a start never showed a window, DesignCraft tries the next graphics system on the following start: DirectX 12, then OpenGL, then Vulkan. The status bar says when it has switched.
3. If it still closes, pick the graphics system yourself. In PowerShell, from the folder that contains `designcraft.exe`:

```powershell
$env:WGPU_BACKEND = "dx12"
& .\designcraft.exe
Remove-Item Env:WGPU_BACKEND   # go back to the default for later launches
```

If that doesn't help, try `"gl"` or `"vulkan"` in place of `"dx12"`. Setting `WGPU_BACKEND` turns the automatic switching off.

DesignCraft remembers which graphics systems failed in a file called `gpu.json` in its [settings folder](#find-the-log). Delete it to start the search again. It also starts again with each new version.

## The window stays black, or it uses the wrong graphics card

DesignCraft draws your pages on the processor. The graphics card only shows the interface, so any card that can show the window will do. It picks the card that drives your main display.

To choose another, set `WGPU_ADAPTER_NAME` to part of the card's name, such as `nvidia`, `amd` or `intel`, in the same way as `WGPU_BACKEND` above. [The log](#find-the-log) lists the cards it found and the one it chose.

## A font I installed doesn't show up

DesignCraft reads the fonts installed on your computer when it starts. If you install a font while it's open, choose **Type › Reload Fonts**. DesignCraft scans the font folders again and redraws the open documents with what's installed now.

If the font is still missing, check that it's in a folder DesignCraft reads:

| System | Folders |
| --- | --- |
| Windows | The `Fonts` folder in the Windows folder, and `%LOCALAPPDATA%\Microsoft\Windows\Fonts` |
| macOS | `/Library/Fonts` and `~/Library/Fonts` |
| Linux | `/usr/share/fonts`, `/usr/local/share/fonts`, `~/.fonts`, and `fonts` in `$XDG_DATA_HOME` (`~/.local/share/fonts` by default) |

A `Document Fonts` folder next to the document works on every system. Users have reported fonts missing on Linux ([#2069](https://github.com/storytold/designcraft/issues/2069)).

## Text is highlighted in pink

The text uses a font DesignCraft can't find. Install the font, or put it in a **Document Fonts** folder next to the document. **Type › Find/Replace Font…** shows which fonts are missing. See [InDesign files](/apps/designcraft/indesign-files/#fonts).

## A paragraph doesn't hyphenate

Hyphenation follows the text's language. Select the text, open **Type › Character** (**Ctrl+T**), open **More Options** and check **Language**. German hyphenates with **German: 2006 Reform** and **German: Swiss 2006 Reform**, but not with **German: 1996 Reform** or **German: Traditional** ([#2119](https://github.com/storytold/designcraft/issues/2119)).

## DesignCraft feels slow with a big document

Many pages and large pictures slow down drawing. **View › Display Performance** trades picture quality for speed:

- **Fast Display** (**Ctrl+Alt+Shift+Z**) shows placed pictures as gray boxes and skips effects.
- **Typical Display** (**Ctrl+Alt+Z**) shows low-resolution previews.
- **High Quality Display** (**Ctrl+Alt+H**) shows pictures at full resolution.

Switch to **Fast Display** while you lay out pages, and back to **Typical Display** to check the result. [Known problems](#known-problems-not-fixed-yet) lists the lag that remains.

## On Linux, Open and Save do nothing

On a Wayland desktop with no file chooser portal set up, the file dialogs don't open. One user fixed it on niri by setting the file chooser to the GTK portal in `~/.config/xdg-desktop-portal/niri-portals.conf` and restarting the portal services ([#2121](https://github.com/storytold/designcraft/issues/2121)):

```ini
[preferred]
default=gnome;gtk;
org.freedesktop.impl.portal.FileChooser=gtk
```

```sh
systemctl --user restart xdg-desktop-portal xdg-desktop-portal-gnome xdg-desktop-portal-gtk
```

That file is for the niri desktop. Other desktops use their own `-portals.conf` file.

## On Linux, the interface looks blurry or small

When `DISPLAY` is set, DesignCraft opens its window through XWayland. On a scaled monitor under Wayland, the interface can then look blurry or small ([#2209](https://github.com/storytold/designcraft/issues/2209), [#2145](https://github.com/storytold/designcraft/issues/2145)). To use native Wayland instead, start DesignCraft with `DESIGNCRAFT_WAYLAND=1`:

```sh
DESIGNCRAFT_WAYLAND=1 designcraft
```

On native Wayland you can't drag files into the window from the file manager. Use **File › Place…** or **File › Open…**.

## It installed, but it won't open on Windows

Users with this problem ([#1982](https://github.com/storytold/designcraft/issues/1982)) reported two ways around it:

- Search for DesignCraft in the Windows search bar and open it from there.
- Reinstall, and pick an install folder instead of the default one.

## It starts slowly

DesignCraft checks the files in **File › Open Recent** at startup. A very large file, or one on a network share, can slow the start. Choose **File › Open Recent › Clear Recent Files** ([#2152](https://github.com/storytold/designcraft/issues/2152)).

## DesignCraft closed and I lost my work

Open DesignCraft again. It saves recovery data in the background, and reopens your unsaved documents when it next starts. The status bar says how many it recovered. Save them right away.

To change how often it saves recovery data, choose **Edit › Preferences… › File Handling** (on a Mac, **DesignCraft › Settings…**) and set **Save recovery data every**.

## The portable version doesn't keep my settings

The portable zip keeps its settings in a `DesignCraftData` folder next to the program. If it can't write there, for example inside Program Files, it uses your normal settings folder instead, and the status bar says so. Unzip it somewhere you can write to, such as your Documents folder or a USB stick.

## A layout doesn't look as it did in InDesign

DesignCraft is in pre-alpha, and opening InDesign files is new. Some objects and settings may come in differently or not at all. Keep the original file. Please [report the document](https://github.com/storytold/designcraft/issues) if you can share it: real files are how we find these problems.

## Find the log

DesignCraft writes a log you can attach to a bug report. It records the graphics cards it found and the one it used, why it stopped, and any crash report.

| System | Log folder |
| --- | --- |
| Windows | `%APPDATA%\DesignCraft\logs\` |
| macOS | `~/Library/Application Support/DesignCraft/logs/` |
| Linux | `~/.config/designcraft/logs/` |

The current log is `designcraft.log`. The log from the run before is `designcraft.1.log`, and the one before that `designcraft.2.log`. If DesignCraft crashed and you've started it again since, attach `designcraft.1.log` too.

The folder above `logs` is DesignCraft's settings folder. For the portable zip, the log is in `DesignCraftData\logs\` next to the program.

To log more detail, set `RUST_LOG` to `debug` before starting DesignCraft.

## Known problems, not fixed yet

- Zooming lags on Windows 11 ([#2432](https://github.com/storytold/designcraft/issues/2432)).
- A 400-page book is very slow ([#2386](https://github.com/storytold/designcraft/issues/2386)).
- Photo books re-decode full-size photos on every edit, because the picture cache holds 768 MiB ([#2342](https://github.com/storytold/designcraft/issues/2342)).
- **Relink…** works on one missing link at a time, not on all at once ([#2127](https://github.com/storytold/designcraft/issues/2127)).
- Filled-in form fields aren't saved in an interactive PDF ([#2203](https://github.com/storytold/designcraft/issues/2203)).

## Still stuck?

- Ask in the [ArtCraft Discord](https://discord.gg/artcraft).
- [Report a bug on GitHub](https://github.com/storytold/designcraft/issues), with your DesignCraft version, your system and graphics card, and the log attached.
