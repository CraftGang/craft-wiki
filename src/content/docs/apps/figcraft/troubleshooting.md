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

## A .fig or Sketch file doesn't look right

FigCraft opens .fig, .sketch and .penpot files on a best-effort basis, and hasn't been tested against many real design files yet. Some layers, effects or fonts may not come across exactly. Keep the original file. Please [report the file](https://github.com/storytold/figcraft/issues) if you can share it: real files are how we find these problems.

## Text uses the wrong font

If a file uses fonts you don't have, FigCraft draws the text with another font and opens the **Missing fonts** window. It lists the missing fonts. Install them on your computer, or click **Download** next to one that FigCraft can fetch (Google Fonts and Noto fonts). The first download asks you to allow downloading. To open the window again, choose **Text › Missing fonts…** from the main menu.

## Sharing says "Online sharing is off"

No server is set for online sharing, so FigCraft can only share on your local network. In **Preferences › Server for online sharing**, click **Reset** to go back to the FigCraft server, or enter your own. See [Live sessions](/apps/figcraft/live-sessions/).

## Invite links open the browser, not FigCraft

In **Preferences**, select **Open invite links in FigCraft**. Or paste the link into **Join with a code** on the **Home** screen.

## A command is grayed out or says "Dev Mode only inspects"

Dev Mode lets you look but not edit. Press **Shift+D**, or choose **Design** in the toolbar's switcher, to edit again.

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
