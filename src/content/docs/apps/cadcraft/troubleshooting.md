---
title: Troubleshooting
description: Fix common problems with CADCraft, get back unsaved drawings, and find its log.
sidebar:
  order: 6
---

## The window doesn't open on Windows

If CADCraft flashes in Task Manager and quits before its window appears, your graphics driver may be the cause. CADCraft uses DirectX 12 on Windows. Start it with Vulkan instead. In PowerShell, from the folder that contains `cadcraft.exe`:

```powershell
$env:WGPU_BACKEND = "vulkan"
& .\cadcraft.exe
Remove-Item Env:WGPU_BACKEND   # go back to the default for later launches
```

Avoid setting it to `"gl"`: on some AMD drivers that brings the crash back.

## "Graphics error" appears

If the graphics driver resets or stops responding, CADCraft shows a **Graphics error** notice and autosaves every drawing with unsaved changes. Save your work if you can, then restart CADCraft. Any autosaved drawings are offered when it starts again.

## CADCraft closed and I lost my work

CADCraft autosaves drawings with unsaved changes every 10 minutes. If it closes unexpectedly, open it again: a **Drawing Recovery** list shows the drawings it saved. Choose **Open** to get one back, then save it under a name of your choice. **Discard** deletes the copy, and **Later** keeps it and asks again next time.

To autosave more or less often, change **Automatic save every** in **Tools › Options › Open and Save**. 0 minutes turns autosave off. The web version doesn't autosave.

## A drawing won't open, or opens with errors

Choose **File › Drawing Utilities › Recover...** and pick the file. CADCraft tries to repair it as it opens it. **File › Drawing Utilities › Audit** checks the open drawing for errors.

Very large DWG files can take a while to open, because CADCraft converts them first.

## Text looks different from the original

CADCraft reads SHX fonts only when their `.shx` files are in the drawing's folder, so text in an SHX style whose font it can't find is drawn with CADCraft's own drafting font. If text in Chinese, Japanese, Korean or Arabic doesn't show properly, install a font that has those characters, such as Noto Sans CJK or Noto Sans Arabic, and restart CADCraft. See [Fonts](/apps/cadcraft/files/#fonts).

## Something disappeared after saving

CADCraft can't yet save everything that other CAD programs put in a drawing. See [DWG and DXF files](/apps/cadcraft/files/#save-a-drawing). If you still have the original file, open that one. If you saved over it, the previous version may still be next to it as a backup: `drawing.bak` for `drawing.dwg`, or `drawing.dxf.bak` for `drawing.dxf`. Copy it and rename it back to `.dwg` or `.dxf` to open it.

## Files can't be dragged in on Linux

On a Wayland desktop, CADCraft runs through XWayland by default, because that's the only way dragging files into the window works. If you started it with `CADCRAFT_WAYLAND=1` for native Wayland, dragging files in won't work: start it without that variable.

## I can't see the cursor with a screen magnifier

Over the drawing, CADCraft hides the system cursor and draws its own crosshair, so magnifiers and screen recorders can lose track of it. Choose **View › Accessibility › Show System Cursor** to keep a small system cursor visible in the middle of the crosshair.

## My printer isn't in the list

CADCraft can only plot to files for now: PDF, PNG or SVG ([#2849](https://github.com/storytold/cadcraft/issues/2849)). Plot to a PDF, then print the PDF from any PDF viewer. See [Print](/apps/cadcraft/workflows/#print).

## Export to PDF doesn't ask for a paper size

**File › Export to PDF...** uses the current page setup. To choose the paper, scale or plot style, use **File › Print...** instead, or set them for a layout in **File › Page Setup Manager...**.

## I can't use my AutoCAD plot styles (.ctb)

CADCraft can't read AutoCAD's `.ctb`, `.stb` or `.pc3` files yet ([#2752](https://github.com/storytold/cadcraft/issues/2752)). Use a built-in table such as `monochrome.ctb`, or make your own in **File › Plot Styles...**. See [Plot styles](/apps/cadcraft/workflows/#plot-styles).

## The plot is the wrong size or scale

In **File › Print...**, turn off **Fit to paper**, then type the **Scale** you want, such as `1:50`. If a layout from another CAD program ignores its page setup, that's a known problem ([#2493](https://github.com/storytold/cadcraft/issues/2493)).

## A 3D tool does nothing

CADCraft draws in 2D only for now. Most tools on the **Modeling** tab of **Tool Sets**, and the 3D views and orbit, are not available yet.

## Find the log

CADCraft writes a log you can attach to a bug report.

| System | Log folder |
| --- | --- |
| Windows | `%APPDATA%\CADCraft\logs\` |
| macOS | `~/Library/Application Support/CADCraft/logs/` |
| Linux | `~/.config/cadcraft/logs/` |

The current log is `cadcraft.log`. The log from the run before is `cadcraft.1.log`, so if CADCraft crashed, attach that one too.

The folder above `logs` is CADCraft's settings folder.

## Still stuck?

- Ask in the [ArtCraft Discord](https://discord.gg/artcraft).
- [Report a bug on GitHub](https://github.com/storytold/cadcraft/issues), with the log attached.
