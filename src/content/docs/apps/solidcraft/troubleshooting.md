---
title: Troubleshooting
description: Diagnosing and solving common problems in SolidCraft.
---

:::note[Third-Party Application]
If you encounter bugs or want to report issues with SolidCraft, please file a ticket on the [SolidCraft GitHub Issues](https://github.com/tangency-labs/solidcraft/issues) tracker.
:::

## Common Issues

### Sketch is over-constrained

- **Symptom**: SolidCraft displays an error saying "Conflicting constraints detected" or highlights conflicting geometry in red.
- **Fix**: Check recent dimensions or geometric constraints (like perpendicularity or symmetry). Remove redundant constraints until degrees of freedom match the geometry.

### Broken timeline features (Yellow or Red in timeline)

- **Symptom**: After editing an earlier sketch or feature, downstream features show yellow (warning) or red (error) icons.
- **Cause**: An edge, face, or vertex referenced by a downstream operation was removed or reshaped during the timeline rebuild.
- **Fix**: Roll back the timeline to the first failing feature, right-click it, and select **Edit Feature**. Re-link the missing target geometry, or project stable datum planes into the sketch.

### Graphics & OpenGL acceleration

- **Symptom**: Black viewport or stuttering navigation in the 3D canvas.
- **Fix**:
  - SolidCraft needs Direct3D 12, Vulkan or OpenGL on Windows, Metal on macOS, and Vulkan or OpenGL on Linux. Update your graphics driver.
  - On Linux with Flatpak, ensure your Flatpak runtime matches your host GPU drivers (`flatpak update`).
  - Start SolidCraft in safe mode with `solidcraft --safe-mode` (default settings), or force software rendering by setting the environment variable `SOLIDCRAFT_RENDERER=cpu`.

### SolidCraft won't start, or the window stays blank

Start SolidCraft in safe mode. It uses default settings and the software renderer, and skips the "Recover unsaved design?" offer. Your own settings stay as they are for the next normal start.

| System | How to start in safe mode |
| --- | --- |
| Windows | Run `solidcraft.exe --safe-mode` from a terminal in the install folder, or add ` --safe-mode` to the end of the shortcut's **Target** |
| macOS | `open -a SolidCraft --args --safe-mode` |
| Linux | `solidcraft --safe-mode` |
| Flatpak | `flatpak run io.tangencylabs.solidcraft --safe-mode` |

Setting `SOLIDCRAFT_SAFE_MODE=1` does the same. If two starts in a row stop before the window opens, the next start uses safe mode by itself. `SOLIDCRAFT_RENDERER=cpu` uses only the software renderer and keeps your settings.

If safe mode works but normal mode doesn't:

- Install the graphics driver from your GPU maker (Intel, AMD or NVIDIA), not from Windows Update.
- In a virtual machine, turn on 3D acceleration. Over Remote Desktop, try SolidCraft on the machine itself.
- On Windows, SolidCraft tries Direct3D 12 first, then Vulkan, then OpenGL, then software rendering. **Preferences › Graphics** says which one failed and why. To pick one yourself, set `WGPU_BACKEND` to `dx12`, `vulkan` or `gl` before you start SolidCraft.
- Run `solidcraft --crash-log` to list recent crash reports, and attach the newest one to a bug report.

If SolidCraft says the graphics device was reset, the graphics driver stopped responding. SolidCraft keeps your unsaved changes, starts again and offers them back. Updating the graphics driver usually stops this. If the desktop stutters or freezes while SolidCraft builds a body, start it with `SOLIDCRAFT_CPU_TESS=1` to build bodies on the processor.

### Reset the settings

Quit SolidCraft, then rename the folder (don't delete it). SolidCraft starts with default settings and makes a new folder. Rename it back to restore your settings.

| System | Settings and data |
| --- | --- |
| Windows | Settings in `%APPDATA%\SolidCraft`. Recovery copies and crash reports in `%LOCALAPPDATA%\SolidCraft` |
| macOS | `~/Library/Application Support/SolidCraft` |
| Linux | `~/.local/share/solidcraft` |
| Linux (Flatpak) | `~/.var/app/io.tangencylabs.solidcraft/data/solidcraft` |

On Windows, paste `%APPDATA%` or `%LOCALAPPDATA%` into the Explorer address bar to open the folder. If SolidCraft can't read a settings file, it renames the file to `app.ron.bad-<time>` or `graphics.json.bad-<time>` and starts with defaults.

### A design is lost, or won't open

- If SolidCraft closed with unsaved work, the next start offers **Recover unsaved design?** for each design. The copies are in the `recovery` folder in SolidCraft's data folder (see the table above), so rename that folder instead of deleting it when you reset.
- If a design hangs or crashes SolidCraft when it opens, the next start doesn't reopen it. It tells you which design it stopped on and shows the start page. Open the design yourself if you want to try again.
- To open the previous save: every save keeps the version it replaced next to the file, as `<file>.bak`. Copy it to a new name that ends in `.sc`, such as `bracket-previous.sc`, and open that. Work saved after the previous save isn't in it.
- Check the crash reports. The newest report in the `crashes` folder often holds a `design.sc` with the design as it was. `solidcraft-cli crashes` lists the reports.
- If you see "This design was saved by a newer SolidCraft", update SolidCraft and open it again. The file is not changed.

GitHub doesn't accept `.sc` files as attachments. To report a problem with a design, zip the file (`design.sc.zip`) and attach the zip, with the crash report if there is one.

### "Operation failed" in the timeline

A feature such as Extrude, Fillet, Chamfer, Loft, Sweep, Shell, Combine or Split Face can fail with "operation failed". To report it, click **Report a bug** in the title bar, and attach the zipped `.sc` file and the crash report if there is one.

### Linux display problems

- If the interface is blurry with display scaling: SolidCraft runs through XWayland when it can, and some desktops stretch an XWayland window. Open **Preferences › Graphics**, set **Window system** to **Wayland**, and restart SolidCraft. Or start it with `SOLIDCRAFT_WAYLAND=1`.
- If trackpad pinch does nothing: pinch only works on native Wayland. Use the setting above.
- Dropping files on the window doesn't work on native Wayland. Use **File › Open**, or give the file on the command line.

### Save As says "File not found" on Windows

If saving into **Documents**, **Pictures** or **Desktop** fails with "File not found", Windows Security's **Controlled folder access** is probably blocking SolidCraft. Save to a folder that isn't protected, or allow it: **Windows Security › Virus & threat protection › Ransomware protection › Controlled folder access › Allow an app through Controlled folder access**, then add `solidcraft.exe`.

### Known problems, not fixed yet

- Ctrl+Shift+Z undoes a second time instead of redoing ([#12902](https://github.com/tangency-labs/solidcraft/issues/12902)). Use **Ctrl+Y**.
- A Boolean cut fails when the tool body has a fillet that is almost the full radius ([#12843](https://github.com/tangency-labs/solidcraft/issues/12843)).
- On one computer with an AMD Ryzen 5600G and its integrated graphics, the screen hangs and goes blank when you open a new design ([#12856](https://github.com/tangency-labs/solidcraft/issues/12856)).
- The Agent chat doesn't show earlier conversations ([#12838](https://github.com/tangency-labs/solidcraft/issues/12838)), and voice input doesn't pick up the microphone for some people ([#12894](https://github.com/tangency-labs/solidcraft/issues/12894)).
- On Linux, saving to an SMB network drive can fail ([#12731](https://github.com/tangency-labs/solidcraft/issues/12731)).
- On Windows, you can't move the window by touching its title bar ([#12854](https://github.com/tangency-labs/solidcraft/issues/12854)).

### Getting Help

- [SolidCraft Official Documentation](https://docs.solidcraft.io/)
- [GitHub Issue Tracker](https://github.com/tangency-labs/solidcraft/issues)
- [Discussions & Community](https://github.com/tangency-labs/solidcraft/discussions)
