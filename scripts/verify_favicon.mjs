async function check() {
  try {
    const res = await fetch('http://localhost:3000/');
    const html = await res.text();
    const matches = html.match(/<link[^>]+(rel=["'][^"']*icon[^"']*["']|href=["'][^"']*icon[^"']*["'])[^>]*>/gi);
    console.log('--- FOUND ICON TAGS ---');
    console.log(matches ? matches.join('\n') : 'No icon tags found');

    const favRes = await fetch('http://localhost:3000/favicon.ico');
    console.log('/favicon.ico status:', favRes.status, 'size:', (await favRes.arrayBuffer()).byteLength);

    const iconRes = await fetch('http://localhost:3000/icon.png');
    console.log('/icon.png status:', iconRes.status, 'size:', (await iconRes.arrayBuffer()).byteLength);

    const appleRes = await fetch('http://localhost:3000/apple-icon.png');
    console.log('/apple-icon.png status:', appleRes.status, 'size:', (await appleRes.arrayBuffer()).byteLength);
  } catch (err) {
    console.error('Error during verification:', err);
  }
}

check();
