---
title: CADCraft
description: A free, open-source 2D CAD app with a command line, object snaps, layers, dimensions and DXF and DWG files.
sidebar:
  order: 0
---

![CADCraft logo](/assets/apps/cadcraft.webp)

CADCraft is a computer-aided design app for 2D drafting. If you have used a desktop CAD program, it will feel familiar: you type commands such as `LINE` or `CIRCLE` at the command line, click points, and use object snaps, layers, dimensions, hatches and blocks. It opens and saves DXF and DWG drawings, and runs on Windows, macOS, Linux, FreeBSD and in a web browser. It is free and open source (MIT or Apache-2.0), and made by the ArtCraft team.

:::caution[Pre-alpha]
CADCraft is in pre-alpha. Many commands work, but some options are still missing, and saving a drawing made in another program can drop objects CADCraft doesn't understand yet. It draws in 2D only: there is no 3D modelling yet. Keep a copy of important drawings, and tell us what breaks on [GitHub](https://github.com/storytold/cadcraft/issues) or [Discord](https://discord.gg/artcraft).
:::

![CADCraft with an apartment floor plan open: grey walls, door swings, furniture, yellow room names with areas, a room schedule table, a leader note and cyan dimensions. Tool Sets are on the left, Layers and Properties on the right, and the command line at the bottom](/assets/uploads/cadcraft/apartment.webp)

## What it does

- **Command line**: type a command or its alias, answer the prompts, and click the `[options]` it offers. Press **Enter** or **Space** to repeat the last command.
- **Precise drawing**: object snaps, polar tracking, ortho, grid snap, and typed coordinates such as `@10,0` and `@5<45`.
- **Draw**: lines, polylines, circles, arcs, rectangles, polygons, ellipses, splines, points, text and multiline text.
- **Modify**: move, copy, rotate, scale, mirror, stretch, offset, trim, extend, fillet, chamfer, arrays and more. Selected objects show grips you can drag.
- **Layers and properties**: a Layers palette, the Layer Properties Manager, and a Properties palette for editing selected objects.
- **Annotation**: dimensions, dimension styles, leaders, multileaders and tables.
- **Hatches and blocks**: pattern, solid and gradient fills, blocks with attributes.
- **Layouts**: paper-space sheets with viewports at a chosen scale, plotted to PDF, PNG or SVG files.
- **Constraints**: geometric and dimensional constraints that hold when you edit.
- **Automation**: scripts, LISP routines, a command-line tool and an MCP server for AI agents.
- **Interface**: light and dark themes, and an interface in 19 languages.

## Your files

CADCraft opens **.dxf**, **.dwg** and **.dwt** (template) drawings, and SVG files. It saves DXF, DWG and DWT, and exports PDF, SVG and PNG. See [DWG and DXF files](/apps/cadcraft/files/) for what is kept and what isn't.

Your drawings stay on your computer. CADCraft needs no account.

## What you need

- Windows (64-bit, ARM or 32-bit), macOS (Apple silicon or Intel), Linux, or FreeBSD.
- Or a modern web browser, for the web version.

## Guides

- [Getting started](/apps/cadcraft/getting-started/): draw and save your first drawing.
- [Install and update](/apps/cadcraft/install-update/): download CADCraft for your system.
- [Workflows](/apps/cadcraft/workflows/): precise drawing, layers, dimensions, hatches, blocks and layouts.
- [DWG and DXF files](/apps/cadcraft/files/): open, save and export drawings.
- [Scripts, LISP and AI agents](/apps/cadcraft/automation/): automate CADCraft.
- [Troubleshooting](/apps/cadcraft/troubleshooting/): fix common problems.

[CADCraft on GitHub](https://github.com/storytold/cadcraft) · [Product page](https://getartcraft.com/apps/cadcraft)
