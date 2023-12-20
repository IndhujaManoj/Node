const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();

  // Read HTML content from the file
  const htmlFilePath = 'coupon.html';
  const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');

  // Set the content of the page to the HTML content
  await page.setContent(htmlContent);

  // Set the desired viewport size
  const desiredWidth = 310;
  const desiredHeight = 625;
  await page.setViewport({ width: desiredWidth, height: desiredHeight });

  // Generate a screenshot of the page with the desired width and height
  await page.screenshot({ path: 'output.png' });

  // Close the browser
  await browser.close();
})();
