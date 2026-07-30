import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const srcFavicon = path.resolve('favicon.png');
const publicDir = path.resolve('public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

const sizes = [16, 32, 48, 180, 512];

async function generateFavicons() {
  try {
    console.log("Generating favicons from favicon.png without cropping or modifying the original logo...");
    const originalBuffer = fs.readFileSync(srcFavicon);

    for (const s of sizes) {
      const dest = path.join(publicDir, `favicon-${s}x${s}.png`);
      await sharp(originalBuffer)
        .resize(s, s, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toFile(dest);
      console.log(`Generated ${dest}`);
    }

    // Generate .ico
    const icoPath = path.join(publicDir, 'favicon.ico');
    const icoBuffer = await pngToIco([
      path.join(publicDir, 'favicon-16x16.png'),
      path.join(publicDir, 'favicon-32x32.png'),
      path.join(publicDir, 'favicon-48x48.png')
    ]); 
    fs.writeFileSync(icoPath, icoBuffer);
    console.log(`Generated ${icoPath}`);
  } catch (err) {
    console.error('Error generating favicons:', err);
  }
}

generateFavicons();
