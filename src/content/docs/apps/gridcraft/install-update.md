---
title: Install and update
description: Download GridCraft for Windows, macOS, Linux or FreeBSD, and keep it up to date.
sidebar:
  order: 2
---

## With ArtCraft Launcher

[ArtCraft Launcher](https://github.com/storytold/craft-launcher) installs, updates and opens every app in the Craft App Suite, GridCraft included. It picks the right build for your system and processor, checks it against the release's SHA-256 checksums before installing it, and tells you when an update is out.

Download it from its [latest release](https://github.com/storytold/craft-launcher/releases/latest), then press **Install** on GridCraft's card.

## By hand

Every build is on GridCraft's [latest release](https://github.com/storytold/gridcraft/releases/latest) page; [all releases](https://github.com/storytold/gridcraft/releases) has earlier versions and their notes. In the file names below, `<ver>` is the version number. `SHA256SUMS.txt` lists a checksum for every file.

### Windows

| Your PC | Installer | Portable |
| --- | --- | --- |
| Most PCs (64-bit Intel or AMD) | `gridcraft-<ver>-windows-x64.msi` | `gridcraft-<ver>-windows-x64-portable.zip` |
| ARM PCs, such as Snapdragon | `gridcraft-<ver>-windows-arm64.msi` | `gridcraft-<ver>-windows-arm64-portable.zip` |
| 32-bit Windows | `gridcraft-<ver>-windows-x86.msi` | `gridcraft-<ver>-windows-x86-portable.zip` |

By default, the installer installs GridCraft for your account only and doesn't need administrator rights. To install it for everyone on the computer, choose **Everyone on this computer** on the first page; this asks for an administrator. You can only have one copy installed, so to switch between the two, uninstall first.

The installer can also add a desktop shortcut. It's off unless you select it. The installers and programs are code-signed.

A silent install is for your account only. To install for everyone, add `ALLUSERS=1` to the `msiexec` command from an elevated terminal.

After installing, GridCraft appears in **Open with** for .xlsx, .xlsm, .csv and .tsv files. It doesn't make itself the default app for them; choose it in **Settings › Apps › Default apps** if you want it to be.

### macOS

Download `gridcraft-<ver>-macos-universal.dmg`, open it, and drag **GridCraft** to Applications. It runs on Apple silicon and Intel Macs with macOS 11 or later, and is signed and notarized by Apple.

GridCraft appears in **Open With** for spreadsheet files, without replacing the app that opens them now.

### Linux

| Format | File | Notes |
| --- | --- | --- |
| AppImage | `gridcraft-<ver>-linux-x86_64.AppImage` | Runs on most distributions; no install needed |
| Flatpak | `gridcraft-<ver>-linux-x86_64.flatpak` | Install with `flatpak install --user <file>` |
| Debian, Ubuntu | `gridcraft-<ver>-linux-x86_64.deb` | |
| Fedora, RHEL, openSUSE | `gridcraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux | `gridcraft-<ver>-linux-x86_64.pkg.tar.zst` | Install with `sudo pacman -U <file>` |
| Tarball | `gridcraft-<ver>-linux-x86_64.tar.gz` | Unpack anywhere |

Every format also has an ARM64 build (`aarch64` in place of `x86_64`). For RISC-V there are `riscv64` `.deb`, `.rpm` and tarball builds. You can also install and update through the [ArtCraft Linux repositories](https://getartcraft.com/linux).

You can check a download's signature too. The release has `release-signing-key.asc`, the public key, and most files have a signature file next to them (`.asc`, or `.sig` for the Arch package).

### FreeBSD

Download `gridcraft-<ver>-freebsd-x86_64.tar.gz` (or `freebsd-aarch64` for ARM) and unpack it.

### In a browser

`gridcraft-web-<ver>.zip` is the web version. Unpack it onto a web server and open it in a modern browser.

## Update

GridCraft checks for updates when it starts, and tells you when one is out. To check yourself, choose **Automate › Check for Updates…**, or **Help › Check for Updates…** on a Mac. Your settings are kept outside the app's folder, so updating keeps them.

- **ArtCraft Launcher**: tells you about new versions and updates GridCraft for you.
- **Installer, DMG, `.deb`, `.rpm`, Arch package**: install the new version over the old one, or update through the [Linux repositories](https://getartcraft.com/linux).
- **AppImage**: run [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate) on it, or download the new one.
- **Flatpak, tarball, portable zip**: download the new version and replace the old one.

## Uninstall

- **Windows**: in **Settings › Apps**, find GridCraft and choose **Uninstall**. For the portable zip, delete its folder.
- **macOS**: move **GridCraft** from Applications to the Trash.
- **Linux**: remove the package with your package manager, run `flatpak uninstall ai.storyteller.gridcraft` for the Flatpak, or delete the AppImage or the unpacked tarball.

Your workbooks are not touched. Settings stay in GridCraft's settings folder (see [Find the log](/apps/gridcraft/troubleshooting/#find-the-log) for where it is); delete that folder to remove them too.
