import * as fetch from 'node-fetch';

import { getPostBySlug } from '../lib/mdx';
import { uploadImage, getImage } from '../lib/cloudinary';

import socialPreviewData from '../server/social-preview-data.json';

const siteBaseURL = process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://www.earvinpiamonte.com';

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

  } else {
    // Check if slug is on pages
    const selectedPage = socialPreviewData[slug];

    if (selectedPage && selectedPage.title) {
      queryString = selectedPage;
      imageFileName = selectedPage.title;
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
