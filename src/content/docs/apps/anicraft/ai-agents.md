---
title: AI agents
description: Let Claude or another AI assistant draw, animate, tween and export with AniCraft.
sidebar:
  order: 4
---

AniCraft is built so that AI assistants can use it as well as people. Any assistant that supports the [Model Context Protocol](https://modelcontextprotocol.io) (MCP) can create animation documents, draw vector shapes, arrange layers, set keyframes, build classic and shape tweens, import SVG assets, and export animations.

AniCraft has no AI of its own and does not connect to any external AI service. You provide the assistant; AniCraft provides the animation engine and tools.

## Get the command-line tool

Assistants interact with AniCraft through its command-line tool, `anicraft-cli`:

| Operating System                                      | Where `anicraft-cli` is                                                                                             |
|-------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| Windows installer                                     | `%LOCALAPPDATA%\Programs\ArtCraft\AniCraft\anicraft-cli.exe` (or `C:\Program Files\ArtCraft\AniCraft\`)            |
| Windows portable zip                                  | Next to `anicraft.exe` in the extracted folder                                                                      |
| macOS                                                 | Download `anicraft-cli-<ver>-macos-universal.zip` from the [release page](https://github.com/storytold/AniCraft/releases/latest) |
| Linux `.deb`, `.rpm`, Flatpak, AppImage, and FreeBSD | Installed alongside the app (e.g. `/usr/bin/anicraft-cli`)                                                          |

On macOS, extract the downloaded zip file and move `anicraft-cli` into a directory on your `PATH` (such as `/usr/local/bin` or `~/.local/bin`), or specify its absolute path when invoking it.

## Permissions and sandboxing

When running commands or serving requests, `anicraft-cli` executes with the local operating system permissions of the user running it. It can access and modify any files and directories permitted by those user rights.

If you need strict isolation or are executing commands in untrusted environments, run `anicraft-cli` within an OS-level sandbox such as a Linux container, chroot, or virtual machine.

## Connect your assistant

### Claude Code

On Linux, or on macOS once `anicraft-cli` is on your `PATH`:

```bash
claude mcp add anicraft -- anicraft-cli mcp
```

If `anicraft-cli` is not on your `PATH`, specify its full absolute path. On Windows PowerShell with the default per-user installation:

```powershell
claude mcp add anicraft -- "$env:LOCALAPPDATA\Programs\ArtCraft\AniCraft\anicraft-cli.exe" mcp
```

### Claude Desktop

Open **Settings › Developer › Edit Config** in Claude Desktop, add AniCraft to your `claude_desktop_config.json`, and restart Claude.

If `anicraft-cli.exe` is installed in your user profile under `%LOCALAPPDATA%`, replace the path with your actual user path and escape all Windows backslashes with double backslashes (`\\`):

```json
{
  "mcpServers": {
    "anicraft": {
      "command": "C:\\Users\\<username>\\AppData\\Local\\Programs\\ArtCraft\\AniCraft\\anicraft-cli.exe",
      "args": ["mcp"]
    }
  }
}
```

If you installed for all users, use `C:\\Program Files\\ArtCraft\\AniCraft\\anicraft-cli.exe`. On macOS or Linux, use the binary path (for example, `/usr/bin/anicraft-cli` or `/usr/local/bin/anicraft-cli`).

### Other MCP clients

Any client supporting the Model Context Protocol can launch `anicraft-cli` with the `mcp` argument.

## What to ask for

Here are example prompts you can give your assistant:

- "Create a bouncing ball animation on a 60 fps timeline with squash and stretch on impact, using ease-in-out curves."
- "Import `character.svg`, convert each limb into a symbol, and set up a walk cycle across 24 frames."
- "Open `logo-reveal.anicraft`, replace the fill colors with our brand palette, and export as an animated GIF."
- "Inspect the active stage, find all shape tweens on layer 'Effects', and adjust their Bézier easing."

## Automation without an assistant

`anicraft-cli` can also run standalone batch jobs and headless exports in CI/CD pipelines or shell scripts:

```bash
# Render a single frame to PNG
anicraft-cli render banner.anicraft --out frame.png --frame 1

# Export frame sequences to a directory
anicraft-cli render-seq intro.anicraft --out-dir frames/ --from 1 --to 60

# Export an animated GIF
anicraft-cli gif banner.anicraft --out banner.gif --from 1 --to 60

# Create a new project document headlessly
anicraft-cli new --out new-scene.anicraft --width 1920 --height 1080 --fps 60

# Inspect project info as JSON
anicraft-cli info banner.anicraft
```
