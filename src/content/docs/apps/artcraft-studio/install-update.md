---
title: Install and update
description: Download ArtCraft Studio for Windows or macOS, and keep it up to date.
sidebar:
  order: 2
---

The easiest way to get ArtCraft Studio is from the [ArtCraft website](https://getartcraft.com/), which has the stable releases for Windows and macOS. Linux builds are on the [releases page](https://github.com/storytold/artcraft/releases/latest).

:::note
ArtCraft Launcher doesn't install ArtCraft Studio. It is for the other apps in the Craft App Suite.
:::

## From GitHub

Every build is also on the [GitHub releases](https://github.com/storytold/artcraft/releases) page. In the file names below, `<ver>` is the version number.

### Windows

Download `ArtCraft_<ver>_x64-setup.exe` or `ArtCraft_<ver>_x64_en-US.msi` and run it. Both install the same app on 64-bit Windows; use whichever you prefer.

### macOS

Download `ArtCraft_<ver>_universal.dmg`, open it, and drag **ArtCraft** to Applications. It runs on Apple silicon and Intel Macs.

### Linux

Download a package for your system from the [latest release](https://github.com/storytold/artcraft/releases/latest). Every Linux build is for x86_64 and aarch64; riscv64 has a `.deb`, an `.rpm` and a tarball.

| Format | File |
|---|---|
| AppImage (runs without installing) | `artcraft-<ver>-linux-<arch>.AppImage` |
| Debian, Ubuntu | `artcraft-<ver>-linux-<arch>.deb` |
| Fedora, RHEL, openSUSE | `artcraft-<ver>-linux-<arch>.rpm` |
| Arch | `artcraft-<ver>-linux-<arch>.pkg.tar.zst` |
| Flatpak | `artcraft-<ver>-linux-<arch>.flatpak` |
| Tarball | `artcraft-<ver>-linux-<arch>.tar.gz` |

You can also [build it from source](https://github.com/storytold/artcraft/blob/main/_docs/dev_setup.md).

## Update

ArtCraft Studio doesn't update itself. To update, download the new version from the [ArtCraft website](https://getartcraft.com/) or the [releases page](https://github.com/storytold/artcraft/releases) and install it over the old one.

To see which version you have, open **Settings** and choose **About**.

## Uninstall

- **Windows**: in **Settings › Apps**, find ArtCraft and choose **Uninstall**.
- **macOS**: move **ArtCraft** from Applications to the Trash.

Your downloads are not touched. ArtCraft Studio keeps its own data in the `Artcraft` folder in your home folder; delete that folder to remove it too.
