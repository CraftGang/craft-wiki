---
title: Troubleshooting
description: Fix common problems with PhotoCraft, find its log, and report a bug.
sidebar:
  order: 6
---

## PhotoCraft closes as soon as it starts

PhotoCraft draws with your graphics card, so a graphics driver problem can stop it starting. Start it again: if the last start didn't finish, PhotoCraft picks a safer graphics mode by itself.

- **Windows**: Vulkan, then DirectX 12, then the CPU. On Intel and Qualcomm graphics, PhotoCraft starts on DirectX 12 straight away.
- **Linux**: Vulkan, then OpenGL, then the CPU.
- **macOS**: Metal, then the CPU.

The CPU mode doesn't depend on your graphics driver, but it is slower. When a mode works, PhotoCraft remembers it. To see or change it, open **Edit › Preferences › Performance…** (on a Mac, **PhotoCraft › Settings**) and look at **Rendering Mode**: **Automatic (recommended)**, **GPU** or **CPU / Compatibility**.

To force the CPU mode for one start, run PhotoCraft with `--safe-gpu`.

If it still closes on Windows, choose the graphics system yourself. In PowerShell, from the folder that contains `photocraft.exe`:

```powershell
$env:WGPU_BACKEND = "dx12"
& .\photocraft.exe
Remove-Item Env:WGPU_BACKEND   # go back to the default for later launches
```

While `WGPU_BACKEND` is set, PhotoCraft uses it and doesn't step down to a safer mode by itself.

## The status bar says "CPU Rendering"

PhotoCraft couldn't use your graphics card, so it draws on the processor instead. Click the message to see why in **System Info**. Updating your graphics driver often helps. Then set **Rendering Mode** back to **Automatic (recommended)** in **Edit › Preferences › Performance…** and restart PhotoCraft.

## Dropping a file on the window does nothing on Linux

On a Wayland desktop, files dropped on the window don't open yet. Use **File › Open…**, or copy the image in your file manager and paste it with **Ctrl+V**.

To drag and drop, run PhotoCraft through XWayland: set **Linux display server** to X11 in **Edit › Preferences › Performance…** and restart PhotoCraft. You can also start it once with `WAYLAND_DISPLAY= photocraft`.

## The Windows taskbar turns black when PhotoCraft is maximized

PhotoCraft draws its own title bar. If the taskbar turns black or disappears while PhotoCraft is maximized, update PhotoCraft first. If it still happens, turn on **System title bar** in **Edit › Preferences › Interface…** and restart PhotoCraft, so that Windows draws the title bar instead.

## Canvas Size added a white border around my photo

**Image › Canvas Size…** doesn't scale your photo. It adds space around it, and fills the new space with the **Canvas extension color**, which is your background color (usually white) unless you change it. To add empty space, set **Canvas extension color:** to **Transparent**.

This happens because a photo you open becomes a locked **Background** layer, which can't be transparent. To make the photo itself bigger or smaller, use **Image › Image Size…**.

## A PSD doesn't look as it does in another app

PhotoCraft is in early alpha, and some effects or features in a PSD may look different or be left out. PhotoCraft warns you when it can't match something in a file. Keep your original file, and please [report the document](https://github.com/storytold/photocraft/issues) if you can share it: real files are how we find these problems.

## PhotoCraft closed and I lost my work

Start PhotoCraft again. It saves recovery information for documents with unsaved changes every 10 minutes, and reopens them when it starts. You can change how often, or turn this off, in **Edit › Preferences › File Handling…**.

## Find the log

PhotoCraft writes a log you can attach to a bug report.

| System | Log folder |
| --- | --- |
| Windows | `%APPDATA%\Photocraft\logs\` |
| macOS | `~/Library/Application Support/Photocraft/logs/` |
| Linux | `~/.config/photocraft/logs/` |
| Windows portable zip | `PhotoCraftData\logs\`, next to `photocraft.exe` |

The current log is `photocraft.log`. The log from the run before is `photocraft.1.log`, so if PhotoCraft crashed and you have started it again since, attach that one too.

The folder above `logs` is PhotoCraft's settings folder.

## Report a bug

Choose **Help › Report an Issue…** to open PhotoCraft's [issue tracker](https://github.com/storytold/photocraft/issues). Include:

1. What you did, step by step, and what you expected.
2. What happened instead. A screenshot helps.
3. Your system details: choose **Help › System Info…**, click **Copy**, and paste the text. It lists your PhotoCraft version, operating system and graphics card.
4. The file, if one file causes the problem, and the log. Leave the file out if it contains anything private.

Search the tracker first. If someone has already reported your problem, add your details there.

## Still stuck?

- Ask in the [ArtCraft Discord](https://discord.gg/artcraft).
- [Report a bug on GitHub](https://github.com/storytold/photocraft/issues), with the log attached.
