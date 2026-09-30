import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const PORT = 9238;
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
      if (data && data.length > 0 && data[0].webSocketDebuggerUrl) {
        wsUrl = data[0].webSocketDebuggerUrl;
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
  await wait(4000);

  // Check button in DOM
  const evalRes = await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.querySelector('button[aria-label="Toggle Chat"]');
      if (!btn) return 'BUTTON_NOT_FOUND';
      const r = btn.getBoundingClientRect();
      return {
        html: btn.outerHTML,
        rect: { x: r.x, y: r.y, width: r.width, height: r.height, top: r.top, bottom: r.bottom }
      };
    })()`,
    returnByValue: true
  });

  console.log('Button status:', JSON.stringify(evalRes.result?.value, null, 2));

  // Capture screenshot of the full mobile screen with the icon-only chat button
  const screenshot1 = await send('Page.captureScreenshot', { format: 'png' });
  const out1 = path.join(ARTIFACT_DIR, 'clean_chat_icon_closed.png');
  fs.writeFileSync(out1, Buffer.from(screenshot1.data, 'base64'));
  console.log('Saved screenshot 1:', out1);

  // Click the chat button to open it
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.querySelector('button[aria-label="Toggle Chat"]');
      if (btn) btn.click();
    })()`
  });
  await wait(1200);

  // Capture screenshot of the opened simple chat
  const screenshot2 = await send('Page.captureScreenshot', { format: 'png' });
  const out2 = path.join(ARTIFACT_DIR, 'clean_chat_window_open.png');
  fs.writeFileSync(out2, Buffer.from(screenshot2.data, 'base64'));
  console.log('Saved screenshot 2:', out2);

  cleanup();
  process.exit(0);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
