---
title: Scripts, LISP and AI agents
description: Automate CADCraft with scripts, LISP routines, command aliases, the cadcraft-cli tool and AI agents over MCP.
sidebar:
  order: 5
---

Everything in CADCraft is a command, so anything you can do by hand you can also script. Scripts and LISP routines run inside the app. The `cadcraft-cli` tool runs CADCraft without a window, and lets AI agents draw through MCP.

## Run a script

A script (`.scr`) is a text file with what you would type at the command line, one line at a time. Choose **Tools › Run Script...** to run one.

## Load LISP routines

CADCraft runs AutoLISP routines (`.lsp`). Choose **Tools › Load Application...**, or type `(load "name")` at the command line. Most routines that draw, edit and ask for points or objects work as they are.

To load routines every time, put them in the `support` folder inside CADCraft's settings folder, and load them from an `acad.lsp` or `acaddoc.lsp` file there:

| System | Support folder |
| --- | --- |
| Windows | `%APPDATA%\CADCraft\support\` |
| macOS | `~/Library/Application Support/CADCraft/support/` |
| Linux | `~/.config/cadcraft/support/` |

A drawing's own folder is never searched, so an `acaddoc.lsp` that came with a downloaded drawing doesn't run.

:::note
Not supported yet: Visual LISP ActiveX functions (`vlax-…`, `vla-…`), DCL dialogs, reactors, compiled `.fas` and `.vlx` files, and C++ or .NET plug-ins.
:::

## Change command aliases

Choose **Tools › Customize › Edit Command Aliases (PGP)...** to add, change or remove aliases. **Import…** loads a `.pgp` alias file from another CAD program. Your aliases are kept after a restart.

## Use cadcraft-cli

`cadcraft-cli` comes with the Windows and Linux packages. On macOS it is a separate download: see [Install and update](/apps/cadcraft/install-update/#macos). It has five subcommands:

| Subcommand | What it does |
| --- | --- |
| `info` | Describes a drawing: its layers, blocks, objects and more, as JSON |
| `convert` | Converts a drawing, for example DWG to DXF, or DXF to SVG, PNG or PDF |
| `run` | Opens a drawing, runs commands or a script, and saves or exports the result |
| `commands` | Lists every command and its parameters |
| `mcp` | Starts an MCP server for AI agents |

For example:

```sh
cadcraft-cli info drawing.dxf
cadcraft-cli convert drawing.dwg drawing.pdf
cadcraft-cli run drawing.dxf --script-file setup.scr --save out.dxf
```

`cadcraft-cli --help` lists every option.

## Let an AI agent draw

CADCraft has an [MCP](https://modelcontextprotocol.io) server, so an AI assistant that supports MCP can draw and edit with it. The agent can type at the command line like a person, run any command, read back what is in the drawing to check its work, and look at a picture of it.

To give an agent its own drawing, with no window, add this to your MCP client's settings:

```json
{ "mcpServers": { "cadcraft": { "command": "cadcraft-cli", "args": ["mcp"] } } }
```

To watch the agent work in the app instead:

1. Start CADCraft with a control port: `cadcraft --control 7979`.
2. Point your MCP client at it, with `"args": ["mcp", "--connect", "127.0.0.1:7979"]`.

The control port only listens on your own computer. The agent can then also take screenshots and click in the app.
