---
title: Troubleshooting
description: Fix common problems with TextureCraft, and find its error log when something goes wrong.
sidebar:
  order: 5
---

## TextureCraft doesn't start

If TextureCraft can't start, for example because it can't find a graphics card it can use, it says why in a message box. It also writes the details to `errors.log`:

| System | Folder |
| --- | --- |
| Windows | `%APPDATA%\TextureCraft\data\` |
| macOS | `~/Library/Application Support/TextureCraft/` |
| Linux | `~/.local/share/texturecraft/` |

Updating your graphics driver often fixes it. TextureCraft needs a graphics card that supports Vulkan, Metal or DirectX 12. On an older or virtual machine, try the [web version](/apps/texturecraft/install-update/#in-a-browser) instead.

## It uses the wrong graphics card

On a laptop or PC with two graphics cards, TextureCraft prefers the faster one. The status bar at the bottom of the window names the card it chose. To pick one yourself, start TextureCraft from a terminal with part of the card's name:

```bash
texturecraft --gpu nvidia
```

Or use `--power-pref high` for the faster card, and `--power-pref low` for the one that saves battery.

## It's slow with large textures

Choose **Edit › Settings...** and set **Viewport › Texture resolution** to **Half** or **Quarter**. This only changes what the viewport shows, and uses less graphics memory. Painting and export keep the full resolution.

## Generators and smart materials don't show wear or dirt

Edge wear, dirt, curvature and the other generators read the baked mesh maps. Choose **Mode › Bake Mesh Maps** (**F8**) and bake the texture set first.

## My pen's pressure doesn't work

Pen pressure works with Windows Ink pens, and with touch pens in a browser. On macOS, Linux and desktop browsers, a pen works like a mouse for now. Pen tilt isn't supported yet.

## A model won't open, or only part of it does

- Alembic files saved in the older HDF5 format can't be opened yet. Re-export the file from your 3D app in the newer Ogawa format.
- For animated Alembic files, TextureCraft reads the first frame only.
- If a model has no UVs, TextureCraft makes them for you. For the best results, unwrap the model in your 3D app first.

## TextureCraft closed and I lost my work

TextureCraft autosaves your project to the `autosave` folder in its data folder, `Documents/TextureCraft` by default. Open the newest copy there with **File › Open...**. To change how often it autosaves, choose **Edit › Settings...** and set **Autosave every**. 0 turns it off.

## See what went wrong

**Help › Show log...** opens the log, which lists warnings and errors from this session. Copy anything that looks relevant into your bug report.

## Known problems, not fixed yet

- **TextureCraft can't open a material from MaterialCraft.** MaterialCraft writes .mcmat version 2, and TextureCraft reads only version 1. See [issue 317](https://github.com/storytold/texturecraft/issues/317).
- **Nothing opens, with no message, on a PC with Intel HD or UHD 620 graphics.** The 3D view crashes at start. See [issue 303](https://github.com/storytold/texturecraft/issues/303) and [issue 202](https://github.com/storytold/texturecraft/issues/202).
- **A project can be saved that then won't open.** Opening stops at 8 GiB of unpacked data, and saving doesn't check. See [issue 215](https://github.com/storytold/texturecraft/issues/215).
- **Saving a large project is slow, and the file is big.** This shows up with 4K textures and UDIM tiles. See [issue 200](https://github.com/storytold/texturecraft/issues/200).
- **Baking mesh maps is slow at high resolution**, and the viewport lags with a 4096 document resolution. See [issue 196](https://github.com/storytold/texturecraft/issues/196) and [issue 183](https://github.com/storytold/texturecraft/issues/183).
- **A GLB's own textures aren't applied.** The model opens gray, with an empty paint layer. See [issue 294](https://github.com/storytold/texturecraft/issues/294).
- **Some models get new UVs even though they have UVs**, and parts that share the same UV space paint only one part. See [issue 286](https://github.com/storytold/texturecraft/issues/286) and [issue 180](https://github.com/storytold/texturecraft/issues/180).
- **An OBJ exported from DAZ Studio crashes TextureCraft.** See [issue 291](https://github.com/storytold/texturecraft/issues/291).

## Still stuck?

- Ask in the [ArtCraft Discord](https://discord.gg/artcraft).
- [Report a bug on GitHub](https://github.com/storytold/texturecraft/issues). Say which version and system you use. **Help › About TextureCraft...** shows the version.
