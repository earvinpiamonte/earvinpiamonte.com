import getConfig from 'next/config';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const { publicRuntimeConfig } = getConfig();

type LayoutPropsType = {
  title?: string;
  description?: string;
  date?: string;
  header?: boolean;
  children?: React.ReactNode;
  footer?: boolean;
};

const Layout = ({ children, ...customMeta }: LayoutPropsType) => {
  const router = useRouter();
  const { asPath } = router;

  const { name, url, title, description } = publicRuntimeConfig.site;

  const meta = {
    name,
    url,
    title,
    description,
    ...customMeta,
  };

  const { header = true, footer = true } = customMeta;

  const socialPreview = `${url}/api/get-social-preview?path=${asPath.slice(
    1,
    asPath.length
  )}&timestamp=${Date.now()}`;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" key="favicon" />
        <link rel="canonical" href={`${url}${asPath}`} key="canonical" />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twitter_card"
        />
        <meta name="twitter:title" content={meta.title} key="twitter_title" />
        <meta
          name="twitter:description"
          content={meta.description}
          key="twitter_description"
        />
        <meta
          name="twitter:image"
          content={socialPreview}
          key="twitter_image"
        />

        {/* Open Graph */}
        <meta property="og:url" content={`${url}${asPath}`} key="og_url" />
        <meta property="og:site_name" content={meta.name} key="og_site_name" />
        <meta property="og:title" content={meta.title} key="og_title" />
        <meta
          property="og:description"
          content={meta.description}
          key="og_description"
        />
        <meta property="og:image" content={socialPreview} key="og_image" />
        <meta property="og:image:width" content={`1200`} key="og_image_width" />
        <meta
          property="og:image:height"
          content={`630`}
          key="og_image_height"
        />

        <meta name="description" content={meta.description} key="description" />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        <title key="title">{meta.title}</title>
      </Head>
      {header && <Header />}
      <main>{children}</main>
      {footer && <Footer />}
    </>
  );
};

export default Layout;
