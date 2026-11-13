import sharp from 'sharp'

await Promise.all([
  sharp('assets-src/abhishek-hero.png').resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 88 }).toFile('public/assets/abhishek-hero.webp'),
  sharp('assets-src/abhishek-hero.png').resize({ width: 1920, withoutEnlargement: true }).jpeg({ quality: 86, mozjpeg: true }).toFile('public/assets/abhishek-hero.jpg'),
  sharp('assets-src/abhishek-hero.png').resize({ width: 900, height: 600, fit: 'cover', position: 'east' }).webp({ quality: 88 }).toFile('public/assets/abhishek-hero-mobile.webp'),
  sharp('assets-src/abhishek-hero.png').resize({ width: 900, height: 600, fit: 'cover', position: 'east' }).jpeg({ quality: 86, mozjpeg: true }).toFile('public/assets/abhishek-hero-mobile.jpg'),
  sharp('assets-src/abhishek-hero.png').resize({ width: 1200, height: 900, fit: 'cover', position: 'east' }).webp({ quality: 88 }).toFile('public/assets/abhishek-hero-tablet.webp'),
  sharp('assets-src/abhishek-hero.png').resize({ width: 1200, height: 900, fit: 'cover', position: 'east' }).jpeg({ quality: 86, mozjpeg: true }).toFile('public/assets/abhishek-hero-tablet.jpg'),
  sharp('assets-src/abhishek-about.png').resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 88 }).toFile('public/assets/abhishek-about.webp'),
  sharp('assets-src/abhishek-about.png').resize({ width: 1200, withoutEnlargement: true }).jpeg({ quality: 86, mozjpeg: true }).toFile('public/assets/abhishek-about.jpg'),
  sharp('assets-src/abhishek-hero.png').resize({ width: 1200, height: 630, fit: 'cover', position: 'center' }).jpeg({ quality: 88, mozjpeg: true }).toFile('public/assets/abhishek-og.jpg'),
])
