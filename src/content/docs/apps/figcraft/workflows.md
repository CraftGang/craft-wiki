---
title: Workflows
description: Auto layout, components, variables, vectors, prototypes, Dev Mode, boards and export in FigCraft.
sidebar:
  order: 3
---

FigCraft's main menu (the button at the top of the left rail) has **File**, **Edit**, **View**, **Object**, **Text**, **Arrange**, **Vector**, **Plugins**, **Preferences**, **Libraries** and **Help**. If you can't find a command, press **Ctrl+K** (**⌘K** on a Mac) and type its name into **Actions**.

## Lay out screens with auto layout

Auto layout lines up a frame's children in a row, a column, a wrapping row or a grid, and resizes the frame to fit.

- Select a frame or some layers and press **Shift+A** (**Object › Add auto layout**). **Object › Suggest auto layout** works out a layout from where the layers already are.
- In the Design panel, set the direction, gap, padding and alignment. Drag the padding and gap handles on the canvas too.
- Each child can **Hug** its contents, **Fill** the space, or keep a **Fixed** size, with minimum and maximum sizes.
- Arrow keys move a child along the layout.

For frames without auto layout, use constraints and layout grids. **View › Layout grids** (**Shift+G**) shows them.

## Build components and variants

A component is a design you reuse. Change the main component and every copy (instance) updates, while keeping the changes you made to each one.

- Select a layer and press **Ctrl+Alt+K** (**⌥⌘K** on a Mac), or choose **Object › Create component**.
- To make variants, select several components and choose **Object › Combine as variants**. Then set variant properties such as Style and State in the Design panel.
- The **Assets** panel lists your components with live thumbnails. Drag one onto the canvas to place an instance.
- On an instance, **Object** has **Reset all changes**, **Detach instance** and **Go to main component**.

![The Assets panel listing Button, Difficulty, Search field and Toggle components; on the canvas a button component set of nine variants is selected, and the Design panel shows its Style and State properties](/assets/uploads/figcraft/components.webp)

To use components in other files, publish this file as a library with **Libraries › Publish library…**, then add it in other files from **Libraries › Open libraries**.

## Use styles and variables

- **Styles** save a fill, text, effect or layout grid setting under a name, so you can apply it again.
- **Variables** hold a color, number, text or true/false value. Open the **Variables** panel from the left rail to create them. A collection can have modes, such as Light and Dark, with a value for each.
- Bind a variable to a fill, stroke, effect, layout grid or component property. Switch a frame's mode in the Design panel to see it in the other theme.

## Draw vectors

- **P** is the **Pen** tool and **Shift+P** the **Pencil**. Double-click a shape or path to edit its points and handles.
- **Shift+M** is the **Shape builder**: click or drag across the regions of overlapping shapes to merge them, or hold **Alt** to remove them.
- **Object › Boolean groups** has **Union**, **Subtract**, **Intersect** and **Exclude**. The shapes inside stay editable.
- **Object › Flatten** (**Ctrl+E**) and **Object › Outline stroke** turn layers into plain paths.

## Make a prototype

Switch the right panel to **Prototype** (**Shift+E** toggles between Design and Prototype).

1. Select a button or layer. Drag the round handle on its edge to the frame it should open, or click **+** next to **Interactions**.
2. Choose a trigger, such as **On click**, and an action, such as **Navigate to**, with a transition.
3. Press the play button at the top of the right panel, or **Ctrl+Alt+Enter** (**⌥⌘Enter** on a Mac), to present it. **Shift+Space** previews it on the canvas.

While presenting, **→**, **Space** or **N** goes to the next frame, **←** to the previous one, **R** restarts and **F** goes full screen.

![Four onboarding screens in the Prototype panel, joined by green connection curves from their buttons to the next screen. The Get started button is selected, and the panel shows its On click, Navigate to 2 Interests interaction](/assets/uploads/figcraft/prototype.webp)

Prototypes can also set and check variables, so a screen can count taps or remember a choice.

## Hand off with Dev Mode

Press **Shift+D**, or choose **Inspect** in the toolbar's switcher, to turn on Dev Mode. It only inspects: to edit again, press **Shift+D** or switch back to **Design**.

- Select a layer to see its sizes, spacing and styles, and code for it in CSS, HTML, React, Vue, Tailwind, Leptos, SwiftUI, Jetpack Compose, ArkUI or Flutter. For an instance, the component's properties become the code's props.
- Hold **Alt** and point at another layer to measure the distance. Add measurements and annotations that stay on the canvas.
- Mark a frame **Ready for dev**. **Compare changes** shows what's changed since then.

![Dev Mode on a home screen marked Ready for dev. An annotation points at a card, and the right panel shows a Playground preview of the selected trail row with generated React code below it](/assets/uploads/figcraft/devmode.webp)

## Comment and keep versions

- Press **C** for the **Comment** tool and click to pin a comment to a frame. Comments have replies, @mentions and reactions. **Shift+C** shows or hides them.
- **File › Save to version history…** (**Ctrl+Alt+S**, **⌥⌘S** on a Mac) saves a named version. **File › Show version history** lists them.

## Run a workshop on a board

**File › New board** makes a whiteboard file. It has sticky notes (**Q**), shapes (**B**), connectors (**X**), a marker (**M**), a highlighter (**U**) and stamps (**W**), and templates such as a retrospective and a flow chart. Run a timer and a vote from the bar at the top right. Boards work in [live sessions](/apps/figcraft/live-sessions/) too.

![A board with a sprint retro made from the retrospective template: sticky notes under Went well, To improve and Next steps with vote counts, a flow chart joined by connectors below, and a timer at the top right](/assets/uploads/figcraft/board.webp)

## Export

- **File › Export…** (**Ctrl+Shift+E**, **⇧⌘E** on a Mac) exports the selection, or the page when nothing is selected, as PNG, JPEG, WebP, SVG, PDF or Android vector drawable XML.
- Add export settings to a layer in the Design panel to export it the same way each time. The **Export** dialog then exports every layer that has them.
- **File › Export frames to PDF…** puts every frame on its own page.
- **Edit › Copy as** copies the selection as text, CSS, SVG or PNG for pasting into another app.
- The **Export** dialog can also save the whole file as .fig. This is experimental: other apps may not open every .fig file it makes.

## Open files from other apps

**File › Open…** (**Ctrl+O**) opens .figcraft, .fig, .sketch, .penpot and .jam files, design files exported as JSON, SVG, and PNG, JPEG, WebP, GIF and TIFF images. **File › Import from file…** (**Ctrl+Shift+I**) adds one to the file you have open.

Files from other apps open on a best-effort basis. Some layers or effects may not come across exactly. Check the result, and keep the original.

## Plugins

**Plugins › Manage plugins…** lists your plugins. To add one, choose **Plugins › Development › Import plugin from manifest…** and pick its `figcraft-plugin.json` file. Plugins run in a sandbox with no access to your files or the network, and each run is one undo step. **Plugins › Run last plugin** runs the last one again.

## Change the look and language

- **View › Theme** switches between **Light**, **Dark** and **Follow system**.
- **Preferences › Preferences…** (**Ctrl+,**) sets the language, your name for comments and live sessions, the nudge amount, auto-save, the interface size and more. By default, FigCraft follows your system's language. Many of its 24 languages are draft translations.

## Keyboard shortcuts

On a Mac, use **⌘** in place of **Ctrl** and **⌥** in place of **Alt**. Click **?** at the bottom right and choose **Keyboard shortcuts** to see them all.

| Shortcut | What it does |
| --- | --- |
| **Ctrl+K** | Actions: find any command |
| **Ctrl+S**, **Ctrl+Shift+S** | Save, Save as |
| **Ctrl+Z**, **Ctrl+Shift+Z** | Undo, redo |
| **Ctrl+D** | Duplicate |
| **Ctrl+G**, **Ctrl+Shift+G** | Group, ungroup |
| **Ctrl+Alt+G** | Frame the selection |
| **V**, **K**, **H** | Move, Scale, Hand |
| **F**, **R**, **O**, **L**, **T** | Frame, Rectangle, Ellipse, Line, Text |
| **P**, **Shift+P** | Pen, Pencil |
| **C** | Comment |
| **Shift+A** | Add auto layout |
| **Ctrl+Alt+K** | Create component |
| **Shift+1**, **Shift+2** | Zoom to fit, zoom to selection |
| **Shift+0** | Zoom to 100% |
| **Space** + drag | Pan the canvas |
| **Shift+D** | Dev Mode on and off |
| **Ctrl+\\** | Show or hide the interface |
| **F6** | Move the keyboard between toolbar, layers, canvas and properties |
