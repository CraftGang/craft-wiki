---
title: MaterialCraft
description: An open-source, node-based material designer. Build tileable materials in a node graph, preview them in 2D and 3D, and export the texture maps.
sidebar:
  order: 0
---

MaterialCraft is a node-based material designer. You build a material by connecting nodes in a graph, watch it update in a 2D view and on a 3D model, and export its maps (base color, normal, roughness, metallic, height and so on) for a game engine or a 3D app. It runs on Windows, macOS, Linux, FreeBSD and in a web browser. It is free and open source (MIT or Apache-2.0), and made by the ArtCraft team.

:::caution[Early and changing fast]
MaterialCraft is in active development. In version 0.2 its node library was rebuilt from basic building blocks, so the ready-made noises, patterns and sample materials of earlier versions are gone for now. Expect missing pieces, keep copies of your work, and tell us what breaks on [GitHub](https://github.com/storytold/materialcraft/issues) or [Discord](https://discord.gg/artcraft).
:::

![The MaterialCraft window in version 0.1: the Explorer and Library panels on the left, a brick wall node graph with a thumbnail on every node in the middle, a 3D view of a brick-covered rounded cube and a 2D view of the brick texture below it, and the selected node's properties on the right](/assets/uploads/materialcraft/workspace.webp)

*This screenshot is from MaterialCraft 0.1. The panels are the same today, but the nodes it shows have since been replaced.*

## What it does

- **Node graph**: connect nodes with wires, group them in frames, add comments and reroute dots. Press **Space** over the graph to search for a node.
- **Building blocks**: blend, blur, levels, curves, gradient maps, HSL, warps, normal maps, transforms, text, SVG and bitmap images, and more.
- **Functions**: Pixel Processor and Value Processor nodes run a small function graph you build yourself, for effects no other node gives you.
- **FX-Map**: a node for patterns made by repeating and splitting shapes.
- **Live previews**: a 2D view of any node, and a 3D view of the whole material on a built-in shape or your own model.
- **Export**: write every output of a graph as image files, in one go.

## Your files

MaterialCraft saves your work as **.sbs** packages. A package can hold several graphs and the images they use.

It exports maps as PNG, JPEG, TGA, TIFF, BMP, WebP, OpenEXR or Radiance HDR, at 8, 16 or 32 bits. **File › Export material...** also writes a portable **.mcmat** material, with the maps and the graph together.

:::note
.sbs is also the format of another node-based material app. MaterialCraft opens those files, but many of their library nodes aren't in MaterialCraft yet. They open as placeholder nodes, and the **Console** lists what's missing.
:::

## What you need

- Windows (64-bit, ARM or 32-bit), macOS (Apple silicon or Intel), Linux, or FreeBSD.
- Or a modern web browser, for the web version.

## Guides

- [Getting started](/apps/materialcraft/getting-started/): build your first graph and export its maps.
- [Install and update](/apps/materialcraft/install-update/): download MaterialCraft for your system.
- [Workflows](/apps/materialcraft/workflows/): nodes, wires, functions, previews, exporting and AI agents.
- [Troubleshooting](/apps/materialcraft/troubleshooting/): fix common problems.

[MaterialCraft on GitHub](https://github.com/storytold/materialcraft) · [Product page](https://getartcraft.com/apps/materialcraft)
