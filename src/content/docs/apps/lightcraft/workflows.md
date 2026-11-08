---
title: Workflows
description: Import, organize, cull, edit, mask, retouch and export photos in LightCraft.
sidebar:
  order: 3
---

LightCraft has two main views. The grid (**View › Photo Grid** or **View › Square Grid**, or press **G**) shows many photos at once. The **Detail View** (**D**, or double-click a photo) shows one photo large. The panels on the right, such as **Edit**, **Crop & Rotate**, **Remove**, **Masking** and **Presets**, open from the **Window** menu or the icons on the far right.

To see every keyboard shortcut, choose **Help › Keyboard Shortcuts** (**Ctrl+/**, or **⌘/** on a Mac).

## Import photos

Choose **File › Import Photos…** or **File › Import from Folder…**. In the **Import Photos** window:

1. Check the photos to bring in. **Check All** and **Uncheck All** change every photo at once. Photos already in the library are marked and start unchecked.
2. Under **Transfer**, choose how the files get into the library:
   - **Add in place** keeps the files where they are. The library only points to them.
   - **Copy** copies them into the library's `Originals` folder, or a folder you choose.
   - **Move** copies them, then removes each original once the copy is checked.
3. With **Copy** or **Move**, choose how to sort them into **Folders** (by day, by month or into one folder), and optionally **Rename** them. **Copy as DNG** converts raw files to DNG.
4. Optionally add the photos to an **Album**, apply a **Preset**, or add **Keywords**.
5. Click the import button at the bottom.

To work on a folder without importing it, use **Local › Browse Folder…** in the sidebar.

## Organize

- **Albums** and **Folders**: **File › New Album…** (**Ctrl+N**) and **File › New Folder…**. Folders hold albums.
- **Smart albums**: **File › New Smart Album…** fills an album by rules, such as rating or camera.
- **Keywords**: press **K** for the **Keywords** panel.
- **Search**: type in **Search Photos** at the top. Search understands fields, for example `rating:>3 flag:pick iso:>800 date:2026-04 keyword:mountains`.
- **People**: **View › People** groups the faces you have named.

Deleting a photo moves it to **Recently Deleted**, where you can bring it back.

## Cull a shoot

Select photos and press a key. The same actions are in the **Photo** menu.

| Key | Action |
| --- | --- |
| **0** | Clear the star rating |
| **1** to **5** | Set the star rating |
| **6**, **7**, **8**, **9** | Red, yellow, green or blue label |
| **P** | Flag as a pick |
| **X** | Flag as rejected |
| **U** | Clear the flag |

**Photo › Auto Advance** moves to the next photo after each key. **View › Compare** (**Shift+C**) shows two photos side by side with zoom and pan kept in step. **View › Survey** (**N**) tiles the selected photos.

Rejecting a photo only marks it. It doesn't delete the file.

## Edit a photo

Open a photo in the **Detail View** and press **E** for the **Edit** panel.

- **Auto** sets a starting point. **B&W** turns the photo black and white. **Reset** removes all edits.
- **Light**: Exposure, Contrast, Highlights, Shadows, Whites and Blacks, plus the tone **Curve**.
- **Color**: white balance, Vibrance, Saturation, the **Color Mixer** and color grading wheels.
- **Effects**: Texture, Clarity, Dehaze, Vignette and Grain.
- **Detail**: sharpening and noise reduction.
- **Optics**: lens corrections, chromatic aberration and defringe.

To check your work, press **\\** to switch to the original and back, or **Y** for before and after side by side. **J** shows clipped highlights and shadows.

![Before and after of The Tetons and the Snake River side by side, with the Edit panel's Light sliders on the right](/assets/uploads/lightcraft/ba.webp)

## Crop and straighten

Press **C** for **Crop & Rotate**. Drag the corners to crop, pick an **Aspect Ratio**, and drag **Straighten** to level the horizon. **Rotate Left**, **Rotate Right**, **Flip H** and **Flip V** turn and mirror the photo. **Overlay** shows thirds, a grid or golden-ratio guides. The **Geometry** sliders fix converging verticals and other perspective problems. Press **Enter** when you're done.

![The Crop panel on The Tetons and the Snake River: a 16 by 9 crop rotated slightly with a rule-of-thirds overlay, and the Geometry sliders below](/assets/uploads/lightcraft/crop.webp)

## Edit part of a photo with masks

Press **M** for **Masking**, and choose a mask under **Create New Mask**:

- **Brush**: paint where the change should go.
- **Linear** and **Radial** gradients: drag them onto the photo.
- **Luminance** and **Color**: select by brightness or color.
- **Subject**, **Sky** and **Background**: select them automatically.

Then move the sliders below to change only the masked area. **Add** and **Subtract** combine masks, and **Invert** flips one. **O** shows the mask as a colored overlay.

![The Masking panel with a linear Sky mask and a radial Sun glow mask. The radial gradient is drawn as a red ellipse around the sun over a lake, and its Temp and Exposure sliders are raised](/assets/uploads/lightcraft/masking.webp)

:::note
**Object** and **Describe** masks, which select what you click or describe in words, need an optional AI model. LightCraft offers to download it the first time you use them. The other masks need no model.
:::

## Remove distractions

Press **H** for **Remove**, set **Size**, and paint over a speck, a wire or a stray object. LightCraft repairs it when you release the mouse button: there is no **Apply** button. Choose **Remove**, **Content-Aware**, **Heal** or **Clone** at the top of the panel before you paint. To change a repair, click its pin, then adjust it or click **Delete (⌫)**.

**Visualize Spots** (**A**) shows a black-and-white view that makes dust spots easy to see. **Red Eye** is in the **Window** menu.

## Presets and copying edits

- Press **Shift+P** for **Presets**. LightCraft comes with 41 presets, and each has an **Amount** slider.
- **Photo › Create Preset…** saves your current settings as a preset.
- **Edit › Choose Edit Settings to Copy…** (**Ctrl+Shift+C**) and **Edit › Paste Selected Settings…** (**Ctrl+Shift+V**) copy edits from one photo to others, with just the settings you choose.

## Merge photos

Select bracketed or overlapping photos and choose **Photo › Photo Merge › HDR…**, **Panorama…** or **HDR Panorama…**. The result is a new DNG.

## Export

Select photos and choose **File › Export…**.

1. Set **Format**: **JPEG**, **PNG**, **TIFF**, **PSD**, **WebP**, **AVIF**, **JPEG XL**, **DNG** or **Original files**. **Original files** copies the files unchanged, each with an XMP sidecar holding its edits.
2. Leave **Full size** checked, or choose **Resize to** a long edge, width, megapixels and so on.
3. Optionally set **Color space**, **Sharpen**, **Metadata**, **Remove location info** or a **Watermark**.
4. Next to **Folder**, click **Choose…**. Set **File name** with tags such as `{name}-{seq}`, and **If file exists**.
5. Click the export button at the bottom.

Type a name next to **Save preset** to keep your choices. **File › Export with Previous** repeats the last export. On a Mac, **Add to Apple Photos** also adds the exported files to Photos.

## Print, contact sheets and slideshows

- **File › Contact Sheet PDF…** makes a PDF of thumbnails of the selected photos.
- **File › Print…** (**Ctrl+P**) lays photos out on pages, as single images, contact sheets or picture packages, and saves them as a PDF. Printing straight to a printer isn't there yet: print the PDF instead.
- **View › Slideshow** plays the photos full screen. **View › Export Slideshow…** saves it as a PDF, JPEG images or a video.

## Back up your library

Choose **File › Back Up Library…**. To restore one, choose **File › Restore Library from Backup…**.
