---
title: Install and update
description: Download LightCraft for Windows, macOS, Linux or FreeBSD, and keep it up to date.
sidebar:
  order: 2
---

## With ArtCraft Launcher

[ArtCraft Launcher](https://github.com/storytold/craft-launcher) installs, updates and opens every app in the Craft App Suite, LightCraft included. It picks the right build for your system and processor, and tells you when an update is out.

Download it from its [latest release](https://github.com/storytold/craft-launcher/releases/latest), then press **Install** on LightCraft's card.

## By hand

Every build is on LightCraft's [latest release](https://github.com/storytold/lightcraft/releases/latest) page; [all releases](https://github.com/storytold/lightcraft/releases) has earlier versions and their notes. In the file names below, `<ver>` is the version number. `SHA256SUMS.txt` lists a checksum for every file.

### Windows

| Your PC | Installer | Portable |
| --- | --- | --- |
| Most PCs (64-bit Intel or AMD) | `lightcraft-<ver>-windows-x64.msi` | `lightcraft-<ver>-windows-x64-portable.zip` |
| ARM PCs, such as Snapdragon | `lightcraft-<ver>-windows-arm64.msi` | `lightcraft-<ver>-windows-arm64-portable.zip` |
| 32-bit Windows | `lightcraft-<ver>-windows-x86.msi` | `lightcraft-<ver>-windows-x86-portable.zip` |

The installer asks who to install LightCraft for. **Only for me** is the default: it needs no administrator rights and installs to `%LOCALAPPDATA%\Programs\ArtCraft\LightCraft`. **Everyone on this computer** asks for an administrator and installs to `C:\Program Files\ArtCraft\LightCraft`. Updates stay in the folder you chose.

The installers and programs are code-signed.

### macOS

Download `lightcraft-<ver>-macos-universal.dmg`, open it, and drag **LightCraft** to Applications. It runs on Apple silicon and Intel Macs, and is signed and notarized by Apple.

The command-line tool, `lightcraft-cli`, is a separate download on a Mac: `lightcraft-cli-<ver>-macos-universal.zip`. You only need it for [AI agents](/apps/lightcraft/ai-agents/) and scripting.

### Linux

| Format | File | Notes |
| --- | --- | --- |
| AppImage | `lightcraft-<ver>-linux-x86_64.AppImage` | Runs on most distributions; no install needed |
| Flatpak | `lightcraft-<ver>-linux-x86_64.flatpak` | Install with `flatpak install --user <file>` |
| Debian, Ubuntu | `lightcraft-<ver>-linux-x86_64.deb` | |
| Fedora, RHEL, openSUSE | `lightcraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux | `lightcraft-<ver>-linux-x86_64.pkg.tar.zst` | Install with `sudo pacman -U <file>` |
| Tarball | `lightcraft-<ver>-linux-x86_64.tar.gz` | Unpack anywhere |

Every format also has an ARM64 build (`aarch64` in place of `x86_64`). There are RISC-V builds too (`riscv64`), as a tarball, `.deb` and `.rpm`, for Ubuntu 24.04, Debian 13 and newer.

**Nix:** `nix run github:storytold/lightcraft` runs the desktop app. The repository's README explains how to add it to a NixOS or home-manager configuration.

### FreeBSD

Download `lightcraft-<ver>-freebsd-x86_64.tar.gz` (or `freebsd-aarch64` for ARM) and unpack it.

### In a browser

`lightcraft-web-<ver>.zip` is the web version. Unpack it onto any web server and open it in a modern browser. The web version keeps its library in the browser, and can't import a Lightroom catalog.

## Update

LightCraft checks for updates when it starts, and tells you when one is out. To check yourself, choose **Help › Check for Updates…**. Depending on how you installed it, LightCraft either updates itself and restarts, or offers you the download.

- **ArtCraft Launcher**: tells you about new versions and updates LightCraft for you.
- **Installer, DMG, `.deb`, `.rpm`, Arch package**: install the new version over the old one.
- **AppImage**: run [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate) on it, or download the new one.
- **Flatpak, tarball, portable zip**: download the new version and replace the old one.

Your library is kept outside the app's folder, so updating keeps it. If there is a `LightCraftData` folder beside a portable copy, it holds that copy's settings: keep it when you replace the program.

:::note
After an update, photos that opened as **Preview only** don't change by themselves. Select them and choose **Photo › Reload from Disk**. See [Troubleshooting](/apps/lightcraft/troubleshooting/#a-raw-photo-opens-as-preview-only).
:::

## Uninstall

- **Windows**: in **Settings › Apps**, find LightCraft and choose **Uninstall**. For the portable zip, delete its folder.
- **macOS**: move **LightCraft** from Applications to the Trash.
- **Linux**: remove the package with your package manager, run `flatpak uninstall ai.storyteller.lightcraft` for the Flatpak, or delete the AppImage or the unpacked tarball.

Your photos and your library are not touched. Settings stay in LightCraft's settings folder (see [Find the log](/apps/lightcraft/troubleshooting/#find-the-log) for where it is); delete that folder to remove them too.
