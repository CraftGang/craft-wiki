---
title: SolidCraft
description: Independent parametric 3D CAD application for the Craft ecosystem.
sidebar:
  order: 0
---

![SolidCraft logo](/assets/apps/solidcraft.png)

:::note[Third-Party Application]
SolidCraft is an independent, community-developed application created and maintained by **Tangency Labs** and the SolidCraft contributors. It is not developed or officially maintained by ArtCraft, but is part of the broader Craft ecosystem.
:::

SolidCraft is an open-source parametric 3D CAD application written in Rust. Sketch on a plane, constrain and dimension the sketch, turn profiles into solids on a feature timeline, and change a parameter to watch the timeline rebuild.

## Features

- **Geometric constraint solver:** Sketch on planes with parameter-driven dimensions, coincident points, tangency, perpendicularity, symmetry, and equality.
- **Feature timeline:** Parametric extrude, revolve, sweep, loft, fillet, chamfer, shell, holes, and patterns. Every feature is recorded chronologically and recalculates when earlier steps change.
- **Assemblies & components:** Multi-body modeling, components, joints, sheet metal workflows, and plastic enclosure tools.
- **Interoperability:** STEP, IGES, 3MF, STL, and OBJ import and export.
- **Automated & agentic control:** Every action is a command scriptable via CLI, a JSON control channel, or a Model Context Protocol (MCP) server for AI coding agents.

## Documentation guides

- [Getting started](/apps/solidcraft/getting-started/) — Workspace layout, basic concepts, and creating your first parametric solid.
- [Install and update](/apps/solidcraft/install-update/) — Installing with ArtCraft Launcher, Flatpak, AppImage, or compiling from source.
- [Workflows](/apps/solidcraft/workflows/) — Sketching, parametric modeling, assemblies, and automation with CLI/MCP.
- [Troubleshooting](/apps/solidcraft/troubleshooting/) — Resolving constraint conflicts, broken timeline features, and display issues.

## Project links

- [Official SolidCraft Documentation](https://docs.solidcraft.io/)
- [SolidCraft on GitHub](https://github.com/tangency-labs/solidcraft)
- [Issue Tracker](https://github.com/tangency-labs/solidcraft/issues)
