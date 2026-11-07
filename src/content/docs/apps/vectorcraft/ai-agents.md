---
title: AI agents
description: Let Claude or another AI assistant draw, edit and export in VectorCraft through its MCP server.
sidebar:
  order: 30
---

VectorCraft comes with an [MCP](https://modelcontextprotocol.io) server, so an AI assistant such as Claude Code can draw, edit, inspect and export VectorCraft documents. The assistant uses the same commands as VectorCraft's menus, tools and panels.

VectorCraft has no AI of its own and doesn't connect to an AI service. You bring the assistant; VectorCraft gives it the tools.

## Two ways to work

- **With the app open**: the assistant drives the VectorCraft window, and you watch the drawing change as it works.
- **Without a window**: the assistant works on documents in the background. Everything works except things that need the window, such as screenshots of the interface and answering dialogs.

The MCP server tries to connect to a running VectorCraft when it starts. If it finds none, it works without a window.

## Find vectorcraft-cli

The MCP server is part of `vectorcraft-cli`, which comes with VectorCraft:

| How you installed VectorCraft | Where `vectorcraft-cli` is |
| --- | --- |
| Windows installer | `%LOCALAPPDATA%\Programs\ArtCraft\VectorCraft\vectorcraft-cli.exe` (or under `C:\Program Files\ArtCraft\VectorCraft\` if you installed for everyone) |
| Windows portable zip | Next to `vectorcraft.exe` |
| Linux `.deb` or `.rpm` | `/usr/bin/vectorcraft-cli` |
| macOS | A separate download on the release page: `vectorcraft-cli-<ver>-macos-universal.zip` |

## Connect Claude Code

On Linux, or on macOS once you've unzipped `vectorcraft-cli` somewhere on your `PATH`:

```sh
claude mcp add vectorcraft -- vectorcraft-cli mcp
```

On Windows, in PowerShell, with the default install folder:

```powershell
claude mcp add vectorcraft -- "$env:LOCALAPPDATA\Programs\ArtCraft\VectorCraft\vectorcraft-cli.exe" mcp
```

Other MCP clients use the same command in their settings file:

```json
{"mcpServers": {"vectorcraft": {"command": "vectorcraft-cli", "args": ["mcp"]}}}
```

## Let the assistant drive the window

VectorCraft only listens for an assistant when you start it with `--control` and a port number. Start the app that way first, wait for its window to open, then start your assistant.

```sh
# Linux
vectorcraft --control 7979
# macOS (quit VectorCraft first)
open -a VectorCraft --args --control 7979
```

```powershell
# Windows, default install folder
& "$env:LOCALAPPDATA\Programs\ArtCraft\VectorCraft\vectorcraft.exe" --control 7979
```

The port only accepts connections from your own computer. Starting VectorCraft from the Start menu, the Dock or a desktop launcher doesn't open it.

:::note
The MCP server looks for the app once, when it starts. If you opened VectorCraft after your assistant, restart the assistant so it connects.
:::

## Keep the assistant to one folder

To stop the assistant reading or writing files outside a project, give it the folders it may use:

```sh
claude mcp add vectorcraft -- vectorcraft-cli mcp --automation-read-root /work/project --automation-write-root /work/project
```

`--automation-read-root` sets a folder it may read from, and `--automation-write-root` one it may write to. You can give each more than once. With these flags the server always works without a window. To confine the app instead, start it with the same flags after `--control 7979`.

## Ready-made tasks

The server offers five ready-made prompts that your assistant may show as commands: **poster**, **icon-set**, **recolor**, **trace-and-style** and **export-set**.

## More detail

The full list of tools, commands and options is in VectorCraft's [MCP documentation](https://github.com/storytold/vectorcraft/blob/main/docs/mcp.md) on GitHub. [Automate VectorCraft](/apps/vectorcraft/automate-vectorcraft/) covers the server's connection modes, running commands with `vectorcraft-cli`, and recording actions.
