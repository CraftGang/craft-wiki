---
title: Install and update
description: Download VectorCraft for Windows, macOS, Linux or FreeBSD, use it in a browser, and keep it up to date.
sidebar:
  order: 2
---

## With ArtCraft Launcher

[ArtCraft Launcher](https://github.com/storytold/craft-launcher) installs, updates and opens every app in the Craft App Suite, VectorCraft included. It picks the right build for your system and processor, checks it against the release's SHA-256 checksums before installing it, and tells you when an update is out.

Download it from its [latest release](https://github.com/storytold/craft-launcher/releases/latest), then press **Install** on VectorCraft's card.

## By hand

Every build is on VectorCraft's [latest release](https://github.com/storytold/vectorcraft/releases/latest) page; [all releases](https://github.com/storytold/vectorcraft/releases) has earlier versions and their notes. In the file names below, `<ver>` is the version number. `SHA256SUMS.txt` lists a checksum for every file.

### Windows

| Your PC | Installer | Portable |
| --- | --- | --- |
| Most PCs (64-bit Intel or AMD) | `vectorcraft-<ver>-windows-x64.msi` | `vectorcraft-<ver>-windows-x64-portable.zip` |
| ARM PCs, such as Snapdragon | `vectorcraft-<ver>-windows-arm64.msi` | `vectorcraft-<ver>-windows-arm64-portable.zip` |
| 32-bit Windows | `vectorcraft-<ver>-windows-x86.msi` | `vectorcraft-<ver>-windows-x86-portable.zip` |

By default, the installer installs VectorCraft for your account only and doesn't need administrator rights. To install it for everyone on the computer, choose **Everyone on this computer** on the first page; this asks for an administrator. You can only have one copy installed, so to switch between the two, uninstall first.

The portable zip runs from any folder. While the `portable.txt` file sits next to `vectorcraft.exe`, VectorCraft keeps its settings, recovery copies and logs in a `VectorCraftData` folder beside it, so you can carry the whole folder to another computer.

The installers and programs are code-signed.

### macOS

Download `vectorcraft-<ver>-macos-universal.dmg`, open it, and drag **VectorCraft** to Applications. It runs on Apple silicon and Intel Macs with macOS 11 or later, and is signed and notarized by Apple.

### Linux

| Format | File | Notes |
| --- | --- | --- |
| AppImage | `vectorcraft-<ver>-linux-x86_64.AppImage` | Runs on most distributions; no install needed |
| Flatpak | `vectorcraft-<ver>-linux-x86_64.flatpak` | Install with `flatpak install --user <file>` |
| Debian, Ubuntu | `vectorcraft-<ver>-linux-x86_64.deb` | |
| Fedora, RHEL, openSUSE | `vectorcraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux | `vectorcraft-<ver>-linux-x86_64.pkg.tar.zst` | Install with `sudo pacman -U <file>` |
| Tarball | `vectorcraft-<ver>-linux-x86_64.tar.gz` | Unpack anywhere |

Every format also has an ARM64 build (`aarch64` in place of `x86_64`). For RISC-V there is a `.deb`, an `.rpm` and a tarball (`riscv64`).

### FreeBSD

Download `vectorcraft-<ver>-freebsd-x86_64.tar.gz` (or `freebsd-aarch64` for ARM) and unpack it.

### In a browser

`vectorcraft-web-<ver>.zip` is the web version. Unpack it onto any web server and open it in a modern browser. Serve it over `https://` (or from `localhost`) so it can use the graphics card and the clipboard.

In the web version, saving and exporting download the file, and printing goes through the browser's print dialog. It doesn't check for updates.

## Update

VectorCraft checks for updates when it starts, and tells you when one is out. To check yourself, choose **Help › Check for Updates**. Your settings are kept outside the app's folder, so updating keeps them.

- **ArtCraft Launcher**: tells you about new versions and updates VectorCraft for you.
- **Installer, DMG, `.deb`, `.rpm`, Arch package**: install the new version over the old one.
- **AppImage**: run [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate) on it, or download the new one.
- **Flatpak, tarball, portable zip**: download the new version and replace the old one. For the portable zip, keep the `VectorCraftData` folder to keep your settings.

## Uninstall

- **Windows**: in **Settings › Apps**, find VectorCraft and choose **Uninstall**. For the portable zip, delete its folder.
- **macOS**: move **VectorCraft** from Applications to the Trash.
- **Linux**: remove the package with your package manager, run `flatpak uninstall ai.storyteller.vectorcraft` for the Flatpak, or delete the AppImage or the unpacked tarball.

Your drawings are not touched. Settings stay in VectorCraft's settings folder (see [Find the log](/apps/vectorcraft/troubleshooting/#find-the-log) for where it is); delete that folder to remove them too.
