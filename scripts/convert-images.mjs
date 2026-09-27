/**
 * Converts all SVG files in public/images/ to JPEG and deletes the originals.
 * Run once: node scripts/convert-images.mjs
 *
 * SVGs exported from Figma that contain embedded screenshots are not true
 * vectors — converting to JPEG shrinks them from tens of MB to ~0.5–2 MB.
 */

import sharp from 'sharp'
import { readdir, unlink } from 'fs/promises'
import { join, basename, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const IMAGE_DIR = join(__dirname, '../public/images')

// Only convert project images (in subfolders), never logos or hero decorations at root
const SKIP_PATTERNS = [/^logo-/, /^rainbow-/, /^tangle-/]

async function findSvgs(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    if (entry.isDirectory()) {
      files.push(...await findSvgs(join(dir, entry.name)))
    } else if (entry.name.endsWith('.svg')) {
      if (SKIP_PATTERNS.some(p => p.test(entry.name))) continue
      files.push(join(dir, entry.name))
    }
  }
  return files
}

async function convert(svgPath) {
  const jpegPath = svgPath.replace(/\.svg$/, '.jpg')
  const name = basename(svgPath)

  try {
    const metadata = await sharp(svgPath).metadata()
    const width = metadata.width ?? 1920

    // Cap max width at 2400px — enough for retina, keeps file size sane
    const outputWidth = Math.min(width, 2400)

    await sharp(svgPath)
      .resize(outputWidth)
      .jpeg({ quality: 92 })
      .toFile(jpegPath)

    const { size: before } = await import('fs').then(fs =>
      fs.promises.stat(svgPath)
    )
    const { size: after } = await import('fs').then(fs =>
      fs.promises.stat(jpegPath)
    )

    const saved = (((before - after) / before) * 100).toFixed(1)
    console.log(`✓  ${name}  ${(before / 1e6).toFixed(1)} MB → ${(after / 1e6).toFixed(2)} MB  (${saved}% smaller)`)

    await unlink(svgPath)
  } catch (err) {
    console.error(`✗  ${name}: ${err.message}`)
  }
}

const svgs = await findSvgs(IMAGE_DIR)
if (svgs.length === 0) {
  console.log('No SVG files found.')
} else {
  console.log(`Converting ${svgs.length} SVG files to JPEG…\n`)
  for (const svg of svgs) {
    await convert(svg)
  }
  console.log('\nDone. Update file extensions in src/data/projects/*.ts from .svg to .jpg')
}
