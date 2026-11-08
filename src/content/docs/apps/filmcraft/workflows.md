---
title: Workflows
description: Editing, trimming, color, effects, audio, titles, captions, export and interchange in FilmCraft.
sidebar:
  order: 3
---

FilmCraft's **Edit** tab is made of panels: the **Project** panel, the **Source** and **Program** monitors, the **Timeline**, **Effect Controls**, **Lumetri Color**, the mixers and more. Open any panel from the **Window** menu, and drag a panel's tab to dock it somewhere else.

## Workspaces

A workspace is a saved panel layout for one kind of work. Switch with **Window › Workspaces**, or click the workspace name at the top right.

| Workspace | Shortcut |
| --- | --- |
| **Editing** | **Alt+Shift+1** |
| **Assembly** | **Alt+Shift+2** |
| **Color** | **Alt+Shift+3** |
| **Effects** | **Alt+Shift+4** |
| **Audio** | **Alt+Shift+5** |
| **Captions and Graphics** | **Alt+Shift+6** |

On a Mac, use **Option** for **Alt**. If you have moved panels around, **Window › Workspaces › Reset to Saved Layout** puts them back. **Save as New Workspace…** keeps your own layout.

## Edit with the Source monitor

Three-point editing puts exactly the part of a clip you want onto the timeline.

1. Double-click a clip in the **Project** panel to open it in the **Source** monitor.
2. Press **I** to mark the In point and **O** to mark the Out point.
3. In the **Timeline**, move the playhead to where the clip should go.
4. Press **,** to insert it (later clips move along) or **.** to overwrite what's there.

The track buttons at the left of the timeline choose which tracks the clip goes onto. **;** lifts the marked range out of the sequence and leaves a gap. **'** extracts it and closes the gap.

![The Assembly workspace with a black and white film in the Source monitor and a cemetery shot in the Program monitor, above a three-track timeline with dissolves on V1 and a music track on A2](/assets/uploads/filmcraft/assembly.webp)

## Trim

| Tool | Key | What it does |
| --- | --- | --- |
| **Selection Tool** | **V** | Select, move and trim clips |
| **Ripple Edit Tool** | **B** | Trim a clip and move everything after it |
| **Rolling Edit Tool** | **N** | Move a cut between two clips |
| **Rate Stretch Tool** | **R** | Change a clip's speed by trimming it |
| **Razor Tool** | **C** | Cut a clip in two |
| **Slip Tool** | **Y** | Change which part of a clip is used, keeping its place |
| **Slide Tool** | **U** | Move a clip between its neighbors |

**Q** and **W** ripple-trim the start or end of a clip to the playhead. **Sequence › Add Edit** (**Ctrl+K**, or **⌘K** on a Mac) cuts the targeted tracks at the playhead. **Sequence › Trim Edit** (**Shift+T**) opens the trim monitor, which shows both sides of a cut.

Markers live on the **Markers** menu: **M** adds one, and **Shift+M** jumps to the next.

To change any shortcut, choose **Edit › Keyboard Shortcuts…** (**Ctrl+Alt+K**, or **⌥⌘K** on a Mac). There are presets for FilmCraft's own keys and for the keys of other common editors.

## Color

Switch to the **Color** workspace. Select a clip on the timeline, then use the **Lumetri Color** panel. Its sections each have an on/off switch:

- **Basic Correction**: white balance (temperature and tint), exposure, contrast, highlights, shadows, whites, blacks and saturation.
- **Creative**: built-in looks with an intensity control, plus faded film, sharpen and vibrance.
- **Curves**: an RGB curve, and hue and saturation curves.
- **Color Wheels & Match**: shadow, midtone and highlight wheels.
- **HSL Secondary**: pick out one color range and correct only that.
- **Vignette**: darken or lighten the edges of the frame.

The **Lumetri Scopes** panel shows a waveform and a vectorscope of the graded picture.

![The Color workspace on a scene from Charade: the waveform and vectorscope on the left, the Program monitor in the middle, and the timeline and loudness meters below](/assets/uploads/filmcraft/color.webp)

## Effects, transitions and keyframes

Open **Window › Effects** to browse the library of video effects, audio effects and transitions. Type in the search box to find one, then drag it onto a clip.

- **Fade in or out**: drag **Cross Dissolve** (in **Video Transitions › Dissolve**) onto the start or end of a clip.
- **Dissolve between two shots**: drag **Cross Dissolve** onto the cut between them.
- **Change a transition's length**: double-click it on the timeline and set **Duration**, or edit it in **Effect Controls**.

**Effect Controls** shows every effect on the selected clip, including **Motion** (position, scale, rotation and anchor point) and **Opacity** (with blend modes). To animate a value, click the stopwatch beside it, move the playhead, and change the value. Each change adds a keyframe. Open an animated value to see its value and velocity graphs, and drag the handles to ease the motion.

![Effect Controls with the value and velocity graphs of an eased Scale keyframe on a title card; the Program monitor shows the title over a country road, and the Properties panel shows Transform and Crop settings](/assets/uploads/filmcraft/keyframes.webp)

## Audio

- Every audio clip has a **Volume** effect. To fade sound in or out, add keyframes to its volume line on the timeline with the **Pen Tool** (**P**), then drag them.
- Add audio effects such as EQ, filters, dynamics, a limiter, reverb, DeNoise and DeHummer from **Window › Effects**.
- The **Audio Track Mixer** and **Audio Clip Mixer** have faders, pan, mute and solo. The track mixer can record automation while the sequence plays.
- The loudness meters beside the timeline show momentary, short-term and integrated loudness and true peak.

## Titles and graphics

Press **T** for the **Type Tool**, click in the **Program** monitor and type. FilmCraft adds a graphic clip to the timeline. The **Pen Tool** draws shapes. Change the font, fill, stroke, background and shadow in the **Properties** panel; they can all be keyframed.

## Captions

Choose **File › Import…** and pick an **.srt**, **.vtt** or **.scc** file. FilmCraft adds it as a caption track above the video tracks. Edit the captions in the **Text** panel.

When you export, the **Captions** section can burn them into the picture or write them as a separate SRT or WebVTT file.

## Export

Click the **Export** tab, or choose **File › Export › Export** (**Ctrl+M**, or **⌘M** on a Mac).

1. Set **File Name** and **Location**.
2. Pick a **Preset**, or a **Format**:
   - **H.264**: an MP4 that plays almost anywhere. FilmCraft has its own H.264 encoder.
   - **Apple ProRes**, **DNxHR** or Motion JPEG: QuickTime files for further editing.
   - **MXF**, image sequences (PNG, TIFF, JPEG, DPX, EXR and others), animated **GIF**, and audio-only **WAV**, **AIFF**, **AAC** or **FLAC**.
   - **H.265 (HEVC)** and **AV1** need a hardware encoder in your computer. If there isn't one, FilmCraft says so next to **Format**.
3. Open **Video**, **Audio**, **Captions**, **Effects** and **Metadata** to fine-tune the export.
4. Click **Export**, or **Send to Queue** to line up several exports and run them together.

For a fast export with a preset, use the **Quick Export** button at the top right.

The timeline's render bar shows which parts play back smoothly. **Sequence › Render Effects In to Out** (**Enter**) renders previews of the slow parts.

## Move timelines to and from other editors

**File › Export** writes your sequence for another editor:

- **Final Cut Pro XML…**: the XML format many editors read.
- **FCPXML…**: for Final Cut Pro.
- **OpenTimelineIO…**: an open format used across the film industry.
- **EDL…**: a CMX 3600 edit decision list.
- **AAF…** and **OMF…**: for handing audio over to a sound editor.

To bring a timeline in, choose **File › Import…** and pick the XML, FCPXML, OpenTimelineIO, EDL or AAF file. FilmCraft adds its bins and sequences to your project, and links the media files it finds.

:::note
FilmCraft can't open Premiere Pro `.prproj` projects yet. Export the sequence from Premiere as Final Cut Pro XML, AAF or OpenTimelineIO, and import that.
:::

## Save and recover

- **File › Save**, **Save As…** and **Save a Copy…** save the project.
- Auto-save writes a copy every 5 minutes to an `Auto-Save` folder next to the project, and keeps the last 20. Open one with **File › Open Project…**. Change this in **Edit › Preferences › Auto Save…** (on a Mac, in **FilmCraft › Settings…**).
- If FilmCraft closes before you save, it offers to recover your changes the next time it starts. You can also choose **File › Recover Unsaved Changes…**.
