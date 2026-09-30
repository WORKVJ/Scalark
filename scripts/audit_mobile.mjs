import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const PORT = 9222;
const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const ARTIFACT_DIR = "C:\\Users\\91811\\.gemini\\antigravity-ide\\brain\\d4ed42ec-5c77-49ab-9663-ce9bd0040c0b";

async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log('Starting Edge in headless mode...');
  const edge = spawn(EDGE_PATH, [
    `--remote-debugging-port=${PORT}`,
    '--headless=new',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--window-size=390,844',
    'about:blank'
  ]);

  let killed = false;
  const cleanup = () => {
    if (!killed) {
      killed = true;
      try { edge.kill(); } catch (e) {}
    }
  };
  process.on('exit', cleanup);
  process.on('SIGINT', cleanup);

  // Wait for Edge to start
  let wsUrl = null;
  for (let i = 0; i < 30; i++) {
    await wait(300);
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json`);
      const data = await res.json();
      if (data && data.length > 0 && data[0].webSocketDebuggerUrl) {
        wsUrl = data[0].webSocketDebuggerUrl;
        break;
      }
    } catch (e) {}
  }

  if (!wsUrl) {
    console.error('Failed to get WebSocket debugger URL from Edge');
    cleanup();
    process.exit(1);
  }

  console.log('Connected to CDP at:', wsUrl);
  const ws = new WebSocket(wsUrl);

  let idCounter = 1;
  const callbacks = new Map();

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && callbacks.has(msg.id)) {
      const { resolve, reject } = callbacks.get(msg.id);
      callbacks.delete(msg.id);
      if (msg.error) reject(msg.error);
      else resolve(msg.result);
    }
  };

  await new Promise((resolve) => {
    ws.onopen = resolve;
  });

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = idCounter++;
      callbacks.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  // Set device metrics to iPhone 14/15/16 (390 x 844)
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });
  await send('Emulation.setTouchEmulationEnabled', { enabled: true });
  await send('Page.enable');

  const pages = [
    { name: 'home', path: '/' },
    { name: 'who-we-help', path: '/who-we-help' },
    { name: 'solutions', path: '/solutions' },
    { name: 'how-we-work', path: '/how-we-work' },
    { name: 'case-studies', path: '/case-studies' },
    { name: 'about', path: '/about' },
    { name: 'contact', path: '/contact' }
  ];

  const auditResults = [];

  for (const page of pages) {
    console.log(`\nAuditing page: ${page.name} (${page.path})...`);
    await send('Page.navigate', { url: `http://localhost:3000${page.path}` });
    
    // Wait for page to render and hydrate
    await wait(2500);

    // Evaluate layout and check for overflow
    const evalRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const vw = window.innerWidth;
        const sw = document.documentElement.scrollWidth;
        const bw = document.body ? document.body.scrollWidth : 0;
        
        // Find elements that exceed viewport width
        const overflowing = [];
        const all = document.querySelectorAll('*');
        for (const el of all) {
          const rect = el.getBoundingClientRect();
          if (rect.width > vw + 1 || rect.right > vw + 1) {
            // Check if it's hidden or disguised
            const style = window.getComputedStyle(el);
            if (style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0') {
              const tag = el.tagName.toLowerCase();
              const cls = (el.className && typeof el.className === 'string') ? el.className.slice(0, 80) : '';
              const id = el.id ? '#' + el.id : '';
              overflowing.push({
                selector: tag + id + (cls ? '.' + cls.split(' ').slice(0, 3).join('.') : ''),
                width: Math.round(rect.width),
                right: Math.round(rect.right),
                scrollWidth: el.scrollWidth,
                clientWidth: el.clientWidth
              });
            }
          }
        }

        return {
          windowInnerWidth: vw,
          documentScrollWidth: sw,
          bodyScrollWidth: bw,
          hasHorizontalOverflow: sw > vw,
          overflowElementsCount: overflowing.length,
          topOverflowElements: overflowing.slice(0, 8)
        };
      })()`,
      returnByValue: true
    });

    const res = evalRes.result?.value;
    console.log(`Page: ${page.name}`);
    console.log(`- windowInnerWidth: ${res.windowInnerWidth}px, documentScrollWidth: ${res.documentScrollWidth}px`);
    console.log(`- hasHorizontalOverflow: ${res.hasHorizontalOverflow}`);
    if (res.overflowElementsCount > 0) {
      console.log(`- Found ${res.overflowElementsCount} elements with right > viewport:`);
      for (const el of res.topOverflowElements) {
        console.log(`  * ${el.selector} (w:${el.width}px, r:${el.right}px)`);
      }
    } else {
      console.log(`  ✓ PERFECT: Zero elements overflowing!`);
    }

    // Capture screenshot
    const screenshotRes = await send('Page.captureScreenshot', { format: 'png' });
    if (screenshotRes && screenshotRes.data) {
      const buffer = Buffer.from(screenshotRes.data, 'base64');
      const outPath = path.join(ARTIFACT_DIR, `mobile_${page.name}.png`);
      fs.writeFileSync(outPath, buffer);
      console.log(`- Screenshot saved to: ${outPath}`);
    }

    auditResults.push({ page: page.name, ...res });
  }

  // Also test opening the mobile navigation menu on the homepage
  console.log('\nTesting mobile navigation menu drawer...');
  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await wait(2000);
  
  // Click hamburger button
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.querySelector('button[aria-label="Toggle Navigation"]');
      if (btn) {
        btn.click();
        return true;
      }
      return false;
    })()`,
    returnByValue: true
  });
  await wait(800);

  // Capture menu screenshot
  const menuScreenshot = await send('Page.captureScreenshot', { format: 'png' });
  if (menuScreenshot && menuScreenshot.data) {
    const buffer = Buffer.from(menuScreenshot.data, 'base64');
    const outPath = path.join(ARTIFACT_DIR, `mobile_menu_open.png`);
    fs.writeFileSync(outPath, buffer);
    console.log(`- Menu drawer screenshot saved to: ${outPath}`);
  }

  cleanup();
  console.log('\n=== AUDIT SUMMARY ===');
  console.table(auditResults.map(r => ({
    Page: r.page,
    Viewport: r.windowInnerWidth,
    ScrollWidth: r.documentScrollWidth,
    Overflow: r.hasHorizontalOverflow ? 'FAIL ❌' : 'PASS ✅',
    OverflowCount: r.overflowElementsCount
  })));
}

run().catch((err) => {
  console.error('Audit script error:', err);
  process.exit(1);
});
