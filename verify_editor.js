const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    console.log('Navigating to http://localhost:3000/text...');
    await page.goto('http://localhost:3000/text', { waitUntil: 'networkidle' });
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(5000);

    // Ensure no menus are open by clicking the selection tool
    console.log('Ensuring clean state...');
    await page.click('button:has(svg.lucide-mouse-pointer2)');
    await page.waitForTimeout(500);

    // 1. Create a Text Frame
    console.log('Selecting Type Tool (T)...');
    await page.keyboard.press('t');
    await page.waitForTimeout(500);
    
    const artboard = page.locator('div.bg-white.shadow-\\[0_0_100px_rgba\\(0\\,0\\,0\\,0\\.5\\)\\]');
    const box = await artboard.boundingBox();
    
    console.log('Drawing text frame...');
    const startX = box.x + 100;
    const startY = box.y + 100;
    await page.mouse.move(startX, startY);
    await page.mouse.down();
    await page.mouse.move(startX + 400, startY + 200);
    await page.mouse.up();
    await page.waitForTimeout(1000);

    // 2. Type text
    console.log('Typing text...');
    await page.keyboard.type('BOLT InDesign Functional Test');
    await page.waitForTimeout(500);

    // 3. Test Styling
    console.log('Applying Bold...');
    await page.locator('button:has(svg.lucide-bold)').first().click({ force: true });
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'C:/Users/wonfi/.gemini/antigravity/brain/234a2dd8-a0ff-47e2-ab03-a601ff3a93d9/proof_text_bold.png' });

    // 4. Test Signature Tool
    console.log('Selecting Signature Tool (J)...');
    await page.keyboard.press('j');
    await page.waitForTimeout(500);
    
    console.log('Drawing signature frame...');
    await page.mouse.move(startX, startY + 300);
    await page.mouse.down();
    await page.mouse.move(startX + 300, startY + 450);
    await page.mouse.up();
    await page.waitForTimeout(1000);

    console.log('Signing...');
    const pad = page.locator('canvas').last();
    const padBox = await pad.boundingBox();
    await page.mouse.move(padBox.x + 50, padBox.y + 50);
    await page.mouse.down();
    await page.mouse.move(padBox.x + 250, padBox.y + 100);
    await page.mouse.up();
    await page.waitForTimeout(500);
    
    console.log('Applying signature...');
    await page.click('button:has-text("Apply Signature")', { force: true });
    await page.waitForTimeout(2000);
    
    console.log('Capturing final proof...');
    await page.screenshot({ path: 'C:/Users/wonfi/.gemini/antigravity/brain/234a2dd8-a0ff-47e2-ab03-a601ff3a93d9/proof_signature_applied.png' });

    console.log('Verification Complete!');
  } catch (err) {
    console.error('ERROR:', err);
    await page.screenshot({ path: 'C:/Users/wonfi/.gemini/antigravity/brain/234a2dd8-a0ff-47e2-ab03-a601ff3a93d9/proof_failure.png' });
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
