import Layout from '@/components/Layout';
import PageTemplate from '@/templates/PageTemplate';

const Custom404 = () => {
  const title = '404 - Page not found';
  const description = `The page you are trying to access cannot be found.`;

  return (
    <Layout {...{ title, description }}>
      <PageTemplate {...{ title }}>
        <p className="text-xl mb-12 text-gray-800 dark:text-gray-400">
          {description}
        </p>
      </PageTemplate>
    </Layout>
  );
};

export default Custom404;
