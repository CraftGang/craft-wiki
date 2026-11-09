---
title: Getting started
description: Get started with parametric 3D CAD modeling in SolidCraft.
sidebar:
  order: 1
---

:::note[Third-Party Application]
SolidCraft is an independent open-source CAD application maintained by Tangency Labs. For comprehensive upstream documentation, visit [docs.solidcraft.io](https://docs.solidcraft.io/).
:::

SolidCraft is built around parametric, timeline-based solid modeling. Instead of pushing and pulling geometry directly, you define 2D sketches with mathematical constraints and dimensions, then convert them into 3D features.

The quickest way to install is [ArtCraft Launcher](https://github.com/storytold/craft-launcher/releases/latest): install it, then press **Install** on SolidCraft's card. To download SolidCraft on its own or through other package managers, see [Install and update](/apps/solidcraft/install-update/).

## Core concepts

1. **Sketches**: A 2D drawing made on a plane or planar face. Lines, arcs, circles, and splines are locked down using geometric constraints (parallel, perpendicular, tangent) and numeric dimensions (distance, radius, angle).
2. **Timeline (History tree)**: Every operation (extrude, fillet, cut) is saved as an event along the bottom timeline. You can drag the timeline marker back to edit earlier features, and downstream geometry automatically rebuilds.
3. **Parameters**: Named variables (such as `wall_thickness = 3mm`, `screw_diameter = 4mm`) that can drive multiple dimensions across sketches and features.
4. **Bodies & Components**: Bodies are continuous solid shapes. When parts need relative motion or independent coordinate spaces, wrap them into components with joints.

## Your first part

1. Launch SolidCraft and choose **New Design** from the start page.
2. Click **Create Sketch** in the toolbar and select the XY ground plane.
3. Use the **Rectangle** tool to draw a rectangle starting from the origin point.
4. Press `D` to place dimension constraints: set the width to `60mm` and height to `40mm`. The top-left corner of the view shows how constrained the sketch is.
5. Click **Finish Sketch** in the top right.
6. Select **Extrude** from the solid toolbar, select the rectangular profile, and enter `15mm` for distance. Click **OK**.
7. In the timeline at the bottom, right-click your extrude feature and choose **Edit Feature** at any time to alter dimensions.

## Next steps

- Explore [Workflows](/apps/solidcraft/workflows/) for complex sketches, assemblies, and CLI integration.
- Refer to the [Official SolidCraft User Guide](https://docs.solidcraft.io/guide/getting-started.html) for deep dives into constraint solving.
