const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

// Non-destructive: create .webp alongside originals in public/assets
// Finds top N largest png/jpg/jpeg files and converts them to webp.

const ASSETS_DIR = path.join(__dirname, '..', 'public', 'assets')
const TOP_N = 5

async function listImages(dir) {
  const files = fs.readdirSync(dir)
  const images = []
  for (const f of files) {
    const full = path.join(dir, f)
    const stat = fs.statSync(full)
    if (stat.isFile() && /\.(png|jpe?g)$/i.test(f)) {
      images.push({ path: full, size: stat.size })
    }
  }
  return images.sort((a,b) => b.size - a.size)
}

async function convertToWebp(filePath) {
  const out = filePath.replace(/\.(png|jpe?g)$/i, '.webp')
  if (fs.existsSync(out)) {
    console.log('Skipping (exists):', path.basename(out))
    return
  }
  try {
    await sharp(filePath)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(out)
    const orig = fs.statSync(filePath).size
    const n = fs.statSync(out).size
    console.log(`Converted: ${path.basename(filePath)} -> ${path.basename(out)} (${Math.round(orig/1024)}KB -> ${Math.round(n/1024)}KB)`)
  } catch (err) {
    console.error('Failed to convert', filePath, err.message)
  }
}

async function run() {
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error('Assets dir not found:', ASSETS_DIR)
    process.exit(1)
  }

  const images = await listImages(ASSETS_DIR)
  const top = images.slice(0, TOP_N)
  console.log('Top images to convert:')
  top.forEach(i => console.log(`  ${path.basename(i.path)} - ${Math.round(i.size/1024)}KB`))

  for (const img of top) {
    await convertToWebp(img.path)
  }
}

run()
