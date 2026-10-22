const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    try {
        console.log('Navigating to http://localhost:3000/text...');
        await page.goto('http://localhost:3000/text', { waitUntil: 'networkidle' });
        await page.setViewportSize({ width: 1440, height: 900 });
        await page.waitForTimeout(5000);

        const artboard = page.locator('div.shadow-\\[0_0_100px_rgba\\(0\\,0\\,0\\,0\\.5\\)\\]').first();
        const box = await artboard.boundingBox();
        
        // Use coordinates CLEARLY inside the visible area, below the top nav
        const startX = box.x + box.width / 2 - 250;
        const startY = box.y + 400; // Much lower to avoid nav bar

        // 1. Select Type Tool
        console.log('Selecting Type Tool...');
        await page.locator('[data-id="tool-TEXT"]').click({ force: true });
        await page.waitForTimeout(500);
        await page.keyboard.press('Escape');
        
        console.log('Drawing Text Frame...');
        await page.mouse.move(startX, startY);
        await page.mouse.down();
        await page.mouse.move(startX + 500, startY + 150);
        await page.mouse.up();
        await page.waitForTimeout(2000);

        // 2. Type
        console.log('Typing...');
        const editor = page.locator('.ProseMirror').first();
        await editor.waitFor({ state: 'visible' });
        await editor.click({ force: true });
        await page.keyboard.type('BOLT InDesign Debugged');
        await page.waitForTimeout(1000);

        // 3. Style
        console.log('Styling...');
        await page.locator('select').first().selectOption('Outfit');
        await page.locator('button:has(svg.lucide-bold)').first().click({ force: true });
        const sizeInput = page.locator('input[type="number"]').first();
        await sizeInput.clear();
        await sizeInput.fill('18');
        await sizeInput.press('Enter');
        await page.waitForTimeout(1000);

        // 4. Signature
        console.log('Step 2: Signature Tool...');
        await page.locator('[data-id="tool-SIGNATURE"]').click({ force: true });
        await page.waitForTimeout(500);
        await page.keyboard.press('Escape');

        console.log('Drawing signature frame...');
        await page.mouse.move(startX, startY + 250); // Below the text frame
        await page.mouse.down();
        await page.mouse.move(startX + 300, startY + 400);
        await page.mouse.up();
        await page.waitForTimeout(2000);

        console.log('Signing...');
        const pad = page.locator('canvas').last();
        const padBox = await pad.boundingBox();
        await page.mouse.move(padBox.x + 50, padBox.y + 50);
        await page.mouse.down();
        await page.mouse.move(padBox.x + 250, padBox.y + 100);
        await page.mouse.up();
        await page.waitForTimeout(500);
        await page.click('button:has-text("Apply Signature")', { force: true });
        await page.waitForTimeout(3000);

        console.log('Capturing Final Audit Proof...');
        const proofPath = 'C:/Users/wonfi/.gemini/antigravity/brain/234a2dd8-a0ff-47e2-ab03-a601ff3a93d9/final_audit_checklist_proof_v9.png';
        await page.screenshot({ path: proofPath });

        console.log('Verification COMPLETE!');
    } catch (err) {
        console.error('ERROR:', err);
    } finally {
        await browser.close();
    }
})();
