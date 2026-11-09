---
title: Troubleshooting
description: Fix common FilmCraft problems, recover unsaved work and find the log for a bug report.
sidebar:
  order: 5
---

## FilmCraft doesn't open on Windows

Some graphics drivers crash before FilmCraft's window appears. FilmCraft notices this: after failed starts it switches to another graphics mode by itself, and shows a notice in the window with a button to go back to the default. So if it closes at once, try starting it again.

If it still won't open, choose the graphics system yourself. In PowerShell, in the folder that holds `filmcraft.exe`:

```powershell
$env:WGPU_BACKEND = "vulkan"     # or "dx12"
& .\filmcraft.exe
```

Avoid `"gl"`: it can bring the driver crash back. A laptop with an integrated and a separate graphics card from the same maker can crash if their drivers come from different packages. Installing one driver package for both cards fixes that.

## Playback is slow or stutters

- Lower the playback quality: **View › Playback Resolution › 1/2** or **1/4**.
- Render the slow parts: **Sequence › Render Effects In to Out** (**Enter**). The render bar above the timeline turns green where previews are ready.
- Make proxies of heavy footage and edit with those: see [Proxies for heavy footage](/apps/filmcraft/workflows/#proxies-for-heavy-footage).
- Hardware decoding works on macOS and Windows, and for H.264 and HEVC on Linux. Colour grading, keys and export still run on the processor, so large or high-resolution footage is slower than in mature editors.
- **Edit › Preferences** has **Graphics**, **Memory**, **Media Cache** and **Playback** pages.

## H.265 or AV1 can't be chosen for export

FilmCraft exports H.265 and AV1 only through a hardware encoder in your computer. If it finds none, it says so next to **Format**. Use **H.264** instead.

## A clip's media is missing

FilmCraft doesn't copy media into the project. If you moved or renamed the files, FilmCraft can't find them. Put them back, or right-click the clip in the **Project** panel, choose **Link Media…** and pick the file in its new place.

## A file won't import

FilmCraft can't read these yet:

- Camera RAW video, other than CinemaDNG image sequences.
- DV, and DivX or Xvid in AVI files.
- E-AC-3 audio.

It does open H.264, HEVC, VP8, VP9, AV1, ProRes, DNxHD and DNxHR, MPEG-2, MXF (OP1a and OP-Atom), AVI with Motion JPEG, H.264 or HEVC, and common audio and still image formats. If a file outside this list fails, ask in the [ArtCraft Discord](https://discord.gg/artcraft) or open a GitHub issue with a short sample of it.

## I can't open a Premiere Pro project

FilmCraft can't open `.prproj` files yet. In Premiere, export the sequence as Final Cut Pro XML, AAF or OpenTimelineIO, then choose **File › Import…** in FilmCraft.

## "This project was saved by a newer version of FilmCraft"

The project was saved by a newer FilmCraft. Update FilmCraft to open it: see [Install and update](/apps/filmcraft/install-update/).

When an older project opens in a newer FilmCraft, the file isn't changed until you save. The first save keeps the original beside it, named `<name> (schema v<n> backup).fcproj`, so an older FilmCraft can still open it.

## FilmCraft closed and I lost my work

Open FilmCraft again. If it has unsaved changes from the last session, it shows **Recover Unsaved Changes**: choose **Recover**. You can also choose **File › Recover Unsaved Changes…** later.

Auto-save copies are in the `Auto-Save` folder next to your project. Open one with **File › Open Project…**.

## Find the log

FilmCraft writes a log you can attach to a bug report. Choose **Help › Reveal Log Files…** to open its folder.

| System | Log folder |
| --- | --- |
| Windows | `%APPDATA%\FilmCraft\Logs\` |
| macOS | `~/Library/Application Support/FilmCraft/Logs/` |
| Linux | `~/.local/share/filmcraft/Logs/` |

The current log is `filmcraft.log`. The log from the run before is `filmcraft.1.log`, so if FilmCraft crashed, attach that one too. The portable Windows version keeps its log in the `data\Logs` folder beside the program.

**Help › System Compatibility Report…** shows details about your computer that help with bug reports too.

## Known problems, not fixed yet

- Panasonic P2 `.mxf` clips don't open: [#4410](https://github.com/storytold/filmcraft/issues/4410).
- An AAC 5.1 track in an MP4 can be read as stereo: [#4258](https://github.com/storytold/filmcraft/issues/4258).
- Opening a media file marks the project as edited, so closing right away asks you to save: [#4395](https://github.com/storytold/filmcraft/issues/4395).
- Playback can get very slow after you add a clip to a project: [#4428](https://github.com/storytold/filmcraft/issues/4428).
- Mask tracking can fail to start or finish: [#4394](https://github.com/storytold/filmcraft/issues/4394).
- A track matte key can have no effect: [#4278](https://github.com/storytold/filmcraft/issues/4278).
- HDR clips from some phones still look washed out with **Auto tone map media** on: [#4335](https://github.com/storytold/filmcraft/issues/4335).

## Still stuck?

- Ask in the [ArtCraft Discord](https://discord.gg/artcraft).
- [Report a bug on GitHub](https://github.com/storytold/filmcraft/issues), with the log attached. A sample of the footage that goes wrong helps most.
