const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 4000)); // 4초 대기 (애니메이션 로딩 대기)
    await page.screenshot({ path: '/home/david/.gemini/antigravity/brain/847b60d0-6da5-4284-8020-f933b307a4bf/demo_screenshot.png' });
    await browser.close();
    console.log("Screenshot successfully saved.");
  } catch (error) {
    console.error("Screenshot processing failed:", error);
    process.exit(1);
  }
})();
