import Layout from '@/components/Layout';
import PageTemplate from '@/templates/PageTemplate';
import Thumbnail from '@/components/Thumbnail';
import CustomLink from '@/components/CustomLink';

const Custom404 = () => {
  const title = '404 - Page not found';
  const description = `The page you are trying to access cannot be found.`;

  return (
    <Layout {...{ title, description }}>
      <PageTemplate {...{ title }}>
        <p className="text-xl mb-12 text-gray-800 dark:text-gray-400">
          {description}
        </p>
        <Thumbnail
          src="/images/Paranoid Mr Robot GIF.gif"
          alt="Paranoid Mr Robot GIF"
        />
        <p className="text-sm">
          Image source:{' '}
          <CustomLink href="https://www.reddit.com/r/reactiongifs/comments/3md7xe/when_i_finally_thought_i_figured_out_what_was/">
            Reddit
          </CustomLink>
        </p>
      </PageTemplate>
    </Layout>
  );
};

export default Custom404;
