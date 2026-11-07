---
title: Automation and AI agents
description: Use PhotoCraft's command-line tool to convert and edit images in batches, and connect an AI assistant to it over MCP.
sidebar:
  order: 5
---

Every menu item, tool and dialog in PhotoCraft runs a command. The command-line tool, `photocraft-cli`, runs the same commands without opening a window. You can use it to convert and edit images in scripts, or connect an AI assistant to it over MCP (Model Context Protocol), so the assistant can open, edit and save images for you.

PhotoCraft doesn't include an AI model, and doesn't need one. The AI assistant is a separate app you choose, such as Claude Code or another MCP client.

## Find the command-line tool

| Install | Where `photocraft-cli` is |
| --- | --- |
| Windows installer | `%LOCALAPPDATA%\Programs\ArtCraft\PhotoCraft\photocraft-cli.exe` (installed for your account) or `C:\Program Files\ArtCraft\PhotoCraft\photocraft-cli.exe` (installed for everyone). It isn't added to `PATH`. |
| Windows portable zip | Next to `photocraft.exe` |
| macOS | A separate download: `photocraft-cli-<ver>-macos-universal.zip` on the [latest release](https://github.com/storytold/photocraft/releases/latest). It is signed and notarized. |
| Linux `.deb` and `.rpm` | `/usr/bin/photocraft-cli` |
| Linux AppImage | Run the AppImage with `--cli` first, for example `./photocraft-<ver>-linux-x86_64.AppImage --cli --help` |

Run `photocraft-cli --help` to see every subcommand, and `photocraft-cli <subcommand> --help` for its options.

## Convert and edit from the command line

| Subcommand | What it does |
| --- | --- |
| `convert` | Open one file and save it in another format |
| `info` | Print a document's size, colour mode, depth and layers |
| `run` | Open or create a document, run commands on it, and save the result |
| `batch` | Apply a recorded action to every file in a folder |
| `droplet` | Run a PhotoCraft droplet on files or folders |
| `commands` | List every command and its settings |
| `mcp` | Start the MCP server for an AI assistant |

For example, to sharpen a PSD, add a Curves adjustment layer and save a PNG:

```bash
photocraft-cli run wave.psd \
  --cmd filter.sharpen.smartSharpen --params '{"amount":80}' \
  --cmd layer.newAdjustmentLayer.curves --params '{"points":[[0,0],[64,48],[192,212],[255,255]]}' \
  --out wave-final.png
```

To find a command's name and settings, run `photocraft-cli commands`.

## Connect an AI assistant

Start the MCP server with a folder the assistant may read from and a folder it may write to:

```bash
photocraft-cli mcp --automation-read-root /path/to/project --automation-write-root /path/to/project
```

Most AI assistants start the server themselves. With Claude Code, for example:

```bash
claude mcp add photocraft -- photocraft-cli mcp --automation-read-root /path/to/project --automation-write-root /path/to/project
```

Other MCP clients take the same command and arguments in their settings file. On Windows, give the full path to `photocraft-cli.exe`, since it isn't on `PATH`.

The assistant can then list PhotoCraft's commands, open documents, run commands, inspect the layers and history, and render a preview to check its work.

:::caution
The assistant can read any file under the read folder, and create or replace image and document files under the write folder. Documents can contain text, such as layer names, that tries to steer an assistant. Give it a dedicated folder rather than your whole home folder, and keep copies of files you care about.
:::

Without `--automation-read-root` and `--automation-write-root`, the assistant can't read or write files on your computer at all.

## Drive the open app

An assistant can also work in the PhotoCraft window you have open, through a private connection on your own computer. This is meant for developers; see [the control protocol](https://github.com/storytold/photocraft/blob/main/docs/control-protocol.md) for how to set it up.

To stop agents from connecting to the app, turn off **Allow agent control** in **Edit › Preferences › AI Integrations…**. It takes effect the next time you start PhotoCraft.

## More detail

- [MCP conventions](https://github.com/storytold/photocraft/blob/main/docs/mcp.md): every tool the MCP server offers.
- [Command-line interface](https://github.com/storytold/photocraft/blob/main/book/src/automation/cli.md): the subcommands and their options.
