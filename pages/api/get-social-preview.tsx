import { getPostBySlug } from '@/lib/mdx';

const chromium = require('chrome-aws-lambda');
const cloudinary = require('cloudinary').v2;
const globby = require('globby');

const {
  CLOUDINARY_FOLDER,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_KEY,
  CLOUDINARY_SECRET,
  NODE_ENV,
} = process.env;

const siteBaseURL =
  NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://www.earv.in';

const cloudFolder = CLOUDINARY_FOLDER;
const local = NODE_ENV === 'development';

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET,
});

const handler = async (req, res) => {
  const { query } = req;
  const { path } = query;

  let [type, slug] = path.split('/');

  type = slug ? type : 'page';
  slug = slug ? slug : path || 'index';

  // If type is post -> blog
  // Eject this in the future
  type = type === 'post' ? 'blog' : type;

  const post = await getPostBySlug(type, slug);

  console.log({ type, slug, post });

  // Default query string to empty
  let queryString = {};

  // Default image file name
  let imageFileName = 'default';

  // Check if MDX post
  if (post) {
    const { frontMatter } = post;

    queryString = {
      title: frontMatter.title,
      subTitle: frontMatter.summary ?? '',
      text: type.toUpperCase(),
    };

    imageFileName = frontMatter.title;
  } else {
    // Probably a page so check if file exist
    const pages = await globby([
      'pages/*.tsx',
      '!pages/_*.tsx',
      '!pages/api',
      '!pages/404.tsx',
      '!pages/[slug].tsx',
      '!pages/social-preview.tsx',
    ]);

    // Get stripped page names
    const pageNames = pages.map((page: string) =>
      page.replace('pages/', '').replace('.tsx', '')
    );

    // Check if slug is on pages
    if (pageNames.includes(slug)) {
      const { socialPreviewProps } = await import(`../${slug}`);

      if (socialPreviewProps) {
        queryString = socialPreviewProps;
        imageFileName = socialPreviewProps.title;
      }
    }
  }

  // Finally...

  // Take screenshot
  const screenshot = await takeScreenshot(
    `${siteBaseURL}/social-preview?${new URLSearchParams(
      queryString
    ).toString()}`
  );

  // Upload image
  const newImage = await uploadImage(imageFileName, screenshot);

  // Serve image
  res.redirect(308, cloudinary.url(newImage, { sign_url: true }));
};

const takeScreenshot = async (url: string) => {
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

  return `data:image/png;base64,${buffer.toString('base64')}`;
};

const uploadImage = async (title: string, image: string) => {
  const cloudinaryOptions = {
    public_id: `${cloudFolder}/${title}`,
    unique_filename: false,
  };

  return await cloudinary.uploader
    .upload(image, cloudinaryOptions)
    .then((response) => response.url);
};

export default handler;
