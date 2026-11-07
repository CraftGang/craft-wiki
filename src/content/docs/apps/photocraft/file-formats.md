---
title: File formats
description: The file formats PhotoCraft opens, saves and exports, from layered PSD to PNG, JPEG, camera raw and more.
sidebar:
  order: 4
---

PhotoCraft opens files with **File › Open…** and saves them with **File › Save As…**. To make a flat copy for sharing, with a preview and a size estimate, use **File › Export › Export As…** (see [Export an image](/apps/photocraft/workflows/#export-an-image)).

PhotoCraft writes the format the file name's extension names, so check the extension when you save.

## Layered documents

These keep your layers.

| Format | Extension | Open | Save |
| --- | --- | --- | --- |
| PhotoCraft | `.pcraft` | Yes | Yes |
| Photoshop | `.psd`, `.psb` | Yes | Yes |
| TIFF with layers | `.tif`, `.tiff` | Yes | Yes |
| OpenRaster | `.ora` | Yes | Yes |
| GIMP | `.xcf` | Yes | No |
| Krita | `.kra`, `.krz` | Yes | No |
| Paint.NET | `.pdn` | Yes | No |
| Affinity | `.af`, `.afphoto`, `.afdesign`, `.afpub` | Yes | No |
| SVG | `.svg`, `.svgz` | Yes, as shape layers | No |

**PSD and PSB.** PhotoCraft opens and saves layered PSD and PSB files, including 16-bit, 32-bit, CMYK and Lab documents. Text layers stay editable. When it saves a PSD again, it keeps the parts it doesn't understand yet instead of dropping them. The saved file looks the same, but it isn't byte for byte the same as the one you opened.

**Files from other editors.** GIMP, Krita, Paint.NET and Affinity files open with their layers. PhotoCraft can't save them. To keep editing a Krita or GIMP file in both apps, save it as OpenRaster (`.ora`), which they open with its layers. If a file uses something PhotoCraft can't match, such as some Affinity effects, PhotoCraft tells you what it left out or approximated.

## Flat images

These hold one image with no layers.

| Format | Open | Save As | Export As |
| --- | --- | --- | --- |
| PNG | Yes | Yes | Yes |
| JPEG | Yes | Yes | Yes |
| WebP | Yes | Yes | Yes |
| TIFF | Yes | Yes | Yes |
| Targa (`.tga`) | Yes | Yes | Yes |
| ICO | Yes | Yes | Yes |
| JPEG XL (`.jxl`) | No | Yes | Yes |
| GIF, BMP | Yes | Yes | |
| OpenEXR, Radiance HDR | Yes | Yes | |
| FITS (astronomy images) | Yes | Yes | |
| DDS (game textures) | Yes | Yes | |
| DPX, Cineon | Yes | Yes | |
| Netpbm (`.pnm`; also opens `.pbm`, `.pgm`, `.ppm`, `.pam`, `.pfm`) | Yes | Yes | |
| Amiga IFF | Yes | Yes | |
| PDF | No | Yes | |
| HEIC and HEIF photos | Yes | No | |
| Camera raw: DNG, CR2, CR3, NEF, NRW, ARW, PEF, ORF, RW2, RAF | Yes | No | |
| QOI, PCX, XPM, DICOM | Yes | No | |

JPEG XL is saved lossless. JPEG, WebP and other 8-bit formats can't hold 16 or 32 bits per channel, so PhotoCraft warns you when it reduces the depth. PNG keeps 16 bits; TIFF and OpenEXR keep 32-bit float.

When you save over a JPEG you opened with **File › Save**, PhotoCraft keeps its quality. A WebP stays lossy or lossless, as it was.

## Brushes, swatches and other presets

**File › Open…** also loads presets from other apps:

| What | Extension |
| --- | --- |
| Brushes | `.abr` |
| Gradients | `.grd` |
| Layer styles | `.asl` |
| Swatches | `.aco`, `.act`, `.ase` |
| Keyboard shortcuts | `.kys` |

## In the file dialog

The **Open** dialog lists **All Formats** first, then one entry per format, so you can narrow a folder of mixed files to one kind. The **Save As** dialog lists **PSD Document** first; a `.pcraft` document defaults to **PhotoCraft**.
