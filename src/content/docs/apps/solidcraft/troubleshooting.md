---
title: Troubleshooting
description: Diagnosing and solving common problems in SolidCraft.
---

:::note[Third-Party Application]
If you encounter bugs or want to report issues with SolidCraft, please file a ticket on the [SolidCraft GitHub Issues](https://github.com/bherbruck/solidcraft/issues) tracker.
:::

## Common Issues

### Sketch is over-constrained

- **Symptom**: SolidCraft displays an error saying "Conflicting constraints detected" or highlights conflicting geometry in red.
- **Fix**: Check recent dimensions or geometric constraints (like perpendicularity or symmetry). Remove redundant constraints until degrees of freedom match the geometry. Fully defined sketches will turn dark/black without errors.

### Broken timeline features (Yellow or Red in timeline)

- **Symptom**: After editing an earlier sketch or feature, downstream features show yellow (warning) or red (error) icons.
- **Cause**: An edge, face, or vertex referenced by a downstream operation was removed or reshaped during the timeline rebuild.
- **Fix**: Roll back the timeline to the first failing feature, right-click it, and select **Edit Feature**. Re-link the missing target geometry, or project stable datum planes into the sketch.

### Graphics & OpenGL acceleration

- **Symptom**: Black viewport or stuttering navigation in the 3D canvas.
- **Fix**:
  - Ensure your graphics drivers support Vulkan or OpenGL 4.1+.
  - On Linux with Flatpak, ensure your Flatpak runtime matches your host GPU drivers (`flatpak update`).
  - You can launch SolidCraft with software fallback rendering: `solidcraft --fallback-renderer`.

### Getting Help

- [SolidCraft Official Documentation](https://docs.solidcraft.io/)
- [GitHub Issue Tracker](https://github.com/bherbruck/solidcraft/issues)
- [Discussions & Community](https://github.com/bherbruck/solidcraft/discussions)
