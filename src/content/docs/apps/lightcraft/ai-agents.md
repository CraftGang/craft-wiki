---
title: AI agents
description: Let Claude or another AI assistant cull, edit and export photos in LightCraft over MCP.
sidebar:
  order: 5
---

Everything you can do in LightCraft's menus, sliders and tools is a command. An AI assistant can run the same commands through LightCraft's MCP server, so it can rate a shoot, develop photos, add masks and export them, and see the result. Any assistant that supports MCP (the Model Context Protocol) works, such as Claude Code.

The MCP server is part of `lightcraft-cli`, LightCraft's command-line tool. The Windows installer and the Linux `.deb` and `.rpm` packages include it (on Linux it is `/usr/bin/lightcraft-cli`). On a Mac it is a separate download, `lightcraft-cli-<ver>-macos-universal.zip`, on the [release page](https://github.com/storytold/lightcraft/releases/latest). Use the CLI from the same release as the app.

## Without a window

In this mode the assistant works without LightCraft open. To work on a library, so its ratings and edits are kept:

```bash
claude mcp add lightcraft -- lightcraft-cli mcp --library "/path/to/LightCraft Library"
```

Or give it a folder of photos to import, such as `lightcraft-cli mcp ~/Pictures/shoot`. Use `--demo` to try it on the demo photos.

A library can only be open in one program at a time. If LightCraft has the library open, use the next mode instead.

## With the app open

The assistant can also drive the LightCraft window you are looking at, take screenshots and click in it.

1. Start LightCraft with `lightcraft --control 7980`.
2. Connect the assistant:

   ```bash
   claude mcp add lightcraft-app -- lightcraft-cli mcp --connect 127.0.0.1:7980
   ```

If the app isn't running yet, the server connects the first time the assistant uses it.

LightCraft only listens for connections from your own computer, but it doesn't ask for a password: while it runs with `--control`, any program on your computer can drive it. Start it this way only when you need it.

:::caution
The assistant can change ratings, edits and files in your library, and export files anywhere your account can write. Only connect assistants you trust. Edits can be undone with **Edit › Undo** like your own.
:::

## More

The technical reference is in LightCraft's [MCP guide](https://github.com/storytold/lightcraft/blob/main/docs/mcp.md) and [control protocol](https://github.com/storytold/lightcraft/blob/main/docs/control-protocol.md).
