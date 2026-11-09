---
title: Workflows
description: Common workflows, assemblies, file formats, and automation in SolidCraft.
sidebar:
  order: 3
---

:::note[Third-Party Application]
SolidCraft is maintained by Tangency Labs and the SolidCraft open-source community. Upstream workflow docs are available at [docs.solidcraft.io](https://docs.solidcraft.io/).
:::

SolidCraft provides tools for mechanical modeling, 3D printing preparation, sheet metal design, and automated CAD scripting.

## Parametric Modeling Workflow

1. **Global Parameters**: Open **Change Parameters** to define project-wide variables before sketching (such as `thickness = 2.5mm`, `clearance = 0.2mm`).
2. **Stable references**: Always constrain new sketches to principal reference planes or stable datum features rather than generated fillet/chamfer edges to avoid downstream timeline breaks.
3. **Timeline Scrubbing**: Drag the rollback bar along the timeline to insert new features or sketches at earlier stages in design history.
4. **Patterning**: Use rectangular or circular patterns for repeated geometry like bolt patterns, vents, and cooling fins.

## 3D Printing & Fabrication

- **Exporting for slicing**: Select a body and choose **File › Export STL…** or **File › Export 3MF…** (also **Save As Mesh** on the Insert tab's Files panel and in the body's right-click menu). To send bodies straight to a slicer, use **File › Send to Slicer**.
- **Tolerance Checking**: Use the **Section Analysis** tool to inspect internal clearances and wall thicknesses before printing.

### Send to a slicer

**File › Send to Slicer** saves the selected bodies as a 3MF in millimeters and opens it in a slicer. It asks which slicer, and remembers your last choice. Choose **Custom…** to add a program that isn't in the list. Sending again replaces the file the slicer has open, so use the slicer's reload command to pick up the new copy.

To tell the slicer which face goes on the bed, select a flat face and press **Ctrl+B**. This sets the body's print face. Press **Ctrl+B** again to clear it. The design itself doesn't move.

## File formats

Open and save designs from the **File** menu. SolidCraft saves its own designs as `.sc`. It also opens plain `.json` designs, and `.solidcraft` files from earlier releases.

| Format | In | Out |
| --- | --- | --- |
| STEP (AP203, AP214, AP242) | Solids and assemblies | Solids, with names, colors and the component tree |
| IGES | Solids | Solids |
| FreeCAD `.FCStd`, Rhino `.3dm` | Solids | |
| STL, 3MF, OBJ | Mesh bodies | Yes |
| glTF (`.glb`, `.gltf`) | Mesh bodies | |
| DXF, SVG | Into a sketch | Sketches and flat patterns, as DXF |
| PNG, JPEG | As canvases and decals | |
| URDF | | An assembly as a robot description |

Opening a STEP, IGES, FreeCAD or Rhino file starts a design with the file's bodies. **Insert** adds a file to the open design. Every imported file arrives as a new component named after the file. Mesh bodies can be moved, measured and exported, but solid features such as fillets need solid (B-rep) bodies.

SolidCraft opens files up to 512 MB, and designs up to 256 MB. To raise the limits, change **Largest file to open** in **Preferences › General**, or start SolidCraft with `--max-file-size`, for example `solidcraft --max-file-size 2GB big-assembly.step`.

Each save keeps the version it replaced next to the file, as `<file>.bak`.

## Keyboard shortcuts

On a Mac, use **Cmd** in place of **Ctrl**. To change a shortcut, choose **File › Keyboard Shortcuts**. **Help › Keyboard Shortcuts** lists the current ones.

| Key | What it does |
| --- | --- |
| **L**, **R**, **C** | Line, rectangle, circle |
| **D** | Sketch dimension |
| **X**, **O**, **T**, **P** | Construction, offset, trim, project |
| **E**, **Q** | Extrude, press pull |
| **F**, **H** | Fillet, hole |
| **M**, **J** | Move/copy, joint |
| **I**, **A** | Measure, appearance |
| **S** | Search for a command |
| **V** | Show or hide the selected items |
| **F2** | Rename the selected item in the browser or timeline |
| **F6** | Fit the view to the model |
| **Ctrl+1** to **Ctrl+7** | Front, back, left, right, top, bottom and isometric views |
| **Ctrl+8** | Look straight at the selected face, plane or sketch |
| **Ctrl+Z**, **Ctrl+Y** | Undo, redo |
| **Esc** | Cancel the running command, or clear the selection |

Outside a sketch, a sketch tool's key opens **Create Sketch** and starts the tool. Drag with the middle button to pan, and double-click it to go back to the home view. On a laptop trackpad, the **Touchpad** navigation preset lets you pan with **Shift** and orbit with **Alt** (**Option** on a Mac) without pressing a button.

## Multi-Body and Assemblies

- Convert discrete bodies into components when modeling parts that move relative to each other.
- Add joints (Rigid, Revolute, Slider, Cylindrical, Ball) between component coordinate systems to simulate mechanical mechanisms.

## More feature areas

The SolidCraft guide has a page for most of these.

- Sheet metal. The **SHEET METAL** tab builds parts of constant thickness from a rule you set in **Sheet Metal Rules**. It has **Flange**, **Hem**, **Fold**, **Unfold** and **Refold**. **Convert to Sheet Metal** is in **MODEL › MODIFY**. See [Sheet metal](https://docs.solidcraft.io/guide/sheet-metal.html).
- Plastic parts. **MODEL › CREATE** has **Boss**, **Lip / Groove**, **Snap Fit** and **Rest**. **Plastic Rules** in **MANAGE › RULES** sets wall thickness, draft and clearance. See [Plastic parts](https://docs.solidcraft.io/guide/plastic.html).
- Equation curves. In a sketch, **SKETCH › CREATE › Equation Curve** draws a curve from a rule you type, such as a wave, a parabola or a gear tooth. See [Equation curves](https://docs.solidcraft.io/guide/equation-curves.html).
- Components and joints. **New Component** adds a component, and **Create Components from Bodies** turns bodies into components. See [Components and joints](https://docs.solidcraft.io/guide/assemblies.html).
- 3D mouse. SolidCraft detects a 3Dconnexion SpaceMouse or SpaceNavigator on Windows, macOS and Linux. Its settings are in **Preferences › Navigation**. The Flatpak build can't reach the device.

## Automation and AI Agents (MCP)

Every action in SolidCraft is a command, so scripts and AI assistants can run them too.

- From the command line: `solidcraft-cli run bracket.json --out bracket.step` builds a JSON design and exports it without the app.
- From an AI assistant: `solidcraft-cli mcp` starts a Model Context Protocol (MCP) server with tools for creating CAD models and changing parameters.

There are two ways to connect:

- Headless: `solidcraft-cli mcp` works on its own design with no window. Add `--in part.sc` to start from a design file.
- To watch it work: with SolidCraft running, `solidcraft-cli mcp` finds the app and connects to it, so you see the changes as they happen. To name the app yourself, use `--connect 127.0.0.1:<port>`.

The app listens on `127.0.0.1` only, usually on port `27878`, and each connection needs a token that SolidCraft makes new at every start. To turn this off, clear **Let AI agents connect** in **Preferences › Assistant**, then restart SolidCraft.

SolidCraft also has its own **Agent chat** panel. To use a model that runs on your computer, such as one served by Ollama or LM Studio, open **Preferences › AI** and choose **Add agent…**. The model has to support tool calling.
