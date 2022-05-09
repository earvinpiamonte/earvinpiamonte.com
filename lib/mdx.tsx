import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';

const root = process.cwd();

const getAllFilesFrontMatter = async (type: string) => {
  const files = fs.readdirSync(path.join(root, 'data', type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, postSlug),
      'utf8'
    );
    const { data } = matter(source);

    return [
      {
        slug: postSlug.replace('.mdx', ''),
        ...data,
      },
      ...allPosts,
    ];
  }, []);
};

const getAllPostsFrontMatter = async (type: string) => {
  const files = fs.readdirSync(path.join(root, 'data', type));

  return files.map((postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, postSlug, 'index.mdx'),
      'utf8'
    );

    const { data, content } = matter(source);

    return {
      readingTime: readingTime(content),
      slug: postSlug,
      ...data,
    };
  }, []);
};

const getAllPosts = async (type: string) => {
  return fs.readdirSync(path.join(root, 'data', type));
};

const getPostBySlug = async (type: string, slug: string) => {
  try {
    const source = fs.readFileSync(
      path.join(root, 'data', type, slug, 'index.mdx'),
      'utf8'
    );

    const { data, content }: { data: any; content: any } = matter(source);

    const mdxSource = await serialize(content, {
      mdxOptions: {
        rehypePlugins: [rehypeCodeTitles, rehypePrism],
      },
    });

    return {
      mdxSource,
      frontMatter: {
        wordCount: content.split(/\s+/gu).length,
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

export {
  getAllFilesFrontMatter,
  getAllPostsFrontMatter,
  getAllPosts,
  getPostBySlug,
};
