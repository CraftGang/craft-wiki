---
title: Install and update
description: Download PdfCraft for Windows, macOS, Linux or FreeBSD, use it in a browser, and keep it up to date.
sidebar:
  order: 2
---

## With ArtCraft Launcher

[ArtCraft Launcher](https://github.com/storytold/craft-launcher) installs, updates and opens every app in the Craft App Suite, PdfCraft included. It picks the right build for your system and processor, and tells you when an update is out.

Download it from its [latest release](https://github.com/storytold/craft-launcher/releases/latest), then press **Install** on PdfCraft's card.

## By hand

Every build is on PdfCraft's [latest release](https://github.com/storytold/pdfcraft/releases/latest) page; [all releases](https://github.com/storytold/pdfcraft/releases) has earlier versions and their notes. In the file names below, `<ver>` is the version number. `SHA256SUMS.txt` lists a checksum for every file.

### Windows

| Your PC | Installer | Portable |
| --- | --- | --- |
| Most PCs (64-bit Intel or AMD) | `pdfcraft-<ver>-windows-x64.msi` | `pdfcraft-<ver>-windows-x64-portable.zip` |
| ARM PCs, such as Snapdragon | `pdfcraft-<ver>-windows-arm64.msi` | `pdfcraft-<ver>-windows-arm64-portable.zip` |
| 32-bit Windows | `pdfcraft-<ver>-windows-x86.msi` | `pdfcraft-<ver>-windows-x86-portable.zip` |

The installer's first page asks who to install PdfCraft for. **Only for me** is the default and doesn't need administrator rights. **Everyone on this computer** asks for an administrator. You can only have one copy installed, so to switch between the two, uninstall first.

The installer adds **Edit with PdfCraft** to the right-click menu of PDF files, and **Create PDF with PdfCraft…** to the right-click menu of pictures, in File Explorer. On Windows 11 they are under **Show more options**. It doesn't change which app opens PDFs when you double-click them.

The portable zip runs from any folder, a USB stick included. It keeps its settings, logs and recovered work in a `PdfCraftData` folder next to `pdfcraft.exe`.

### macOS

Download `pdfcraft-<ver>-macos-universal.dmg`, open it, and drag **PdfCraft** to Applications. It runs on Apple silicon and Intel Macs.

### Linux

| Format | File | Notes |
| --- | --- | --- |
| AppImage | `pdfcraft-<ver>-linux-x86_64.AppImage` | Runs on most distributions; no install needed |
| Flatpak | `pdfcraft-<ver>-linux-x86_64.flatpak` | Install with `flatpak install --user <file>` |
| Debian, Ubuntu | `pdfcraft-<ver>-linux-x86_64.deb` | |
| Fedora, RHEL, openSUSE | `pdfcraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux | `pdfcraft-<ver>-linux-x86_64.pkg.tar.zst` | Install with `sudo pacman -U <file>` |
| Tarball | `pdfcraft-<ver>-linux-x86_64.tar.gz` | Unpack anywhere |

Every format also has an ARM64 build (`aarch64` in place of `x86_64`). There are RISC-V builds too: a `.deb`, a `.rpm` and a tarball (`riscv64`). You can also install and update through the [ArtCraft Linux repositories](https://getartcraft.com/linux).

The builds need glibc 2.35 or newer, as in Ubuntu 22.04 and later. The RISC-V builds need glibc 2.39 or newer. To print, install CUPS's command-line tools (`cups-client` on Debian and Ubuntu); without them, PdfCraft can still save to PDF from the Print dialog.

**Gentoo:** the community [::snakebyte overlay](https://github.com/switch87/snakebyte-overlay) has `app-text/pdfcraft-bin`. It is not maintained by the PdfCraft team.

### FreeBSD

Download `pdfcraft-<ver>-freebsd-x86_64.tar.gz` (or `freebsd-aarch64`) and unpack it.

### In a browser

`pdfcraft-web-<ver>.zip` is the web version. Unpack it onto any web server and open it in a modern browser. It can't check for updates or recover unsaved work after a crash.

## Update

PdfCraft checks for updates when it starts, and tells you when one is out. To check yourself, choose **Help › Check for updates…**. To stop the check at start, turn off **Check for updates when PdfCraft starts** in **Edit › Preferences…**. Your settings are kept outside the app's folder, so updating keeps them.

- **ArtCraft Launcher**: tells you about new versions and updates PdfCraft for you.
- **Installer, DMG, `.deb`, `.rpm`, `.pkg.tar.zst`**: install the new version over the old one, or update through the [Linux repositories](https://getartcraft.com/linux).
- **AppImage**: run [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate) on it, or download the new one.
- **Flatpak, tarball, portable zip**: download the new version and replace the old one. For the portable zip, keep the `PdfCraftData` folder to keep your settings.

## Uninstall

- **Windows**: in **Settings › Apps**, find PdfCraft and choose **Uninstall**. For the portable zip, delete its folder.
- **macOS**: move **PdfCraft** from Applications to the Trash.
- **Linux**: remove the package with your package manager, run `flatpak uninstall ai.storyteller.pdfcraft` for the Flatpak, or delete the AppImage or the unpacked tarball.

Your PDFs are not touched. Settings stay in PdfCraft's folders (see [Find the log](/apps/pdfcraft/troubleshooting/#find-the-log) for where they are); delete them to remove your settings too.
