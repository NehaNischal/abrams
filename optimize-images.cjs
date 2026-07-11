const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src', 'assets');
const tempDir = path.join(__dirname, 'src', 'assets_temp');

if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

const optimizeImages = async () => {
  const files = fs.readdirSync(assetsDir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const filePath = path.join(assetsDir, file);
    const tempPath = path.join(tempDir, file);
    
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      try {
        const metadata = await sharp(filePath).metadata();
        let pipeline = sharp(filePath);
        
        // Resize if larger than 1200px width, which is plenty for web
        if (metadata.width > 1200) {
          pipeline = pipeline.resize({ width: 1200, withoutEnlargement: true });
        }

        if (ext === '.png') {
          await pipeline.png({ quality: 80, compressionLevel: 8 }).toFile(tempPath);
        } else {
          await pipeline.jpeg({ quality: 80, mozjpeg: true }).toFile(tempPath);
        }
        
        // Replace original with optimized
        fs.renameSync(tempPath, filePath);
        console.log(`Optimized: ${file}`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
  fs.rmdirSync(tempDir);
  console.log('Done optimizing images.');
};

optimizeImages();
