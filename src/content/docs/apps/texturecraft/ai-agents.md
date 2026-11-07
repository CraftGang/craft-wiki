---
title: AI agents
description: Let Claude or another AI assistant create projects, paint, bake and export textures with TextureCraft.
sidebar:
  order: 4
---

TextureCraft is built so that AI assistants can use it as well as people. Any assistant that supports the [Model Context Protocol](https://modelcontextprotocol.io) (MCP) can create projects, add layers and masks, paint strokes, bake mesh maps, export textures and render previews.

## Get the command-line tool

Assistants talk to TextureCraft through its command-line tool, `texturecraft-cli`:

- **Windows**: `texturecraft-cli.exe` is next to `texturecraft.exe` in the install folder or portable zip.
- **macOS**: download `texturecraft-cli-<ver>-macos-universal.zip` from the [release page](https://github.com/storytold/texturecraft/releases/latest).
- **Linux `.deb`, `.rpm`, tarball, and FreeBSD**: it's installed alongside the app.

## Choose which folders it can use

The assistant can only read and write files inside the folders you give it:

- `--read-root <folder>`: where it may open projects, models and images.
- `--write-root <folder>`: where it may save projects and export textures.

Without these, it can work on a project in memory but can't open or save any files.

## Connect your assistant

### Claude Code

```bash
claude mcp add texturecraft -- texturecraft-cli mcp --read-root . --write-root .
```

This lets it use the folder you start Claude Code in.

### Claude Desktop

Choose **Settings › Developer › Edit Config**, add TextureCraft to `claude_desktop_config.json`, then restart Claude. Use full paths:

```json
{
  "mcpServers": {
    "texturecraft": {
      "command": "C:\\Program Files\\TextureCraft\\texturecraft-cli.exe",
      "args": ["mcp", "--read-root", "C:\\Users\\you\\Texturing", "--write-root", "C:\\Users\\you\\Texturing"]
    }
  }
}
```

### Other assistants

Any MCP client can start the same command: `texturecraft-cli mcp` with the folder options.

## Watch it work in the app

By default the assistant works on its own copy of TextureCraft, with no window. To see its changes live in the app instead:

1. Start TextureCraft with a control port: `texturecraft --control 7878`.
2. Connect the assistant to it:

```bash
claude mcp add texturecraft-app -- texturecraft-cli mcp --bridge 7878
```

The assistant can then also take screenshots of the window and use the menus. The app opens and saves its own files in this mode.

## What to ask for

For example:

- "Start a project from `crate.glb`, bake the mesh maps and give it rusty painted metal."
- "Add edge wear to the paint layer and show me a render."
- "Export the textures for Unreal Engine into the `textures` folder."

## Use it without an assistant

`texturecraft-cli` also works on its own, which is handy for scripts and batch jobs. Run `texturecraft-cli --help` to see what it can do. For example:

```bash
texturecraft-cli new model.glb model.tcraft --resolution 2048
texturecraft-cli bake model.tcraft --resolution 2048
texturecraft-cli export model.tcraft textures --preset "Unreal Engine (Packed)" --format png
texturecraft-cli render model.tcraft preview.png --samples 256
```

`bake` saves the project in place. `render` with `--samples` path traces the image, as Rendering mode does; add `--cpu` to trace it on the processor.
