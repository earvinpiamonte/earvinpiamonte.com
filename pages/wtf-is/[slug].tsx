import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { WtfType } from '@/types/index';

import WtfTemplate from '@/templates/WtfTemplate';
import Layout from '@/components/Layout';
import MDXComponents from '@/components/MDXComponents';

import { getAllPosts, getPostBySlug } from '@/lib/mdx';

const WtfPost = ({
  mdxSource,
  frontMatter,
}: {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: WtfType;
}) => {
  const { title, summary } = frontMatter;

  return (
    <Layout {...{ title, description: summary }}>
      <WtfTemplate frontMatter={frontMatter}>
        <div className="relative">
          <MDXRemote
            {...mdxSource}
            components={{
              ...MDXComponents,
            }}
          />
        </div>
      </WtfTemplate>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts('wtf-is');

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
  const post = await getPostBySlug('wtf-is', params.slug);

  return { props: { ...post } };
};

export default WtfPost;
