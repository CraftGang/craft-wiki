---
title: Install and update
description: Download MaterialCraft for Windows, macOS, Linux or FreeBSD, run it in a browser, and keep it up to date.
sidebar:
  order: 2
---

## With ArtCraft Launcher

[ArtCraft Launcher](https://github.com/storytold/craft-launcher) installs, updates and opens every app in the Craft App Suite, MaterialCraft included. It picks the right build for your system and processor, and tells you when an update is out.

Download it from its [latest release](https://github.com/storytold/craft-launcher/releases/latest), then press **Install** on MaterialCraft's card.

## By hand

Every build is on MaterialCraft's [latest release](https://github.com/storytold/materialcraft/releases/latest) page; [all releases](https://github.com/storytold/materialcraft/releases) has earlier versions and their notes. In the file names below, `<ver>` is the version number. `SHA256SUMS.txt` lists a checksum for every file.

Every desktop build comes with the command-line tool, `materialcraft-cli`, next to the app. On macOS it is a separate download.

### Windows

| Your PC | Installer | Portable |
| --- | --- | --- |
| Most PCs (64-bit Intel or AMD) | `materialcraft-<ver>-windows-x64.msi` | `materialcraft-<ver>-windows-x64-portable.zip` |
| ARM PCs, such as Snapdragon | `materialcraft-<ver>-windows-arm64.msi` | `materialcraft-<ver>-windows-arm64-portable.zip` |
| 32-bit Windows | `materialcraft-<ver>-windows-x86.msi` | `materialcraft-<ver>-windows-x86-portable.zip` |

The installer installs MaterialCraft for everyone on the computer, into `Program Files`, so Windows asks for administrator permission. It adds MaterialCraft to the Start menu. The portable zip needs no install: unpack it and run `materialcraft.exe`.

### macOS

Download `materialcraft-<ver>-macos-universal.dmg`, open it, and drag **MaterialCraft** to Applications. It runs on Apple silicon and Intel Macs.

The command-line tool is `materialcraft-cli-<ver>-macos-universal.zip`.

### Linux

| Format | File | Notes |
| --- | --- | --- |
| AppImage | `materialcraft-<ver>-linux-x86_64.AppImage` | Runs on most distributions; no install needed |
| Flatpak | `materialcraft-<ver>-linux-x86_64.flatpak` | Install with `flatpak install --user <file>` |
| Debian, Ubuntu | `materialcraft-<ver>-linux-x86_64.deb` | |
| Fedora, RHEL, openSUSE | `materialcraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux | `materialcraft-<ver>-linux-x86_64.pkg.tar.zst` | Install with `sudo pacman -U <file>` |
| Tarball | `materialcraft-<ver>-linux-x86_64.tar.gz` | Unpack anywhere |

Every format also has an ARM64 build (`aarch64` in place of `x86_64`). There are RISC-V builds too (`riscv64`) as a `.deb`, an `.rpm` and a tarball. You can also install and update through the [ArtCraft Linux repositories](https://getartcraft.com/linux).

### FreeBSD

Download `materialcraft-<ver>-freebsd-x86_64.tar.gz` (or `freebsd-aarch64` for ARM) and unpack it.

### In a browser

`materialcraft-web-<ver>.zip` is the web version. Unpack it onto any web server and open it in a modern browser. Opening, saving and exporting go through your browser's downloads.

## Update

MaterialCraft doesn't check for updates itself.

- **ArtCraft Launcher**: tells you about new versions and updates MaterialCraft for you.
- **Installer, DMG, `.deb`, `.rpm`**: install the new version over the old one, or update through the [Linux repositories](https://getartcraft.com/linux).
- **AppImage**: run [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate) on it, or download the new one.
- **Flatpak, tarball, portable zip**: download the new version and replace the old one.

:::caution
Version 0.2 changed MaterialCraft's files. It saves .sbs packages and no longer opens the .mcraft packages of version 0.1. Portable .mcmat materials from 0.1 don't open either.
:::

## Uninstall

- **Windows**: in **Settings › Apps**, find MaterialCraft and choose **Uninstall**. For the portable zip, delete its folder.
- **macOS**: move **MaterialCraft** from Applications to the Trash.
- **Linux**: remove the package with your package manager, run `flatpak uninstall ai.storyteller.materialcraft` for the Flatpak, or delete the AppImage or the unpacked tarball.

Your packages are not touched. Autosaves stay in `Documents/MaterialCraft`; delete that folder to remove them too.
