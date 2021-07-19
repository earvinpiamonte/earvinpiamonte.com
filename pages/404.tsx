import Layout from '@/components/Layout';
import PageTemplate from '@/templates/PageTemplate';

const Custom404 = () => {
  return (
    <Layout>
      <PageTemplate title="404 - Page not found">
        <p className="text-xl mb-12 text-gray-800 dark:text-gray-400">
          The page you are trying to access cannot be found.
        </p>
      </PageTemplate>
    </Layout>
  );
};

export default Custom404;
