import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { PageType } from '@/types/index';

import Layout from '@/components/Layout';
import MDXComponents from '@/components/MDXComponents';

import PageTemplate from '@/templates/PageTemplate';

import { getAllPosts, getPostBySlug } from '@/lib/mdx';

const Page = ({
  mdxSource,
  frontMatter,
}: {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: PageType;
}) => {
  const { title, summary } = frontMatter;

  return (
    <Layout {...{ title, description: summary }}>
      <PageTemplate {...frontMatter}>
        <div className="relative">
          <MDXRemote
            {...mdxSource}
            components={{
              ...MDXComponents,
            }}
          />
        </div>
      </PageTemplate>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts('page');

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
  const post = await getPostBySlug('page', params.slug);

  return { props: { ...post } };
};

export default Page;
