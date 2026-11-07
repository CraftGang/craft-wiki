---
title: Troubleshooting
description: Fix graphics-card problems, missing footage, drag and drop on Linux, and lost work in EffectCraft.
sidebar:
  order: 6
---

On a Mac, use **⌘** in place of **Ctrl**, and **Option** in place of **Alt**. Where this page says **Edit › Preferences**, choose **EffectCraft › Settings...** on a Mac.

## EffectCraft doesn't use my graphics card

Choose **Help › System Compatibility Report...** and look at the **GPU:** and **Window graphics:** lines. If it says **GPU: none (CPU compositing)**, the graphics card compositor didn't start, and the reason is shown next to it. EffectCraft still works, but previews are slower.

The **Previews** page of **Edit › Preferences** has a **GPU Information...** button with more detail.

### Try the compatibility graphics mode

1. Choose **Edit › Preferences**, then the **Startup & Repair** page.
2. Set **Window Graphics** to **OpenGL (compatibility)**. The default is **Automatic**.
3. Restart EffectCraft.

OpenGL always composites on the CPU, so this helps the window open reliably but won't make previews faster.

:::note
If the graphics driver crashes, EffectCraft switches to OpenGL by itself the next time it starts.
:::

### NVIDIA graphics on Windows 11

On some Windows 11 PCs with NVIDIA graphics, the compositor fails to start on DirectX 12 but works on Vulkan. This is a [known issue](https://github.com/storytold/effectcraft/issues/613).

## Footage is missing or offline

Footage goes missing when its file is moved, renamed or deleted, or when you open a project from another computer.

- **File › Dependencies › Find Missing Footage** selects every missing item in the Project panel.
- **File › Dependencies › Relink Missing Footage...** points missing items at their new folder. It isn't in the browser version.
- **File › Replace Footage › File...** (**Ctrl+H**) points one item at another file.
- **File › Reload Footage** (**Ctrl+Alt+L**) reads the file again after you change it.

## I can't drag files onto the window on Linux

Dropping files doesn't work when EffectCraft runs natively on Wayland. Use **File › Import › File...** instead, or start EffectCraft through XWayland:

```bash
env -u WAYLAND_DISPLAY effectcraft
```

## EffectCraft crashed and I lost work

EffectCraft auto-saves your projects. Set it up on the **Project** page of **Edit › Preferences**, under **Auto-Save**:

- **Automatically Save Projects** turns it on or off.
- **Save Every** sets how often, in minutes.
- **Maximum Project Versions** sets how many auto-saves to keep.
- **Auto-Save Location** keeps them **Next to Project** or in a **Custom Location**.
- **Save When Starting Render Queue** saves before each render.

After a crash, EffectCraft offers to open the latest auto-save. Turn this on or off with **Offer to Open the Latest Auto-Save After a Crash** on the **Startup & Repair** page.

## Get a log for a bug report

Choose **Help › Enable Logging**, then do what caused the problem again. **Help › Reveal Logging File** shows where the log is.

## Still stuck?

Ask on [Discord](https://discord.gg/artcraft), or [open an issue](https://github.com/storytold/effectcraft/issues) on GitHub. Include the text from **Help › System Compatibility Report...** and, if you have one, the log.
