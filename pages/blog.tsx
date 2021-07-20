import { PostType } from '@/types/index';

import Layout from '@/components/Layout';
import BlogPosts from '@/components/BlogPosts';
import PageTemplate from '@/templates/PageTemplate';

import { getAllPostsFrontMatter } from '@/lib/mdx';

const Blog = ({ data }: { data?: PostType[] }) => {
  return (
    <Layout>
      <PageTemplate title="Blog">
        <p className="text-xl mb-12 text-gray-800 dark:text-gray-400">
          The only personal space where I write about my work, life and
          everything in between.
        </p>
        <BlogPosts data={data} />
      </PageTemplate>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const data = await getAllPostsFrontMatter('blog');

  return { props: { data } };
};

export const socialPreviewProps = {
  title: 'Blog',
  subTitle: `Writing about work, life, etc.`,
};

export default Blog;
