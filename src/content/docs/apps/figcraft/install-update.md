---
title: Install and update
description: Download FigCraft for Windows, macOS, Linux or FreeBSD, use it in a browser, and keep it up to date.
sidebar:
  order: 2
---

## With ArtCraft Launcher

[ArtCraft Launcher](https://github.com/storytold/craft-launcher) installs, updates and opens every app in the Craft App Suite, FigCraft included. It picks the right build for your system and processor, and tells you when an update is out.

Download it from its [latest release](https://github.com/storytold/craft-launcher/releases/latest), then press **Install** on FigCraft's card.

## By hand

Every build is on FigCraft's [latest release](https://github.com/storytold/figcraft/releases/latest) page; [all releases](https://github.com/storytold/figcraft/releases) has earlier versions and their notes. In the file names below, `<ver>` is the version number. `SHA256SUMS.txt` lists a checksum for every file.

### Windows

| Your PC | Installer | Portable |
| --- | --- | --- |
| Most PCs (64-bit Intel or AMD) | `figcraft-<ver>-windows-x64.msi` | `figcraft-<ver>-windows-x64-portable.zip` |
| ARM PCs, such as Snapdragon | `figcraft-<ver>-windows-arm64.msi` | `figcraft-<ver>-windows-arm64-portable.zip` |
| 32-bit Windows | `figcraft-<ver>-windows-x86.msi` | `figcraft-<ver>-windows-x86-portable.zip` |

The installer's first page asks who to install FigCraft for. **Only for me** is the default and doesn't need administrator rights. **Everyone on this computer** asks for an administrator. You can only have one copy installed, so to switch between the two, uninstall first.

The portable zip keeps its settings in a `config` folder next to `figcraft.exe`, so you can carry it on a USB stick.

### macOS

Download `figcraft-<ver>-macos-universal.dmg`, open it, and drag **FigCraft** to Applications. It runs on Apple silicon and Intel Macs, macOS 11 or later.

### Linux

| Format | File | Notes |
| --- | --- | --- |
| AppImage | `figcraft-<ver>-linux-x86_64.AppImage` | Runs on most distributions; no install needed |
| Flatpak | `figcraft-<ver>-linux-x86_64.flatpak` | Install with `flatpak install --user <file>` |
| Debian, Ubuntu | `figcraft-<ver>-linux-x86_64.deb` | |
| Fedora, RHEL, openSUSE | `figcraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux | `figcraft-<ver>-linux-x86_64.pkg.tar.zst` | Install with `sudo pacman -U <file>` |
| Tarball | `figcraft-<ver>-linux-x86_64.tar.gz` | Unpack anywhere |

Every format also has an ARM64 build (`aarch64` in place of `x86_64`). There are RISC-V builds too: a `.deb`, a `.rpm` and a tarball (`riscv64`). You can also install and update through the [ArtCraft Linux repositories](https://getartcraft.com/linux).

The builds need glibc 2.35 or newer, as in Ubuntu 22.04 and later.

### FreeBSD

Download `figcraft-<ver>-freebsd-x86_64.tar.gz` (or `freebsd-aarch64`) and unpack it into `/usr/local`:

```bash
tar -xzf figcraft-<ver>-freebsd-x86_64.tar.gz --strip-components 1 -C /usr/local
```

### In a browser

`figcraft-web-<ver>.zip` is the web version. Unpack it onto any web server and open it in a modern browser. It can't check for updates, and has no system fonts, so it uses the fonts built into FigCraft.

### The collaboration server

`figcraft-server-<ver>-linux-x86_64.tar.gz` (and `aarch64`) is the server for hosting your team's shared files yourself. You don't need it to use FigCraft or to share files. See [Live sessions](/apps/figcraft/live-sessions/#run-your-own-server).

## Update

FigCraft checks for updates when it starts, and tells you when one is out. To check yourself, click **?** at the bottom right of the canvas and choose **Check for updates…**. Your settings are kept outside the app's folder, so updating keeps them.

- **ArtCraft Launcher**: tells you about new versions and updates FigCraft for you.
- **Installer, DMG, `.deb`, `.rpm`, `.pkg.tar.zst`**: install the new version over the old one, or update through the [Linux repositories](https://getartcraft.com/linux).
- **AppImage**: run [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate) on it, or download the new one.
- **Flatpak, tarball, portable zip**: download the new version and replace the old one. For the portable zip, keep the `config` folder to keep your settings.

## Uninstall

- **Windows**: in **Settings › Apps**, find FigCraft and choose **Uninstall**. For the portable zip, delete its folder.
- **macOS**: move **FigCraft** from Applications to the Trash.
- **Linux**: remove the package with your package manager, run `flatpak uninstall ai.storyteller.figcraft` for the Flatpak, or delete the AppImage or the unpacked tarball.

Your design files are not touched. Settings stay in FigCraft's settings folder (see [Where FigCraft keeps its settings](/apps/figcraft/troubleshooting/#where-figcraft-keeps-its-settings)); delete that folder to remove them too.
