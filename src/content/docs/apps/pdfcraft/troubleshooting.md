---
title: Troubleshooting
description: Fix common problems with PdfCraft, get back unsaved work, and find its log when something goes wrong.
sidebar:
  order: 7
---

## The window doesn't open on Windows

PdfCraft draws with your graphics card, through DirectX 12 by default. If that fails while it starts, PdfCraft tries again with OpenGL by itself. If the window still doesn't open, start it with Vulkan instead. In PowerShell, from the folder that contains `pdfcraft.exe`:

```powershell
$env:WGPU_BACKEND = "vulkan"
& .\pdfcraft.exe
Remove-Item Env:WGPU_BACKEND   # go back to the default for later launches
```

To skip straight to OpenGL, set `PDFCRAFT_RENDERER` to `"gl"` in the same way. If neither works, [the log](#find-the-log) has both errors: attach it to a bug report.

## The interface looks blurry

On very large windows, or a window stretched across monitors at different scales, PdfCraft may draw below the window's full size so it doesn't crash. Make the window smaller, or keep it on one monitor.

## It won't start on Linux

The `.deb` and `.rpm` install what PdfCraft needs. With the tarball, your system must have the window and graphics libraries it loads at start-up: X11 and Wayland client libraries, `libxkbcommon`, and a Vulkan driver or Mesa's OpenGL drivers. Install them with your package manager, then try again. Start PdfCraft from a terminal to see the error.

## Open and Save dialogs don't appear on Linux

PdfCraft's file dialogs go through `xdg-desktop-portal`. Install it with `xdg-desktop-portal-gtk` or `xdg-desktop-portal-kde`.

## I can't print on Linux

PdfCraft prints through CUPS's command-line tools. Install `cups-client` (Debian, Ubuntu) or your distribution's CUPS client package. Until then, the Print dialog can still save to a PDF.

## PdfCraft closed and I lost my work

Open PdfCraft again. While it runs, it saves a copy of every document with unsaved changes once a minute. After a crash, the next start offers to recover those copies. Choose **Recover**, then save them. Copies of password-protected documents stay encrypted, and ask for the password when you recover them.

## I can't edit the text in a PDF

PdfCraft is in alpha, and editing the existing text of a PDF is one of its weakest areas, especially on complex layouts and in right-to-left and Chinese, Japanese or Korean text. If a PDF is a scan, there is no text to edit until you recognise it with **Scan & OCR**. To add text on top of a page instead, use **Edit a PDF › Text** or **Fill & Sign › Add text**.

## I can't change a document

If a PDF is secured, a notice above the page says so: its security settings limit what you can change. Choose **File › Protect › Enter permissions password…** if you know the password. **File › Protect › Security properties…** shows what the document allows.

## Find the log

PdfCraft writes a log you can attach to a bug report. It records crashes, failed autosaves, pages it couldn't draw, and which graphics renderer it used.

| System | Log folder |
| --- | --- |
| Windows | `%APPDATA%\PdfCraft\data\logs\` |
| macOS | `~/Library/Application Support/PdfCraft/logs/` |
| Linux, FreeBSD | `~/.local/share/pdfcraft/logs/` |
| Windows portable zip | `PdfCraftData\logs\`, next to `pdfcraft.exe` |

The current log is `pdfcraft.log`. The log from the run before is `pdfcraft.1.log`, so if PdfCraft crashed, attach that one too. The log never records passwords.

On Linux and FreeBSD, PdfCraft's settings are in `~/.config/pdfcraft/`.

## Still stuck?

- Ask in the [ArtCraft Discord](https://discord.gg/artcraft).
- [Report a bug on GitHub](https://github.com/storytold/pdfcraft/issues), with the log attached.
