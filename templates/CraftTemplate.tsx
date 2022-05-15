import Link from 'next/link';
import Image from 'next/image';
import { ExternalLinkIcon, CodeIcon } from '@heroicons/react/outline';

import { CraftType } from '@/types/index';

import Container from '@/components/Container';
import MarkdownWrapper from '@/components/MarkdownWrapper';
import Button from '@/components/Button';

const CraftTemplate = ({
  children,
  frontMatter,
}: {
  children?: React.ReactNode;
  frontMatter: CraftType;
}) => {
  const {
    title,
    type,
    slug,
    featuredImage,
    categories,
    repoURL,
    viewURL,
    demoURL,
    downloadURL,
  } = frontMatter;

  const featuredImageSrc =
    featuredImage && require(`../content/${type}/${slug}/featuredImage.png`);

  const hasURLs = repoURL || viewURL || demoURL;

  return (
    <section className="pt-12 pb-20 md:min-h-screen">
      <Container>
        <h2 className="text-gray-800 dark:text-gray-600 text-sm mb-2">
          <Link href="/crafts">
            <a className="uppercase hover:text-blue-500">{type}</a>
          </Link>
          <span className="mx-1">/</span>
        </h2>
        <h1 className="mb-4 text-gray-800 dark:text-gray-400 font-medium">
          {title}
        </h1>
        {featuredImage && (
          <figure
            className={`rounded-lg p-1.5 bg-gradient-to-r from-pink-400 via-indigo-500 to-blue-500 ${
              categories.length > 0 ? 'mb-4' : 'mb-12'
            }`}
          >
            <Image
              src={featuredImageSrc}
              className="rounded"
              placeholder="blur"
              draggable={false}
              layout="responsive"
              alt={`Screenshot of ${title}`}
            />
          </figure>
        )}
        {categories.length > 0 && (
          <p className={`text-gray-600 text-sm ${hasURLs ? 'mb-4' : 'mb-12'}`}>
            <CodeIcon className="w-4 h-4 mr-1 inline-block" />
            <span className="align-middle mr-1">
              <span>{categories.join(', ')}</span>
            </span>
          </p>
        )}
        {hasURLs && (
          <p className="mb-12">
            {downloadURL && (
              <Button className="mr-2" pill={true} src={downloadURL}>
                <ExternalLinkIcon className="w-4 h-4 inline-block mr-1" />
                <span className="align-middle">Download</span>
              </Button>
            )}
            {viewURL && (
              <Button className="mr-2" pill={true} src={viewURL}>
                <ExternalLinkIcon className="w-4 h-4 inline-block mr-1" />
                <span className="align-middle">View</span>
              </Button>
            )}
            {demoURL && (
              <Button className="mr-2" pill={true} src={demoURL}>
                <ExternalLinkIcon className="w-4 h-4 inline-block mr-1" />
                <span className="align-middle">Demo</span>
              </Button>
            )}
            {repoURL && (
              <Button
                className="mr-2"
                pill={true}
                src={repoURL}
                color="gray"
                outlined={true}
              >
                <ExternalLinkIcon className="w-4 h-4 inline-block mr-1" />
                <span className="align-middle">Repository</span>
              </Button>
            )}
          </p>
        )}
        <MarkdownWrapper>{children}</MarkdownWrapper>
      </Container>
    </section>
  );
};

export default CraftTemplate;
