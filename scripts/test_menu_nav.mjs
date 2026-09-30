import { spawn } from 'child_process';

const PORT = 9250;
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

  // 1. Click mobile navigation toggle button
  const toggleRes = await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.querySelector('button[aria-label="Toggle Navigation"]');
      if (btn) {
        btn.click();
        return 'MENU_TOGGLED';
      }
      return 'MENU_BTN_NOT_FOUND';
    })()`,
    returnByValue: true
  });
  console.log('Mobile menu button:', toggleRes.result?.value);
  await wait(1000);

  // 2. Click on "What We Solve" in the drawer
  const clickLink = await send('Runtime.evaluate', {
    expression: `(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      const target = btns.find(b => b.textContent && b.textContent.includes('What We Solve'));
      if (target) {
        target.click();
        return 'LINK_CLICKED';
      }
      return 'LINK_NOT_FOUND';
    })()`,
    returnByValue: true
  });
  console.log('What We Solve link:', clickLink.result?.value);
  await wait(2000);

  // 3. Verify destination URL
  const urlRes = await send('Runtime.evaluate', {
    expression: 'window.location.pathname',
    returnByValue: true
  });
  console.log('Final URL after clicking option:', urlRes.result?.value);

  // 4. Test Chat Scroll
  console.log('\nTesting Chat scroll:');
  const chatToggle = await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.querySelector('button[aria-label="Toggle Chat"]');
      if (btn) {
        btn.click();
        return 'CHAT_OPENED';
      }
      return 'CHAT_BTN_NOT_FOUND';
    })()`,
    returnByValue: true
  });
  console.log('Chat toggle:', chatToggle.result?.value);
  await wait(1000);

  // Click 2 quick replies to make it scrollable
  for (let i = 0; i < 2; i++) {
    await send('Runtime.evaluate', {
      expression: `(() => {
        const qr = document.querySelector('.flex-wrap button');
        if (qr) qr.click();
      })()`
    });
    await wait(800);
  }

  // Check scroll container
  const scrollCheck = await send('Runtime.evaluate', {
    expression: `(() => {
      const container = document.querySelector('[data-lenis-prevent].overflow-y-auto');
      if (!container) return { found: false };
      const sh = container.scrollHeight;
      const stBefore = container.scrollTop;
      
      // Scroll to top
      container.scrollTo({ top: 0, behavior: 'instant' });
      const stAfter = container.scrollTop;

      return {
        found: true,
        scrollHeight: sh,
        scrollTopBefore: stBefore,
        scrollTopAfter: stAfter,
        scrolledToTopSuccessfully: stAfter === 0
      };
    })()`,
    returnByValue: true
  });
  console.log('Chat scroll evaluation:', JSON.stringify(scrollCheck.result?.value, null, 2));

  cleanup();
  process.exit(0);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
