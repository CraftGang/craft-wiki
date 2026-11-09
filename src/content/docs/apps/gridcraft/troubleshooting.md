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

## Everything is tiny on a high-resolution screen

On some Linux desktops with a high-resolution or scaled screen, GridCraft draws the whole window at half the size you expect ([#3140](https://github.com/storytold/gridcraft/issues/3140), [#3090](https://github.com/storytold/gridcraft/issues/3090)). Choose **View › Interface size** and pick a larger size, up to 200%. This scales the whole window, including the ribbon.

For a fractional scale, one report found that starting GridCraft with `WINIT_X11_SCALE_FACTOR` set to your scale, such as `1.6`, draws it at the desktop's size.

## GridCraft closes right after it starts on Linux

On some ARM computers, such as a Raspberry Pi, GridCraft quits at once and the log ends with `WGPU error: Limit 'max_inter_stage_shader_variables' value 16 is better than allowed 15` ([#3029](https://github.com/storytold/gridcraft/issues/3029)). In one report, only software rendering worked, started with `LIBGL_ALWAYS_SOFTWARE=1 WGPU_BACKEND=gl gridcraft`. It's slow. Setting `WGPU_BACKEND=gl` alone failed on another limit. See [Find the log](#find-the-log).

## It's slow on an older Windows PC

On some older graphics chips, DirectX 12 only offers a software renderer that draws everything on the processor. GridCraft normally switches to OpenGL by itself. If it is still slow, look for lines starting with `graphics:` in [the log](#find-the-log) to see which one it chose, and try setting `WGPU_BACKEND` to `"gl"` or `"dx12"`, as above.

## Files can't be dragged in on Linux

On a Wayland desktop, GridCraft runs through XWayland by default, because that's the only way dragging files into the window works. If you have set `GRIDCRAFT_WAYLAND=1` to use native Wayland, dragging files in won't work; unset it, or use **File › Open** instead.

## Fonts are missing, or text shows as ?????

GridCraft doesn't come with fonts. It uses the fonts installed on your computer.

- To use a font, install it in your system, then restart GridCraft. It looks for installed fonts once, when it starts.
- Text in a script your installed fonts don't cover, such as Thai, Chinese, Malayalam, Vietnamese or Bangla, can show as `?????`. Install a font that has those characters, then restart.

Known problems, not fixed yet: on Linux the font list can be empty or hold only a few fonts, and all text can be drawn in Liberation Sans ([#793](https://github.com/storytold/gridcraft/issues/793), [#3128](https://github.com/storytold/gridcraft/issues/3128)). Cell text can look rough, most in the dark theme ([#3465](https://github.com/storytold/gridcraft/issues/3465)). Installed Windows fonts can be missing from the list ([#3460](https://github.com/storytold/gridcraft/issues/3460)).

## I can't save an .xls, .xlsb or .ods file

GridCraft opens .xls, .xlsb and .ods files, but can't save in those formats. A workbook opened from one of them shows **(imported)** in its title, and **Save** asks where to put a new .xlsx file. Your original file is left as it was.

.xlsb and .ods files come in as data only: formulas become their last saved results, and formatting, charts and pictures are left out. .xls files keep their values, formulas and number formats, but not their other formatting or objects.

## I saved as CSV and lost my formatting

A CSV file holds only the values of one sheet. When you export to CSV, a web page or PDF, GridCraft writes a copy and keeps your workbook as it was, so save it as .xlsx as well. If you opened a CSV file and want to keep formulas, formatting or more than one sheet, use **File › Save As** and choose **Excel Workbook (\*.xlsx)**.

## A big workbook opens with missing rows

When a sheet holds more than 1,000,000 XML elements, GridCraft says the sheet is damaged and keeps only the rows it could read, for example "kept 83486 rows" ([#3286](https://github.com/storytold/gridcraft/issues/3286)). The rest isn't loaded, so keep your original file and don't save over it.

Some .xlsx files open as web page text instead of cells ([#3373](https://github.com/storytold/gridcraft/issues/3373)).

Copying a range of more than 2,000,000 cells pastes only 2,000 rows into other apps. Pasting into GridCraft still gets all of it ([#3158](https://github.com/storytold/gridcraft/issues/3158)).

## A formula that refers to another workbook doesn't work

A reference to another file, such as `[Book1]Sheet1!A1`, doesn't read a workbook that's open in another window as live data, and a reference to a workbook you haven't saved is refused ([#3292](https://github.com/storytold/gridcraft/issues/3292), [#3340](https://github.com/storytold/gridcraft/issues/3340)).

## Saving and closing

- With a CSV file, "Save changes?" can appear after you saved, and clicking **Save** in it doesn't close GridCraft. Only **Don't Save** closes the window, so make sure your work is saved first ([#2607](https://github.com/storytold/gridcraft/issues/2607)).
- A new workbook isn't added to Recent when you save it. Only opening a file adds it ([#3519](https://github.com/storytold/gridcraft/issues/3519)).
- Saving back to Google Drive does nothing. GridCraft says it saved, but writes nothing ([#3462](https://github.com/storytold/gridcraft/issues/3462)).

## A password-protected workbook saves without its password

GridCraft can open a workbook that needs a password to open, but saves it without the password. **Save** asks for a new file name, so the protected original isn't replaced.

## Macros in a workbook don't run

- **VBA macros** from Excel are kept when you save as .xlsm, but GridCraft doesn't run them. It runs its own kind of macro: see [Record and run macros](/apps/gridcraft/workflows/#record-and-run-macros).
- **Macros and scripts that came with a workbook** you opened ask before they run, because someone else made the file. Choose to run them only if you trust where the file came from.

## Printing doesn't work as I expect

- **Print is dimmed.** Pick a printer under **Printer** on **File › Print**. If yours isn't listed, add it in your system settings and choose **Refresh printers**.
- **"No printers found."** GridCraft only sees printers your system knows about. Add one in your system settings, or save a PDF with **File › Export › Create PDF** and print that.
- **No orientation or paper size on the print screen.** They're on the **Page Layout** tab ([#2359](https://github.com/storytold/gridcraft/issues/2359)).
- **Extra blank pages.** Empty cells with formatting can stretch the printed area ([#3367](https://github.com/storytold/gridcraft/issues/3367)). Set a **Print Area** on the **Page Layout** tab to print only what you need.

Known problems, not fixed yet:

- You can't print a page range ([#3098](https://github.com/storytold/gridcraft/issues/3098)) or only the selection ([#2351](https://github.com/storytold/gridcraft/issues/2351)), and **Create PDF** has no page range either ([#3016](https://github.com/storytold/gridcraft/issues/3016)).
- The preview can miss borders, centering and merged-cell alignment ([#3059](https://github.com/storytold/gridcraft/issues/3059)).
- Thai, Czech and Korean text can print as "?" ([#1416](https://github.com/storytold/gridcraft/issues/1416), [#2241](https://github.com/storytold/gridcraft/issues/2241), [#2875](https://github.com/storytold/gridcraft/issues/2875)).

## A workbook doesn't look as it does in another app

GridCraft is in alpha. Some workbooks may not open exactly as they look elsewhere. If you need an exact copy, keep the original file. Please [report the workbook](https://github.com/storytold/gridcraft/issues) if you can share it: real files are how we find these problems.

## Updating on Windows fails with error 1603

Only one copy of GridCraft can be installed, and an update has to use the same choice as that copy. If the installer says "This app is already installed for everyone", run it again and choose **Everyone on this computer**, or add `ALLUSERS=1` to `msiexec` from an elevated terminal. A stop with error 1603 can have this cause, but the reports don't always say ([#3137](https://github.com/storytold/gridcraft/issues/3137)). If you installed it for your account only, choose **Only for me**. To change who it's installed for, uninstall it first. See [Install and update](/apps/gridcraft/install-update/#windows).

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
