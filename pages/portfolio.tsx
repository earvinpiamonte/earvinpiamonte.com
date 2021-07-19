import { ProjectType } from '@/types/index';

import Layout from '@/components/Layout';
import Projects from '@/components/Projects';

import PageTemplate from '@/templates/PageTemplate';

import { getAllPostsFrontMatter } from '@/lib/mdx';

const Portfolio = ({ data }: { data?: ProjectType[] }) => {
  return (
    <Layout>
      <PageTemplate title="Portfolio">
        <p className="text-xl mb-12 text-gray-800 dark:text-gray-400">
          These are some of the projects I've built as an independent software
          developer for various clients.
        </p>
        <Projects data={data} />
      </PageTemplate>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const data = await getAllPostsFrontMatter('project');

  return { props: { data } };
};

export default Portfolio;
