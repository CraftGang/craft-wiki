---
title: Troubleshooting
description: Fix common LightCraft problems with raw files, color and missing photos, and find the log for a bug report.
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

## Photos show colored patches, or nothing renders

LightCraft draws photos with your graphics card. If photos show colored patches, or no edits show in the preview, you can check whether the card is the cause: turn off **Use the GPU for rendering** in **Settings › Performance** and compare. Include the result in your bug report.

To choose the graphics system yourself, set `LIGHTCRAFT_GPU_BACKEND` before you start LightCraft to `dx12`, `vulkan`, `metal` or `auto`. Set it to `off`, or set `LIGHTCRAFT_GPU=0`, to draw on the processor only. In PowerShell, from the folder that contains `lightcraft.exe`:

```powershell
$env:LIGHTCRAFT_GPU_BACKEND = "vulkan"
& .\lightcraft.exe
Remove-Item Env:LIGHTCRAFT_GPU_BACKEND   # go back to the default for later launches
```

For a bug report, start LightCraft with `LIGHTCRAFT_LOG=debug` to put more detail in the log.

## Install the AI mask model by hand

**Object** and **Describe** masks need the SAM 3 model. If the download in LightCraft doesn't work, put the model in the folder `models/sam3` inside LightCraft's settings folder (see [Find the log](#find-the-log) for where that is). To use another folder, set `LIGHTCRAFT_SAM3_DIR` to it before you start LightCraft. To download from another site, set `LIGHTCRAFT_SAM3_MIRRORS` to one or more base addresses, separated by commas.

## Import problems

Imports from a network drive or NAS can be slow or fail, and a folder you browsed under **Local** can count as already imported. See [Known problems, not fixed yet](#known-problems-not-fixed-yet).

## AI Denoise is not available for a photo

AI Denoise works only on raw photos from cameras with a standard (Bayer) sensor.

## Does closing the window quit LightCraft?

Yes, also on a Mac. Closing the main window quits LightCraft. If an import or export is still running, it asks first. Closing the **Second Window** only closes that window.

## Known problems, not fixed yet

These are open on the issue tracker. Add your details there if you run into one.

- Importing from a NAS or network drive doesn't work for some people: [#3897](https://github.com/storytold/lightcraft/issues/3897). Moving photos to a network share is slow: [#3561](https://github.com/storytold/lightcraft/issues/3561).
- Browsing a folder under **Local** makes its photos count as already in the library, which blocks a later import: [#3772](https://github.com/storytold/lightcraft/issues/3772).
- Scanning CR2 files during import is slow: [#3786](https://github.com/storytold/lightcraft/issues/3786).
- User presets from one library are saved into the next library you open: [#3891](https://github.com/storytold/lightcraft/issues/3891).
- On macOS 26, every file dialog freezes the app: [#3735](https://github.com/storytold/lightcraft/issues/3735).
- DNG files can't be opened from Finder: [#3595](https://github.com/storytold/lightcraft/issues/3595).
- **Edit in Other Editor** fails for some photos: [#3617](https://github.com/storytold/lightcraft/issues/3617).
- **Optics** can show the wrong lens profile status for photos added before lens support for their camera: [#3795](https://github.com/storytold/lightcraft/issues/3795), [#3764](https://github.com/storytold/lightcraft/issues/3764). Looking up lens profiles can hang: [#3784](https://github.com/storytold/lightcraft/issues/3784).
- No preview or edits show for some photos: [#3723](https://github.com/storytold/lightcraft/issues/3723).
- On Linux with a high-resolution display under XWayland, the interface is drawn too small, and there is no setting for its scale: [#3598](https://github.com/storytold/lightcraft/issues/3598).

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
