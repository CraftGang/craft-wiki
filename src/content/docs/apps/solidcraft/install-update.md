---
title: Install and update
description: How to install and keep SolidCraft up to date on Linux, macOS, and Windows.
---

:::note[Third-Party Application]
SolidCraft is independently distributed by Tangency Labs. ArtCraft Launcher does not distribute third-party applications.
:::

SolidCraft is available for Linux, macOS, and Windows, as well as in the browser and as a headless CLI.

## Linux

### Flatpak (Recommended)

SolidCraft is packaged as a Flatpak on Flathub:

```bash
flatpak install flathub io.tangencylabs.solidcraft
flatpak run io.tangencylabs.solidcraft
```

To update via Flatpak:

```bash
flatpak update io.tangencylabs.solidcraft
```

### AppImage

Standalone AppImages for x86_64 and AArch64 Linux are provided on the [GitHub Releases](https://github.com/bherbruck/solidcraft/releases) page:

1. Download `SolidCraft-x86_64.AppImage`.
2. Make it executable: `chmod +x SolidCraft-x86_64.AppImage`.
3. Run it directly or integrate it with your desktop environment.

### Snap

```bash
sudo snap install solidcraft --classic
```

## macOS

Download the disk image (`.dmg`) from the [latest release](https://github.com/bherbruck/solidcraft/releases/latest):

1. Open `SolidCraft-macos-universal.dmg`.
2. Drag **SolidCraft.app** to your `Applications` folder.
3. The bundled `solidcraft-cli` binary can be linked into your `$PATH` from the application bundle or downloaded separately.

## Windows

Download the `.msi` installer or portable `.zip` from [GitHub Releases](https://github.com/bherbruck/solidcraft/releases/latest).

## Building from source

SolidCraft is written in Rust. You will need a recent Rust toolchain (`rustup`) and standard C/C++ build tools:

```bash
git clone https://github.com/bherbruck/solidcraft.git
cd solidcraft
cargo build --release
./target/release/solidcraft
```
