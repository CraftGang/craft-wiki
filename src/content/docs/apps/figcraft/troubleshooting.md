---
title: Troubleshooting
description: Fix common problems with FigCraft, get back unsaved work, and find its settings folder.
sidebar:
  order: 6
---

## The window doesn't open

If FigCraft's graphics fail as the window opens, it starts again by itself with another graphics system: on Windows, it first tries Direct3D 12 and OpenGL together (whichever has a real graphics card wins), then Vulkan, then OpenGL. If none of them works, it shows a message that names what it tried. Updating your graphics driver often helps.

To choose the graphics system yourself, set `WGPU_BACKEND` before starting FigCraft. On Windows, from a Command Prompt in the folder that contains `figcraft.exe`:

```bat
set WGPU_BACKEND=gl
figcraft.exe
```

On macOS, Linux or FreeBSD, from a terminal:

```bash
WGPU_BACKEND=vulkan figcraft      # or gl; on macOS, metal
```

If you've set `WGPU_BACKEND` and the window still won't open, unset it so FigCraft can choose again.

## The web version shows nothing

The web version draws with WebGPU, and falls back to WebGL2 in browsers without it. To force WebGL2, add `?webgl` to the end of the page's address.

## FigCraft closed and I lost my work

Open FigCraft again. While it runs, it keeps a recovery copy of every file with unsaved changes. After a crash or a forced quit, the next start opens those copies again and tells you so. Save them to keep them.

To save every change by itself, turn on **Save files automatically** in **Preferences**. It only applies to files that have already been saved once.

## A .fig or .jam file doesn't open from the file manager

Double-clicking a .fig or .jam file, or choosing **Open with**, doesn't offer FigCraft yet ([#1788](https://github.com/storytold/figcraft/issues/1788)). Open the file another way:

- Choose **File › Open…** (**Ctrl+O**).
- Drag the file onto the FigCraft window.
- From the command line, run `figcraft path/to/file.fig`.

## A .fig or Sketch file doesn't look right

FigCraft opens .fig, .sketch and .penpot files on a best-effort basis, and hasn't been tested against many real design files yet. Some layers, effects or fonts may not come across exactly. Keep the original file. Please [report the file](https://github.com/storytold/figcraft/issues) if you can share it: real files are how we find these problems.

## Text uses the wrong font

If a file uses fonts you don't have, FigCraft draws the text with another font and opens the **Missing fonts** window. It lists the missing fonts. Install them on your computer, or click **Download** next to one that FigCraft can fetch (Google Fonts and Noto fonts). The first download asks you to allow downloading. To open the window again, choose **Text › Missing fonts…** from the main menu.

## Sharing says "Online sharing is off"

No server is set for online sharing, so FigCraft can only share on your local network. In **Preferences › Server for online sharing**, click **Reset** to go back to the FigCraft server, or enter your own. See [Live sessions](/apps/figcraft/live-sessions/).

## Publishing says "the server keeps at most 1000 files"

The public server is full ([#1402](https://github.com/storytold/figcraft/issues/1402)). Share on your **Local network** instead, or run `figcraft-server` yourself. See [Live sessions](/apps/figcraft/live-sessions/#run-your-own-server).

## Invite links open the browser, not FigCraft

In **Preferences**, select **Open invite links in FigCraft**. Or paste the link into **Join with a code** on the **Home** screen.

## A command is grayed out or says "Dev Mode only inspects"

Dev Mode lets you look but not edit. Press **Shift+D**, or choose **Design** in the toolbar's switcher, to edit again.

## Linux: automation stops when the window is minimized

When you start FigCraft with `--control` and connect an assistant with `--attach`, keep the window visible. On KDE with Wayland, requests time out while the window is minimized ([#1906](https://github.com/storytold/figcraft/issues/1906)).

## Known problems, not fixed yet

- On Linux, a FigCraft session that has been open for a long time can freeze ([#1906](https://github.com/storytold/figcraft/issues/1906)).
- On Linux, copying and pasting can be slow or fail ([#2021](https://github.com/storytold/figcraft/issues/2021)).
- On Wayland, the mouse cursor disappears after you move an object ([#1578](https://github.com/storytold/figcraft/issues/1578)).
- Text looks blurry when the window isn't maximized ([#1915](https://github.com/storytold/figcraft/issues/1915)).
- On Windows, FigCraft can fail to start with error 0x80070057. Starting it with `WGPU_BACKEND=gl` works around it ([#1543](https://github.com/storytold/figcraft/issues/1543)). See [The window doesn't open](#the-window-doesnt-open).
- Switching document tabs can blank the canvas until the page draws again ([#2074](https://github.com/storytold/figcraft/issues/2074)).
- A file you joined with a link isn't listed in **Home › Online** ([#1882](https://github.com/storytold/figcraft/issues/1882)).

## Where FigCraft keeps its settings

FigCraft keeps your preferences, recovery copies (in `Recovery`) and installed plugins (in `Plugins`) in its settings folder:

| System | Settings folder |
| --- | --- |
| Windows | `%APPDATA%\FigCraft\` |
| macOS | `~/Library/Application Support/FigCraft/` |
| Linux, FreeBSD | `~/.config/FigCraft/` |

The Windows portable zip keeps them in the `config` folder next to `figcraft.exe` instead.

## Still stuck?

- Ask in the [ArtCraft Discord](https://discord.gg/artcraft).
- [Report a bug on GitHub](https://github.com/storytold/figcraft/issues). Say which version you have (**?** › **About FigCraft**), your system, and what you did just before it went wrong.
