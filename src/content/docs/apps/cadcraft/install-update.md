---
title: Install and update
description: Download CADCraft for Windows, macOS, Linux or FreeBSD, and keep it up to date.
sidebar:
  order: 2
---

## With ArtCraft Launcher

[ArtCraft Launcher](https://github.com/storytold/craft-launcher) installs, updates and opens every app in the Craft App Suite, CADCraft included. It picks the right build for your system and processor, checks it against the release's SHA-256 checksums before installing it, and tells you when an update is out.

Download it from its [latest release](https://github.com/storytold/craft-launcher/releases/latest), then press **Install** on CADCraft's card.

## By hand

Every build is on CADCraft's [latest release](https://github.com/storytold/cadcraft/releases/latest) page; [all releases](https://github.com/storytold/cadcraft/releases) has earlier versions and their notes. In the file names below, `<ver>` is the version number. `SHA256SUMS.txt` lists a checksum for every file.

:::caution
Only download CADCraft from [storytold/cadcraft](https://github.com/storytold/cadcraft/releases). Before you run a download, check that its checksum matches its line in `SHA256SUMS.txt`: `Get-FileHash <file>` in PowerShell, `shasum -a 256 <file>` on macOS, or `sha256sum <file>` on Linux.
:::

### Windows

| Your PC | Installer | Portable |
| --- | --- | --- |
| Most PCs (64-bit Intel or AMD) | `cadcraft-<ver>-windows-x64.msi` | `cadcraft-<ver>-windows-x64-portable.zip` |
| ARM PCs, such as Snapdragon | `cadcraft-<ver>-windows-arm64.msi` | `cadcraft-<ver>-windows-arm64-portable.zip` |
| 32-bit Windows | `cadcraft-<ver>-windows-x86.msi` | `cadcraft-<ver>-windows-x86-portable.zip` |

By default, the installer installs CADCraft for your account only and doesn't need administrator rights. To install it for everyone on the computer, choose **Everyone on this computer** on the first page; this asks for an administrator. You can only have one copy installed, so to switch between the two, uninstall first.

The installer adds CADCraft to the Start menu. Select **Create a desktop shortcut** if you want one too.

To install without any windows, run this from a terminal:

```powershell
msiexec /i cadcraft-<ver>-windows-x64.msi /qn DESKTOPSHORTCUT=1
```

A silent install is for your account only. Add `ALLUSERS=1` from an elevated terminal for an install for everyone. `DESKTOPSHORTCUT=1` adds the desktop shortcut.

An update has to use the same choice as the copy that's already installed. If you installed for everyone, update with **Everyone on this computer** or `ALLUSERS=1`. If you get "This app is already installed for everyone", see [Updating on Windows fails](/apps/cadcraft/troubleshooting/#updating-on-windows-fails).

The installers and programs are code-signed.

### macOS

Download `cadcraft-<ver>-macos-universal.dmg`, open it, and drag **CADCraft** to Applications. It runs on Apple silicon and Intel Macs, and is signed and notarized by Apple.

The command-line tool, `cadcraft-cli`, is a separate download: `cadcraft-cli-<ver>-macos-universal.zip`. You only need it to [automate CADCraft](/apps/cadcraft/automation/).

### Linux

| Format | File | Notes |
| --- | --- | --- |
| AppImage | `cadcraft-<ver>-linux-x86_64.AppImage` | Runs on most distributions; no install needed |
| Flatpak | `cadcraft-<ver>-linux-x86_64.flatpak` | Install with `flatpak install --user <file>` |
| Debian, Ubuntu | `cadcraft-<ver>-linux-x86_64.deb` | |
| Fedora, RHEL, openSUSE | `cadcraft-<ver>-linux-x86_64.rpm` | |
| Arch Linux | `cadcraft-<ver>-linux-x86_64.pkg.tar.zst` | |
| Tarball | `cadcraft-<ver>-linux-x86_64.tar.gz` | Unpack anywhere |

Every format also has an ARM64 build (`aarch64` in place of `x86_64`). RISC-V (`riscv64`) has a tarball, a `.deb` and an `.rpm`, for Ubuntu 24.04, Debian 13 and newer. You can also install and update through the [ArtCraft Linux repositories](https://getartcraft.com/linux).

The release also has `.zsync` files, which AppImageUpdate uses, and container image files (`.oci-manifest.json` and `.oci.sig`). You don't need them to install CADCraft.

If you installed the Flatpak, run the command-line tool with `flatpak run --command=cadcraft-cli ai.storyteller.cadcraft`.

#### Check the signatures

Most Linux files have a signature file next to them: `.asc` for most, `.sig` for the Arch package. The release's `release-signing-key.asc` is the public key to check them with.

### FreeBSD

Download `cadcraft-<ver>-freebsd-x86_64.tar.gz` (or `cadcraft-<ver>-freebsd-aarch64.tar.gz` for ARM64) and unpack it. The ARM64 build can't open or save DWG files yet (use DXF).

### In a browser

`cadcraft-web-<ver>.zip` is the web version. Unpack it onto any web server and open it in a modern browser. The web version can't open or save DWG files (use DXF), and doesn't autosave.

## Update

CADCraft checks for updates when it starts, and tells you when one is out. To check yourself, choose **Help › Check for Updates…**. Your settings are kept outside the app's folder, so updating keeps them.

- **ArtCraft Launcher**: tells you about new versions and updates CADCraft for you.
- **Installer, DMG, `.deb`, `.rpm`**: install the new version over the old one, or update through the [Linux repositories](https://getartcraft.com/linux).
- **AppImage**: run [AppImageUpdate](https://github.com/AppImageCommunity/AppImageUpdate) on it, or download the new one.
- **Flatpak, tarball, portable zip**: download the new version and replace the old one.

## Uninstall

- **Windows**: in **Settings › Apps**, find CADCraft and choose **Uninstall**. For the portable zip, delete its folder.
- **macOS**: move **CADCraft** from Applications to the Trash.
- **Linux**: remove the package with your package manager, run `flatpak uninstall ai.storyteller.cadcraft` for the Flatpak, or delete the AppImage or the unpacked tarball.

Your drawings are not touched. Settings stay in CADCraft's settings folder (see [Find the log](/apps/cadcraft/troubleshooting/#find-the-log) for where it is); delete that folder to remove them too.
