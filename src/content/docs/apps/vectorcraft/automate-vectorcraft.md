---
title: Automate VectorCraft
description: Find and run any command by name, change keyboard shortcuts, record and replay actions, and run VectorCraft from the command line or an MCP client.
sidebar:
  order: 23
---

This guide shows you how to find any command by typing part of its name, give tools, commands and panels your own keyboard shortcuts, and record a series of steps as an action you can play again. It then covers `vectorcraft-cli`, which runs the same commands without opening a window, and the Model Context Protocol (MCP) server, which other programs use to control VectorCraft.

## Find a command by name

1. Choose **Help → Search Commands…**, or press **Ctrl+Shift+/** (**Cmd+Shift+/** on macOS).
2. Type part of the name of a command or a tool, for example "align".
3. Press the Up and Down arrow keys to highlight a result, then press Enter, or click a result.

The box searches every command and tool, shows up to 14 matches, and shows each match's keyboard shortcut beside it. Choosing a tool selects it, and choosing a command runs it.

![The Search Commands box with "align" typed in over four selected lanterns, listing matches such as Window → Align → Align, which is highlighted, and Align left with its keyboard shortcut](/assets/uploads/vectorcraft/search-commands.webp)

## Change keyboard shortcuts

1. Choose **Edit → Keyboard Shortcuts…**, or press **Ctrl+Alt+Shift+K** (**Cmd+Option+Shift+K** on macOS).
2. Under **Set:**, choose **VectorCraft Defaults** or **Classic Defaults**.
3. Choose the **Tools** tab or the **Menu Commands** tab, and type in the **Search** box to narrow the list. Panels are listed under Window on the **Menu Commands** tab.
4. Click the shortcut next to an entry, then press the new keys. Press Esc to cancel.
5. Click **OK** to keep the changes, or **Cancel** to discard them.

When you change a shortcut, the **Set:** list shows **Custom**. The dialog also has these buttons:

| Button | What it does |
|---|---|
| **Clear** | Removes the shortcut from the selected entry |
| **Use Default** | Gives the selected entry its default shortcut again |
| **Go to Conflict** | Selects the entry that the keys you pressed were taken from |
| **Import…** | Reads a saved shortcut set into the dialog; press **OK** to keep it |
| **Export…** | Saves the current set as a `.json` file |
| **Reset to Defaults** | Returns every shortcut to the **VectorCraft Defaults** set |

:::note
If the keys you press already belong to another entry, VectorCraft removes them from that entry and shows a message naming it.
:::

## Record and play actions

An action is a list of recorded steps. Each step is a VectorCraft command with the settings it ran with.

1. Choose **Window → Actions**.
2. Click **Create New Set** at the bottom of the panel, type a name and click **OK**.
3. Click **Create New Action**. In **New Action**, type a **Name:**, choose the **Action Set:**, and click **Record**. The panel shows **● Recording**.
4. Do the steps you want to record.
5. Click **Stop Playing/Recording**.
6. To play the action, select it in the panel and click **Play Current Selection**.

![The Actions panel beside the badge, with a set named Studio holding an action named Badge, expanded to show its three recorded steps, shape.ellipse, paint.setFill and paint.setStroke, each with its check box selected](/assets/uploads/vectorcraft/actions-panel.webp)

Expand an action to see its steps. Each step has a check box: clear it to leave that step out when the action plays, and select it again to include it.

In **New Action** and **Action Options…**, the **Function Key:** list assigns a key from F1 to F15 that plays the action. You can add **Ctrl** (**Cmd** on macOS) and **Shift** to the key. On Windows, F1, Ctrl+F4 and Ctrl+F6 cannot be used.

:::tip
With the default **Accelerated** speed, the whole action plays as one step in the undo history, so one Undo reverses it. **Playback Options…** also offers **Step by Step** and **Pause For**, which play one step at a time and record each step as its own undo step.
:::

The panel menu holds these commands:

| Command | What it does |
|---|---|
| **New Action…** | Opens **New Action**, the same as **Create New Action** |
| **New Set…** | Creates a new action set |
| **Duplicate** | Copies the selected action, or the current set when no action is selected |
| **Delete** | Deletes the selected actions or sets |
| **Set Options…** | Renames the current set |
| **Batch…** | Plays the selected action on every file in a folder, or on every data set of the open document |
| **Play Current Selection** | Plays the selected action |
| **Action Options…** | Changes the selected action's name, function key and color |
| **Playback Options…** | Sets the playback speed: **Accelerated**, **Step by Step** or **Pause For** |
| **Save Actions…** | Saves the current set to a `.vcactions` file |
| **Load Actions…** | Adds a saved set to the panel |

In **Batch…**, set **Play:** to **Folder** or **Data Sets**. For **Folder**, choose a **Source Folder:** and select **Include All Subdirectories** to include its subfolders. Then choose one of the **Destination:** options:

| Destination | What happens to each file |
|---|---|
| **None** | The file stays open |
| **Save and Close** | The file is saved over the source and closed |
| **Folder** | The file is saved or exported into the **Destination Folder:** and closed |

**Stop on Errors** stops the batch at the first file or data set that fails.

## Run commands from the command line

`vectorcraft-cli` runs VectorCraft's commands without opening a window. It reads a file or starts a new document, runs the commands you list in order, and exports the result.

| Install | Where the CLI is |
|---|---|
| Windows (MSI) | `%LOCALAPPDATA%\Programs\ArtCraft\VectorCraft\vectorcraft-cli.exe` for the default install. The installer does not add it to `PATH`. |
| Linux (deb, rpm) | `/usr/bin/vectorcraft-cli` |
| macOS | The separate `vectorcraft-cli-<version>-macos-universal.zip` release download. The `.app` holds only the desktop app. |

| Command | What it does |
|---|---|
| `vectorcraft-cli commands` | Prints the command catalog as JSON |
| `vectorcraft-cli run --in in.svg --cmd select.all --cmd paint.setFill --params '{"color":"#ff0000"}' --export out.svg` | Opens a file, selects everything, fills it red and exports the result |
| `vectorcraft-cli run --cmd file.new --params '{"width":800,"height":600}' --cmd shape.star --params '{"cx":400,"cy":300,"radius1":200,"radius2":90}' --export star.vectorcraft` | Builds a new document from commands and saves it |
| `vectorcraft-cli run --in sheet.vectorcraft --commands steps.json --export out.pdf` | Runs the steps listed in a JSON file |

Each `--params` applies to the `--cmd` just before it. `run` prints one line of JSON for each step and stops with an error at the first step that fails, naming that step by its number, counted from 0. `--export` can be given more than once, and the file extension sets the format. For PNG and other image exports, `--scale` sets the pixels per point and `--ppi` sets the pixels per inch. When both are given, `--ppi` is used. Without either, image exports use the document's raster effects resolution.

The star in the following image was drawn, filled and exported by one `vectorcraft-cli run` command.

<img src="/assets/uploads/vectorcraft/cli-star.webp" alt="An amber five-pointed star on a dark indigo background, drawn, filled and exported entirely by one command-line run" width="360" style="display: block; margin-inline: auto;" />

A steps file for `--commands` holds a JSON array of steps, or one step per line. Each step is an object with `command`, the command's id, and optional `params`. A steps file can hold up to 64 MiB and 100,000 steps.

```json
[
  {"command": "select.all"},
  {"command": "paint.setFill", "params": {"color": "#2ec4b6"}}
]
```

:::tip
Put long parameters in a steps file and pass it with `--commands`. `--commands -` reads the steps from standard input.
:::

## Drive VectorCraft from an MCP client

`vectorcraft-cli mcp` runs a server for the [Model Context Protocol](https://modelcontextprotocol.io), a standard protocol that automation clients use to call VectorCraft's commands. The client starts the server and communicates with it over standard input and output.

| Mode | Start it with | What it drives |
|---|---|---|
| **Connected** | `vectorcraft-cli mcp --connect 127.0.0.1:7979`, with the app started as `vectorcraft --control 7979` | The open VectorCraft window. You see each change as it happens. |
| **Headless** | `vectorcraft-cli mcp --headless` | Its own session with no window. Tools that work only with the desktop app, such as opening a panel, are not available. |
| **Automatic** | `vectorcraft-cli mcp` | Tries `127.0.0.1:7979` once when it starts, and runs headless when no app answers |

To use the connected mode:

1. Quit VectorCraft if it is running.
2. Start it with the control port:
   - Windows (PowerShell): `& "$env:LOCALAPPDATA\Programs\ArtCraft\VectorCraft\vectorcraft.exe" --control 7979`
   - macOS: `open -a VectorCraft --args --control 7979`
   - Linux: `vectorcraft --control 7979`
3. Wait until the VectorCraft window is open.
4. Start your MCP client with `vectorcraft-cli mcp --connect 127.0.0.1:7979` as the server command.

:::note
The Start menu, Dock and desktop launchers start VectorCraft without a control port. A server started with no flag before the app was open stays headless until the client restarts it.
:::

Two options limit the files that commands can use:

- `--automation-read-root <folder>`: every file a command reads must be inside this folder.
- `--automation-write-root <folder>`: every file a command saves or exports must be inside this folder.

Each option can be given more than once. Read and write access are separate. Give the same folder to both options when the client needs to read and write it. With only `--automation-read-root`, commands cannot write any file to disk.

On `vectorcraft-cli mcp`, the root options run the server headless, and the server stops with an error if you also give `--connect`. To limit a connected session, start the app with the options instead:

```sh
vectorcraft --control 7979 --automation-read-root <folder> --automation-write-root <folder>
```

:::caution
A connected client can change, save and export your open documents. Without either root option, commands can read and write files anywhere your account can. Give read and write roots that cover only the project folder.
:::

## Related

- [Workflows](/apps/vectorcraft/workflows/)
- [Open and save files](/apps/vectorcraft/open-and-save-files/)
- [Export for screens and the web](/apps/vectorcraft/export-for-screens-and-the-web/)
- [Apply effects and appearance](/apps/vectorcraft/apply-effects-and-appearance/)
- [AI agents](/apps/vectorcraft/ai-agents/)
