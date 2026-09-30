import { spawn } from 'child_process';

const PORT = 9245;
const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

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
      const pageTarget = data.find((t) => t.type === 'page' && t.webSocketDebuggerUrl);
      if (pageTarget) {
        wsUrl = pageTarget.webSocketDebuggerUrl;
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

  console.log('1. Testing mobile navigation...');
  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await wait(2500);

  // Open mobile menu
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.querySelector('button[aria-label="Toggle Navigation"]');
      if (btn) btn.click();
    })()`
  });
  await wait(800);

  // Click on "What We Solve" (/solutions)
  const navResult = await send('Runtime.evaluate', {
    expression: `(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      const target = btns.find(b => b.textContent && b.textContent.includes('What We Solve'));
      if (target) {
        target.click();
        return true;
      }
      return false;
    })()`,
    returnByValue: true
  });
  console.log('Mobile menu link clicked:', navResult.result?.value);
  await wait(1500);

  // Check current URL
  const urlRes = await send('Runtime.evaluate', {
    expression: 'window.location.pathname',
    returnByValue: true
  });
  console.log('Navigated to URL:', urlRes.result?.value);

  console.log('\n2. Testing chat container scrolling to top...');
  // Open chat
  await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.querySelector('button[aria-label="Toggle Chat"]');
      if (btn) btn.click();
    })()`
  });
  await wait(800);

  // Trigger quick replies to generate scrollable height
  for (let i = 0; i < 3; i++) {
    await send('Runtime.evaluate', {
      expression: `(() => {
        const qr = document.querySelector('.flex-wrap button');
        if (qr) qr.click();
      })()`
    });
    await wait(700);
  }
  await wait(1000);

  // Verify scroll container scrollHeight, scrollTop, and test scroll to top
  const scrollTest = await send('Runtime.evaluate', {
    expression: `(() => {
      const container = document.querySelector('[data-lenis-prevent].overflow-y-auto');
      if (!container) return { found: false };
      const initialScrollTop = container.scrollTop;
      const initialScrollHeight = container.scrollHeight;
      
      // Scroll to top
      container.scrollTo({ top: 0, behavior: 'instant' });
      const afterScrollTop = container.scrollTop;

      return {
        found: true,
        initialScrollTop,
        initialScrollHeight,
        afterScrollTop,
        canScrollToTop: afterScrollTop === 0
      };
    })()`,
    returnByValue: true
  });
  console.log('Chat scroll test result:', JSON.stringify(scrollTest.result?.value, null, 2));

  cleanup();
  process.exit(0);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
