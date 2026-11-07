---
title: AI agents
description: Let Claude or another AI assistant build, animate and render compositions with EffectCraft.
sidebar:
  order: 5
---

EffectCraft is built so that AI assistants can use it as well as people. Any assistant that supports the [Model Context Protocol](https://modelcontextprotocol.io) (MCP) can create compositions, add layers, set keyframes, apply effects, look at rendered frames and render through the Render Queue.

## Get the command-line tool

Assistants talk to EffectCraft through its command-line tool, `effectcraft-cli`:

- **Windows**: `effectcraft-cli.exe` is next to `effectcraft.exe` in the install folder, `%LOCALAPPDATA%\Programs\ArtCraft\EffectCraft` by default. It isn't on your `PATH`, so use its full path.
- **macOS**: download `effectcraft-cli-<ver>-macos-universal.zip` from the [release page](https://github.com/storytold/effectcraft/releases/latest).
- **Linux `.deb` and `.rpm`**: it's installed as `/usr/bin/effectcraft-cli`.

## Connect your assistant

### Claude Code

On Windows, in PowerShell:

```powershell
claude mcp add effectcraft -- "$env:LOCALAPPDATA\Programs\ArtCraft\EffectCraft\effectcraft-cli.exe" mcp
```

On Linux, or on macOS with the tool on your `PATH`:

```bash
claude mcp add effectcraft -- effectcraft-cli mcp
```

### Other assistants

Claude Desktop, Cursor and other MCP clients start the same command: `effectcraft-cli` with the argument `mcp`. Use the full path to `effectcraft-cli`.

## Limit which folders it can use

By default the assistant can read and write files anywhere your user account can. To keep it to certain folders, add these options to the `mcp` command. Each takes a full path, and you can repeat them:

- `--automation-read-root <folder>`: folders it may read from.
- `--automation-write-root <folder>`: folders it may write to. Without one, it can't write anything.

While it's limited this way, it can't run scripts either.

## Watch it work in the app

By default the assistant works on its own copy of EffectCraft, with no window. To see its changes live in the app instead:

1. Start EffectCraft with a control port: `effectcraft --control 9877`.
2. Connect the assistant with `effectcraft-cli mcp --bridge 9877`.

The assistant can then also take screenshots and use the app's menus and panels.

## What to ask for

For example:

- "Make a 1080p, 4-second composition with the title 'Hello' sliding in from the left with Easy Ease."
- "Add a Gaussian Blur to the title and animate it from 20 to 0."
- "Render the Intro composition as ProRes with alpha."

## Use it without an assistant

`effectcraft-cli` also works on its own. Run `effectcraft-cli --help` to see what it can do. For example, to render a composition from a saved project:

```bash
effectcraft-cli render main.ecproj --comp Main --out main.mp4
```
