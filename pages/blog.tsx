import { PostType } from '@/types/index';

import Layout from '@/components/Layout';
import BlogPosts from '@/components/BlogPosts';
import PageTemplate from '@/templates/PageTemplate';

import { getAllPostsFrontMatter } from '@/lib/mdx';

const Blog = ({ data }: { data?: PostType[] }) => {
  const title = 'Blog';
  const description = `The only personal space where I write about my work, life and everything in between.`;

  return (
    <Layout {...{ title, description }}>
      <PageTemplate {...{ title }}>
        <p className="text-xl mb-12 text-gray-800 dark:text-gray-400">
          {description}
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

export default Blog;
