---
title: Troubleshooting
description: Fix common LightCraft problems with raw files, colour and missing photos, and find the log for a bug report.
sidebar:
  order: 6
---

## A raw photo opens as "Preview only"

The **Edit** panel shows **Preview only** when LightCraft can't decode that kind of raw file yet. It then shows the camera's own embedded JPEG instead, with the camera's picture style and white balance. Some Canon CR3 variants, Nikon High Efficiency NEF files and some compressed raws work this way.

LightCraft remembers this from the import, and doesn't check again after an update by itself. To make it check:

1. Update to the [latest release](https://github.com/storytold/lightcraft/releases/latest).
2. Select the photos that show **Preview only**.
3. Choose **Photo › Reload from Disk**. The right-click menu on a photo has it too.

If **Preview only** stays, your version still can't decode that file. The [raw support table](https://github.com/storytold/lightcraft/blob/main/docs/raw-parity.md) lists what is known for each camera.

## Raw photos look dull or washed out

LightCraft develops a raw from the sensor data and tries to match your camera's own JPEG. How well it matches depends on the camera model, and it has improved a lot between releases.

1. Update to the latest release.
2. Select the photo and choose **Photo › Reload from Disk**.
3. If it still looks flat, adjust it in the **Edit** panel, or try a different **Profile** at the top of the panel.
4. If you think the starting look is wrong for your camera, report it with the original raw file.

## A photo looks soft after zooming in

On a large raw, LightCraft first enlarges the fitted picture, then renders the full-resolution pixels and swaps them in. This can take a few seconds. If it stays soft at **View › Zoom 100%**, please report it.

## A photo's file is missing

If you moved or renamed photos outside LightCraft, the library can't find them. Choose **File › Find Missing Photos…** to look for them, or put the files back where they were.

## Text is blurry on Linux, or files can't be dragged in

On a Wayland desktop, LightCraft runs through XWayland when it can, because that's the only way dragging files into the window works. For sharper text with fractional scaling, start LightCraft with the environment variable `LIGHTCRAFT_WAYLAND=1`. Dragging files in won't work then.

## Does closing the window quit LightCraft?

Yes, also on a Mac. Closing the main window quits LightCraft. If an import or export is still running, it asks first. Closing the **Second Window** only closes that window.

## Find the log

LightCraft writes a log you can attach to a bug report. Choose **Help › Open Log Folder** to open its folder.

| System | Log folder |
| --- | --- |
| Windows | `%APPDATA%\LightCraft\logs\` |
| macOS | `~/Library/Application Support/LightCraft/logs/` |
| Linux | `~/.config/lightcraft/logs/` |

The current log is `lightcraft.log`. The log from the run before is `lightcraft.1.log`, so if LightCraft crashed, attach that one too. The log names the files LightCraft opened, with their folders, so look through it before you share it.

The folder above `logs` is LightCraft's settings folder.

## What to put in a bug report

- Your version, from **Help › About LightCraft** (on a Mac, **LightCraft › About LightCraft**).
- Your system. **Help › System Info…** shows details about your computer.
- What you did, step by step, and what happened.
- For a photo that renders wrong: the camera, and the original file (not an export).
- The log file.

## Still stuck?

- Ask in the [ArtCraft Discord](https://discord.gg/artcraft).
- [Report a bug on GitHub](https://github.com/storytold/lightcraft/issues), with the log attached.
