---
title: AI agents
description: Let Claude or another AI assistant build and edit presentations with DeckCraft, and script DeckCraft from the command line.
sidebar:
  order: 5
---

Every button in DeckCraft runs a command, and AI assistants can run the same commands. Any assistant that supports the [Model Context Protocol](https://modelcontextprotocol.io) (MCP) can create slides, fill them, format them and save the result as .pptx, .deckcraft or PDF.

## Get the command-line tool

Assistants talk to DeckCraft through its command-line tool, `deckcraft-cli`:

- **Windows**: `deckcraft-cli.exe` is next to `deckcraft.exe` in the install folder or portable zip.
- **macOS**: download `deckcraft-cli-<ver>-macos-universal.zip` from the [release page](https://github.com/storytold/deckcraft/releases/latest).
- **Linux `.deb`, `.rpm`, `.pkg.tar.zst`, tarball, and FreeBSD**: it's installed alongside the app.
- **Flatpak**: run it as `flatpak run --command=deckcraft-cli ai.storyteller.deckcraft`.
- **AppImage**: use the tarball instead, which includes it.

If the assistant can't find `deckcraft-cli`, use its full path, for example `C:\Users\you\AppData\Local\Programs\ArtCraft\DeckCraft\deckcraft-cli.exe`. Desktop apps often need the full path even when your terminal doesn't.

## Connect your assistant

Every assistant starts DeckCraft with the same command: `deckcraft-cli mcp`. DeckCraft then works in the background, with no window.

### Claude Code

```bash
claude mcp add deckcraft -- deckcraft-cli mcp
```

### Claude Desktop

Choose **Settings › Developer › Edit Config**, add DeckCraft to `claude_desktop_config.json`, then restart Claude:

```json
{
  "mcpServers": {
    "deckcraft": {
      "command": "deckcraft-cli",
      "args": ["mcp"]
    }
  }
}
```

### Other assistants

Look for "MCP servers" in your assistant's settings and add a local (stdio) server with the command `deckcraft-cli` and the argument `mcp`.

## Ask for a presentation

Once connected, ask in plain words, for example *"Make a five-slide deck on our Q3 results with a chart on slide 3, and save it as q3.pptx"*.

## Watch it work in the app

To see the assistant's changes as it makes them, start DeckCraft with its control port open:

```bash
deckcraft --control 7990
```

Then use `deckcraft-cli mcp --connect 7990` as the assistant's command. The control port only accepts connections from your own computer.

## Keep the assistant to certain folders

To stop a background assistant reading or writing files outside one folder, add a read folder and a write folder after `deckcraft-cli mcp`:

```bash
deckcraft-cli mcp --automation-read-root ~/Decks/project --automation-write-root ~/Decks/project/out
```

In a JSON config, put each flag and folder in `args`, with full paths, since `~` isn't expanded there:

```json
"args": ["mcp", "--automation-read-root", "/Users/you/Decks/project",
         "--automation-write-root", "/Users/you/Decks/project/out"]
```

The assistant can then only open files inside the read folder, and only save inside the write folder. Leave out the write folder and it can't save to disk at all.

:::caution
These folder limits only work in the background. They can't be used with `--connect`, and an assistant connected to the running app can open and save anywhere you can.
:::

## From the command line

`deckcraft-cli` also works on its own, without an assistant:

```bash
deckcraft-cli convert deck.deckcraft deck.pptx            # or .pdf, .txt, .md, .png, .jpg, .gif
deckcraft-cli render deck.pptx --all slides/              # every slide as a PNG
deckcraft-cli info deck.pptx                              # what's in a presentation
deckcraft-cli commands format.                            # list commands
```

`render` has a few more options. `--slide 2` draws one slide (counting from 0, so `--slide 2` is the third). `--scale` sets pixels per point (2 by default, so a 960 by 540 point slide becomes 1920 by 1080 pixels). `--transparent` leaves the background out, and `--edit` draws what the editor shows, including placeholder prompts. `render-transition` draws frames of a slide transition:

```bash
deckcraft-cli render-transition deck.deckcraft --slide 1 --t 0.25,0.5,0.75 fade.png
```

For scripting DeckCraft's commands, run `deckcraft-cli help run`, or see the [developer documentation on GitHub](https://github.com/storytold/deckcraft/blob/main/docs/mcp.md).
