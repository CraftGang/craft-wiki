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

## Text is highlighted in pink

The text uses a font DesignCraft can't find. Install the font, or put it in a **Document Fonts** folder next to the document. **Type › Find/Replace Font…** shows which fonts are missing. See [InDesign files](/apps/designcraft/indesign-files/#fonts).

## DesignCraft closed and I lost my work

Open DesignCraft again. It saves recovery data in the background, and reopens your unsaved documents when it next starts. The status bar says how many it recovered. Save them straight away.

To change how often it saves recovery data, choose **Edit › Preferences… › File Handling** (on a Mac, **DesignCraft › Settings…**) and set **Save recovery data every:**.

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

## Still stuck?

- Ask in the [ArtCraft Discord](https://discord.gg/artcraft).
- [Report a bug on GitHub](https://github.com/storytold/designcraft/issues), with your DesignCraft version, your system and graphics card, and the log attached.
