const sharp = require('sharp');
const fs = require('fs');

async function createMasterLogo() {
  const cityPath = 'C:\\Users\\91811\\.gemini\\antigravity-ide\\brain\\d4ed42ec-5c77-49ab-9663-ce9bd0040c0b\\aerial_city_skyline_1790702329597.jpg';
  const logoPath = 'public/logo_white_transparent.png';

  // Crop city: [left: 90, top: 70, width: 840, height: 840] -> resize 645x639
  const city = await sharp(cityPath)
    .extract({ left: 90, top: 70, width: 840, height: 840 })
    .resize(645, 639)
    .modulate({ brightness: 1.15, saturation: 0 })
    .linear(1.22, -10)
    .sharpen({ sigma: 1.1 })
    .toBuffer();

  const logoMask = await sharp(logoPath).toBuffer();

  // Pure masked city
  const masked = await sharp(city)
    .ensureAlpha()
    .composite([{ input: logoMask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Save 1: Clean transparent masked logo
  await sharp(masked).toFile('public/assets/scalark-logo-city.png');

  // Shadow: create soft shadow using public/logo_transparent.png
  const shadow = await sharp('public/logo_transparent.png')
    .resize(645, 639)
    .blur(10)
    .modulate({ brightness: 0.1 })
    .png()
    .toBuffer();

  // Combine on a transparent canvas
  const canvasW = 720;
  const canvasH = 720;
  const offsetX = 35;
  const offsetY = 35;
  const shadowDist = 18;

  await sharp({
    create: {
      width: canvasW,
      height: canvasH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    { input: shadow, top: offsetY + shadowDist, left: offsetX + shadowDist },
    { input: masked, top: offsetY, left: offsetX }
  ])
  .png()
  .toFile('public/assets/scalark-logo-city-shadow.png');

  // 3. Create a showcase frame image
  const width = 800;
  const height = 700;

  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#8B5CF6" stop-opacity="0.22" />
          <stop offset="60%" stop-color="#3B82F6" stop-opacity="0.06" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0" />
        </radialGradient>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
        </pattern>
      </defs>

      <!-- Background Glow -->
      <circle cx="${width/2}" cy="${height/2 - 10}" r="320" fill="url(#glow)" />
      
      <!-- Architectural Grid -->
      <rect x="40" y="40" width="${width - 80}" height="${height - 80}" fill="url(#grid)" rx="24" />

      <!-- Corner Crosshairs -->
      <circle cx="60" cy="60" r="3" fill="#8B5CF6" opacity="0.8" />
      <circle cx="${width - 60}" cy="60" r="3" fill="#8B5CF6" opacity="0.8" />
      <circle cx="60" cy="${height - 60}" r="3" fill="#8B5CF6" opacity="0.8" />
      <circle cx="${width - 60}" cy="${height - 60}" r="3" fill="#8B5CF6" opacity="0.8" />

      <!-- Border Frame -->
      <rect x="40" y="40" width="${width - 80}" height="${height - 80}" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1" rx="24" />

      <!-- Technical Callouts -->
      <text x="64" y="78" fill="#A78BFA" font-family="monospace" font-size="11" font-weight="bold" letter-spacing="2">SCALARK // INSTITUTIONAL ARCHITECTURE</text>
      <text x="${width - 64}" y="78" text-anchor="end" fill="rgba(255,255,255,0.5)" font-family="monospace" font-size="11" letter-spacing="1">FRAMEWORK ENGINE V4.2</text>

      <text x="64" y="${height - 62}" fill="rgba(255,255,255,0.4)" font-family="monospace" font-size="10" letter-spacing="1">METROPOLITAN INFRASTRUCTURE BLUEPRINT</text>
      <text x="${width - 64}" y="${height - 62}" text-anchor="end" fill="#10B981" font-family="monospace" font-size="10" font-weight="bold" letter-spacing="1">● 5-PHASE RUNTIME ACTIVE</text>
    </svg>
  `);

  const resizedLogo = await sharp('public/assets/scalark-logo-city-shadow.png')
    .resize(500, 500, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 7, g: 10, b: 18, alpha: 1 }
    }
  })
  .composite([
    { input: svgOverlay, top: 0, left: 0 },
    { input: resizedLogo, top: Math.round((height - 500) / 2) - 5, left: Math.round((width - 500) / 2) }
  ])
  .png()
  .toFile('public/assets/scalark-architecture-emblem.png');

  console.log('All 3 logo assets created successfully!');
}

createMasterLogo().catch(console.error);
