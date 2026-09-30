const sharp = require('sharp');
const fs = require('fs');

async function generateExactLogo() {
  const cityPath = 'C:\\Users\\91811\\.gemini\\antigravity-ide\\brain\\d4ed42ec-5c77-49ab-9663-ce9bd0040c0b\\aerial_city_skyline_1790702329597.jpg';
  const logoPath = 'public/logo_white_transparent.png';

  // 1. Get the exact trimmed logo mask from logo_white_transparent.png
  const trimmedMaskBuffer = await sharp(logoPath)
    .trim()
    .toBuffer();

  const maskMeta = await sharp(trimmedMaskBuffer).metadata();
  console.log('Exact logo dimensions:', maskMeta.width, 'x', maskMeta.height);

  // Scale up to 800px width for ultra-sharp high-definition display
  const targetW = 800;
  const targetH = Math.round(targetW * (maskMeta.height / maskMeta.width)); // ~761px

  const hdMask = await sharp(trimmedMaskBuffer)
    .resize(targetW, targetH, { kernel: 'lanczos3' })
    .toBuffer();

  // 2. Prepare high-contrast aerial architectural city image
  // Crop a stunning frame from the city photo:
  const city = await sharp(cityPath)
    .extract({ left: 100, top: 120, width: 800, height: Math.round(800 * (targetH / targetW)) })
    .resize(targetW, targetH)
    .modulate({ brightness: 1.18, saturation: 0 })
    .linear(1.25, -10)
    .sharpen({ sigma: 1.3, m1: 1.5, m2: 2 })
    .toBuffer();

  // 3. Mask city into EXACT logo shape
  const exactMasked = await sharp(city)
    .ensureAlpha()
    .composite([{ input: hdMask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Save exact masked logo
  await sharp(exactMasked).toFile('public/assets/scalark-logo-city-exact.png');

  // 4. Create 3D Drop Shadow version (exactly matching the user's reference image!)
  // In the reference image, the shadow is offset to the bottom and right
  const shadowDist = 24;
  const canvasW = targetW + 80;
  const canvasH = targetH + 80;

  // Generate smooth shadow from hdMask
  // Modulate to dark charcoal/black with soft blur
  const shadow = await sharp(hdMask)
    .ensureAlpha()
    .linear(0.2, 0)
    .blur(14)
    .png()
    .toBuffer();

  const shadowComposite = await sharp({
    create: {
      width: canvasW,
      height: canvasH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    { input: shadow, top: 30 + shadowDist, left: 30 + shadowDist },
    { input: exactMasked, top: 30, left: 30 }
  ])
  .png()
  .toBuffer();

  await sharp(shadowComposite).toFile('public/assets/scalark-logo-city-exact-shadow.png');

  // Overwrite the primary scalark-logo-city.png & scalark-logo-city-shadow.png so all references get the exact logo!
  await sharp(exactMasked).toFile('public/assets/scalark-logo-city.png');
  await sharp(shadowComposite).toFile('public/assets/scalark-logo-city-shadow.png');

  console.log('Successfully generated exact logo images:');
  console.log('- public/assets/scalark-logo-city-exact.png');
  console.log('- public/assets/scalark-logo-city-exact-shadow.png');
  console.log('- public/assets/scalark-logo-city.png');
  console.log('- public/assets/scalark-logo-city-shadow.png');
}

generateExactLogo().catch(console.error);
