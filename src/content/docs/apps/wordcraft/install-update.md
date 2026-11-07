---
title: Install and update
description: Download WordCraft for Windows, macOS, Linux or FreeBSD, and keep it up to date.
sidebar:
  order: 2
---

## With ArtCraft Launcher

[ArtCraft Launcher](https://github.com/storytold/craft-launcher) installs, updates and opens every app in the Craft App Suite, WordCraft included. It picks the right build for your system and processor, checks it against the release's SHA-256 checksums before installing it, and tells you when an update is out.

Download it from its [latest release](https://github.com/storytold/craft-launcher/releases/latest), then press **Install** on WordCraft's card.

## By hand

Every build is on WordCraft's [latest release](https://github.com/storytold/wordcraft/releases/latest) page; [all releases](https://github.com/storytold/wordcraft/releases) has earlier versions and their notes. In the file names below, `<ver>` is the version number. `SHA256SUMS.txt` lists a checksum for every file.

### Windows

| Your PC | Installer | Portable |
| --- | --- | --- |
| Most PCs (64-bit Intel or AMD) | `wordcraft-<ver>-windows-x64.msi` | `wordcraft-<ver>-windows-x64-portable.zip` |
| ARM PCs, such as Snapdragon | `wordcraft-<ver>-windows-arm64.msi` | `wordcraft-<ver>-windows-arm64-portable.zip` |
| 32-bit Windows | `wordcraft-<ver>-windows-x86.msi` | `wordcraft-<ver>-windows-x86-portable.zip` |

By default, the installer installs WordCraft for your account only and doesn't need administrator rights. To install it for everyone on the computer, choose **Everyone on this computer** on the first page; this asks for an administrator. You can only have one copy installed, so to switch between the two, uninstall first.

The installers and programs are code-signed.

### macOS

Download `wordcraft-<ver>-macos-universal.dmg`, open it, and drag **WordCraft** to Applications. It runs on Apple silicon and Intel Macs, and is signed and notarized by Apple.

### Linux

| Format | File | Notes |
| --- | --- | --- |
| AppImage | `wordcraft-<ver>-linux-x86_64.AppImage` | Runs on most distributions; no install needed |
| Flatpak | `wordcraft-<ver>-linux-x86_64.flatpak` | Install with `flatpak install --user <file>` |
| Debian, Ubuntu | `wordcraft-<ver>-linux-x86_64.deb` | |
| Fedora, RHEL, openSUSE | `wordcraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux | `wordcraft-<ver>-linux-x86_64.pkg.tar.zst` | Install with `sudo pacman -U <file>` |
| Tarball | `wordcraft-<ver>-linux-x86_64.tar.gz` | Unpack anywhere |

Every format also has an ARM64 build (`aarch64` in place of `x86_64`). There are RISC-V builds too: a `.deb`, a `.rpm` and a tarball (`riscv64`), for Ubuntu 24.04, Debian 13 and newer. You can also install and update through the [ArtCraft Linux repositories](https://getartcraft.com/linux).

**Arch Linux:** community members maintain AUR packages. `wordcraft-bin` is the quickest, for example `yay -S wordcraft-bin`. `wordcraft` builds the latest release from source, and `wordcraft-git` builds the newest unreleased code.

**Gentoo:** the community [::snakebyte overlay](https://github.com/switch87/snakebyte-overlay) has `app-office/wordcraft-bin` and `app-office/wordcraft`.

Community packages are not maintained by the WordCraft team.

### FreeBSD

Download `wordcraft-<ver>-freebsd-x86_64.tar.gz` (or `freebsd-aarch64`) and unpack it.

### In a browser

`wordcraft-web-<ver>.zip` is the web version. Unpack it onto any web server and open it in a modern browser. The web version checks English spelling only, and can't connect to Zotero.

## Update

WordCraft checks for updates when it starts, and tells you when one is out. To check yourself, choose **Help › Check for Updates…**. Your settings are kept outside the app's folder, so updating keeps them.

- **ArtCraft Launcher**: tells you about new versions and updates WordCraft for you.
- **Installer, DMG, `.deb`, `.rpm`**: install the new version over the old one, or update through the [Linux repositories](https://getartcraft.com/linux).
- **AppImage**: run [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate) on it, or download the new one.
- **Flatpak, tarball, portable zip**: download the new version and replace the old one.

## Uninstall

- **Windows**: in **Settings › Apps**, find WordCraft and choose **Uninstall**. For the portable zip, delete its folder.
- **macOS**: move **WordCraft** from Applications to the Trash.
- **Linux**: remove the package with your package manager, run `flatpak uninstall ai.storyteller.wordcraft` for the Flatpak, or delete the AppImage or the unpacked tarball.

Your documents are not touched. Settings stay in WordCraft's settings folder (see [Find the log](/apps/wordcraft/troubleshooting/#find-the-log) for where it is); delete that folder to remove them too.
