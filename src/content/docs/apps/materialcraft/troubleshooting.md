---
title: Troubleshooting
description: Fix common problems with MaterialCraft, from a window that won't open to SBS files with missing nodes.
sidebar:
  order: 4
---

## MaterialCraft doesn't open

If MaterialCraft's window can't start, it shows a message saying why. This usually means a problem with the graphics driver, or a remote or virtual machine with no graphics card it can use. Updating the graphics driver often fixes it. You can also try the [web version](/apps/materialcraft/install-update/#in-a-browser).

## An .sbs file opens with placeholder nodes

MaterialCraft opens .sbs files from other node-based material apps, but many of their library nodes aren't in MaterialCraft yet. Those nodes open as placeholders, so the rest of the graph keeps its shape, and the **Console** lists what MaterialCraft couldn't read. Graphs with placeholders won't look the same as in the app they came from.

## My .mcraft files from version 0.1 won't open

Version 0.2 dropped the .mcraft format and changed the .mcmat format. Files made with version 0.1 don't open in 0.2. Keep a copy of 0.1 from the [releases page](https://github.com/storytold/materialcraft/releases) if you need them.

## The 3D View is empty

The 3D View shows the graph's **Output** nodes that have a usage, such as base color or normal. Check that your outputs are connected and have a usage, then choose **Tools › View outputs in 3D view**.

## Previews look soft or blocky

While you edit, previews are computed at a smaller size to stay fast. Choose a larger size, or **Full size**, in **Tools › Preview size**. Exports always use the resolution you pick in **File › Export outputs...**.

## A node's thumbnail is out of date

Choose **Tools › Compute nodes thumbnails**, or **Tools › Compute graph** to compute the whole graph again. **Tools › Clear nodes thumbnails** (**F5**) clears them. **Tools › Clear cache** throws away every stored result, which can help if something still looks wrong.

## MaterialCraft closed and I lost my work

MaterialCraft autosaves the open package to `Documents/MaterialCraft/autosave`, as an .sbs file named after the package. Open it with **File › Open...**. To change how often it autosaves, choose **Edit › Preferences...**. 0 turns autosave off.

## Known problems, not fixed yet

- TextureCraft can't open a material from MaterialCraft. **File › Send to TextureCraft** and **File › Export material...** write .mcmat version 2, and TextureCraft reads only version 1. Follow [TextureCraft issue 317](https://github.com/storytold/texturecraft/issues/317).
- MaterialCraft can crash when opening an .sbs file on Linux with Wayland. The reporter starts it on X11 instead: `WAYLAND_DISPLAY= materialcraft`. See [issue 93](https://github.com/storytold/materialcraft/issues/93).
- MaterialCraft crashes at start on a PC with Intel graphics. The crash is in the Intel Vulkan driver, `igvk64.dll`. See [issue 28](https://github.com/storytold/materialcraft/issues/28).
- Claude Desktop can't load the MaterialCraft MCP server. It drops the server and all its tools. See [issue 146](https://github.com/storytold/materialcraft/issues/146).
- Nodes have no F2 rename, and the color picker has no hex field yet. See [issue 101](https://github.com/storytold/materialcraft/issues/101) and [issue 105](https://github.com/storytold/materialcraft/issues/105).

## Still stuck?

- Ask in the [ArtCraft Discord](https://discord.gg/artcraft).
- [Report a bug on GitHub](https://github.com/storytold/materialcraft/issues). Say which version and system you use. **Help › About MaterialCraft...** shows the version, and the status bar shows it too.
