import { ProjectType } from '@/types/index';

import Layout from '@/components/Layout';
import Projects from '@/components/Projects';

import PageTemplate from '@/templates/PageTemplate';

import { getAllPostsFrontMatter } from '@/lib/mdx';

const Portfolio = ({ data }: { data?: ProjectType[] }) => {
  const title = 'Portfolio';
  const description = `Selected projects I built as an independent software
          developer for various clients.`;

  return (
    <Layout {...{ title, description }}>
      <PageTemplate {...{ title }}>
        <p className="text-xl mb-12 text-gray-800 dark:text-gray-400">
          {description}
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
