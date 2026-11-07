---
title: Troubleshooting
description: Fix common problems with VectorCraft, and find its log when something goes wrong.
sidebar:
  order: 6
---

## The window doesn't open, or stays black

On a computer with two graphics processors, such as many laptops, VectorCraft picks one for you. If the one it picked can't show the window, VectorCraft starts again on the next one by itself.

To choose yourself, open **Edit › Preferences › Performance** (**VectorCraft › Settings** on a Mac), set **Graphics Processor** to **Power Saving (integrated)** or **High Performance (discrete)**, then restart VectorCraft. **Automatic** goes back to the default.

If VectorCraft doesn't get far enough to open Preferences, choose the graphics processor when you start it. For example, in PowerShell, from the folder that contains `vectorcraft.exe`:

```powershell
$env:WGPU_POWER_PREF = "high"     # or "low" for the integrated one
& .\vectorcraft.exe
Remove-Item Env:WGPU_POWER_PREF   # go back to the default for later launches
```

On Linux or macOS, start it with `WGPU_POWER_PREF=high vectorcraft`. You can also set `WGPU_ADAPTER_NAME` to part of the graphics card's name, such as `nvidia` or `intel`. The [log](#find-the-log) lists the graphics processors VectorCraft found and the one it used.

## Files can't be dragged into the window on Linux

On a Wayland desktop, dropping files on VectorCraft's window doesn't work yet. Use **File › Open** or **File › Place**, or copy the file in your file manager and paste it into the document.

To drag files in, open **Edit › Preferences › Performance**, set **Linux Display Server** to **X11 (XWayland)**, and restart VectorCraft.

## A drawing tablet's pen does nothing on Linux

On Wayland, under KDE Plasma 6.3 or later and under GNOME, VectorCraft can't get a pen's input yet. If the pen is plugged in when VectorCraft starts, VectorCraft opens its window through XWayland instead, where the pen works and its pressure is read.

If you plug the pen in later, set **Edit › Preferences › Performance › Linux Display Server** to **X11 (XWayland)** and restart VectorCraft.

## A menu item is greyed out

Some items are listed but not built yet. Others only work when something is selected, or when the right kind of object is selected. If you can't find a command at all, choose **Help › Search Commands**.

## A file doesn't look as it does in another app

VectorCraft is in alpha, and some things don't come across between apps:

- **`.ai` files**: VectorCraft reads the PDF part that most `.ai` files contain, and older `.ai` files too. It saves `.ai` files in the same PDF-compatible form, without another app's own editing data, so some things may not be editable when the file is opened elsewhere.
- **Affinity documents**: whatever VectorCraft couldn't bring in, such as adjustments, blurs and brushes, is listed in a warning when the file opens. VectorCraft can't save Affinity files.
- **Photoshop files** open as one flattened picture, without their layers.

[Open and save files](/apps/vectorcraft/open-and-save-files/) lists what VectorCraft opens and saves in each format. If you need an exact copy, keep the original file. Please [report the file](https://github.com/storytold/vectorcraft/issues) if you can share it: real files are how we find these problems.

## VectorCraft closed and I lost my work

Open VectorCraft again. If it kept copies of unsaved documents, the **Recover Documents** dialog lists them. Choose **Restore** to open them, then save them to keep them, or **Discard** to delete the copies.

VectorCraft saves recovery copies of changed documents every two minutes by default. To change how often, or where they're kept, open **Edit › Preferences › File Handling** and look under **Data Recovery**.

## The web version is slow or won't start

The web version uses the graphics card through WebGPU, which browsers only allow on secure pages. Open it from an `https://` address, or from `localhost`. Over plain `http://` elsewhere it falls back to slower WebGL2 graphics, and the clipboard doesn't work.

## Find the log

VectorCraft writes a log you can attach to a bug report. It records the graphics processor it used, files it had trouble with, and errors it recovered from.

| System | Log folder |
| --- | --- |
| Windows | `%APPDATA%\VectorCraft\logs\` |
| macOS | `~/Library/Application Support/VectorCraft/logs/` |
| Linux | `~/.config/vectorcraft/logs/` |

With the Windows portable zip, the log is in the `VectorCraftData\logs` folder next to `vectorcraft.exe`.

The current log is `vectorcraft.log`. The log from the run before is `vectorcraft.1.log`, so if VectorCraft crashed, attach that one too.

The folder above `logs` is VectorCraft's settings folder.

## Still stuck?

- Ask in the [ArtCraft Discord](https://discord.gg/artcraft).
- [Report a bug on GitHub](https://github.com/storytold/vectorcraft/issues), with the log attached.
