import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';

const { NODE_ENV } = process.env;

const local = NODE_ENV === 'development';

const handler = async (req, res) => {

  const { query } = req;
  const { url } = query;

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
  await page.goto(decodeURIComponent(url), { waitUntil: ["networkidle0", "domcontentloaded"] });
  const buffer = await page.screenshot();
  await browser.close();

  return res.status(200).json({
    buffer: buffer.toString('base64')
  });
};

export default handler;