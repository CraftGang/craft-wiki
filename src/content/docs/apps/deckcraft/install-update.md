---
title: Install and update
description: Download DeckCraft for Windows, macOS, Linux or FreeBSD, use it in a browser, and keep it up to date.
sidebar:
  order: 2
---

## With ArtCraft Launcher

[ArtCraft Launcher](https://github.com/storytold/craft-launcher) installs, updates and opens every app in the Craft App Suite, DeckCraft included. It picks the right build for your system and processor, and tells you when an update is out.

Download it from its [latest release](https://github.com/storytold/craft-launcher/releases/latest), then press **Install** on DeckCraft's card.

## By hand

Every build is on DeckCraft's [latest release](https://github.com/storytold/deckcraft/releases/latest) page; [all releases](https://github.com/storytold/deckcraft/releases) has earlier versions and their notes. In the file names below, `<ver>` is the version number. `SHA256SUMS.txt` lists a checksum for every file.

### Windows

| Your PC | Installer | Portable |
| --- | --- | --- |
| Most PCs (64-bit Intel or AMD) | `deckcraft-<ver>-windows-x64.msi` | `deckcraft-<ver>-windows-x64-portable.zip` |
| ARM PCs, such as Snapdragon | `deckcraft-<ver>-windows-arm64.msi` | `deckcraft-<ver>-windows-arm64-portable.zip` |
| 32-bit Windows | `deckcraft-<ver>-windows-x86.msi` | `deckcraft-<ver>-windows-x86-portable.zip` |

The installer's first page asks who to install DeckCraft for. **Only for me** is the default and doesn't need administrator rights. **Everyone on this computer** asks for an administrator. You can only have one copy installed, so to switch between the two, uninstall first.

### macOS

Download `deckcraft-<ver>-macos-universal.dmg`, open it, and drag **DeckCraft** to Applications. It runs on Apple silicon and Intel Macs, macOS 11 or later.

### Linux

| Format | File | Notes |
| --- | --- | --- |
| AppImage | `deckcraft-<ver>-linux-x86_64.AppImage` | Runs on most distributions; no install needed |
| Flatpak | `deckcraft-<ver>-linux-x86_64.flatpak` | Install with `flatpak install --user <file>` |
| Debian, Ubuntu | `deckcraft-<ver>-linux-x86_64.deb` | |
| Fedora, RHEL, openSUSE | `deckcraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux | `deckcraft-<ver>-linux-x86_64.pkg.tar.zst` | Install with `sudo pacman -U <file>` |
| Tarball | `deckcraft-<ver>-linux-x86_64.tar.gz` | Unpack anywhere |

Every format also has an ARM64 build (`aarch64` in place of `x86_64`). There are RISC-V builds too: a `.deb`, a `.rpm` and a tarball (`riscv64`). You can also install and update through the [ArtCraft Linux repositories](https://getartcraft.com/linux).

The builds need glibc 2.35 or newer, as in Ubuntu 22.04 and later. If you install the tarball, see [It won't start on Linux](/apps/deckcraft/troubleshooting/#it-wont-start-on-linux) for the libraries it needs.

**Gentoo**: the community [::snakebyte overlay](https://github.com/switch87/snakebyte-overlay) has `app-office/deckcraft-bin`. It is not maintained by the DeckCraft team.

### FreeBSD

Download `deckcraft-<ver>-freebsd-x86_64.tar.gz` (or `freebsd-aarch64`) and unpack it.

### In a browser

`deckcraft-web-<ver>.zip` is the web version. Unpack it onto any web server and open it in a modern browser. It can't check for updates.

## Update

DeckCraft checks for updates when it starts, and offers to update and restart when one is out. To check yourself, press **Ctrl+Shift+P** (**⇧⌘P** on a Mac) and run **Check for Updates…**. On a Mac it is also in the **Help** menu. Your settings are kept outside the app's folder, so updating keeps them.

- **ArtCraft Launcher**: tells you about new versions and updates DeckCraft for you.
- **Installer, DMG, `.deb`, `.rpm`, `.pkg.tar.zst`**: install the new version over the old one, or update through the [Linux repositories](https://getartcraft.com/linux).
- **AppImage**: run [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate) on it, or download the new one.
- **Flatpak, tarball, portable zip**: download the new version and replace the old one.

## Uninstall

- **Windows**: in **Settings › Apps**, find DeckCraft and choose **Uninstall**. For the portable zip, delete its folder.
- **macOS**: move **DeckCraft** from Applications to the Trash.
- **Linux**: remove the package with your package manager, run `flatpak uninstall ai.storyteller.deckcraft` for the Flatpak, or delete the AppImage or the unpacked tarball.

Your presentations are not touched. Settings stay in DeckCraft's settings folder (see [Find the log](/apps/deckcraft/troubleshooting/#find-the-log) for where it is); delete that folder to remove them too.
