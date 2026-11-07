---
title: AI agents
description: Let Claude or another AI assistant design with FigCraft through its MCP server, and script FigCraft from the command line.
sidebar:
  order: 5
---

Every menu item, tool and drag in FigCraft runs a command, and AI assistants can run the same commands. Any assistant that supports the [Model Context Protocol](https://modelcontextprotocol.io) (MCP) can create and edit layers, run menu commands, inspect the result and look at it as an image.

## Get the command-line tool

Assistants talk to FigCraft through its command-line tool, `figcraft-cli`:

- **Windows**: `figcraft-cli.exe` is next to `figcraft.exe` in the install folder or portable zip.
- **macOS**: download `figcraft-cli-<ver>-macos-universal.zip` from the [release page](https://github.com/storytold/figcraft/releases/latest).
- **Linux `.deb`, `.rpm`, `.pkg.tar.zst`, tarball, and FreeBSD**: it's installed alongside the app.
- **AppImage**: run it as `/path/to/FigCraft.AppImage cli`, so `figcraft-cli mcp` becomes `/path/to/FigCraft.AppImage cli mcp`.
- **Flatpak**: run it as `flatpak run --command=figcraft-cli ai.storyteller.figcraft`.

If the assistant can't find `figcraft-cli`, use its full path, for example `C:\Users\you\AppData\Local\Programs\ArtCraft\FigCraft\figcraft-cli.exe`. Desktop apps often need the full path even when your terminal doesn't.

## Connect your assistant

Every assistant starts FigCraft with the same command: `figcraft-cli mcp`. FigCraft then works in the background, with no window.

### Claude Code

```bash
claude mcp add figcraft -- figcraft-cli mcp
```

### Claude Desktop

Choose **Settings › Developer › Edit Config**, add FigCraft to `claude_desktop_config.json`, then restart Claude:

```json
{
  "mcpServers": {
    "figcraft": {
      "command": "figcraft-cli",
      "args": ["mcp"]
    }
  }
}
```

### Other assistants

Look for "MCP servers" in your assistant's settings and add a local (stdio) server with the command `figcraft-cli` and the argument `mcp`.

## Ask for a design

Once connected, ask in plain words, for example *"Make a sign-in screen for a phone, with auto layout, and save it as signin.figcraft"*. The assistant can also start from one of the built-in templates.

## Watch it work in the app

To see the assistant's changes as it makes them, start FigCraft with its control port open:

```bash
figcraft --control 7979
```

Then use `figcraft-cli mcp --attach 7979` as the assistant's command. The assistant appears in the app like a person in a live session, with its own avatar, and FigCraft outlines the layers it just changed. The control port only accepts connections from your own computer.

## Keep the assistant to certain folders

To stop a background assistant reading or writing files outside one folder, add a read folder and a write folder after `figcraft-cli mcp`:

```bash
figcraft-cli mcp --automation-read-root ~/Designs/project --automation-write-root ~/Designs/project/out
```

In a JSON config, put each flag and folder in `args`, with full paths, since `~` isn't expanded there:

```json
"args": ["mcp", "--automation-read-root", "/Users/you/Designs/project",
         "--automation-write-root", "/Users/you/Designs/project/out"]
```

The assistant can then only open files inside the read folder, and only save inside the write folder. Leave out the write folder and it can't save to disk at all.

These flags don't go with `--attach`. To limit an assistant working in the app, start the app itself with them: `figcraft --control 7979 --automation-read-root … --automation-write-root …`.

## From the command line

`figcraft-cli` also works on its own, without an assistant:

```bash
figcraft-cli render landing.figcraft -o landing.png --scale 2   # render a page as an image
figcraft-cli export landing.figcraft -o out/ --format svg       # export the layers' export settings
figcraft-cli convert design.fig design.figcraft                 # convert by file extension
figcraft-cli commands --filter autoLayout                       # list commands and their parameters
```

For scripting FigCraft's commands, see the [developer documentation on GitHub](https://github.com/storytold/figcraft/blob/main/docs/cli.md).
