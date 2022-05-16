import Link from 'next/link';
import Image from 'next/image';

import {
  CalendarIcon,
  LightningBoltIcon,
  BookmarkIcon,
} from '@heroicons/react/outline';

import { PostType } from '@/types/index';

import Container from '@/components/Container';
import MarkdownWrapper from '@/components/MarkdownWrapper';

const PostTemplate = ({
  children,
  frontMatter,
}: {
  children?: React.ReactNode;
  frontMatter: PostType;
}) => {
  const { title, date, type, slug, featuredImage, categories, readingTime } =
    frontMatter;

  const featuredImageSrc =
    featuredImage && require(`../content/blog/${slug}/featuredImage.png`);

  return (
    <section className="pt-12 pb-20 md:min-h-screen">
      <Container>
        <h2 className="text-gray-800 dark:text-gray-600 text-sm mb-2">
          <Link href="/blog">
            <a className="uppercase hover:text-blue-500">{type}</a>
          </Link>
          <span className="mx-1">/</span>
        </h2>
        <h1 className="mb-6 text-gray-800 dark:text-gray-400 font-medium">
          {title}
        </h1>
        <h2 className="text-gray-600 text-sm mb-4">
          <span className="mr-4">
            <CalendarIcon className="w-4 h-4 mr-1 inline-block" />
            <span className="align-middle">
              {new Intl.DateTimeFormat('en-us', { dateStyle: 'long' }).format(
                new Date(date)
              )}
            </span>
          </span>
          <span>
            <LightningBoltIcon className="w-4 h-4 mr-1 inline-block" />
            <span className="align-middle">
              {readingTime.text ?? '1 min read'}
            </span>
          </span>
        </h2>
        {featuredImage && (
          <figure className="rounded-lg p-1.5 bg-gradient-to-r from-green-400 via-indigo-500 to-blue-500 mb-4">
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

export default PostTemplate;
