---
title: Install and update
description: Download Craft Anything for Windows, macOS, Linux or FreeBSD, and keep it up to date.
sidebar:
  order: 2
---

## With ArtCraft Launcher

[ArtCraft Launcher](https://github.com/storytold/craft-launcher) installs, updates and opens every app in the Craft App Suite, Craft Anything included. It picks the right build for your system and processor, checks it against the release's SHA-256 checksums before installing it, and tells you when an update is out.

Download it from its [latest release](https://github.com/storytold/craft-launcher/releases/latest), then press **Install** on Craft Anything's card.

## By hand

Every build is on the [latest release](https://github.com/storytold/craft-anything/releases/latest) page; [all releases](https://github.com/storytold/craft-anything/releases) has earlier versions and their notes. In the file names below, `<ver>` is the version number. `SHA256SUMS.txt` lists a checksum for every file.

### Windows

| Build | Installer | Portable |
|---|---|---|
| x64 (64-bit Intel or AMD) | `craft-anything-<ver>-windows-x64.msi` | `craft-anything-<ver>-windows-x64-portable.zip` |
| arm64 (Snapdragon and other ARM PCs) | `craft-anything-<ver>-windows-arm64.msi` | `craft-anything-<ver>-windows-arm64-portable.zip` |
| x86 (32-bit) | `craft-anything-<ver>-windows-x86.msi` | `craft-anything-<ver>-windows-x86-portable.zip` |

Installers and programs are code-signed. The installer sets Craft Anything up for everyone on the computer, in `C:\Program Files\Craft Anything`, so Windows asks for administrator permission. The portable zip needs no installing and keeps its settings next to the app, in `CraftAnythingData`.

### macOS

| Build | File |
|---|---|
| App, universal (Apple silicon and Intel) | `craft-anything-<ver>-macos-universal.dmg` |
| Command-line tool only, universal | `craft-anything-cli-<ver>-macos-universal.zip` |

Both are signed and notarized, and need macOS 11 (Big Sur) or later. The app includes the command-line tool, so you only need the zip to use the command line without the app.

If macOS says "Apple could not verify craft-anything-cli" for the zip's tool, press **Done** and see [macOS blocks the command-line tool](/apps/craft-anything/troubleshooting/#macos-blocks-the-command-line-tool).

### Linux

| Format | Files (x86_64 and aarch64) | Notes |
|---|---|---|
| AppImage | `craft-anything-<ver>-linux-<arch>.AppImage` | Runs without installing; updates with [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate) |
| Debian, Ubuntu | `craft-anything-<ver>-linux-<arch>.deb` | |
| Fedora, RHEL, openSUSE | `craft-anything-<ver>-linux-<arch>.rpm` | |
| Arch | `craft-anything-<ver>-linux-<arch>.pkg.tar.zst` | |
| Flatpak | `craft-anything-<ver>-linux-<arch>.flatpak` | `flatpak install --user <file>`; can't study websites (see below) |
| Tarball | `craft-anything-<ver>-linux-<arch>.tar.gz` | Unpack anywhere |

RISC-V (riscv64) has a `.deb`, an `.rpm` and a tarball. Apart from the Flatpak, the Linux builds need glibc 2.35 or newer: Ubuntu 22.04 or later, or a distribution of the same age.

:::note
The Flatpak is sandboxed, so it can't start a browser on your computer, and studying a website needs one. Use another package for websites.
:::

The AppImage carries the command-line tool too: run `<AppImage> --cli <command>`, or make a link to the AppImage named `craft-anything-cli`.

For updates through your package manager, add the [ArtCraft Linux repositories](https://getartcraft.com/linux) (Flatpak, Debian, Ubuntu, Fedora, RHEL, openSUSE and Arch).

### FreeBSD

`craft-anything-<ver>-freebsd-x86_64.tar.gz` and `craft-anything-<ver>-freebsd-aarch64.tar.gz`.

### In a browser

`craft-anything-web-<ver>.zip` is a small viewer that says what a file is, without the file leaving your browser. Host the folder on any static web server.

## Check the install

```bash
craft-anything-cli doctor
```

It checks the install, the coding agents it can use and the engines. [Troubleshooting](/apps/craft-anything/troubleshooting/) says where to find `craft-anything-cli` if your terminal doesn't.

## Update

An installed Craft Anything keeps its settings outside the app's folder, and your projects are in `Documents/Craft Anything`, so an update keeps both:

- **ArtCraft Launcher**: tells you when a new version is out and updates it for you.
- **Installer, DMG, `.deb`, `.rpm`**: install the new version over the old one, or update through the [Linux repositories](https://getartcraft.com/linux).
- **Portable zip**: its settings are in its own `CraftAnythingData` folder; unpack the new version and move that folder next to it.
- **AppImage**: run AppImageUpdate on it, or download the new one.

## Uninstall

1. If you connected Craft Anything to coding-agent apps with `craft-anything-cli setup`, remove those connections:

   ```bash
   craft-anything-cli uninstall
   ```

2. API keys you added are kept in your system keychain. To remove them, choose **Remove it and its key** for each one in **Settings → AI**.
3. Remove the app the usual way for your system:
   - **Windows**: in **Settings → Apps**, find Craft Anything and choose **Uninstall**. For the portable zip, delete its folder.
   - **macOS**: move **Craft Anything** from Applications to the Trash.
   - **Linux**: remove the package with your package manager, run `flatpak uninstall ai.storyteller.craft-anything` for the Flatpak, or delete the AppImage or the unpacked tarball.
4. Your settings and projects stay. To remove them too, delete the settings folder (see [Find the log](/apps/craft-anything/troubleshooting/#find-the-log) for where it is) and your projects folder, `Documents/Craft Anything` unless you changed it.

## Build from source

You need Rust 1.97 or newer (`rustup update`). On Debian or Ubuntu, the desktop app also needs:

```bash
sudo apt-get install libxkbcommon-dev libwayland-dev libx11-dev libxrandr-dev libxi-dev libgl1-mesa-dev libgtk-3-dev
```

Then:

```bash
git clone https://github.com/storytold/craft-anything && cd craft-anything
cargo run --release -p craft-anything             # the desktop app
cargo install --path apps/craft-anything-cli      # the command-line tool
```
