---
title: Troubleshooting
description: Fix common problems with WordCraft, and find its log when something goes wrong.
sidebar:
  order: 8
---

## The window doesn't open on Windows

If WordCraft flashes in Task Manager and quits before its window appears, your graphics driver may be the cause. Start it with a different graphics system. In PowerShell, from the folder that contains `wordcraft.exe`:

```powershell
$env:WGPU_BACKEND = "vulkan"
& .\wordcraft.exe
Remove-Item Env:WGPU_BACKEND   # go back to the default for later launches
```

If that doesn't help, try `"dx12"` in place of `"vulkan"`.

## It quits with "Parent device is lost"

If WordCraft closes right after its window appears and the log says **Parent device is lost**, start it with `WGPU_BACKEND` set to `"vulkan"`, as above. This avoids DirectX 12 altogether.

## It's slow on an older Windows PC

On some older graphics chips, DirectX 12 only offers a software renderer that draws everything on the processor. WordCraft normally switches to OpenGL by itself. If it is still slow, look for lines starting with `graphics:` in [the log](#find-the-log) to see which one it chose, and try setting `WGPU_BACKEND` to `"gl"` or `"dx12"`, as above.

## Text is blurry on Linux, or files can't be dragged in

On a Wayland desktop, WordCraft runs through XWayland by default, because that's the only way dragging files into the window works. For sharper text with fractional scaling, switch to native Wayland: choose **File › Options › Advanced › Linux display server › Wayland**, then restart WordCraft. Dragging files into the window won't work while it uses Wayland. Choose **X11 (XWayland)** or **Automatic** to switch back.

## Read Aloud is silent on Linux

Read Aloud uses a speech program installed on your system: `espeak-ng`, `espeak` or Speech Dispatcher. The `.deb` and `.rpm` packages install one for you. With the AppImage or the tarball, install it yourself:

```bash
sudo apt install espeak-ng      # Debian, Ubuntu
sudo dnf install espeak-ng      # Fedora
sudo pacman -S espeak-ng        # Arch
```

The Flatpak can't speak yet.

## A language shows "(no dictionary)"

The status bar shows the language of the text with **(no dictionary)** when WordCraft can't check its spelling. Install its Language pack: see [Languages and spelling](/apps/wordcraft/languages/).

## A document doesn't look as it does in another app

WordCraft is in alpha. Some layouts may break onto pages differently, and charts and SmartArt aren't kept when you save yet. If you need an exact copy, keep the original file. Please [report the document](https://github.com/storytold/wordcraft/issues) if you can share it: real files are how we find these problems.

## WordCraft closed and I lost my work

Open WordCraft again. If it kept a copy of your unsaved work, it shows it under **File › Recover**. See [Document recovery](/apps/wordcraft/recovery/).

## Find the log

WordCraft writes a log you can attach to a bug report. It records parts of a document it couldn't read, pictures or fonts it had to leave out of a PDF, and errors it recovered from. It never contains your document's text.

| System | Log folder |
| --- | --- |
| Windows | `%APPDATA%\WordCraft\logs\` |
| macOS | `~/Library/Application Support/WordCraft/logs/` |
| Linux | `~/.config/wordcraft/logs/` |

The current log is `wordcraft.log`. The log from the run before is `wordcraft.1.log`, so if WordCraft crashed, attach that one too.

The folder above `logs` is WordCraft's settings folder.

## Still stuck?

- Ask in the [ArtCraft Discord](https://discord.gg/artcraft).
- [Report a bug on GitHub](https://github.com/storytold/wordcraft/issues), with the log attached.
