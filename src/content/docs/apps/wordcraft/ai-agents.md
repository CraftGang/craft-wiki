---
title: AI agents
description: Let Claude, Codex, Cursor or another AI assistant write and edit documents with WordCraft.
sidebar:
  order: 7
---

WordCraft is built so that AI assistants can use it as well as people. Any assistant that supports the [Model Context Protocol](https://modelcontextprotocol.io) (MCP) can create documents, edit them, format them and save them as .docx or PDF. That includes Claude, OpenAI's Codex, Cursor and GitHub Copilot in VS Code.

## Get the command-line tool

Assistants talk to WordCraft through its command-line tool, `wordcraft-cli`:

- **Windows**: `wordcraft-cli.exe` is next to `wordcraft.exe` in the install folder or portable zip.
- **macOS**: download `wordcraft-cli-<ver>-macos-universal.zip` from the [release page](https://github.com/storytold/wordcraft/releases/latest).
- **Linux `.deb`, `.rpm`, tarball, and FreeBSD**: it's installed alongside the app.
- **Flatpak**: run it as `flatpak run --command=wordcraft-cli ai.storyteller.wordcraft`.
- **AppImage**: use the tarball instead, which includes it.

Every assistant below starts WordCraft with the same command: `wordcraft-cli mcp`. If the assistant can't find `wordcraft-cli`, use its full path, for example `C:\Users\you\AppData\Local\Programs\ArtCraft\WordCraft\wordcraft-cli.exe`. Desktop apps often need the full path even when your terminal doesn't.

## Connect your assistant

### Claude Code

```bash
claude mcp add wordcraft -- wordcraft-cli mcp
```

### Claude Desktop

Choose **Settings › Developer › Edit Config**, add WordCraft to `claude_desktop_config.json`, then restart Claude:

```json
{
  "mcpServers": {
    "wordcraft": {
      "command": "wordcraft-cli",
      "args": ["mcp"]
    }
  }
}
```

### OpenAI Codex and the ChatGPT desktop app

```bash
codex mcp add wordcraft -- wordcraft-cli mcp
```

The Codex CLI, the Codex IDE extension and the ChatGPT desktop app share this setup, so you only add it once. ChatGPT on the web can't connect to programs on your computer.

### Cursor

Add WordCraft to `~/.cursor/mcp.json` (or `.cursor/mcp.json` in a project):

```json
{
  "mcpServers": {
    "wordcraft": {
      "type": "stdio",
      "command": "wordcraft-cli",
      "args": ["mcp"]
    }
  }
}
```

### VS Code with GitHub Copilot

Open the Command Palette, run **MCP: Add Server**, choose **Command (stdio)**, and enter `wordcraft-cli mcp`. Name it `wordcraft`.

### Other assistants

Look for "MCP servers" in your assistant's settings and add a local (stdio) server with the command `wordcraft-cli` and the argument `mcp`.

## Ask for a document

Once connected, ask in plain words, for example *"Write a one-page project brief as brief.docx, with a heading for each section"*. WordCraft works in the background, with no window, and the assistant can check its own work without screenshots.

## Keep the assistant to certain folders

To stop the assistant reading or writing files outside one folder, add a read folder and a write folder after `wordcraft-cli mcp`:

```bash
wordcraft-cli mcp --automation-read-root ~/Documents/project --automation-write-root ~/Documents/project/out
```

In a JSON config, put each flag and folder in `args`:

```json
"args": ["mcp", "--automation-read-root", "/Users/you/Documents/project",
         "--automation-write-root", "/Users/you/Documents/project/out"]
```

The assistant can then only open files inside the read folder, and only save inside the write folder. Leave out the write folder and it can't save to disk at all. Use full paths in JSON files, since `~` isn't expanded there.

## Watch it work in the app

To see the assistant's changes as it makes them, start WordCraft with its control port open, and connect the assistant to the window instead:

```bash
wordcraft --control 7981
```

Then use `wordcraft-cli mcp --connect 127.0.0.1:7981` as the assistant's command. In the app, the assistant can also click, press keys and take screenshots. The folder limits above don't apply here, so it can open and save anywhere you can.

## Tell its edits apart from yours

Tracked changes and comments carry the author's name. Give the assistant its own name, so reviewers can see which edits it made, by adding `--author`:

```bash
wordcraft-cli mcp --author "Claude (copyedit)"
```

Then ask it to turn on track changes before it edits.

## Language packs

An assistant can install Language packs only if you've turned downloading on in the app yourself, by clicking **Install** or **Add a language…** in **File › Options › Language**. It can't turn downloading on by itself.

## From the command line

`wordcraft-cli` also works on its own, without an assistant:

```bash
wordcraft-cli convert report.docx report.pdf   # convert to docx, pdf, odt, rtf, html, md, tex, txt or png
wordcraft-cli text report.docx                 # print the text
```

For scripting WordCraft's commands, see the [developer documentation on GitHub](https://github.com/storytold/wordcraft/blob/main/docs/mcp.md).
