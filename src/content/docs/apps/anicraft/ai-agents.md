---
title: AI agents
description: Let Claude or another AI assistant draw, animate, tween and export with AniCraft.
sidebar:
  order: 4
---

AniCraft is built so that AI assistants can use it as well as people. Any assistant that supports the [Model Context Protocol](https://modelcontextprotocol.io) (MCP) can create animation documents, draw vector shapes, arrange layers, set keyframes, build classic and shape tweens, import SVG assets, and export animations.

## Get the command-line tool

Assistants interact with AniCraft through its command-line tool, `anicraft-cli`:

| Operating System                                      | Where `anicraft-cli` is                                                                                             |
|-------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| Windows installer                                     | `%LOCALAPPDATA%\Programs\ArtCraft\AniCraft\anicraft-cli.exe` (or `C:\Program Files\ArtCraft\AniCraft\`)            |
| Windows portable zip                                  | Next to `anicraft.exe` in the extracted folder                                                                      |
| macOS                                                 | Download `anicraft-cli-<ver>-macos-universal.zip` from the [release page](https://github.com/storytold/AniCraft/releases/latest) |
| Linux `.deb`, `.rpm`, Flatpak, AppImage, and FreeBSD | Installed alongside the app (e.g. `/usr/bin/anicraft-cli`)                                                          |

## Choose which folders it can use

For safety, the assistant can only read and write files within the directories you permit:

- `--read-root <folder>`: directory where it may open projects, import SVGs, or read images.
- `--write-root <folder>`: directory where it may save `.anicraft` files and export frames or video.

Without these options, it operates in memory but cannot read from or write to disk.

## Connect your assistant

### Claude Code

Run this command in your project directory:

```bash
claude mcp add anicraft -- anicraft-cli mcp --read-root . --write-root .
```

This gives Claude Code permission to read and write files in the current working directory.

### Claude Desktop

Open **Settings › Developer › Edit Config** in Claude Desktop, add AniCraft to your `claude_desktop_config.json`, and restart Claude:

```json
{
  "mcpServers": {
    "anicraft": {
      "command": "C:\\Program Files\\ArtCraft\\AniCraft\\anicraft-cli.exe",
      "args": [
        "mcp",
        "--read-root",
        "C:\\Users\\you\\Animations",
        "--write-root",
        "C:\\Users\\you\\Animations"
      ]
    }
  }
}
```

### Other MCP clients

Any client supporting the Model Context Protocol can launch `anicraft-cli mcp` with the `--read-root` and `--write-root` parameters.

## Watch it work in the app

By default, the assistant works headlessly on an in-memory document without launching a window. To watch changes live in the visual interface:

1. Launch AniCraft with a control port:

```bash
# Linux / macOS
anicraft --control 7878

# Windows PowerShell
& "$env:LOCALAPPDATA\Programs\ArtCraft\AniCraft\anicraft.exe" --control 7878
```

2. Connect your assistant using the bridge flag:

```bash
claude mcp add anicraft-app -- anicraft-cli mcp --bridge 7878
```

Now, when the assistant adds keyframes, adjusts easing curves, or selects shapes, you see the stage and timeline update in real time. The assistant can also capture viewport screenshots and trigger UI commands.

## What to ask for

Here are example prompts you can give your assistant:

- "Create a bouncing ball animation on a 60 fps timeline with squash and stretch on impact, using ease-in-out curves."
- "Import `character.svg`, convert each limb into a symbol, and set up a walk cycle across 24 frames."
- "Open `logo-reveal.fla`, replace the fill colors with our brand palette, and export as an animated GIF and Lottie JSON."
- "Inspect the active stage, find all shape tweens on layer 'Effects', and adjust their Bézier easing."

## Automation without an assistant

`anicraft-cli` can also run standalone batch jobs and headless exports in CI/CD pipelines or shell scripts:

```bash
# Export a project to an animated GIF
anicraft-cli export banner.anicraft banner.gif --fps 30

# Export frame sequences to a directory
anicraft-cli export intro.fla frames/ --format png --scale 2.0

# Export a sprite sheet
anicraft-cli export walk.anicraft spritesheet.png --format spritesheet --columns 8

# Convert animation to MP4 video using FFmpeg
anicraft-cli export scene.anicraft scene.mp4 --codec h264
```
