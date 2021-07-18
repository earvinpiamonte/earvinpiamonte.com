import { CraftType } from '@/types/index';

import Layout from '@/components/Layout';
import CraftsList from '@/components/CraftsList';
import PageTemplate from '@/templates/PageTemplate';

import { getAllPostsFrontMatter } from '@/lib/mdx';

const Crafts = ({ data }: { data?: CraftType[] }) => {
  return (
    <Layout>
      <PageTemplate title="Crafts">
        <p className="text-xl mb-12">
          Here are some things I've built personally. Most of these are open
          source and available on GitHub.
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
