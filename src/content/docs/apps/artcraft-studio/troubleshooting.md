---
title: Troubleshooting
description: Fix common ArtCraft Studio problems with signing in, credits, connected accounts and downloads.
sidebar:
  order: 4
---

## I can't get past the login screen

ArtCraft Studio needs you to be logged in to an ArtCraft account.

- **Login with Website** finishes in your web browser. Check your browser for the ArtCraft page, and approve the login there.
- If the browser doesn't open or the login doesn't come back to the app, try **Scan to Login** and scan the QR code with your phone.
- Make sure you're online. ArtCraft Studio can't do anything without an internet connection.

## Sign-up can't reach the server

The message reads "Couldn't reach the ArtCraft servers", or `unable to reach the login server (HTTP None)` in older versions. ArtCraft Studio couldn't reach ArtCraft's login server. Make sure you're online. If it keeps happening, include the full message, your version from **Settings › About** and your system in a [bug report](https://github.com/storytold/artcraft/issues).

## Generating stops and asks me to subscribe

You've run out of credits for ArtCraft's models. Click your credit balance in the top bar and choose **Buy credits**, or see **Settings › Plan & Credits**. Point at the generate button before you click it to see what a generation costs.

## Grok or Midjourney says "Not logged in"

Open **Settings › Accounts** and click **Connect** next to that account, then log in to the service in the window that opens. If it still fails, click **Disconnect**, then **Connect** again.

## A generation is slow or fails

Generations run on online services, and some models are busier than others. The task queue in the top bar shows what's still running. Some new models are marked as early in the app and may be slow or have outages. Try again later, or pick another model.

A task that sits at 95% for a long time, or an "api rejection error" with an HTTP 400 code, is a known problem. See [Known problems, not fixed yet](#known-problems-not-fixed-yet). Include the task's details and your version in a report.

## I can't find a download

Downloads go to your system's **Downloads** folder unless you chose another one in **Settings › Downloads**. Everything you made is also in **My Library**, where you can download it again.

## Linux: the window is blank, flickers or freezes

Reports on Linux include the app closing with "WGPU error", an AppImage whose interface freezes, flickering bars over the interface, and a mouse cursor that disappears in the Flatpak. See [Known problems, not fixed yet](#known-problems-not-fixed-yet) for the open reports. Include your distribution, desktop and how you installed ArtCraft Studio.

## Find ArtCraft Studio's data folder

**Settings › About** shows the **Artcraft Data Directory** and the **Downloads Directory**, along with the version you have. Include the version in a bug report.

## Known problems, not fixed yet

These are open on the issue tracker. Add your details there if you run into one.

- Sign-up fails with "unable to reach the login server": [#2453](https://github.com/storytold/artcraft/issues/2453).
- On Linux, the create-account screen keeps coming back after every start: [#2763](https://github.com/storytold/artcraft/issues/2763).
- Uninstalling through the Launcher fails on Linux: [#2763](https://github.com/storytold/artcraft/issues/2763), [#2765](https://github.com/storytold/artcraft/issues/2765).
- Suno generations stop at 95% and never finish: [#2359](https://github.com/storytold/artcraft/issues/2359).
- Seedance generations are very slow: [#2467](https://github.com/storytold/artcraft/issues/2467).
- "api rejection error" with an HTTP 400 code: [#2728](https://github.com/storytold/artcraft/issues/2728).
- Antivirus programs flag ArtCraft downloads: [#2672](https://github.com/storytold/artcraft/issues/2672), [#2687](https://github.com/storytold/artcraft/issues/2687).
- On Linux, the Flatpak or AppImage closes with "WGPU error": [#2743](https://github.com/storytold/artcraft/issues/2743).
- On Linux, the AppImage can't find the system's GStreamer plugins, and the interface freezes: [#2533](https://github.com/storytold/artcraft/issues/2533).
- Black bars flicker over the interface: [#2438](https://github.com/storytold/artcraft/issues/2438).
- The mouse cursor disappears in the Flatpak: [#2694](https://github.com/storytold/artcraft/issues/2694).
- The **Tab** key doesn't move between fields in the login form for some people: [#2506](https://github.com/storytold/artcraft/issues/2506).

## Still stuck?

- Ask in the [ArtCraft Discord](https://discord.gg/artcraft).
- [Report a bug on GitHub](https://github.com/storytold/artcraft/issues).
