import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import readingTime from 'reading-time';

const root = process.cwd();

const getPostFrontMatterBySlug = async (type: string, slug: string) => {
  try {
    const source = fs.readFileSync(
      path.join(root, 'content', type, slug, 'index.mdx'),
      'utf8'
    );

    const { data, content }: { data: any; content: any } = matter(source);

    return {
      frontMatter: {
        readingTime: readingTime(content),
        slug: slug || null,
        ...data,
      },
    };
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('File not found!');
      return null;
    } else {
      throw error;
    }
  }
};

export { getPostFrontMatterBySlug };
