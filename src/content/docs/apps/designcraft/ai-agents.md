---
title: AI agents
description: Let Claude, Codex, Cursor or another AI assistant lay out and edit documents with DesignCraft.
sidebar:
  order: 5
---

DesignCraft is built so that AI assistants can use it as well as people. Any assistant that supports the [Model Context Protocol](https://modelcontextprotocol.io) (MCP) can create documents, draw frames, set text, apply styles, place pictures, and look at the pages it has made. That includes Claude, OpenAI's Codex, Cursor and GitHub Copilot in VS Code.

## Get the command-line tool

Assistants talk to DesignCraft through its command-line tool, `designcraft-cli`:

- **Windows**: `designcraft-cli.exe` is next to `designcraft.exe` in the install folder or portable zip. The default install folder is `%LOCALAPPDATA%\Programs\ArtCraft\DesignCraft\`.
- **macOS**: it's inside the app, at `/Applications/DesignCraft.app/Contents/MacOS/designcraft-cli`. You can also download it on its own as `designcraft-cli-<ver>-macos-universal.zip` from the [release page](https://github.com/storytold/designcraft/releases/latest).
- **Linux `.deb` and `.rpm`**: it's installed as `/usr/bin/designcraft-cli`.
- **Linux tarball and FreeBSD**: it's in the `bin` folder, next to `designcraft`.

Every assistant below starts DesignCraft with the same command: `designcraft-cli mcp`. If the assistant can't find `designcraft-cli`, use its full path instead. Desktop apps often need the full path even when your terminal doesn't.

## Connect your assistant

### Claude Code

```bash
claude mcp add designcraft -- designcraft-cli mcp
```

### Claude Desktop

Choose **Settings › Developer › Edit Config**, add DesignCraft to `claude_desktop_config.json`, then restart Claude:

```json
{
  "mcpServers": {
    "designcraft": {
      "command": "designcraft-cli",
      "args": ["mcp"]
    }
  }
}
```

### OpenAI Codex and the ChatGPT desktop app

```bash
codex mcp add designcraft -- designcraft-cli mcp
```

The Codex CLI, the Codex IDE extension and the ChatGPT desktop app share this setup, so you only add it once. ChatGPT on the web can't connect to programs on your computer.

### Cursor

Add DesignCraft to `~/.cursor/mcp.json` (or `.cursor/mcp.json` in a project):

```json
{
  "mcpServers": {
    "designcraft": {
      "type": "stdio",
      "command": "designcraft-cli",
      "args": ["mcp"]
    }
  }
}
```

### VS Code with GitHub Copilot

Open the Command Palette, run **MCP: Add Server**, choose **Command (stdio)**, and enter `designcraft-cli mcp`. Name it `designcraft`.

### Other assistants

Look for "MCP servers" in your assistant's settings and add a local (stdio) server with the command `designcraft-cli` and the argument `mcp`.

## Ask for a layout

Once connected, ask in plain words, for example *"Make an A4 poster for a summer fair, with a big headline, a photo from ~/Pictures/park.jpg and the details underneath, and save it as fair.designcraft"*. DesignCraft works in the background, with no window. The assistant can render each page as a picture to check its own work.

## Keep the assistant to certain folders

To stop the assistant reading or writing files outside one folder, add a read folder and a write folder after `designcraft-cli mcp`:

```bash
designcraft-cli mcp --automation-read-root ~/Documents/project --automation-write-root ~/Documents/project/out
```

In a JSON config, put each flag and folder in `args`:

```json
"args": ["mcp", "--automation-read-root", "/Users/you/Documents/project",
         "--automation-write-root", "/Users/you/Documents/project/out"]
```

The assistant can then only open and place files inside the read folder, and only save and export inside the write folder. Leave out the write folder and it can't write to disk at all. You can give either flag more than once. Use full paths in JSON files, since `~` isn't expanded there.

## Watch it work in the app

To see the assistant's changes as it makes them, start DesignCraft with its control port open, and connect the assistant to the window instead:

```bash
designcraft --control 7979
```

Then use `designcraft-cli mcp --connect 7979` as the assistant's command. In the app, the assistant can also click, drag, fill in dialogs and take screenshots.

:::caution
The folder limits above don't work together with `--connect`. A connected assistant can open and save anywhere you can.
:::

## From the command line

`designcraft-cli` also works on its own, without an assistant:

```bash
designcraft-cli run --in brochure.designcraft --export brochure.pdf   # export to .pdf, .png, .jpg, .idml, .epub, .pptx, .html, .rtf, .txt or .designcraft
designcraft-cli run --sample --all-pages out/                          # render every page of the sample to PNG
designcraft-cli commands                                               # list every command
```

`designcraft-cli describe COMMAND` shows what one command takes. `designcraft-cli script FILE` runs a file of commands, one per line. Add `--save OUT` to save the document afterward, `--export OUT` to export it, and `--keep-going` to carry on after a command fails. `designcraft-cli validate-pdf FILE.pdf --standard x4` checks a PDF against PDF/X-4. Use `x1a` for PDF/X-1a.

For scripting DesignCraft's commands, see the [developer documentation on GitHub](https://github.com/storytold/designcraft/blob/main/docs/mcp.md).
