const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      filelist = walkSync(filePath, filelist);
    } else if (filePath.endsWith('.jsx')) {
      filelist.push(filePath);
    }
  });
  return filelist;
};

const files = walkSync('c:\\Users\\user\\Desktop\\abrams\\src\\components');

const doNotLazyLoadFiles = ['Hero.jsx', 'Navbar.jsx', 'Logo.jsx']; // Usually above-the-fold

files.forEach(file => {
  const baseName = path.basename(file);
  if (doNotLazyLoadFiles.includes(baseName)) return;

  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Simple string replace for <img 
  // It handles standard <img> tags but does not modify if loading="lazy" is already there
  // Using a regex to replace <img that don't have loading attribute
  content = content.replace(/<img(?![^>]*loading=)/g, '<img loading="lazy"');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Added loading="lazy" to', file);
  }
});
