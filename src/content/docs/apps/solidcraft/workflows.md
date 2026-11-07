---
title: Workflows
description: Common workflows, assemblies, file formats, and automation in SolidCraft.
---

:::note[Third-Party Application]
SolidCraft is maintained by Tangency Labs and the SolidCraft open-source community. Upstream workflow docs are available at [docs.solidcraft.io](https://docs.solidcraft.io/).
:::

SolidCraft provides tools for mechanical modeling, 3D printing preparation, sheet metal design, and automated CAD scripting.

## Parametric Modeling Workflow

1. **Global Parameters**: Open the **Parameters table** (`Shift+P`) to define project-wide variables before sketching (such as `thickness = 2.5mm`, `clearance = 0.2mm`).
2. **Robust Referencing**: Always constrain new sketches to principal reference planes or stable datum features rather than generated fillet/chamfer edges to avoid downstream timeline breaks.
3. **Timeline Scrubbing**: Drag the rollback bar along the timeline to insert new features or sketches at earlier stages in design history.
4. **Patterning**: Use rectangular or circular patterns for repeated geometry like bolt patterns, vents, and cooling fins.

## 3D Printing & Fabrication

- **Exporting for slicing**: Select any body or assembly component, right-click, and choose **Export Mesh**. SolidCraft supports **3MF** (recommended for multi-body metadata and high resolution), binary **STL**, and **OBJ**.
- **Tolerance Checking**: Use the **Section Analysis** tool to inspect internal clearances and wall thicknesses before printing.

## Multi-Body and Assemblies

- Convert discrete bodies into components when modeling parts that move relative to each other.
- Add joints (Rigid, Revolute, Slider, Cylindrical, Ball) between component coordinate systems to simulate mechanical mechanisms.

## Automation and AI Agents (MCP)

Every UI action in SolidCraft corresponds to an internal command. SolidCraft features:
- **CLI Mode**: Run `solidcraft-cli input.scad --export output.step` for headless conversions.
- **Model Context Protocol (MCP) Server**: Exposes CAD creation and parameter modification tools to AI coding agents and LLMs. Run `solidcraft-cli --mcp` to connect your AI assistant directly to SolidCraft's CAD engine.
