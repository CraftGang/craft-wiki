---
title: Install and update
description: Download PhotoCraft for Windows, macOS, Linux, FreeBSD or the web, and keep it up to date.
sidebar:
  order: 2
---

## With ArtCraft Launcher

[ArtCraft Launcher](https://github.com/storytold/craft-launcher) installs, updates and opens every app in the Craft App Suite, PhotoCraft included. It picks the right build for your system and processor, checks it against the release's SHA-256 checksums before installing it, and tells you when an update is out.

Download it from its [latest release](https://github.com/storytold/craft-launcher/releases/latest), then press **Install** on PhotoCraft's card.

## By hand

Every build is on PhotoCraft's [latest release](https://github.com/storytold/photocraft/releases/latest) page; [all releases](https://github.com/storytold/photocraft/releases) has earlier versions and their notes. In the file names below, `<ver>` is the version number. `SHA256SUMS.txt` lists a checksum for every file.

### Windows

| Your PC | Installer | Portable |
| --- | --- | --- |
| Most PCs (64-bit Intel or AMD) | `photocraft-<ver>-windows-x64.msi` | `photocraft-<ver>-windows-x64-portable.zip` |
| ARM PCs, such as Snapdragon | `photocraft-<ver>-windows-arm64.msi` | `photocraft-<ver>-windows-arm64-portable.zip` |
| 32-bit Windows | `photocraft-<ver>-windows-x86.msi` | `photocraft-<ver>-windows-x86-portable.zip` |

By default, the installer installs PhotoCraft for your account only and doesn't need administrator rights. To install it for everyone on the computer, choose **Everyone on this computer** on the first page; this asks for an administrator. You can only have one copy installed, so to switch between the two, uninstall first.

The portable zip runs without installing. It keeps its settings in a `PhotoCraftData` folder next to the program, so you can carry it on a USB stick.

The installers and programs are code-signed.

### macOS

Download `photocraft-<ver>-macos-universal.dmg`, open it, and drag **PhotoCraft** to Applications. It runs on Apple silicon and Intel Macs, and is signed and notarized by Apple.

The command-line tool comes separately, as `photocraft-cli-<ver>-macos-universal.zip`. See [Automation and AI agents](/apps/photocraft/automation/).

### Linux

| Format | File | Notes |
| --- | --- | --- |
| AppImage | `photocraft-<ver>-linux-x86_64.AppImage` | Runs on most distributions; no install needed |
| Flatpak | `photocraft-<ver>-linux-x86_64.flatpak` | Install with `flatpak install --user <file>` |
| Debian, Ubuntu | `photocraft-<ver>-linux-x86_64.deb` | |
| Fedora, RHEL, openSUSE | `photocraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux | `photocraft-<ver>-linux-x86_64.pkg.tar.zst` | Install with `sudo pacman -U <file>` |
| Tarball | `photocraft-<ver>-linux-x86_64.tar.gz` | Unpack anywhere |

Every format also has an ARM64 build (`aarch64` in place of `x86_64`). For RISC-V there is a `riscv64` `.deb`, `.rpm` and tarball. The RISC-V tarball needs glibc 2.39 or newer, as on Ubuntu 24.04.

The first time you run the AppImage, it adds PhotoCraft's icon and menu entry under `~/.local/share`. Set `PHOTOCRAFT_NO_DESKTOP_INTEGRATION=1` to skip that.

The Flatpak needs the freedesktop runtime from [Flathub](https://flathub.org/setup); `flatpak` offers to install it for you. Start it with `flatpak run ai.storyteller.photocraft`.

**Gentoo:** the community [::snakebyte overlay](https://github.com/switch87/snakebyte-overlay) has `media-gfx/photocraft-bin`. It is not maintained by the PhotoCraft team.

### FreeBSD

Download `photocraft-<ver>-freebsd-x86_64.tar.gz` (or `freebsd-aarch64` for ARM). The tarball is laid out like `/usr/local`. Install the libraries it needs, then unpack it there:

```bash
pkg install libxkbcommon wayland libX11 libXcursor libXrandr libXi libxcb mesa-libs vulkan-loader gtk3 fontconfig freetype2 alsa-lib
tar -xzf photocraft-<ver>-freebsd-x86_64.tar.gz --strip-components 1 -C /usr/local
```

### In a browser

`photocraft-web-<ver>.zip` is the web version. Unpack it onto any web server and open it in a modern browser.

## Update

PhotoCraft checks for a new version when it starts, and tells you when one is out. Only public release information is requested; nothing about you or your documents is sent. To check yourself, choose **Help › Check for Updates…**. To stop the check at startup, turn off **Automatically Check for Updates** in **Edit › Preferences › Settings…** (on a Mac, **PhotoCraft › Settings**).

- **ArtCraft Launcher**: tells you about new versions and updates PhotoCraft for you.
- **Installer, DMG, `.deb`, `.rpm`, Arch package**: install the new version over the old one.
- **AppImage**: run [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate) on it, or download the new one.
- **Flatpak, tarball, portable zip**: download the new version and replace the old one.

Your settings are kept outside the app's folder (except for the portable zip), so updating keeps them.

## Uninstall

- **Windows**: in **Settings › Apps**, find PhotoCraft and choose **Uninstall**. For the portable zip, delete its folder.
- **macOS**: move **PhotoCraft** from Applications to the Trash.
- **Linux**: remove the package with your package manager, run `flatpak uninstall ai.storyteller.photocraft` for the Flatpak, or delete the AppImage or the unpacked tarball.

Your images are not touched. Settings stay in PhotoCraft's settings folder (see [Find the log](/apps/photocraft/troubleshooting/#find-the-log) for where it is); delete that folder to remove them too.
