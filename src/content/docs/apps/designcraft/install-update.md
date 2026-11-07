---
title: Install and update
description: Download DesignCraft for Windows, macOS, Linux or FreeBSD, or run it in a browser, and keep it up to date.
sidebar:
  order: 2
---

## With ArtCraft Launcher

[ArtCraft Launcher](https://github.com/storytold/craft-launcher) installs, updates and opens every app in the Craft App Suite, DesignCraft included. It picks the right build for your system and processor, checks it against the release's SHA-256 checksums before installing it, and tells you when an update is out.

Download it from its [latest release](https://github.com/storytold/craft-launcher/releases/latest), then press **Install** on DesignCraft's card.

## By hand

Every build is on DesignCraft's [latest release](https://github.com/storytold/designcraft/releases/latest) page; [all releases](https://github.com/storytold/designcraft/releases) has earlier versions and their notes. In the file names below, `<ver>` is the version number. `SHA256SUMS.txt` lists a checksum for every file.

### Windows

| Your PC | Installer | Portable |
| --- | --- | --- |
| Most PCs (64-bit Intel or AMD) | `designcraft-<ver>-windows-x64.msi` | `designcraft-<ver>-windows-x64-portable.zip` |
| ARM PCs, such as Snapdragon | `designcraft-<ver>-windows-arm64.msi` | `designcraft-<ver>-windows-arm64-portable.zip` |
| 32-bit Windows | `designcraft-<ver>-windows-x86.msi` | `designcraft-<ver>-windows-x86-portable.zip` |

By default, the installer installs DesignCraft for your account only and doesn't need administrator rights. To install it for everyone on the computer, choose **Everyone on this computer** on the first page; this asks for an administrator. You can only have one copy installed, so to switch between the two, uninstall first.

The portable zip keeps its settings, logs and recovery data in a `DesignCraftData` folder next to the program, so you can carry it on a USB stick. Delete the `portable.txt` file beside the program to use your normal settings folder instead.

The installers and programs are code-signed.

### macOS

Download `designcraft-<ver>-macos-universal.dmg`, open it, and drag **DesignCraft** to Applications. It runs on Apple silicon and Intel Macs, and is signed and notarized by Apple.

### Linux

| Format | File | Notes |
| --- | --- | --- |
| AppImage | `designcraft-<ver>-linux-x86_64.AppImage` | Runs on most distributions; no install needed |
| Flatpak | `designcraft-<ver>-linux-x86_64.flatpak` | Install with `flatpak install --user <file>` |
| Debian, Ubuntu | `designcraft-<ver>-linux-x86_64.deb` | |
| Fedora, RHEL, openSUSE | `designcraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux, Manjaro | `designcraft-<ver>-linux-x86_64.pkg.tar.zst` | Install with `sudo pacman -U <file>` |
| Tarball | `designcraft-<ver>-linux-x86_64.tar.gz` | Unpack anywhere |

Every format also has an ARM64 build (`aarch64` in place of `x86_64`). For RISC-V there is a `.deb`, an `.rpm` and a tarball, with `riscv64` in the name. The RISC-V build needs Ubuntu 24.04, or another system with glibc 2.39 or newer.

**Gentoo:** the community [::snakebyte overlay](https://github.com/switch87/snakebyte-overlay) has `media-gfx/designcraft-bin` and `media-gfx/designcraft`. It is not maintained by the DesignCraft team.

### FreeBSD

Download `designcraft-<ver>-freebsd-x86_64.tar.gz` (or `freebsd-aarch64` for ARM) and unpack it.

### In a browser

`designcraft-web-<ver>.zip` is the web version. Unpack it onto any web server and open it in a modern browser. It uses WebGPU, or WebGL2 where WebGPU isn't available. **Open** and **Place** use the browser's file picker, and **Save** and exports download the file. It can't be driven by AI assistants.

## Update

DesignCraft checks for updates when it starts, and tells you when one is out. To check yourself, choose **Help › Check for Updates…** (on a Mac, **DesignCraft › Check for Updates…**). Your settings are kept outside the app's folder, so updating keeps them.

- **ArtCraft Launcher**: tells you about new versions and updates DesignCraft for you.
- **Installer, DMG, `.deb`, `.rpm`, Arch package**: install the new version over the old one.
- **AppImage**: run [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate) on it, or download the new one.
- **Flatpak, tarball, portable zip**: download the new version and replace the old one. For the portable zip, keep its `DesignCraftData` folder.

## Uninstall

- **Windows**: in **Settings › Apps**, find DesignCraft and choose **Uninstall**. For the portable zip, delete its folder.
- **macOS**: move **DesignCraft** from Applications to the Trash.
- **Linux**: remove the package with your package manager, run `flatpak uninstall ai.storyteller.designcraft` for the Flatpak, or delete the AppImage or the unpacked tarball.

Your documents are not touched. Settings stay in DesignCraft's settings folder (see [Find the log](/apps/designcraft/troubleshooting/#find-the-log) for where it is); delete that folder to remove them too.
