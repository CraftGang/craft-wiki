---
title: Install and update
description: How to install and keep SolidCraft up to date on Linux, macOS, and Windows.
---

:::note[Third-Party Application]
SolidCraft is an independent open-source CAD application maintained by Tangency Labs and the SolidCraft contributors.
:::

## With ArtCraft Launcher

[ArtCraft Launcher](https://github.com/storytold/craft-launcher) installs, updates and opens apps in the Craft ecosystem, SolidCraft included. It picks the right build for your system and processor, checks it against the release's SHA-256 checksums before installing it, and tells you when an update is out.

Download it from its [latest release](https://github.com/storytold/craft-launcher/releases/latest), then press **Install** on SolidCraft's card.

## By hand

SolidCraft is available for Linux, macOS, and Windows, as well as in the browser and as a headless CLI.

Every build is on the [latest release](https://github.com/tangency-labs/solidcraft/releases/latest) page. Most installers come twice: with the version number in the name (`solidcraft-<ver>-windows-x64.msi`), and without it (`solidcraft-windows-x64.msi`), which always means the newest release. `SHA256SUMS.txt` lists a checksum for every file.

## Linux

### Flatpak (Recommended)

SolidCraft has its own Flatpak repository; Flathub supplies the runtime it needs:

```bash
flatpak remote-add --user --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
flatpak remote-add --user --if-not-exists solidcraft https://docs.solidcraft.io/flatpak/solidcraft.flatpakrepo
flatpak install --user solidcraft io.tangencylabs.solidcraft
flatpak run io.tangencylabs.solidcraft
```

To update via Flatpak:

```bash
flatpak update io.tangencylabs.solidcraft
```

The release also has a `.flatpak` file that you can install with `flatpak install --user <file>`.

### AppImage

Standalone AppImages for x86_64 and AArch64 Linux are provided on the [GitHub Releases](https://github.com/tangency-labs/solidcraft/releases) page:

1. Download `solidcraft-linux-x86_64.AppImage` (or `solidcraft-linux-aarch64.AppImage`).
2. Make it executable: `chmod +x solidcraft-linux-x86_64.AppImage`.
3. Run it directly or integrate it with your desktop environment.

The first time you start the AppImage, it adds a menu entry and icons under `~/.local/share`. To turn this off, create an empty file `~/.local/share/solidcraft/no-desktop-integration`, or start the AppImage with `SOLIDCRAFT_NO_DESKTOP_INTEGRATION=1`.

If the AppImage doesn't start and prints a FUSE message followed by `execv error: No such file or directory`, AppImageLauncher 2.x is getting in the way. Update AppImageLauncher to 3.0 (3.0.0-beta-3 or newer), or remove it.

### Other Linux packages

The release also has `.deb`, `.rpm`, `.pkg.tar.zst` (Arch Linux) and `.tar.gz` files for x86_64 and AArch64, and a FreeBSD build, `solidcraft-<ver>-freebsd-x86_64.tar.gz`.

### Snap

```bash
sudo snap install solidcraft
```

The snap's command-line tool is `solidcraft.cli`. The snap can open designs in your home folder, but not in hidden folders inside it. For USB drives and other mounted disks, run this once:

```bash
sudo snap connect solidcraft:removable-media
```

## macOS

Download the disk image (`.dmg`) from the [latest release](https://github.com/tangency-labs/solidcraft/releases/latest):

1. Open `solidcraft-macos-universal.dmg`.
2. Drag **SolidCraft.app** to your `Applications` folder.
3. The bundled `solidcraft-cli` binary can be linked into your `$PATH` from the application bundle or downloaded separately (`solidcraft-cli-<ver>-macos-universal.zip`).

The release `.dmg` is signed and notarized by Apple. If you build SolidCraft yourself and macOS says it "can't be opened", open **System Settings › Privacy & Security**, scroll to the message about SolidCraft, and click **Open Anyway**. Or run `xattr -dr com.apple.quarantine /Applications/SolidCraft.app` in a terminal.

## Windows

Download the `.msi` installer or portable `.zip` from [GitHub Releases](https://github.com/tangency-labs/solidcraft/releases/latest). There are builds for x64, ARM64 and 32-bit (x86) PCs. For x64 there is also a single portable program, `SolidCraft-<ver>-windows-x64.exe`.

The Windows downloads aren't code-signed yet. If SmartScreen warns you, choose **More info**, then **Run anyway**.

If `solidcraft-cli` isn't found in a terminal, older Windows installers didn't add it to `PATH`. Use its full path instead, which by default is `C:\Program Files\SolidCraft\solidcraft-cli.exe`.

## In a browser

The web version is at [solidcraft.io/app](https://solidcraft.io/app), and is always the latest release. Add `?sample` to the address to open the sample part. If the page shows no 3D view because WebGPU is missing or misbehaving, add `?webgl`. Your designs are saved in the browser's private file storage, which needs HTTPS or `localhost`.

`solidcraft-web-<ver>.zip` on the release page is the same build, to host yourself.

## Update

SolidCraft checks for a newer release every time it starts, and once a day while it stays open. When there is one, an **Update to x.y.z** button appears in the title bar. Click it to see the release notes. You can also choose **Help › Check for updates** at any time, or turn the automatic check off in **Preferences › General › Updates**. The check sends nothing about you or your designs.

**Update now** replaces the installed copy for you if you installed SolidCraft as:

- an AppImage
- a Windows `.msi`, which closes SolidCraft and starts the installer
- a Windows portable `.zip` or `.exe`

SolidCraft verifies each download against the release's `SHA256SUMS.txt` before it changes anything. For a Mac, **Download and open** opens the `.dmg`, and you drag the new app to Applications.

Flatpak, Snap, `.deb`, `.rpm` and `.tar.gz` installs don't update themselves. Update them with your package manager, or unpack the new archive. The update window shows the command to use.

SolidCraft 0.11 to 0.14 can't install updates by themselves, because the project's repository moved. Download 0.15 or newer yourself and install it over the old version. After that, **Update now** works again.

## Building from source

SolidCraft is written in Rust. You will need a recent Rust toolchain (`rustup`) and standard C/C++ build tools:

```bash
git clone https://github.com/tangency-labs/solidcraft.git
cd solidcraft
cargo build --release
./target/release/solidcraft
```
