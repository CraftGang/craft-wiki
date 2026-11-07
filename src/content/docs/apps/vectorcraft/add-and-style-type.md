---
title: Add and style type
description: Make point type, area type and type on a path, flow text between frames, and set fonts, sizes and alignment.
sidebar:
  order: 14
---

This guide shows how to add the three kinds of type in VectorCraft, flow one story through several frames, and set the font, size, spacing and alignment of the text. It ends with turning letters into paths for artwork that no longer needs to be edited as text. The following image shows one example of each kind of type in one document.

![A sunset poster with the three kinds of type: the headline Golden Hour set as point type, a paragraph wrapping inside a rectangular frame, and the line OPEN UNTIL MIDNIGHT running along an arc over the sun. The line on the arc is selected](/assets/uploads/vectorcraft/type-kinds.webp)

## Kinds of type

| Kind | How to make it | What shapes it |
|---|---|---|
| **Point type** | Click with the Type tool and type. | Point type does not wrap. Each line ends where you press Enter. |
| **Area type** | Drag a frame with the Type tool, or click the outline of a closed path. | The text wraps at the frame's edges. **Type → Area Type Options…** sets rows, columns, gutters and inset. |
| **Type on a path** | Click the outline of an open path with the Type tool, or click any path with the Type on a Path tool. | The text follows the path. Drag the start, center and end brackets, or set options in **Type → Type on a Path → Type on a Path Options…**. |

## Add point type

1. Choose the Type tool (T).
2. Click an empty part of the artboard and type.
3. Press Enter to start a new line.
4. Click an empty part of the canvas to stop editing. The next click makes new type.

If you click to place point type and leave it empty, VectorCraft removes it when you stop editing.

## Add area type

1. Choose the Type tool (T).
2. Drag on the artboard to draw a frame, then type. The text wraps when it reaches the frame's edge.
3. To set type inside a shape you already drew, click the outline of the closed path with the Type tool instead. The path becomes the frame, and its fill and stroke are removed.
4. With the type selected, choose **Type → Area Type Options…** to set the number of rows and columns, the gutter between them, the inset from the frame's edge, the first baseline, the vertical alignment of the lines, and how the frame fits its text (**None**, **Auto Size** or **Shrink Text to Fit**).

To switch a selected type object between the two kinds, choose **Type → Convert To Area Type** or **Type → Convert To Point Type**. Converting area type to point type turns each soft line wrap into a line break.

:::tip
A selected type object shows a small circle beside the right side of its bounding box: hollow on point type and filled on area type. Double-click the circle with the Selection tool to convert the type to the other kind. The text and its styles stay the same.
:::

## Put type on a path

1. Draw a path with the Pen, Curvature or Pencil tool, or use a shape.
2. Choose the Type tool and click the outline of an open path. For a closed path, choose the Type on a Path tool from the Type tool's group and click the outline.
3. Type the text. It runs along the path, and the path's fill and stroke are removed.
4. Switch to the Selection or Direct Selection tool. The selected type shows a start bracket, a center bracket and an end bracket.
5. Drag the start or end bracket to set where the type begins or ends along the path.
6. Drag the center bracket along the path to slide the type. Drag it across the path to flip the type to the other side. Hold **Ctrl** (**Cmd** on macOS) while you drag to slide the type without flipping it.

The **Type → Type on a Path** submenu applies an effect that changes how each letter sits on the path: **Rainbow**, **Skew**, **3D Ribbon**, **Stair Step** or **Gravity**. **Type → Type on a Path → Type on a Path Options…** sets the effect, the flip, **Align to Path** (**Ascender**, **Descender**, **Center** or **Baseline**) and the spacing.

## Flow text between frames

Threaded text is one story that flows through several frames in order. Area type and type on a path can be threaded in any mix.

1. Select two or more area-type frames, type on a path objects or closed paths.
2. Choose **Type → Threaded Text → Create**.

VectorCraft threads the objects in stacking order. Closed paths in the selection become area-type frames. Text that does not fit in one frame continues in the next. The following image shows one story flowing through two frames, with the thread line joining them.

![A night market flyer with striped awnings, string lights and two side-by-side text frames. One story flows from the first frame into the second, and a thread line joins the first frame's out port to the second frame's in port](/assets/uploads/vectorcraft/threaded-text.webp)

You can also thread from a single frame with the Selection tool:

1. Select the area type or type on a path. It shows an in port and an out port.
2. Click the out port. The pointer is loaded with the text.
3. Click a closed path or another type object to flow the text into it, click empty canvas to make a new frame of the same kind, shape and size, or drag to draw a rectangle for the new frame.

A click on the in port works the same way, except that the new frame comes before the clicked one in the thread. Press Escape to drop the loaded text.

To undo threading:

- **Type → Threaded Text → Release Selection** takes the selected frames out of their thread. The story flows on through the remaining frames.
- **Type → Threaded Text → Remove Threading** breaks the threads of the selected frames. Each frame keeps the text it shows.

**View → Hide Text Threads** (**Ctrl+Shift+Y**, or **Cmd+Shift+Y** on macOS) hides the lines drawn between threaded frames. Choose it again to show them.

## Set the font, size and spacing

The Character panel (**Window → Type → Character**; **Ctrl+T**, or **Cmd+T** on macOS) styles the selected type objects, or the characters you selected with the Type tool. Select a type object first; with nothing selected, the panel shows "Select a text object to edit its character attributes." The following screenshot shows the panel with the point type headline selected.

![The Character panel beside the selected headline Golden Hour on a sunset poster, set to Source Serif 4 Regular at 54 pt with 64.8 pt leading, followed by the kerning, tracking, scale, baseline shift and rotation fields, the row of style buttons and the Language menu](/assets/uploads/vectorcraft/character-panel.webp)

The panel holds these controls. Hover over the symbol beside a field to see the field's name.

| Control | What it sets |
|---|---|
| Font family and style | The typeface and its weight or style |
| **Font Size** | The size of the characters |
| **Leading** | The distance between lines |
| **Kerning** | The space between a pair of characters; **Optical** is one of its choices |
| **Tracking** | The space across a range of characters |
| **Vertical Scale %** and **Horizontal Scale %** | The vertical or horizontal stretch of the characters |
| **Baseline Shift** | How far the characters move up or down from the baseline |
| **Character Rotation** | The rotation of each character |
| **All Caps**, **Small Caps**, **Superscript**, **Subscript**, **Underline**, **Strikethrough** | Buttons that turn each style on or off |
| **Language** | The language the characters are shaped in, so the font uses that language's letter forms |

**Hide Options** in the panel menu hides every row below the size, leading, kerning and tracking fields, and **Show Options** shows them again. The panel menu also holds **Reset Panel**.

While you edit horizontal text with the Type tool, the Alt key (Option on macOS) with the arrow keys changes spacing by the increments set in **Preferences → Type**:

- **Alt+Left** and **Alt+Right** (**Option+Left** and **Option+Right** on macOS) change the kerning at the caret or the tracking of the selected text.
- **Alt+Up** and **Alt+Down** (**Option+Up** and **Option+Down** on macOS) change the leading.
- **Alt+Shift+Up** and **Alt+Shift+Down** (**Option+Shift+Up** and **Option+Shift+Down** on macOS) change the baseline shift.

## Align paragraphs

The Paragraph panel (**Window → Type → Paragraph**; **Ctrl+Alt+T**, or **Cmd+Option+T** on macOS) sets alignment, indents and the space around paragraphs. Its alignment buttons are **Align left**, **Align center**, **Align right**, **Justify with last line aligned left**, **Justify with last line aligned center**, **Justify with last line aligned right** and **Justify all lines**. Below them are **Left Indent**, **Right Indent**, **First-line Left Indent**, **Space Before Paragraph** and **Space After Paragraph**, and the **Hyphenate** option. With nothing selected, the panel shows "Select a text object to edit its paragraph attributes."

The alignment applies to the paragraphs of the selected type, or to the paragraphs that the Type tool's selection touches.

**Window → Type** also opens the **Character Styles**, **Paragraph Styles**, **Glyphs**, **OpenType** and **Tabs** panels.

## Use the Type menu

| Command | What it does |
|---|---|
| **Font** and **Recent Fonts** | Choose a font family, or one you used recently |
| **Size** | Choose a font size from a list of point sizes |
| **Glyphs** | Open the Glyphs panel |
| **Insert Special Character** | Insert a bullet, copyright, registered or trademark symbol, section or paragraph symbol, ellipsis, dashes, hyphens or curly quotation marks |
| **Fit Headline** | Track the first line of area type so it fills the width of the frame |
| **Find Font…** | List the fonts the document uses, mark missing ones, and replace a font with another |
| **Change Case** | Change the selected text to **UPPERCASE**, **lowercase**, **Title Case** or **Sentence case** |
| **Smart Punctuation…** | Replace straight quotes with the quotation marks set in Document Setup, `--` and `---` with en and em dashes, and `...` with an ellipsis character, in the selection or the whole document |
| **Bullets and Numbering** | **Apply Bullets**, **Apply Numbers**, or **Convert to Text** to turn list markers into ordinary text |
| **Fill with Placeholder Text** | Replace the selected text with placeholder text; area type is filled to its frame |
| **Show Hidden Characters** | Show markers for spaces, paragraph ends and story ends |

## Turn type into shapes

**Type → Create Outlines** (**Ctrl+Shift+O**, or **Cmd+Shift+O** on macOS) converts the selected type into groups of compound paths, one path for each letter. You can then edit the letters with the path tools.

:::caution
After Create Outlines, the letters are paths and you can no longer edit the wording or change the font. Duplicate the type before you convert it, and keep the copy on a hidden layer if you might need to change the text later.
:::

A frame of threaded text that you convert leaves its thread and keeps only the text it shows.

## Type shortcuts

| Command | Windows and Linux | macOS |
|---|---|---|
| Type tool | T | T |
| Touch Type tool | Shift+T | Shift+T |
| Character panel | Ctrl+T | Cmd+T |
| Paragraph panel | Ctrl+Alt+T | Cmd+Option+T |
| Increase font size | Ctrl+Shift+. | Cmd+Shift+. |
| Decrease font size | Ctrl+Shift+, | Cmd+Shift+, |
| Reset tracking and kerning | Ctrl+Alt+Q | Cmd+Option+Q |
| Align left | Ctrl+Shift+L | Cmd+Shift+L |
| Align center | Ctrl+Shift+C | Cmd+Shift+C |
| Align right | Ctrl+Shift+R | Cmd+Shift+R |
| Justify with last line aligned left | Ctrl+Shift+J | Cmd+Shift+J |
| Justify all lines | Ctrl+Shift+F | Cmd+Shift+F |
| Hide Text Threads | Ctrl+Shift+Y | Cmd+Shift+Y |
| Show Hidden Characters | Ctrl+Alt+I | Cmd+Option+I |
| Create Outlines | Ctrl+Shift+O | Cmd+Shift+O |

To change these shortcuts, choose **Edit → Keyboard Shortcuts…**.

## Related

- [Workflows](/apps/vectorcraft/workflows/)
- [Draw and edit paths](/apps/vectorcraft/draw-and-edit-paths/)
- [Fill, stroke and color](/apps/vectorcraft/fill-stroke-and-color/)
- [Apply effects and appearance](/apps/vectorcraft/apply-effects-and-appearance/)
- [Organize with layers and symbols](/apps/vectorcraft/organize-with-layers-and-symbols/)
