---
title: AI agents
description: Let Claude or another AI assistant read, organize, comment on and fill PDFs with PdfCraft, and script PdfCraft from the command line.
sidebar:
  order: 6
---

AI assistants that support the [Model Context Protocol](https://modelcontextprotocol.io) (MCP) can use PdfCraft's tools: open PDFs, read their text, add comments, fill forms, organize pages and save the result. This is off unless you set it up. PdfCraft never starts it on its own, and it opens no network port.

## Get the command-line tool

Assistants talk to PdfCraft through its command-line tool, `pdfcraft-cli`:

- **Windows**: `pdfcraft-cli.exe` is next to `pdfcraft.exe` in the install folder or portable zip.
- **macOS**: download `pdfcraft-cli-<ver>-macos-universal.zip` from the [release page](https://github.com/storytold/pdfcraft/releases/latest).
- **Linux `.deb`, `.rpm`, `.pkg.tar.zst`, tarball, and FreeBSD**: it's installed alongside the app. On Linux, `pdfcraft-cli-<ver>-linux-x86_64.tar.gz` (or `aarch64`) has the command-line tool on its own, for servers.
- **Flatpak**: run it as `flatpak run --command=pdfcraft-cli ai.storyteller.pdfcraft`.
- **AppImage**: use the tarball instead, which includes it.

If the assistant can't find `pdfcraft-cli`, use its full path, for example `C:\Users\you\AppData\Local\Programs\ArtCraft\PdfCraft\pdfcraft-cli.exe`. Desktop apps often need the full path even when your terminal doesn't.

## Connect your assistant

Every assistant starts PdfCraft's tools with the same command: `pdfcraft-cli mcp`, followed by `--root` and the folder your PDFs are in. The assistant can then only read and write files in that folder. The tools run in the background, with no window, and stop when the assistant disconnects.

### Claude Code

```bash
claude mcp add pdfcraft -- pdfcraft-cli mcp --root ~/Documents/pdfs
```

### Claude Desktop

Choose **Settings › Developer › Edit Config**, add PdfCraft to `claude_desktop_config.json`, then restart Claude. Use the full path to the folder, since `~` isn't expanded here:

```json
{
  "mcpServers": {
    "pdfcraft": {
      "command": "pdfcraft-cli",
      "args": ["mcp", "--root", "/Users/you/Documents/pdfs"]
    }
  }
}
```

### Other assistants

Look for "MCP servers" in your assistant's settings and add a local (stdio) server with the command `pdfcraft-cli` and the arguments `mcp`, `--root` and your folder.

Add `--compact` after `mcp` to give the assistant a short list of tools to start with. It can still find and use every tool, and the shorter list uses less of its context.

## Ask for something

Once connected, ask in plain words, for example *"Combine the invoices in this folder into one PDF, oldest first"* or *"Highlight every mention of the deadline in contract.pdf and save it"*.

Changes stay in memory, and can be undone, until the assistant saves.

## Keep reading and writing apart

To let the assistant read from one folder but only save into another, use a read folder and a write folder:

```bash
pdfcraft-cli mcp --automation-read-root ~/Documents/pdfs --automation-write-root ~/Documents/pdfs/out
```

The assistant can then only open files inside the read folder, and only save inside the write folder. These limits cover what the assistant does through `pdfcraft-cli`. They don't apply to the PdfCraft app itself.

## From the command line

`pdfcraft-cli` also works on its own, without an assistant:

```bash
pdfcraft-cli info form.pdf                                      # what's in a PDF
pdfcraft-cli text paper.pdf --page 3                            # the text of page 3
pdfcraft-cli edit in.pdf --rotate 1,2:90 --delete 5 --out out.pdf
pdfcraft-cli combine report.pdf appendix.pdf --out combined.pdf
pdfcraft-cli tools                                              # every tool an assistant can use
```

`render` draws a page as a picture (`.png`, `.jpg`, `.tif` or `.pam`), and `audit` looks for faux redactions, black boxes drawn over text that is still in the file:

```bash
pdfcraft-cli render paper.pdf --page 3 --dpi 150 --out page3.png
pdfcraft-cli audit redacted.pdf                                 # fails if it finds any
```

### Process many files at once

`batch` converts, recognizes and compresses whole folders, one file at a time. Name the steps with `--steps`, from `convert` (which must come first), `ocr` and `optimize`, and give a folder for the results with `--out-dir`:

```bash
pdfcraft-cli batch scans --root . --recursive --steps ocr,optimize --out-dir searchable
```

- Folders are read one level deep. Add `--recursive` to include subfolders.
- It never replaces a file. If `book.pdf` exists in the output folder, the result is `book (2).pdf`. Your originals aren't touched.
- `--ppi` and `--quality` set how far `optimize` shrinks pictures, which can lose detail. `--language` and `--ocr-all-pages` set `ocr`, which skips pages that already have text unless you add the second one. OCR needs its models installed.
- If a file fails, the rest continue, unless you add `--stop-on-error`.
- It prints a JSON report of every file. Save it outside the input folders, for example with `> report.json`.

`batch` can't open PDFs that need a password, and `optimize` can't compress signed PDFs.

For scripting, run `pdfcraft-cli help`, or see the [developer documentation on GitHub](https://github.com/storytold/pdfcraft/blob/main/docs/mcp.md).
