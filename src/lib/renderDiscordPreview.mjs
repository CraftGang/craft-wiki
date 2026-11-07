import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';
import { wordmark } from '../data/appVisuals.mjs';

const publicDirectory = join(process.cwd(), 'public');
const archivoFont = join(process.cwd(), 'src/assets/fonts/Archivo-Bold.ttf');

function escapeXml(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
}

function lines(text, maxLength, maxLines) {
  const words = String(text).split(/\s+/);
  const result = [];
  let line = '';
  for (const [index, word] of words.entries()) {
    if (line && `${line} ${word}`.length > maxLength) {
      result.push(line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
    if (result.length === maxLines) {
      result[maxLines - 1] = `${result[maxLines - 1].slice(0, maxLength - 1).trimEnd()}…`;
      return result;
    }
    if (index === words.length - 1 && line) result.push(line);
  }
  return result.slice(0, maxLines);
}

function svgText(text, x, y, size, color, maxLength, maxLines, lineHeight = 1.16) {
  return lines(text, maxLength, maxLines).map((line, i) =>
    `<text x="${x}" y="${y + i * size * lineHeight}" fill="${color}" font-family="Archivo" font-size="${size}" font-weight="600">${escapeXml(line)}</text>`
  ).join('');
}

function svgWordmark(preview, size) {
  const text = preview.appName;
  if (!preview.appSlug || preview.appSlug === 'artcraft-studio') {
    return `<text x="54" y="257" fill="#f4f3f0" font-family="Archivo" font-size="${size}" font-weight="750">${escapeXml(text)}</text>`;
  }
  const { before, accent, after } = wordmark(text);
  return `<text x="54" y="257" font-family="Archivo" font-size="${size}" font-weight="750"><tspan fill="#f4f3f0">${escapeXml(before)}</tspan><tspan fill="${preview.wordmarkColor}">${escapeXml(accent)}</tspan><tspan fill="#f4f3f0">${escapeXml(after)}</tspan></text>`;
}

async function embeddedImage(path) {
  const data = await readFile(join(publicDirectory, path.slice(1)));
  const png = await sharp(data, { density: 192 }).png().toBuffer();
  return `data:image/png;base64,${png.toString('base64')}`;
}

export async function renderDiscordPreview(preview) {
  const icon = await embeddedImage(preview.icon);
  const screenshot = preview.screenshot ? await embeddedImage(preview.screenshot) : null;
  const nameSize = preview.appName.length > 14 ? 48 : 58;
  const screenshotMarkup = screenshot
    ? `<image href="${screenshot}" x="496" y="106" width="650" height="416" preserveAspectRatio="xMidYMid slice" clip-path="url(#screen)"/>`
    : `<image href="${icon}" x="722" y="214" width="200" height="200" preserveAspectRatio="xMidYMid meet"/>`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="630" viewBox="0 0 1200 630">
    <defs><clipPath id="screen"><rect x="496" y="106" width="650" height="416"/></clipPath></defs>
    <rect width="1200" height="630" fill="#111217"/>
    <rect width="1200" height="8" fill="${preview.color}"/>
    <rect x="464" y="8" width="736" height="622" fill="#1a1c23"/>
    <path d="M464 8V630M464 566H1200" stroke="#383b45" stroke-width="2"/>
    <rect x="495" y="105" width="652" height="418" fill="#252833" stroke="#40434c" stroke-width="2"/>
    ${screenshotMarkup}
    <image href="${icon}" x="54" y="65" width="92" height="92" preserveAspectRatio="xMidYMid meet"/>
    ${svgWordmark(preview, nameSize)}
    <rect x="54" y="288" width="68" height="5" fill="${preview.color}"/>
    ${svgText(preview.pageTitle, 54, 352, 32, preview.color, 22, 2)}
    ${svgText(preview.description, 54, 439, 19, '#aeb4c1', 35, 3, 1.42)}
  </svg>`;

  return new Resvg(svg, {
    font: { fontFiles: [archivoFont], loadSystemFonts: false, defaultFontFamily: 'Archivo' },
  }).render().asPng();
}
