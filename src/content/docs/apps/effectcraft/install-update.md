---
title: Install and update
description: Download EffectCraft for Windows, macOS, Linux or FreeBSD, run it in a browser, and keep it up to date.
sidebar:
  order: 2
---

## With ArtCraft Launcher

[ArtCraft Launcher](https://github.com/storytold/craft-launcher) installs, updates and opens every app in the Craft App Suite, EffectCraft included. It picks the right build for your system and processor, and tells you when an update is out.

Download it from its [latest release](https://github.com/storytold/craft-launcher/releases/latest), then press **Install** on EffectCraft's card.

## By hand

Every build is on EffectCraft's [latest release](https://github.com/storytold/effectcraft/releases/latest) page; [all releases](https://github.com/storytold/effectcraft/releases) has earlier versions and their notes. In the file names below, `<ver>` is the version number. `SHA256SUMS.txt` lists a checksum for every file.

Every desktop build comes with the command-line tool, `effectcraft-cli`, next to the app. On macOS it is a separate download.

### Windows

| Your PC | Installer | Portable |
| --- | --- | --- |
| Most PCs (64-bit Intel or AMD) | `effectcraft-<ver>-windows-x64.msi` | `effectcraft-<ver>-windows-x64-portable.zip` |
| ARM PCs, such as Snapdragon | `effectcraft-<ver>-windows-arm64.msi` | `effectcraft-<ver>-windows-arm64-portable.zip` |
| 32-bit Windows | `effectcraft-<ver>-windows-x86.msi` | `effectcraft-<ver>-windows-x86-portable.zip` |

The installer asks who to install EffectCraft for:

- **Only for me** installs it into `%LOCALAPPDATA%\Programs\ArtCraft\EffectCraft` and doesn't need administrator permission. This is the default.
- **Everyone on this computer** installs it into `C:\Program Files\ArtCraft\EffectCraft` and asks for an administrator.

It also offers a desktop shortcut. Later versions install into the same folder. The portable zip needs no install: unpack it and run `effectcraft.exe`.

### macOS

Download `effectcraft-<ver>-macos-universal.dmg`, open it, and drag **EffectCraft** to Applications. It runs on Apple silicon and Intel Macs.

The command-line tool is `effectcraft-cli-<ver>-macos-universal.zip`.

### Linux

| Format | File | Notes |
| --- | --- | --- |
| AppImage | `effectcraft-<ver>-linux-x86_64.AppImage` | Runs on most distributions; no install needed |
| Flatpak | `effectcraft-<ver>-linux-x86_64.flatpak` | Install with `flatpak install --user <file>` |
| Debian, Ubuntu | `effectcraft-<ver>-linux-x86_64.deb` | |
| Fedora, RHEL, openSUSE | `effectcraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux | `effectcraft-<ver>-linux-x86_64.pkg.tar.zst` | Install with `sudo pacman -U <file>` |
| Tarball | `effectcraft-<ver>-linux-x86_64.tar.gz` | Unpack anywhere |

Every format also has an ARM64 build (`aarch64` in place of `x86_64`). There are RISC-V builds too (`riscv64`) as a `.deb`, an `.rpm` and a tarball; they need Ubuntu 24.04, Debian 13 or newer. You can also install and update through the [ArtCraft Linux repositories](https://getartcraft.com/linux).

Gentoo: the community [::snakebyte overlay](https://github.com/switch87/snakebyte-overlay) has `media-video/effectcraft-bin`. It is not maintained by the EffectCraft team.

### FreeBSD

Download `effectcraft-<ver>-freebsd-x86_64.tar.gz` (or `freebsd-aarch64` for ARM) and unpack it.

### In a browser

`effectcraft-web-<ver>.zip` is the web version. Unpack it onto any web server and open it in a modern browser. Your projects, media and settings stay in the browser's storage on your computer.

## Update

EffectCraft looks for a new version when it starts, and tells you when one is out. Your settings are kept outside the app's folder, so updating keeps them.

- **ArtCraft Launcher**: tells you about new versions and updates EffectCraft for you.
- **Installer, DMG, `.deb`, `.rpm`**: install the new version over the old one, or update through the [Linux repositories](https://getartcraft.com/linux).
- **AppImage**: run [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate) on it, or download the new one.
- **Flatpak, tarball, portable zip**: download the new version and replace the old one.

## Uninstall

- **Windows**: in **Settings › Apps**, find EffectCraft and choose **Uninstall**. For the portable zip, delete its folder.
- **macOS**: move **EffectCraft** from Applications to the Trash.
- **Linux**: remove the package with your package manager, run `flatpak uninstall ai.storyteller.effectcraft` for the Flatpak, or delete the AppImage or the unpacked tarball.

Your projects and footage are not touched.
