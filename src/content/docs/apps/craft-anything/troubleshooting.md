---
title: Troubleshooting
description: Fix common problems with Craft Anything, and find its log when something goes wrong.
---

Start by running the check that comes with the app. It says whether the install, coding agents and engines are ready, and what's missing:

```bash
craft-anything-cli doctor
```

If your terminal doesn't find `craft-anything-cli`, run it from the folder Craft Anything is installed in:

- **Windows** (installer): `C:\Program Files\Craft Anything\craft-anything-cli.exe`
- **macOS**: `/Applications/Craft Anything.app/Contents/MacOS/craft-anything-cli`
- **AppImage**: `<AppImage> --cli doctor`

## "Nothing can build yet"

Craft Anything didn't find a coding agent.

1. Install Claude Code by following [Anthropic's setup guide](https://code.claude.com/docs/en/setup).
2. Sign in to it once: `claude auth login`.
3. Press **Look again** on the welcome screen, or **Detect** in **Settings → AI**.

If Claude Code is installed somewhere Craft Anything doesn't look, open **Settings → AI** and use **Choose…** beside its program to pick it. To build with an API key instead, add one in **Settings → AI**.

## The Claude desktop app is installed, but nothing builds

Install Claude Code on its own and sign in to it once in a terminal, then press **Detect** in **Settings → AI**. Building needs Claude Code, the command-line tool, which the Claude desktop app doesn't include.

## "Claude Code isn't signed in on this computer"

Run the sign-in command in a terminal (**Copy the command** on the card copies it), then press **Try again**:

```bash
claude auth login
```

## "This build stopped part-way"

Press **Continue**. The app or the computer closed while the build was running; everything so far is kept, and **Continue** picks up where it stopped.

## "The build still isn't working after … checks"

The build stopped after 10 checks in a row found it not working. Read the last check's note in the feed for what it found, then send a new request with a concrete correction. **Try again** doesn't reset the count; a new request does.

## "No built site found"

The message reads "The build isn't working yet. No built site found in app/ yet." Craft Anything found no index.html where a built site should be, such as `app/dist`, `app/build` or `app/out`. Ask for a fix in the box below, or press **Try again**. Some builders report a finished site when they wrote nothing there; [issue 736](https://github.com/storytold/craft-anything/issues/736) tracks it.

## A website can't be studied

Install Chrome, Edge, Brave or another Chromium-based browser. Craft Anything uses it to see the site as a visitor does.

With the Flatpak, websites can't be studied at all: the sandbox can't start a browser on your computer. Use the AppImage, `.deb`, `.rpm` or tarball instead ([Install and update](/apps/craft-anything/install-update/#linux)). Under Flatpak, Claude Code is also signed in separately from the one on your computer; the sign-in message gives the command to run.

## The window doesn't open on Windows

Start the app again. Each start that fails moves on to the next way of drawing (DX12, then WARP, then Vulkan, then OpenGL) and keeps the one that works.

If it still doesn't open:

1. Update your graphics driver.
2. To draw without the graphics card (slower), set the environment variable `CRAFT_ANYTHING_RENDERER=software` and start the app again.

## Choose the graphics card on Linux

Craft Anything draws on the graphics card that drives your screen, which opens fastest on a laptop with two cards. To use another card, set `WGPU_ADAPTER_NAME` (for example `nvidia`) or `WGPU_POWER_PREF=high`. The [log](#find-the-log) says which card it chose and why.

## macOS blocks the command-line tool

"Apple could not verify craft-anything-cli" can appear for the tool from the separate zip. Press **Done** (not **Move to Trash**), then do one of these:

- Run `xattr -d com.apple.quarantine <path to craft-anything-cli>`.
- Allow it in **System Settings → Privacy & Security → Open Anyway**.

A lone program can't carry its notarization with it, so macOS looks it up online. Downloading the zip from a terminal avoids the check; see the [macOS download commands in the README](https://github.com/storytold/craft-anything#macos).

## A tool is refused in Clean room

If you're allowed to look inside the original, switch to **Deep** in the title bar. Clean room never reads inside the original, so the tools that would are refused.

## The builder asks before every command

**Auto mode** is off. On the card, choose **Always for this project** to stop the questions for that kind of command, or turn **Auto mode** back on in **Settings → Safety**.

To see or change what a project allows, choose **Approvals** under the prompt box, or type `/approvals` with a kind and a choice, such as `/approvals publish ask`. **Settings → Safety** lists what the project allows under **Allowed in**.

:::caution
Installing packages runs their code on your computer, and npm runs install scripts by default. Only allow a package manager for a project whose dependencies you trust.
:::

## Known problems, not fixed yet

- **"Always for this project" asks again.** [Issue 807](https://github.com/storytold/craft-anything/issues/807) and [issue 851](https://github.com/storytold/craft-anything/issues/851).
- **The build stays at "The builder is checking its work against the original…" or the plan never moves on.** [Issue 981](https://github.com/storytold/craft-anything/issues/981) and [issue 504](https://github.com/storytold/craft-anything/issues/504).
- **A build stops with "The build stopped after two builder turns changed no files in app/."** Local models run through Ollama can also loop on tool calls. [Issue 1076](https://github.com/storytold/craft-anything/issues/1076) and [issue 417](https://github.com/storytold/craft-anything/issues/417).
- **On Windows, Unity is reported as not installed although Unity Hub and an Editor are.** [Issue 1077](https://github.com/storytold/craft-anything/issues/1077).
- **Ghidra's analysis can't be canceled from the app.** [Issue 948](https://github.com/storytold/craft-anything/issues/948).
- **Craft Anything can leave hidden Brave browsers running, and then Brave won't open a window.** [Issue 810](https://github.com/storytold/craft-anything/issues/810).
- **The `.deb` and the AppImage won't install on Zorin 17.** [Issue 967](https://github.com/storytold/craft-anything/issues/967).
- **Craft Anything uses a lot of processor time on some computers.** [Issue 965](https://github.com/storytold/craft-anything/issues/965) and [issue 579](https://github.com/storytold/craft-anything/issues/579).
- **Antigravity isn't detected on some Windows PCs.** [Issue 449](https://github.com/storytold/craft-anything/issues/449).

## Find the log

The desktop app writes `desktop.log` in its settings folder:

| System | Settings folder |
|---|---|
| Windows | `%APPDATA%\craft-anything` |
| macOS | `~/Library/Application Support/craft-anything` |
| Linux and FreeBSD | `~/.config/craft-anything` |
| Flatpak | `~/.var/app/ai.storyteller.craft-anything/config/craft-anything` |
| Portable zip | `CraftAnythingData`, next to the app |

If the `CRAFT_ANYTHING_CONFIG_DIR` environment variable is set, the settings folder is there instead.

## Still stuck?

[Open an issue on GitHub](https://github.com/storytold/craft-anything/issues) with what you did, what happened and your `desktop.log`, or ask on [Discord](https://discord.gg/artcraft).
