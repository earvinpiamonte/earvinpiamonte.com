const chromium = require('chrome-aws-lambda');

const { NODE_ENV } = process.env;

const local = NODE_ENV === 'development';

const handler = async (req, res) => {

  const { query } = req;
  const { url } = query;

  const browser = await chromium.puppeteer.launch({
    // Launch Chrome locally for testing
    executablePath: local
      ? '/usr/bin/google-chrome-stable'
      : await chromium.executablePath,
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    headless: chromium.headless,
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.goto(url);
  const buffer = await page.screenshot();
  await browser.close();

  return res.status(200).json({
    buffer: buffer.toString('base64')
  });
};

export default handler;