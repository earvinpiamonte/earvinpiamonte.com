import { CertificationType } from '@/types/index';

import Layout from '@/components/Layout';
import CertificationsList from '@/components/CertificationsList';
import PageTemplate from '@/templates/PageTemplate';

import { getAllPostsFrontMatter } from '@/lib/mdx';

const Certifications = ({ data }: { data?: CertificationType[] }) => {
  const title = 'Certifications';
  const description = `Professional certifications I've earned.`;

  return (
    <Layout {...{ title, description }}>
      <PageTemplate {...{ title }}>
        <p className="text-xl mb-12 text-gray-800 dark:text-gray-400">
          {description}
        </p>
        <CertificationsList data={data} />
      </PageTemplate>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const data = await getAllPostsFrontMatter('certification');

  return { props: { data } };
};

export default Certifications;
