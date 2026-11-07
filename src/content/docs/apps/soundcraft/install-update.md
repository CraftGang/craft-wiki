---
title: Install and update
description: Download SoundCraft for Windows, macOS, Linux or FreeBSD, and keep it up to date.
sidebar:
  order: 2
---

## With ArtCraft Launcher

[ArtCraft Launcher](https://github.com/storytold/craft-launcher) installs, updates and opens every app in the Craft App Suite, SoundCraft included. It picks the right build for your system and processor, checks it against the release's SHA-256 checksums before installing it, and tells you when an update is out.

Download it from its [latest release](https://github.com/storytold/craft-launcher/releases/latest), then press **Install** on SoundCraft's card.

## By hand

Every build is on SoundCraft's [latest release](https://github.com/storytold/soundcraft/releases/latest) page; [all releases](https://github.com/storytold/soundcraft/releases) has earlier versions and their notes. In the file names below, `<ver>` is the version number. `SHA256SUMS.txt` lists a checksum for every file.

### Windows

| Your PC | Installer | Portable |
| --- | --- | --- |
| Most PCs (64-bit Intel or AMD) | `soundcraft-<ver>-windows-x64.msi` | `soundcraft-<ver>-windows-x64-portable.zip` |
| ARM PCs, such as Snapdragon | `soundcraft-<ver>-windows-arm64.msi` | `soundcraft-<ver>-windows-arm64-portable.zip` |
| 32-bit Windows | `soundcraft-<ver>-windows-x86.msi` | `soundcraft-<ver>-windows-x86-portable.zip` |

By default, the installer installs SoundCraft for your account only and doesn't need administrator rights. To install it for everyone on the computer, choose **Everyone on this computer** on the first page; this asks for an administrator. You can only have one copy installed, so to switch between the two, uninstall first.

The installers and programs are code-signed.

The portable zip needs no installing. It keeps its settings in your user profile, like the installed app. To keep them next to the app instead, put an empty file called `portable.txt` beside `soundcraft.exe`. SoundCraft then uses a `SoundCraftData` folder there.

### macOS

Download `soundcraft-<ver>-macos-universal.dmg`, open it, and drag **SoundCraft** to Applications. It runs on Apple silicon and Intel Macs with macOS 11 (Big Sur) or later, and is signed and notarized by Apple.

The first time you record, macOS asks whether SoundCraft may use the microphone. Allow it, or recording can't hear your input.

### Linux

| Format | File | Notes |
| --- | --- | --- |
| AppImage | `soundcraft-<ver>-linux-x86_64.AppImage` | Runs on most distributions; no install needed |
| Flatpak | `soundcraft-<ver>-linux-x86_64.flatpak` | Install with `flatpak install --user <file>` |
| Debian, Ubuntu | `soundcraft-<ver>-linux-x86_64.deb` | |
| Fedora, RHEL, openSUSE | `soundcraft-<ver>-linux-x86_64.rpm` | |
| Arch | `soundcraft-<ver>-linux-x86_64.pkg.tar.zst` | Install with `sudo pacman -U <file>` |
| Tarball | `soundcraft-<ver>-linux-x86_64.tar.gz` | Unpack anywhere |

Every format also has an ARM64 build (`aarch64` in place of `x86_64`). RISC-V (`riscv64`) has a `.deb`, an `.rpm` and a tarball, for Ubuntu 24.04 and newer. Apart from the Flatpak, the other builds need Ubuntu 22.04 or a distribution of the same age or newer.

For updates through your package manager, you can also add the [ArtCraft Linux repositories](https://getartcraft.com/linux).

### FreeBSD

Download `soundcraft-<ver>-freebsd-x86_64.tar.gz` (or `freebsd-aarch64`) and unpack it. Recording isn't supported on FreeBSD yet.

### In a browser

`soundcraft-web-<ver>.zip` is the web version. Unpack it onto any web server and open it in a modern browser. It starts with the demo song.

The web version can't load third-party plugins, and recording and choosing an audio device aren't supported there yet. It has no folders, so it saves a session and its audio as one `.scraftz` file, and every save, bounce or export arrives as a download. Browsers only start sound after you click, so you may need to click once before you hear anything.

## Update

SoundCraft checks for updates when it starts, and tells you when one is out. On Windows and Linux, you can also check yourself with **SoundCraft › Check for Updates**. Your settings are kept outside the app's folder, so updating keeps them.

- **ArtCraft Launcher**: tells you about new versions and updates SoundCraft for you.
- **Installer, DMG, `.deb`, `.rpm`, Arch package**: install the new version over the old one, or update through the [Linux repositories](https://getartcraft.com/linux).
- **AppImage**: run [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate) on it, or download the new one.
- **Flatpak, tarball, portable zip**: download the new version and replace the old one. If you use `portable.txt`, move the `SoundCraftData` folder next to the new copy.

## Uninstall

- **Windows**: in **Settings › Apps**, find SoundCraft and choose **Uninstall**. For the portable zip, delete its folder.
- **macOS**: move **SoundCraft** from Applications to the Trash.
- **Linux**: remove the package with your package manager, run `flatpak uninstall ai.storyteller.soundcraft` for the Flatpak, or delete the AppImage or the unpacked tarball.

Your sessions are not touched. Settings, autosaves, plugin presets and logs stay in SoundCraft's settings folder (see [Find the log](/apps/soundcraft/troubleshooting/#find-the-log) for where it is); delete that folder to remove them too.
