import * as fetch from 'node-fetch';
import globby from 'globby';

import { getPostBySlug } from '../lib/mdx';
import { uploadImage, getImage } from '../lib/cloudinary';

import { staticPages } from '../server/static-pages.json';
import socialPreviewData from '../server/social-preview-data.json';

const siteBaseURL = process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://www.earv.in';

const getBufferString = async (url: string) => {
  const response = await fetch(`${siteBaseURL}/api/screenshot-page?url=${encodeURIComponent(url)}`);

  return response.json();
};

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

    console.log('MDX post: ', queryString);
  } else {
    // Probably a page so check if file exist
    console.log('Probably a page. Checking...');

    const pages = await globby(staticPages);

    // Get stripped page names
    const pageNames = pages.map((page: string) =>
      page.replace('pages/', '').replace('.tsx', '')
    );

    // Check if slug is on pages
    if (pageNames.includes(slug)) {
      console.log('Page name is on the list.');

      const selectedPage = socialPreviewData[slug];

      console.log('Checking selected page: ', selectedPage, socialPreviewData[slug]), socialPreviewData;

      if (selectedPage && selectedPage.title) {
        queryString = selectedPage;
        imageFileName = selectedPage.title;

        console.log('Selected page: ', queryString);
      }
    }
  }

  // Finally...

  // Take screenshot

  const bufferString = await getBufferString(
    `${siteBaseURL}/social-preview?${new URLSearchParams(
      queryString
    ).toString()}`
  );

  const screenshot = `data:image/png;base64,${bufferString.buffer}`;

  // Upload image
  const newImage = await uploadImage(imageFileName, screenshot);

  // Serve image
  res.redirect(308, getImage(newImage));
};

/*
  Shout out to Ryan Filler @ryanfiller_
  https://www.ryanfiller.com/blog/automatic-social-share-images/
*/

export default handler;
