---
title: Install and update
description: Download CADCraft for Windows, macOS, Linux or FreeBSD, and keep it up to date.
sidebar:
  order: 2
---

## With ArtCraft Launcher

[ArtCraft Launcher](https://github.com/storytold/craft-launcher) installs, updates and opens every app in the Craft App Suite, CADCraft included. It picks the right build for your system and processor, checks it against the release's SHA-256 checksums before installing it, and tells you when an update is out.

Download it from its [latest release](https://github.com/storytold/craft-launcher/releases/latest), then press **Install** on CADCraft's card.

## By hand

Every build is on CADCraft's [latest release](https://github.com/storytold/cadcraft/releases/latest) page; [all releases](https://github.com/storytold/cadcraft/releases) has earlier versions and their notes. In the file names below, `<ver>` is the version number. `SHA256SUMS.txt` lists a checksum for every file.

:::caution
Only download CADCraft from [storytold/cadcraft](https://github.com/storytold/cadcraft/releases). Before you run a download, check that its checksum matches its line in `SHA256SUMS.txt`: `Get-FileHash <file>` in PowerShell, `shasum -a 256 <file>` on macOS, or `sha256sum <file>` on Linux.
:::

### Windows

| Your PC | Installer | Portable |
| --- | --- | --- |
| Most PCs (64-bit Intel or AMD) | `cadcraft-<ver>-windows-x64.msi` | `cadcraft-<ver>-windows-x64-portable.zip` |
| ARM PCs, such as Snapdragon | `cadcraft-<ver>-windows-arm64.msi` | `cadcraft-<ver>-windows-arm64-portable.zip` |
| 32-bit Windows | `cadcraft-<ver>-windows-x86.msi` | `cadcraft-<ver>-windows-x86-portable.zip` |

By default, the installer installs CADCraft for your account only and doesn't need administrator rights. To install it for everyone on the computer, choose **Everyone on this computer** on the first page; this asks for an administrator. You can only have one copy installed, so to switch between the two, uninstall first.

The installer adds CADCraft to the Start menu. Tick **Create a desktop shortcut** if you want one too.

The installers and programs are code-signed.

### macOS

Download `cadcraft-<ver>-macos-universal.dmg`, open it, and drag **CADCraft** to Applications. It runs on Apple silicon and Intel Macs, and is signed and notarized by Apple.

The command-line tool, `cadcraft-cli`, is a separate download: `cadcraft-cli-<ver>-macos-universal.zip`. You only need it to [automate CADCraft](/apps/cadcraft/automation/).

### Linux

| Format | File | Notes |
| --- | --- | --- |
| AppImage | `cadcraft-<ver>-linux-x86_64.AppImage` | Runs on most distributions; no install needed |
| Flatpak | `cadcraft-<ver>-linux-x86_64.flatpak` | Install with `flatpak install --user <file>` |
| Debian, Ubuntu | `cadcraft-<ver>-linux-x86_64.deb` | |
| Fedora, RHEL, openSUSE | `cadcraft-<ver>-linux-x86_64.rpm` | |
| Tarball | `cadcraft-<ver>-linux-x86_64.tar.gz` | Unpack anywhere |

Every format also has an ARM64 build (`aarch64` in place of `x86_64`). There is a RISC-V tarball too, for Ubuntu 24.04, Debian 13 and newer. You can also install and update through the [ArtCraft Linux repositories](https://getartcraft.com/linux).

### FreeBSD

Download `cadcraft-<ver>-freebsd-x86_64.tar.gz` and unpack it.

### In a browser

`cadcraft-web-<ver>.zip` is the web version. Unpack it onto any web server and open it in a modern browser. The web version can't open or save DWG files (use DXF), and doesn't autosave.

## Update

CADCraft checks for updates when it starts, and tells you when one is out. To check yourself, choose **Help › Check for Updates…**. Your settings are kept outside the app's folder, so updating keeps them.

- **ArtCraft Launcher**: tells you about new versions and updates CADCraft for you.
- **Installer, DMG, `.deb`, `.rpm`**: install the new version over the old one, or update through the [Linux repositories](https://getartcraft.com/linux).
- **AppImage**: run [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate) on it, or download the new one.
- **Flatpak, tarball, portable zip**: download the new version and replace the old one.

## Uninstall

- **Windows**: in **Settings › Apps**, find CADCraft and choose **Uninstall**. For the portable zip, delete its folder.
- **macOS**: move **CADCraft** from Applications to the Trash.
- **Linux**: remove the package with your package manager, run `flatpak uninstall ai.storyteller.cadcraft` for the Flatpak, or delete the AppImage or the unpacked tarball.

Your drawings are not touched. Settings stay in CADCraft's settings folder (see [Find the log](/apps/cadcraft/troubleshooting/#find-the-log) for where it is); delete that folder to remove them too.
