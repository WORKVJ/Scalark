import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

function createIcoFromPngs(pngBuffers) {
  // pngBuffers is array of { width, height, buffer }
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + count * dirEntrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(count, 4); // count

  const dirEntries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    dirEntries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers.map(p => p.buffer)]);
}

async function main() {
  const logoWhite = path.resolve('public/logo_white_transparent.png');
  const trimmedWhite = await sharp(logoWhite).trim().toBuffer();

  const size = 512;
  const emblemSize = 360; // 70.3% of container, punchy & visible at small sizes
  const cornerRadius = 112; // rounded squircle

  const whiteEmblem512 = await sharp(trimmedWhite)
    .resize(emblemSize, emblemSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  // Premium SCALARK Royal Blue badge (#0E37A4) with subtle radial/linear depth
  const svgBadge = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1447D0" />
          <stop offset="100%" stop-color="#0A2A7E" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="${size}" height="${size}" rx="${cornerRadius}" fill="url(#brandGradient)" />
    </svg>
  `;

  // Master 512x512 icon
  const masterBuffer = await sharp(Buffer.from(svgBadge))
    .composite([{ input: whiteEmblem512, gravity: 'center' }])
    .png()
    .toBuffer();

  // Generate standard sizes
  const sizes = {
    '16': await sharp(masterBuffer).resize(16, 16).png().toBuffer(),
    '32': await sharp(masterBuffer).resize(32, 32).png().toBuffer(),
    '48': await sharp(masterBuffer).resize(48, 48).png().toBuffer(),
    '64': await sharp(masterBuffer).resize(64, 64).png().toBuffer(),
    '180': await sharp(masterBuffer).resize(180, 180).png().toBuffer(),
    '192': await sharp(masterBuffer).resize(192, 192).png().toBuffer(),
    '512': masterBuffer
  };

  // Create .ico with 16, 32, 48
  const icoBuffer = createIcoFromPngs([
    { width: 16, height: 16, buffer: sizes['16'] },
    { width: 32, height: 32, buffer: sizes['32'] },
    { width: 48, height: 48, buffer: sizes['48'] }
  ]);

  // Write files
  // 1. src/app/favicon.ico
  fs.writeFileSync('src/app/favicon.ico', icoBuffer);
  // 2. public/favicon.ico
  fs.writeFileSync('public/favicon.ico', icoBuffer);

  // 3. src/app/icon.png (32x32 standard for Next.js app router)
  fs.writeFileSync('src/app/icon.png', sizes['32']);
  // 4. public/icon.png
  fs.writeFileSync('public/icon.png', sizes['32']);

  // 5. src/app/apple-icon.png (180x180)
  fs.writeFileSync('src/app/apple-icon.png', sizes['180']);
  // 6. public/apple-icon.png
  fs.writeFileSync('public/apple-icon.png', sizes['180']);

  // 7. High-res PWA / Android icons
  fs.writeFileSync('public/icon-192.png', sizes['192']);
  fs.writeFileSync('public/icon-512.png', sizes['512']);

  console.log('Successfully generated and placed all SCALARK favicon and icon assets!');
}

main().catch(console.error);
