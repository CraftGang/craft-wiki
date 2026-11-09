---
title: Install and update
description: Download AniCraft for Windows, macOS, Linux or FreeBSD, run it in a web browser, and build from source.
sidebar:
  order: 2
---

## With ArtCraft Launcher

[ArtCraft Launcher](https://github.com/storytold/craft-launcher) manages installation, updates, and launching for the complete Craft App Suite, including AniCraft. It selects the ideal native build for your CPU architecture and notifies you of new releases.

Download it from its [latest release](https://github.com/storytold/craft-launcher/releases/latest) and click **Install** on AniCraft.

## Standalone downloads

Pre-built binaries are published on the [AniCraft releases page](https://github.com/storytold/AniCraft/releases). In the file names below, `<ver>` represents the release version number.

### Windows

| Your PC                 | Installer                          | Portable                                   |
|-------------------------|------------------------------------|--------------------------------------------|
| 64-bit Intel / AMD      | `anicraft-<ver>-windows-x64.msi`   | `anicraft-<ver>-windows-x64-portable.zip`   |
| ARM64 (e.g. Snapdragon) | `anicraft-<ver>-windows-arm64.msi` | `anicraft-<ver>-windows-arm64-portable.zip` |

The `.msi` package installs AniCraft into `Program Files` and creates Start menu shortcuts. The portable `.zip` requires no installation: unpack it and run `anicraft.exe`.

### macOS

Download `anicraft-<ver>-macos-universal.dmg`, open it, and drag **AniCraft** into your Applications folder. Universal builds run natively on both Apple silicon and Intel Macs.

### Linux

| Package Format    | Package File                               | Notes                                      |
|-------------------|--------------------------------------------|--------------------------------------------|
| AppImage          | `anicraft-<ver>-linux-x86_64.AppImage`     | Make executable with `chmod +x <file>` and run |
| Flatpak           | `anicraft-<ver>-linux-x86_64.flatpak`      | Install with `flatpak install --user <file>`|
| Debian / Ubuntu   | `anicraft-<ver>-linux-x86_64.deb`          | Install with `sudo apt install ./<file>`   |
| Fedora            | `anicraft-<ver>-linux-x86_64.rpm`          | Install with `sudo dnf install <file>`     |
| openSUSE          | `anicraft-<ver>-linux-x86_64.rpm`          | Install with `sudo zypper install ./<file>`|
| Arch Linux        | `anicraft-<ver>-linux-x86_64.pkg.tar.zst`  | Install with `sudo pacman -U <file>`       |
| Tarball           | `anicraft-<ver>-linux-x86_64.tar.gz`       | Extract and run                            |

ARM64 builds (`aarch64`) and RISC-V builds (`riscv64`) are also available for Linux.

### FreeBSD

Download `anicraft-<ver>-freebsd-x86_64.tar.gz` (or `freebsd-aarch64`), extract the archive, and run `anicraft`.

### In a browser

A web browser (WebAssembly) build of AniCraft is planned on the project roadmap (Milestone 8) and is currently in development. Pre-built web packages will be available once the web build is published.

## Update

AniCraft stores your preferences, custom shortcuts, and documents outside the application directory (under your user profile's standard configuration path), so updating keeps your settings and files intact:

- **ArtCraft Launcher**: Notifies you of new versions and updates AniCraft automatically.
- **Windows installer**: Run the new `.msi` installer; it updates the application in place.
- **Windows portable & tarball**: Download the new archive and extract the updated files to your existing folder.
- **macOS**: Drag the updated `AniCraft.app` from the new `.dmg` into your Applications folder and confirm replacing the old version.
- **Linux packages**: Install the newer `.deb`, `.rpm`, or `.pkg.tar.zst` package through your package manager.
- **AppImage**: Download the latest `.AppImage`, make it executable (`chmod +x`), and replace the earlier file.

## Build from source

To compile AniCraft locally from source, ensure you have Rust 1.85+ installed:

```bash
git clone https://github.com/storytold/AniCraft.git
cd AniCraft
cargo run --release
```
