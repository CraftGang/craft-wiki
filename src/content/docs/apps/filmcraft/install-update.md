---
title: Install and update
description: Download FilmCraft for Windows, macOS, Linux or FreeBSD, and keep it up to date.
sidebar:
  order: 2
---

## With ArtCraft Launcher

[ArtCraft Launcher](https://github.com/storytold/craft-launcher) installs, updates and opens every app in the Craft App Suite, FilmCraft included. It picks the right build for your system and processor, and tells you when an update is out.

Download it from its [latest release](https://github.com/storytold/craft-launcher/releases/latest), then press **Install** on FilmCraft's card.

## By hand

Every build is on FilmCraft's [latest release](https://github.com/storytold/filmcraft/releases/latest) page; [all releases](https://github.com/storytold/filmcraft/releases) has earlier versions and their notes. In the file names below, `<ver>` is the version number. `SHA256SUMS.txt` lists a checksum for every file.

### Windows

| Your PC | Installer | Portable |
| --- | --- | --- |
| Most PCs (64-bit Intel or AMD) | `filmcraft-<ver>-windows-x64.msi` | `filmcraft-<ver>-windows-x64-portable.zip` |
| ARM PCs, such as Snapdragon | `filmcraft-<ver>-windows-arm64.msi` | `filmcraft-<ver>-windows-arm64-portable.zip` |
| 32-bit Windows | `filmcraft-<ver>-windows-x86.msi` | `filmcraft-<ver>-windows-x86-portable.zip` |

The installers and programs are code-signed.

### macOS

Download `filmcraft-<ver>-macos-universal.dmg`, open it, and drag **FilmCraft** to Applications. It runs on Apple silicon and Intel Macs, and is signed and notarized by Apple.

The command-line tool, `filmcraft-cli`, is a separate download on a Mac: `filmcraft-cli-<ver>-macos-universal.zip`. You only need it for [AI agents](/apps/filmcraft/ai-agents/) and scripting.

### Linux

| Format | File | Notes |
| --- | --- | --- |
| AppImage | `filmcraft-<ver>-linux-x86_64.AppImage` | Runs on most distributions; no install needed |
| Flatpak | `filmcraft-<ver>-linux-x86_64.flatpak` | Install with `flatpak install --user <file>` |
| Debian, Ubuntu | `filmcraft-<ver>-linux-x86_64.deb` | |
| Fedora, RHEL, openSUSE | `filmcraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux | `filmcraft-<ver>-linux-x86_64.pkg.tar.zst` | Install with `sudo pacman -U <file>` |
| Tarball | `filmcraft-<ver>-linux-x86_64.tar.gz` | Unpack, then run `./install.sh` |

Every format also has an ARM64 build (`aarch64` in place of `x86_64`). There are RISC-V builds too (`riscv64`), as a tarball, `.deb` and `.rpm`, for Ubuntu 24.04, Debian 13 and newer.

The tarball's `install.sh` installs FilmCraft for your account in `~/.local`, without administrator rights. To install it for everyone, run `sudo ./install.sh --prefix /usr/local` instead.

Gentoo: the community [::snakebyte overlay](https://github.com/switch87/snakebyte-overlay) has `media-video/filmcraft-bin`. It is not maintained by the FilmCraft team, so report packaging problems there.

### FreeBSD

Download `filmcraft-<ver>-freebsd-x86_64.tar.gz` (or `freebsd-aarch64` for ARM) and unpack it.

### In a browser

`filmcraft-web-<ver>.zip` is the web version. Unpack it onto any web server and open it in a modern browser.

- **Server**: any static web server works. It must serve `.wasm` files as `application/wasm`.
- **Browser**: FilmCraft uses WebGPU when your browser has it and falls back to WebGL2. In the fallback, frames are composited on the CPU, so playback is slower. If your browser supports WebCodecs, it decodes H.264, HEVC, VP9 and AV1 video in MP4 and MOV files for FilmCraft. Without it, FilmCraft uses its own decoders.
- **Privacy**: nothing is uploaded. Files you open are read in place, and exports download through the browser.
- **Crash recovery**: while you have unsaved changes, FilmCraft keeps a snapshot in the browser's private storage every 5 seconds, plus copies of imported media (files up to 4 GiB). The next time you open the page, it reopens that project. Clearing the site's data in your browser deletes it.

## Update

FilmCraft checks for updates when it starts, and tells you when one is out. To check yourself, choose **Help › Check for Updates…**. Depending on how you installed it, FilmCraft either updates itself and restarts, or offers you the download.

- **ArtCraft Launcher**: tells you about new versions and updates FilmCraft for you.
- **Installer, DMG, `.deb`, `.rpm`, Arch package**: install the new version over the old one.
- **AppImage**: run [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate) on it, or download the new one.
- **Tarball**: run the new version's `install.sh`; it updates the installed copy.
- **Flatpak**: download the new version and install it.
- **Portable zip**: the portable version keeps its data in a `data` folder beside the program. Unpack the new version, then copy that `data` folder across.

Apart from the portable zip, FilmCraft keeps its data outside the app's folder, so updating keeps it. Your projects are wherever you saved them.

## Uninstall

- **Windows**: in **Settings › Apps**, find FilmCraft and choose **Uninstall**. For the portable zip, delete its folder.
- **macOS**: move **FilmCraft** from Applications to the Trash.
- **Linux**: remove the package with your package manager, run `flatpak uninstall ai.storyteller.filmcraft` for the Flatpak, or delete the AppImage.

Your projects and media are not touched. FilmCraft's own data (auto-saves of unsaved projects, recovery copies, presets and logs) stays in its data folder; see [Find the log](/apps/filmcraft/troubleshooting/#find-the-log) for where it is.
