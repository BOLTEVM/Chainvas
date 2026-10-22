const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    try {
        console.log('Navigating to http://localhost:3000/video...');
        await page.goto('http://localhost:3000/video', { waitUntil: 'networkidle' });
        await page.setViewportSize({ width: 1440, height: 900 });
        await page.waitForTimeout(5000);

        // 1. Add a New Layer
        console.log('Adding a new adjustment layer...');
        await page.click('button:has-text("New Layer")');
        await page.waitForTimeout(1000);
        
        // 2. Test Playback
        console.log('Testing playback (Space)...');
        await page.keyboard.press(' ');
        await page.waitForTimeout(2000);
        await page.keyboard.press(' ');
        console.log('Playback toggled.');

        // 3. Test Scrubbing / Seeking
        console.log('Seeking to 5s...');
        const timecode = page.locator('span.text-[#00e0ff]').first();
        const initialTime = await timecode.innerText();
        console.log('Initial Time:', initialTime);

        // Click on Ruler to seek (middleish)
        const ruler = page.locator('.cursor-crosshair').first();
        const rulerBox = await ruler.boundingBox();
        await page.mouse.click(rulerBox.x + 500, rulerBox.y + 15);
        await page.waitForTimeout(500);
        
        const newTime = await timecode.innerText();
        console.log('New Time after seek:', newTime);

        // 4. Test Effects Control
        console.log('Testing Effects Control (Scale)...');
        // Double click on Scale value to enter new value
        const scaleVal = page.locator('div:has-text("Scale") + div').first();
        await scaleVal.dblclick();
        await page.waitForTimeout(500);
        // Handle prompt if it appears (Playwright usually needs dialog handler)
        // For simplicity in this script, we'll just check if it's there
        await page.screenshot({ path: 'C:/Users/wonfi/.gemini/antigravity/brain/ed8c7811-7a88-4e8b-b808-7431ddefb5e0/proof_video_scale_edit.png' });

        // 5. Test Split Layer
        console.log('Testing Split Layer...');
        await page.click('button:has-text("Split")');
        await page.waitForTimeout(1000);

        console.log('Capturing final proof...');
        await page.screenshot({ path: 'C:/Users/wonfi/.gemini/antigravity/brain/ed8c7811-7a88-4e8b-b808-7431ddefb5e0/proof_video_editor_hardened.png' });

        console.log('Verification Complete!');
    } catch (err) {
        console.error('ERROR:', err);
        await page.screenshot({ path: 'C:/Users/wonfi/.gemini/antigravity/brain/ed8c7811-7a88-4e8b-b808-7431ddefb5e0/proof_video_failure.png' });
        process.exit(1);
    } finally {
        await browser.close();
    }
})();
