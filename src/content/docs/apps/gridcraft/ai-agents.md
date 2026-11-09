---
title: AI agents
description: Let Claude or another AI assistant read, edit and build workbooks with GridCraft.
sidebar:
  order: 4
---

GridCraft is built so that AI assistants can use it as well as people. Every ribbon button, menu item and dialog is a command, and any assistant that supports the [Model Context Protocol](https://modelcontextprotocol.io) (MCP) can run them. It can read and write cells, enter formulas, format ranges, make tables and charts, sort and filter, and save the result as .xlsx or CSV.

## Get the command-line tool

Assistants talk to GridCraft through its command-line tool, `gridcraft-cli`:

- **Windows**: `gridcraft-cli.exe` is next to `gridcraft.exe` in the install folder or portable zip.
- **Linux `.deb`, `.rpm`, Arch package, tarball, and FreeBSD**: it's installed alongside the app.
- **Flatpak**: run it as `flatpak run --command=gridcraft-cli ai.storyteller.gridcraft`.
- **AppImage**: use the tarball instead, which includes it.
- **macOS**: the app doesn't include it. Look for `gridcraft-cli-<ver>-macos-universal.zip` on the [release page](https://github.com/storytold/gridcraft/releases); not every release has one.

Every assistant below starts GridCraft with the same command: `gridcraft-cli mcp`. If the assistant can't find `gridcraft-cli`, use its full path, for example `C:\Users\you\AppData\Local\Programs\ArtCraft\GridCraft\gridcraft-cli.exe`. Desktop apps often need the full path even when your terminal doesn't.

## Connect your assistant

### Claude Code

```bash
claude mcp add gridcraft -- gridcraft-cli mcp
```

### Claude Desktop and other assistants

Most assistants take a JSON config with a list of MCP servers. In Claude Desktop, choose **Settings › Developer › Edit Config**, add GridCraft to `claude_desktop_config.json`, then restart Claude:

```json
{
  "mcpServers": {
    "gridcraft": {
      "command": "gridcraft-cli",
      "args": ["mcp"]
    }
  }
}
```

For other assistants, look for "MCP servers" in their settings and add a local (stdio) server with the command `gridcraft-cli` and the argument `mcp`.

To start with a workbook already open, add `--in` and the file's full path: `"args": ["mcp", "--in", "/Users/you/Documents/budget.xlsx"]`.

## Ask for a workbook

Once connected, ask in plain words, for example *"Make a monthly budget in budget.xlsx with a total row and a bar chart of spending by category"*. GridCraft works in the background, with no window, and the assistant can read back cells and evaluate formulas to check its own work.

:::caution
The assistant can open and save files anywhere you can. Ask it to work in one folder, and keep copies of workbooks you care about.
:::

## Watch it work in the app

To see the assistant's changes as it makes them, start GridCraft with its control port open:

```bash
gridcraft --control 7979
```

Then use `gridcraft-cli mcp --connect 7979` as the assistant's command. It finds the app's access token by itself, as long as both run as you on the same computer. In the app, the assistant can also click, press keys, open dialogs and take screenshots.

**Automate › Agent Control** in the app shows these commands. **Automate › Action Journal** lists every command run in the session, by you or the assistant.

## From the command line

`gridcraft-cli` also works on its own, without an assistant:

```bash
gridcraft-cli convert book.xlsx data.csv --sheet Sales   # convert to xlsx, csv, tsv, json, html or pdf
gridcraft-cli cat book.xlsx --range A1:F20               # print cells as a table
gridcraft-cli eval '=PMT(5%/12,360,-300000)'             # work out a formula
```

The main subcommands:

| Subcommand | What it does |
| --- | --- |
| `info <file>` | Lists a workbook's sheets, used ranges, tables, charts and names. Add `--json` for JSON |
| `convert <in> <out>` | Converts between formats. The output type comes from the file extension |
| `cat <file>` | Prints cells as a table. `--range`, `--sheet`, `--formulas` and `--csv` change what is printed |
| `eval <formula>` | Works out a formula, in English syntax. `--in` uses a workbook, with `--sheet` and `--cell` |
| `run` | Opens a workbook, a sample or a blank one, runs commands with `--cmd 'id={json}'` or a `--script` file, and saves with `--out` |
| `commands` | Lists every command and its parameters. `--search` filters the list |
| `functions` | Lists every spreadsheet function. `--search` and `--category` filter the list |
| `check <file or folder>` | Recalculates workbooks and compares the results with the values Excel saved in them |
| `mcp` | Starts the MCP server for assistants |
| `send <port> <method> [json]` | Sends one request to a running app that was started with `--control` |

For example, to see what is in a workbook, and to add a total with `run`:

```bash
gridcraft-cli info book.xlsx
gridcraft-cli run --in book.xlsx --cmd 'cell.set={"cell":"D2","input":"=B2*C2"}' --out book.xlsx
```

`gridcraft --sample budget` opens the desktop app with a sample workbook. The other samples are `sales` and `grades`.

For scripting GridCraft's commands, see the [developer documentation on GitHub](https://github.com/storytold/gridcraft/blob/main/docs/mcp.md).
