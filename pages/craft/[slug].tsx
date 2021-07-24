import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { CraftType } from '@/types/index';

import Layout from '@/components/Layout';
import MDXComponents from '@/components/MDXComponents';

import CraftTemplate from '@/templates/CraftTemplate';

import { getAllPosts, getPostBySlug } from '@/lib/mdx';

const CraftPost = ({
  mdxSource,
  frontMatter,
}: {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: CraftType;
}) => {
  const { title } = frontMatter;

  return (
    <Layout {...{ title, description: '' }}>
      <CraftTemplate frontMatter={frontMatter}>
        <div className="relative">
          <MDXRemote
            {...mdxSource}
            components={{
              ...MDXComponents,
            }}
          />
        </div>
      </CraftTemplate>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts('craft');

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
  const post = await getPostBySlug('craft', params.slug);

  return { props: { ...post } };
};

export default CraftPost;
