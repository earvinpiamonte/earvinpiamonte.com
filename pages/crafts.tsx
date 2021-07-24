import { CraftType } from '@/types/index';

import Layout from '@/components/Layout';
import CraftsList from '@/components/CraftsList';
import PageTemplate from '@/templates/PageTemplate';

import { getAllPostsFrontMatter } from '@/lib/mdx';

const Crafts = ({ data }: { data?: CraftType[] }) => {
  const title = 'Crafts';
  const description = `Some things I've built personally. Most of these are open source and
         available on GitHub.`;

  return (
    <Layout {...{ title, description }}>
      <PageTemplate {...{ title }}>
        <p className="text-xl mb-12 text-gray-800 dark:text-gray-400">
          {description}
        </p>
        <CraftsList data={data} />
      </PageTemplate>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const data = await getAllPostsFrontMatter('craft');

  return { props: { data } };
};

export default Crafts;
