import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const PORT = 9255;
const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const ARTIFACT_DIR = "C:\\Users\\91811\\.gemini\\antigravity-ide\\brain\\d4ed42ec-5c77-49ab-9663-ce9bd0040c0b";

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function run() {
  const edge = spawn(EDGE_PATH, [
    `--remote-debugging-port=${PORT}`,
    '--headless=new',
    '--disable-gpu',
    '--no-first-run',
    '--window-size=390,844',
    'about:blank'
  ]);

  const cleanup = () => {
    try { edge.kill(); } catch (e) {}
  };
  process.on('exit', cleanup);

  let wsUrl = null;
  for (let i = 0; i < 30; i++) {
    await wait(300);
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json`);
      const data = await res.json();
      const target = data.find((t) => t.type === 'page' && t.webSocketDebuggerUrl);
      if (target) {
        wsUrl = target.webSocketDebuggerUrl;
        break;
      }
    } catch (e) {}
  }

  const ws = new WebSocket(wsUrl);
  await new Promise((r) => { ws.onopen = r; });

  let id = 1;
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

  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const curId = id++;
    callbacks.set(curId, { resolve, reject });
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });
  await send('Page.enable');
  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await wait(3000);

  // Open chat
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.querySelector('button[aria-label="Toggle Chat"]');
      if (btn) btn.click();
    })()`
  });
  await wait(1000);

  // Add multiple messages to create long chat content
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btns = Array.from(document.querySelectorAll('.flex-wrap button'));
      if (btns[0]) btns[0].click();
    })()`
  });
  await wait(1200);

  await send('Runtime.evaluate', {
    expression: `(() => {
      const btns = Array.from(document.querySelectorAll('.flex-wrap button'));
      if (btns[1]) btns[1].click();
    })()`
  });
  await wait(1200);

  // Capture screenshot of chat at bottom (before scroll to top)
  const ssBottom = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(ARTIFACT_DIR, 'chat_scroll_bottom.png'), Buffer.from(ssBottom.data, 'base64'));

  // Test clicking the "Top" button or scrolling to top
  const scrollTest = await send('Runtime.evaluate', {
    expression: `(() => {
      // Find the scrollable container
      const container = document.querySelector('.overflow-y-auto');
      if (!container) return { found: false };
      
      const beforeScrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;

      // Click top button if visible, or scroll directly
      const topBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Top'));
      if (topBtn) {
        topBtn.click();
      } else {
        container.scrollTo({ top: 0, behavior: 'instant' });
      }

      return {
        found: true,
        hasTopButton: !!topBtn,
        beforeScrollTop,
        scrollHeight,
        clientHeight,
        afterScrollTop: container.scrollTop
      };
    })()`,
    returnByValue: true
  });
  console.log('Scroll to top test result:', JSON.stringify(scrollTest.result?.value, null, 2));

  await wait(500);

  // Capture screenshot of chat scrolled to top
  const ssTop = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(ARTIFACT_DIR, 'chat_scroll_top.png'), Buffer.from(ssTop.data, 'base64'));

  cleanup();
  process.exit(0);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
