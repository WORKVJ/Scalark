import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const PORT = 9223;
const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const ARTIFACT_DIR = "C:\\Users\\91811\\.gemini\antigravity-ide\\brain\\d4ed42ec-5c77-49ab-9663-ce9bd0040c0b";

async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log('Starting Edge for Chatbot testing...');
  const edge = spawn(EDGE_PATH, [
    `--remote-debugging-port=${PORT}`,
    '--headless=new',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--window-size=390,844',
    'about:blank'
  ]);

  const cleanup = () => {
    try { edge.kill(); } catch (e) {}
  };
  process.on('exit', cleanup);
  process.on('SIGINT', cleanup);

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
    console.error('Failed to get WebSocket debugger URL');
    cleanup();
    process.exit(1);
  }

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

  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });
  await send('Emulation.setTouchEmulationEnabled', { enabled: true });
  await send('Page.enable');

  console.log('Navigating to http://localhost:3000...');
  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await wait(2500);

  // 1. Capture Floating Launcher State on Mobile
  let ss = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(ARTIFACT_DIR, 'chatbot_mobile_launcher.png'), Buffer.from(ss.data, 'base64'));
  console.log('1. Saved chatbot_mobile_launcher.png');

  // 2. Open Chatbot by clicking the launcher button
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.querySelector('button[aria-label="Toggle SCALARK AI Systems Copilot"]');
      if (btn) btn.click();
      return !!btn;
    })()`
  });
  await wait(1200);

  ss = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(ARTIFACT_DIR, 'chatbot_mobile_open.png'), Buffer.from(ss.data, 'base64'));
  console.log('2. Saved chatbot_mobile_open.png');

  // 3. Click "Run 2-Minute Diagnostic" prompt chip
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      const quizBtn = btns.find(b => b.textContent && b.textContent.includes('2-Minute Diagnostic'));
      if (quizBtn) {
        quizBtn.click();
        return true;
      }
      return false;
    })()`
  });
  await wait(1200);

  ss = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(ARTIFACT_DIR, 'chatbot_mobile_quiz.png'), Buffer.from(ss.data, 'base64'));
  console.log('3. Saved chatbot_mobile_quiz.png');

  // 4. Answer all questions to see the final Institutional Health Score Card
  for (let q = 0; q < 5; q++) {
    await send('Runtime.evaluate', {
      expression: `(() => {
        const optionBtns = document.querySelectorAll('.space-y-2 button');
        if (optionBtns && optionBtns.length > 0) {
          optionBtns[0].click();
          return true;
        }
        return false;
      })()`
    });
    await wait(800);
  }
  await wait(1800);

  ss = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(ARTIFACT_DIR, 'chatbot_mobile_scorecard.png'), Buffer.from(ss.data, 'base64'));
  console.log('4. Saved chatbot_mobile_scorecard.png');

  cleanup();
  console.log('\nAll Chatbot visual tests successfully completed!');
}

run().catch((e) => {
  console.error('Chatbot test failed:', e);
  process.exit(1);
});
