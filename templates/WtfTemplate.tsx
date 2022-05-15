import Link from 'next/link';

import { BookmarkIcon } from '@heroicons/react/outline';

import { WtfType } from '@/types/index';

import Container from '@/components/Container';
import MarkdownWrapper from '@/components/MarkdownWrapper';

const WtfTemplate = ({
  children,
  frontMatter,
}: {
  children?: React.ReactNode;
  frontMatter: WtfType;
}) => {
  const { title, type, categories } = frontMatter;

  return (
    <section className="pt-12 pb-20 md:min-h-screen">
      <Container>
        <h2 className="text-gray-800 dark:text-gray-600 text-sm mb-2">
          <Link href="/wtf-is">
            <a className="uppercase hover:text-blue-500">{type}</a>
          </Link>
          <span className="mx-1">/</span>
        </h2>
        <h1 className="mb-6 text-gray-800 dark:text-gray-400 font-medium">
          {title}
        </h1>
        {categories.length > 0 && (
          <p className="text-gray-600 text-sm mb-12">
            <BookmarkIcon className="w-4 h-4 mr-1 inline-block" />
            <span className="align-middle mr-1">
              <span>{categories.join(', ')}</span>
            </span>
          </p>
        )}
        <MarkdownWrapper>{children}</MarkdownWrapper>
      </Container>
    </section>
  );
};

export default WtfTemplate;
