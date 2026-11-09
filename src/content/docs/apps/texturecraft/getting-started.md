---
title: Getting started
description: Install TextureCraft, start a project from a 3D model, paint it and export the textures.
sidebar:
  order: 1
---

## 1. Install TextureCraft

The quickest way is [ArtCraft Launcher](https://github.com/storytold/craft-launcher/releases/latest): install it, then press **Install** on TextureCraft's card. To download TextureCraft on its own, see [Install and update](/apps/texturecraft/install-update/).

## 2. Open TextureCraft

TextureCraft opens with a sample project, and a start window over it. From the start window you can:

- **New project...**: start from a 3D model.
- **Open...**: open a .tcraft project or a model file.
- Pick one of your **Recent projects**.
- **Continue with the sample project**: close the window and look around the sample.

To skip the start window next time, clear **Show at startup**.

You can also start TextureCraft from a terminal. Give it a project or a model to open it right away, or add `--empty` to start without the sample project:

```bash
texturecraft my-project.tcraft
texturecraft crate.glb
texturecraft --empty
```

## 3. Move around the model

| To | Do this |
| --- | --- |
| Turn the model | Right-drag, or **Alt**+drag |
| Pan | Middle-drag |
| Zoom | Scroll the wheel |
| Fit the model in the view | Press **F** |
| Turn the lighting | **Shift**+right-drag |

## 4. Start a project from your model

Choose **File › New project...** (**Ctrl+N**, or **⌘N** on a Mac). In the **New project** window:

1. Under **3D mesh**, pick a built-in mesh, or choose **Select...** to load your own model.
2. Pick a **Project template**, or keep the default.
3. Set the **Document resolution**: the size of the textures you paint, from 512 × 512 to 4096 × 4096. You can change it later.
4. Leave **UV tiles (UDIM)** on **Automatic (from the mesh UVs)** unless you know your model needs it.
5. Give the project a **Name** and choose **Create**.

Each material in your model becomes a **texture set**, listed in the **Texture Sets** panel.

## 5. Bake mesh maps

Smart materials and smart masks use mesh maps (ambient occlusion, curvature and so on) to place wear and dirt. Bake them first:

1. Choose **Mode › Bake Mesh Maps** (**F8**).
2. Select the texture sets and the maps you want.
3. Choose **Bake Selected Textures**.
4. Choose **Return to Painting Mode** when it's done.

![Bake mode: the texture sets and the mesh map bakers checked on the left, the common parameters below them, and the bake and return-to-painting buttons under the 3D view of the portable TV](/assets/uploads/texturecraft/bake.webp)

## 6. Add a material

Open the **Materials** or **Smart materials** tab of the **Assets** shelf. Drag a material onto the **Layers** stack, or straight onto the model. It arrives as a fill layer, which you can change in **Properties**.

## 7. Paint

Add a paint layer first, with **Add paint layer** in the **Layers** panel, so your strokes stay separate from the material below. Then choose the **Paint** tool (**1**) and paint on the model. Set **Size**, **Flow** and **Stroke opacity** in the bar at the top.

**Ctrl+Z** undoes a stroke. The **History** panel (**Window › Views › History**) lets you jump back to any step.

## 8. Save

Press **Ctrl+S** (**⌘S** on a Mac). TextureCraft saves a .tcraft project file. It also keeps autosaves in its data folder.

## 9. Export your textures

1. Choose **File › Export Textures...** (**Ctrl+Shift+E**).
2. Select the texture sets to export.
3. Choose an **Output directory**.
4. Pick an **Output template**, for example one for your game engine.
5. Choose **Export**.

## Next steps

- [Workflows](/apps/texturecraft/workflows/): layers, masks, export templates and Rendering mode.
- [Troubleshooting](/apps/texturecraft/troubleshooting/): if the window doesn't open or something looks wrong.
