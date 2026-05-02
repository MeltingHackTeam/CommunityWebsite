// Convert all event_*.png photos in public/images/events to WebP at q=75.
// One-time bulk conversion, but kept committed so future events can re-run it.
//   node scripts/convert-event-images.mjs            # convert + report
//   node scripts/convert-event-images.mjs --delete   # also delete the source .png

import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const DIR = path.resolve('public/images/events')
const QUALITY = 75
const deletePng = process.argv.includes('--delete')

const files = (await fs.readdir(DIR)).filter((f) => f.endsWith('.png'))

let totalIn = 0
let totalOut = 0
let converted = 0
let skipped = 0

for (const file of files) {
  const src = path.join(DIR, file)
  const dst = src.replace(/\.png$/, '.webp')
  const srcStat = await fs.stat(src)

  try {
    await fs.access(dst)
    skipped++
    continue
  } catch {}

  await sharp(src).webp({ quality: QUALITY, effort: 6 }).toFile(dst)
  const dstStat = await fs.stat(dst)

  totalIn += srcStat.size
  totalOut += dstStat.size
  converted++

  if (deletePng) await fs.unlink(src)
}

const mb = (n) => (n / 1024 / 1024).toFixed(2)
console.log(`Converted ${converted} files (skipped ${skipped} already-webp)`)
console.log(`PNG total:  ${mb(totalIn)} MB`)
console.log(`WebP total: ${mb(totalOut)} MB`)
console.log(`Saved:      ${mb(totalIn - totalOut)} MB (${((1 - totalOut / totalIn) * 100).toFixed(1)}% smaller)`)
if (deletePng) console.log('Source .png files deleted.')
else console.log('Source .png files retained. Re-run with --delete to remove them.')
