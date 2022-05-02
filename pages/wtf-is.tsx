import { WtfType } from '@/types/index';

import Layout from '@/components/Layout';
import WtfList from '@/components/WtfList';
import PageTemplate from '@/templates/PageTemplate';

import { getAllPostsFrontMatter } from '@/lib/mdx';

const WtfIs = ({ data }: { data?: WtfType[] }) => {
  const title = 'What the fuck is...?';
  const description = `Welcome to my personal glossary. Answers to wtf questions that I have asked myself.`;

  return (
    <Layout {...{ title, description }}>
      <PageTemplate {...{ title }}>
        <p className="text-xl mb-12 text-gray-800 dark:text-gray-400">
          {description}
        </p>
        <WtfList data={data} />
      </PageTemplate>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const data = await getAllPostsFrontMatter('wtf-is');

  return { props: { data } };
};

export default WtfIs;
