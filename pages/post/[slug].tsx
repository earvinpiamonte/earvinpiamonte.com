import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { PostType } from '@/types/index';

import Layout from '@/components/Layout';
import MDXComponents from '@/components/MDXComponents';

import PostTemplate from '@/templates/PostTemplate';

import { getAllPosts, getPostBySlug } from '@/lib/mdx';

const Post = ({
  mdxSource,
  frontMatter,
}: {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: PostType;
}) => {
  const { title, summary, date } = frontMatter;

  return (
    <Layout {...{ title, description: summary, date }}>
      <PostTemplate frontMatter={frontMatter}>
        <div className="relative">
          <MDXRemote
            {...mdxSource}
            components={{
              ...MDXComponents,
            }}
          />
        </div>
      </PostTemplate>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts('blog');

  return {
    paths: posts.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostBySlug('blog', params.slug);

  return { props: { ...post } };
};

export default Post;
