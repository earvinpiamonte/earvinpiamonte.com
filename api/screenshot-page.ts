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
    args: [
      ...(local ? [] : chromium.args),
      "--disable-gpu",
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--single-process",
      "--no-zygote",
      "--disable-background-timer-throttling",
      "--disable-backgrounding-occluded-windows",
      "--disable-renderer-backgrounding",
    ],
    defaultViewport: { width: 1200, height: 630 },
    headless: local ? true : chromium.headless,
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });

  await page.goto(decodeURIComponent(url), {
    waitUntil: ["networkidle2", "domcontentloaded"],
  });

  await new Promise((r) => setTimeout(r, 200));

  const buffer = await page.screenshot({ type: "png" });

  await browser.close();

  return res.status(200).json({
    buffer: buffer.toString('base64')
  });
};

export default handler;