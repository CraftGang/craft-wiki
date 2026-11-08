---
title: Getting started
description: Install MaterialCraft, build your first node graph, preview it and export its maps.
sidebar:
  order: 1
---

## 1. Install MaterialCraft

The quickest way is [ArtCraft Launcher](https://github.com/storytold/craft-launcher/releases/latest): install it, then press **Install** on MaterialCraft's card. To download MaterialCraft on its own, see [Install and update](/apps/materialcraft/install-update/).

## 2. Open MaterialCraft

MaterialCraft opens with the **Home** window. From here you can:

- Choose **New graph** to start a material.
- Choose **Open package...** to open an .sbs file.
- Open the **Atomic sample** under **Samples**, to see a small graph that uses functions and an FX-Map.
- Pick a file under **Recent**.

To skip it next time, clear **Show at startup**. **Help › Home screen...** brings it back.

## 3. Start a graph

Choose **File › New › Graph...** (**Ctrl+N**, or **⌘N** on a Mac). In the **New graph** window:

1. Type a **Graph name**.
2. Pick a **Template**. **Material outputs** is a good start: it adds outputs for base color, normal, roughness, metallic, height and ambient occlusion, each fed by a flat color.
3. Pick a **Size**, from 256 to 4096 pixels.
4. Choose **Create**.

The graph appears in the **Explorer**, inside the open package.

## 4. Add and connect nodes

- Point at the graph and press **Space** (or **Tab**) to search for a node by name. You can also drag one in from the **Library**.
- Drag from a node's output port to another node's input port to connect them.
- Click a node to change its settings in **Properties**.

Every node shows a thumbnail of its result. An edit only recomputes the nodes after it, so changes show up quickly.

## 5. Preview your material

- Double-click a node to show it in the **2D View**.
- The **3D View** shows the material from your graph's outputs on a built-in shape. Its **Scene** menu changes the shape, or loads your own OBJ, glTF or GLB model with **Load mesh...**.

## 6. Save

Press **Ctrl+S** (**⌘S** on a Mac). MaterialCraft saves the package as an .sbs file. It also autosaves a copy in `Documents/MaterialCraft/autosave`.

## 7. Export the maps

1. Choose **File › Export outputs...** (**Ctrl+Shift+E**).
2. Choose a **Folder**.
3. Pick a **Format**, a **Bit depth** and a **Resolution**.
4. Change **File names** if you like. `$(graph)`, `$(identifier)` and `$(usage)` are replaced by the graph name, the output's name and its usage.
5. Choose **Export**.

## Next steps

- [Workflows](/apps/materialcraft/workflows/): wires, functions, FX-Maps, the Levels editor and more.
- [Troubleshooting](/apps/materialcraft/troubleshooting/): if the window doesn't open or something looks wrong.
