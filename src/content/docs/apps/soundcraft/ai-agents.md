---
title: AI agents
description: Let Claude or another AI assistant build, edit, mix and bounce sessions with SoundCraft.
sidebar:
  order: 4
---

SoundCraft is built so that AI assistants can use it as well as people. Everything you can click is also a command, and any assistant that supports the [Model Context Protocol](https://modelcontextprotocol.io) (MCP) can run those commands: add tracks, import audio, edit clips, set levels, add plugins, write automation, bounce and save. The assistant can check its own work by reading back exactly what is in the session.

## Get the command-line tool

Assistants talk to SoundCraft through its command-line tool, `soundcraft-cli`:

- **Windows**: `soundcraft-cli.exe` is next to `soundcraft.exe` in the install folder or portable zip.
- **macOS**: download `soundcraft-cli-<ver>-macos-universal.zip` from the [release page](https://github.com/storytold/soundcraft/releases/latest). The app itself doesn't include it.
- **Linux `.deb`, `.rpm`, Arch package, tarball, and FreeBSD**: it's installed alongside the app.
- **Flatpak**: run it as `flatpak run --command=soundcraft-cli ai.storyteller.soundcraft`.
- **AppImage**: use the tarball instead, which includes it.

If the assistant can't find `soundcraft-cli`, use its full path, for example `C:\Users\you\AppData\Local\Programs\ArtCraft\SoundCraft\soundcraft-cli.exe`.

## Connect your assistant

### Claude Code

```bash
claude mcp add soundcraft -- soundcraft-cli mcp
```

Add `--demo` after `mcp` to start the assistant on the demo song instead of an empty session.

### Other assistants

Look for "MCP servers" in your assistant's settings and add a local (stdio) server with the command `soundcraft-cli` and the argument `mcp`. In the JSON settings file many assistants use, that is:

```json
{
  "mcpServers": {
    "soundcraft": {
      "command": "soundcraft-cli",
      "args": ["mcp"]
    }
  }
}
```

## Ask for a session

Once connected, ask in plain words, for example *"Open the demo song, turn the kick down 3 dB, put a plate reverb on the snare and bounce the mix to mix.wav"*. By default, SoundCraft works in the background, with no window and no audio device. It never opens a dialog for the assistant, and every change it makes can be undone.

## Keep the assistant to some folders

By default, the assistant can open and save files anywhere you can. To keep it to certain folders, give it a folder to read from and a folder to write to:

```bash
soundcraft-cli mcp --automation-read-root ~/Music/project --automation-write-root ~/Music/project/out
```

Each flag can be given more than once. Reading and writing are separate: with only a read folder, the assistant can't save anything. A file outside the folders is refused, and the assistant is told why.

## Drive the app you can see

To let the assistant work in the SoundCraft window you have open, start SoundCraft with a control port, then connect to it:

```bash
soundcraft --control 7801
soundcraft-cli mcp --connect 7801
```

The assistant can then also take screenshots of the window, and click and type in it.

:::caution
The folder limits above don't apply in this mode: the app you started has no such limits yet. Only connect assistants you trust to a running app.
:::

## Scripts without an assistant

`soundcraft-cli` also runs commands on its own, for example to batch-process sessions:

```bash
soundcraft-cli run --demo \
  --cmd 'mix.volume={"track":"Kick","db":-6}' \
  --bounce mix.wav
```

`soundcraft-cli commands` lists every command, and `soundcraft-cli --help` lists the subcommands and their options.
