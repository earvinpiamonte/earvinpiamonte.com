import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';

const { NODE_ENV } = process.env;

const local = NODE_ENV === 'development';

const takeScreenshot = async (url: string) => {
  const browser = await puppeteer.launch({
    // Launch Chrome locally for testing
    executablePath: local
      ? '/usr/bin/google-chrome-stable'
      : await chromium.executablePath(),
    args: local ? [] : chromium.args,
    defaultViewport: chromium.defaultViewport,
    headless: local ? true : chromium.headless,
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.goto(url);
  const buffer = await page.screenshot();
  await browser.close();

  return `data:image/png;base64,${buffer.toString('base64')}`;
};

export { takeScreenshot };
