---
title: Troubleshooting
description: Fix common problems with SoundCraft, and find its log when something goes wrong.
sidebar:
  order: 5
---

## The window doesn't open on Windows

If SoundCraft flashes in Task Manager and quits before its window appears, your graphics driver may be the cause. SoundCraft uses DirectX 12 on Windows. Start it with Vulkan instead. In PowerShell, from the folder that contains `soundcraft.exe`:

```powershell
$env:WGPU_BACKEND = "vulkan"
& .\soundcraft.exe
Remove-Item Env:WGPU_BACKEND   # go back to the default for later launches
```

Don't try `"gl"`: on some AMD drivers, OpenGL is what crashes in the first place.

## It quits with "Parent device is lost"

Older versions could close at start with **Parent device is lost** in the log. Current versions avoid this, so [update](/apps/soundcraft/install-update/#update) first. If it still happens, start SoundCraft with `WGPU_BACKEND` set to `"vulkan"`, as above.

## There's no sound

1. Choose **Setup › Playback Engine**. Under **Output**, it shows the device SoundCraft is playing through.
2. If it says **no device (silent clock)**, or the wrong device, choose the **Output device** you want and press **Apply**. Press **Refresh devices** if you've just plugged in an interface.
3. If sound stops after a device change or sleep, press **Reconnect audio device**.

In the web version, browsers only start sound after you click on the page, so click once and press **Space** again.

On Linux, SoundCraft plays through ALSA, which reaches PipeWire or PulseAudio on most desktops. It doesn't use JACK.

## Recording doesn't start

- Turn on the record button of at least one track first. If none is on, SoundCraft shows a hint under the record button.
- Check the **Input device** in **Setup › Playback Engine**.
- On a Mac, SoundCraft needs permission to use the microphone. If you said no, allow it in **System Settings › Privacy & Security › Microphone**.
- Recording isn't supported on FreeBSD or in the web version yet.

## My plugins don't show up

SoundCraft looks for CLAP and VST3 plugins in the standard folders for your system, and for Audio Units on a Mac. To add another folder, set the `CLAP_PATH` or `VST3_PATH` environment variable before starting SoundCraft.

- **Mac**: the signed app may refuse to load third-party plugins, because macOS only lets it load code it trusts.
- **Linux Flatpak**: the sandbox sees only plugins in `~/.clap` and `~/.vst3`, and Flatpak plugin extensions. Plugins installed in `/usr/lib` aren't visible to it; use another package if you need them.

## A session opens with audio missing

If SoundCraft can't find some of a session's audio files, it opens the session without them. Choose **SoundCraft › Session Audio Health** to see which audio isn't loaded, and how to fix it. Keep a session's `Audio Files` folder next to its `.scraft` file when you move or copy it.

## Files can't be dragged in on Linux

On a Wayland desktop, SoundCraft runs through XWayland by default, because that's the only way dragging files into the window works. To use native Wayland instead, start it with `SOUNDCRAFT_WAYLAND=1`. Dragging files in won't work while it does; use **File › Import** instead.

## SoundCraft closed and I lost my work

Open SoundCraft again. If it kept a copy of unsaved work, it shows **Recover Unsaved Work**, with how long ago it was saved. Press **Recover** to get it back, or **Discard** to throw it away. If a recording was still running, the copy includes it.

## Find the log

SoundCraft writes a log you can attach to a bug report. It records audio devices that failed to open, plugins that refused their saved settings, files that failed to open, and crashes.

| System | Log folder |
| --- | --- |
| Windows | `%APPDATA%\SoundCraft\logs\` |
| macOS | `~/Library/Application Support/SoundCraft/logs/` |
| Linux and FreeBSD | `~/.config/soundcraft/logs/` |
| Linux Flatpak | `~/.var/app/ai.storyteller.soundcraft/config/soundcraft/logs/` |

The current log is `soundcraft.log`. The log from the run before is `soundcraft.1.log`, so if SoundCraft crashed, attach that one too.

The folder above `logs` is SoundCraft's settings folder. It also holds autosaves and your plugin presets. With the portable zip and a `portable.txt` file, it's the `SoundCraftData` folder next to the app.

## Still stuck?

- Ask in the [ArtCraft Discord](https://discord.gg/artcraft).
- [Report a bug on GitHub](https://github.com/storytold/soundcraft/issues), with the log attached.
