---
title: Workflows
description: Step-by-step guides to drawing, selecting, coloring, type, effects, layers, perspective, tracing, exporting, printing and automating in VectorCraft, with shortcuts.
sidebar:
  order: 3
---

In VectorCraft, every shape, line and letter is a path: an outline that stays sharp at any size. The guides below start with a new document and end with automation, and you can read each one on its own.

Shortcuts are written for Windows and Linux first, then macOS: **Ctrl+G** (**Cmd+G** on macOS). You can change every shortcut in **Edit → Keyboard Shortcuts…** (**Ctrl+Alt+Shift+K**, or **Cmd+Option+Shift+K** on macOS). **Help → Search Commands…** (**Ctrl+Shift+/**, or **Cmd+Shift+/** on macOS) finds any menu command by name.

:::note
Some menu items are grayed out. Those features are not built yet; they are listed so you can see what is coming.
:::

## Guides

| Guide | What it covers |
|---|---|
| [Set up a document and artboards](/apps/vectorcraft/set-up-documents-and-artboards/) | New Document presets, artboards, units, bleed, color mode and moving around the canvas |
| [Draw and transform shapes](/apps/vectorcraft/draw-and-transform-shapes/) | Shape tools, live corners, selecting, moving, rotating, scaling and repeating a transform |
| [Select artwork](/apps/vectorcraft/select-artwork/) | The Group Selection, Lasso and Magic Wand tools, the **Select** menu, Global Edit and saved selections |
| [Draw and edit paths](/apps/vectorcraft/draw-and-edit-paths/) | The Pen, Curvature, Pencil, Paintbrush and Blob Brush tools, anchor editing and the **Object → Path** commands |
| [Paint with brushes and variable widths](/apps/vectorcraft/paint-with-brushes/) | Brush kinds, the Brushes panel, brush libraries, your own brushes, the Width tool and the Blob Brush |
| [Reshape with the warp tools](/apps/vectorcraft/reshape-with-warp-tools/) | The Warp, Twirl, Pucker, Bloat and related tools, the Reshape tool, Puppet Warp and Envelope Distort |
| [Cut, join and refine paths](/apps/vectorcraft/cut-join-and-refine-paths/) | The Eraser, Knife, Join and Shaper tools, the Smart Pen, the Contour tool and the path precision tools |
| [Fill, stroke and color](/apps/vectorcraft/fill-stroke-and-color/) | Fill and stroke, swatches, the Stroke panel, gradients, gradient meshes, patterns and recoloring |
| [Add and style type](/apps/vectorcraft/add-and-style-type/) | Point type, area type, type on a path, threading and the Character and Paragraph panels |
| [Work with styles and long text](/apps/vectorcraft/work-with-styles-and-long-text/) | Paragraph and character styles, OpenType features and glyphs, tabs, text wrap and Find and Replace |
| [Arrange, group and align](/apps/vectorcraft/arrange-group-and-align/) | Stacking order, groups, lock and hide, selecting similar objects and the Align panel |
| [Combine and cut shapes](/apps/vectorcraft/combine-and-cut-shapes/) | Pathfinder, Shape Builder, compound paths, clipping masks and Live Paint |
| [Make patterns, blends and repeats](/apps/vectorcraft/make-patterns-blends-and-repeats/) | Pattern swatches and the Pattern Options panel, Repeat, Intertwine, objects on a path and blends |
| [Apply effects and appearance](/apps/vectorcraft/apply-effects-and-appearance/) | The Appearance panel, live effects, blends, Repeat, Envelope Distort, 3D and graphic styles |
| [Organize with layers and symbols](/apps/vectorcraft/organize-with-layers-and-symbols/) | Layers, sublayers, template layers and reusable symbols |
| [Draw in perspective](/apps/vectorcraft/draw-in-perspective/) | The perspective grid and its presets, the active plane, and drawing and moving art in perspective |
| [Measure and dimension](/apps/vectorcraft/measure-and-dimension/) | The Measure tool, the Info panel, the Dimension tool and Document Info |
| [Trace an image](/apps/vectorcraft/trace-an-image/) | Placing an image and turning it into paths with Image Trace |
| [Work with placed images](/apps/vectorcraft/work-with-placed-images/) | The Links panel, relinking and embedding, cropping, rasterizing and Object Mosaic |
| [Export for screens and the web](/apps/vectorcraft/export-for-screens-and-the-web/) | Export for Screens, assets, SVG and PNG options |
| [Slice artwork for the web](/apps/vectorcraft/slice-artwork-for-the-web/) | The Slice tool, slice options, exporting slices and copying CSS |
| [Open and save files](/apps/vectorcraft/open-and-save-files/) | The VectorCraft format, Save As formats, opening other files and placing them |
| [Print your artwork](/apps/vectorcraft/print-your-artwork/) | The Print dialog, marks and bleed, scaling, separations and print presets |
| [Print a large poster](/apps/vectorcraft/print-tiling/) | Tiling a drawing across several sheets of paper |
| [Manage color and proof for print](/apps/vectorcraft/manage-color-and-proof/) | Color settings, proofing, overprint and separations previews, spot colors and flattening transparency |
| [Make graphs and data-driven art](/apps/vectorcraft/make-graphs-and-data-driven-art/) | Graph tools and graph data, variables, data sets and variable libraries |
| [Customize the workspace](/apps/vectorcraft/customize-the-workspace/) | Workspaces, panels, your own toolbars, extra windows, the Navigator, Presentation Mode and the History panel |
| [Use the built-in plug-ins](/apps/vectorcraft/built-in-plug-ins/) | Arrange Tools, Artwork Cleanup, Color Effects, Document Tools and the 3D Box tool |
| [Automate VectorCraft](/apps/vectorcraft/automate-vectorcraft/) | Command search, keyboard shortcuts, the Actions panel, running an action on a folder of files, checking a script, the command-line tool and the Model Context Protocol (MCP) server |
| [AI agents](/apps/vectorcraft/ai-agents/) | Connecting an MCP client to VectorCraft and limiting it to one folder |
| [Keyboard shortcuts](/apps/vectorcraft/keyboard-shortcuts/) | Changing shortcuts, and every default shortcut by menu and tool |
| [Preferences](/apps/vectorcraft/preferences/) | Every page of the Preferences dialog and how to reset it |

## Draw in perspective

Show the grid with **View → Perspective Grid → Show Grid** (**Ctrl+Shift+I**, or **Cmd+Shift+I** on macOS). Choose **One Point Perspective**, **Two Point Perspective** or **Three Point Perspective** from the same menu. While the grid is showing, the Rectangle, Ellipse, Polygon, Star and Line tools draw on its active plane. Use the **Perspective Selection Tool** (**Shift+V**) to move art along its plane.

![Two lit building facades drawn on the left and right planes of a two-point perspective grid at sunset, with the Perspective Selection tool active and the plane widget in the top-left corner](/assets/uploads/vectorcraft/perspective.webp)

[Draw in perspective](/apps/vectorcraft/draw-in-perspective/) covers adjusting the grid, choosing the active plane, putting flat art and type on a plane, and saving grid presets.

## Measure and dimension

The **Dimension Tool** adds lengths, angles and radii to technical drawings. Choose **Linear**, **Angular** or **Radial** in its bar, then drag out from an edge or click two points. The dimension follows the art when you change it. Set the units, precision and style in the **Properties** panel.

![A bracket drawing in the light theme with linear, angular, diameter and radius dimensions in millimeters. The Dimension tool's bar offers Linear, Angular and Radial, and the Properties panel shows the selected dimension's units, precision, line weight and arrow style](/assets/uploads/vectorcraft/dimensions.webp)

[Measure and dimension](/apps/vectorcraft/measure-and-dimension/) covers the Measure tool, the Info panel, every dimension option and Document Info.

## Change how VectorCraft looks

- Choose **Edit → Preferences…** (**Ctrl+K**) and open the **User Interface** page. On macOS, choose **VectorCraft → Settings → User Interface…**. The page sets the **Brightness** (**Dark**, **Medium Dark**, **Medium Light** or **Light**), the **Accent Color**, the **Canvas Color** and the interface size under **UI Scaling**.
- **Language** on the same page changes the interface language. By default, VectorCraft follows your system's language.
- **Window → Workspace** switches between panel layouts and saves your own.
- [Preferences](/apps/vectorcraft/preferences/) lists every page of the dialog, and [Customize the workspace](/apps/vectorcraft/customize-the-workspace/) covers panels, workspaces and toolbars.

## Keyboard shortcuts

| Command | Windows and Linux | macOS |
|---|---|---|
| Selection, Direct Selection | V, A | V, A |
| Pen, Type | P, T | P, T |
| Rectangle, Ellipse | M, L | M, L |
| Hand, Zoom | H, Z | H, Z |
| New, Open, Save | Ctrl+N, Ctrl+O, Ctrl+S | Cmd+N, Cmd+O, Cmd+S |
| Save As | Ctrl+Shift+S | Cmd+Shift+S |
| Undo, Redo | Ctrl+Z, Ctrl+Shift+Z | Cmd+Z, Cmd+Shift+Z |
| Copy, Cut, Paste | Ctrl+C, Ctrl+X, Ctrl+V | Cmd+C, Cmd+X, Cmd+V |
| Paste in Front, Paste in Back | Ctrl+F, Ctrl+B | Cmd+F, Cmd+B |
| Group, Ungroup | Ctrl+G, Ctrl+Shift+G | Cmd+G, Cmd+Shift+G |
| Bring Forward, Send Backward | Ctrl+], Ctrl+[ | Cmd+], Cmd+[ |
| Transform Again | Ctrl+D | Cmd+D |
| Zoom In, Zoom Out | Ctrl+=, Ctrl+- | Cmd+=, Cmd+- |
| Fit Artboard in Window | Ctrl+0 | Cmd+0 |
| Outline view on or off | Ctrl+Y | Cmd+Y |
| Show or hide rulers | Ctrl+R | Cmd+R |
| Smart Guides on or off | Ctrl+U | Cmd+U |
| Preferences | Ctrl+K | Cmd+K |

[Keyboard shortcuts](/apps/vectorcraft/keyboard-shortcuts/) lists every default shortcut, grouped by menu and tool.

## Before you start

- [Install and update](/apps/vectorcraft/install-update/) lists where to download VectorCraft for your platform.
- [Getting started](/apps/vectorcraft/getting-started/) covers a first document, from a blank artboard to an exported PNG and SVG.
- [Troubleshooting](/apps/vectorcraft/troubleshooting/) covers common problems and where to find the log.
