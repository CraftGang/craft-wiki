---
title: Troubleshooting
description: Fix common problems with GridCraft, and find its log when something goes wrong.
sidebar:
  order: 5
---

## The window doesn't open on Windows

If GridCraft flashes in Task Manager and quits before its window appears, your graphics driver may be the cause. Start it with a different graphics system. In PowerShell, from the folder that contains `gridcraft.exe`:

```powershell
$env:WGPU_BACKEND = "vulkan"
& .\gridcraft.exe
Remove-Item Env:WGPU_BACKEND   # go back to the default for later launches
```

If that doesn't help, try `"dx12"` in place of `"vulkan"`.

## It's slow on an older Windows PC

On some older graphics chips, DirectX 12 only offers a software renderer that draws everything on the processor. GridCraft normally switches to OpenGL by itself. If it is still slow, look for lines starting with `graphics:` in [the log](#find-the-log) to see which one it chose, and try setting `WGPU_BACKEND` to `"gl"` or `"dx12"`, as above.

## Files can't be dragged in on Linux

On a Wayland desktop, GridCraft runs through XWayland by default, because that's the only way dragging files into the window works. If you have set `GRIDCRAFT_WAYLAND=1` to use native Wayland, dragging files in won't work; unset it, or use **File › Open** instead.

## I can't save an .xls, .xlsb or .ods file

GridCraft opens .xls, .xlsb and .ods files, but can't save in those formats. A workbook opened from one of them shows **(imported)** in its title, and **Save** asks where to put a new .xlsx file. Your original file is left as it was.

.xlsb and .ods files come in as data only: formulas become their last saved results, and formatting, charts and pictures are left out. .xls files keep their values, formulas and number formats, but not their other formatting or objects.

## I saved as CSV and lost my formatting

A CSV file holds only the values of one sheet. When you export to CSV, a web page or PDF, GridCraft writes a copy and keeps your workbook as it was, so save it as .xlsx as well. If you opened a CSV file and want to keep formulas, formatting or more than one sheet, use **File › Save As** and choose **Excel Workbook (\*.xlsx)**.

## A password-protected workbook saves without its password

GridCraft can open a workbook that needs a password to open, but saves it without the password. **Save** asks for a new file name, so the protected original isn't replaced.

## Macros in a workbook don't run

- **VBA macros** from Excel are kept when you save as .xlsm, but GridCraft doesn't run them. It runs its own kind of macro: see [Record and run macros](/apps/gridcraft/workflows/#record-and-run-macros).
- **Macros and scripts that came with a workbook** you opened ask before they run, because someone else made the file. Choose to run them only if you trust where the file came from.

## A workbook doesn't look as it does in another app

GridCraft is in alpha. Some workbooks may not open exactly as they look elsewhere. If you need an exact copy, keep the original file. Please [report the workbook](https://github.com/storytold/gridcraft/issues) if you can share it: real files are how we find these problems.

## Find the log

GridCraft writes a log you can attach to a bug report.

| System | Log folder |
| --- | --- |
| Windows | `%APPDATA%\GridCraft\logs\` |
| macOS | `~/Library/Application Support/GridCraft/logs/` |
| Linux and FreeBSD | `~/.config/gridcraft/logs/` |

The current log is `gridcraft.log`. The log from the run before is `gridcraft.1.log`, so if GridCraft crashed, attach that one too.

The folder above `logs` is GridCraft's settings folder.

## Still stuck?

- Ask in the [ArtCraft Discord](https://discord.gg/artcraft).
- [Report a bug on GitHub](https://github.com/storytold/gridcraft/issues), with the log attached.
