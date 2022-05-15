import Link from 'next/link';
import Image from 'next/image';

import { CalendarIcon, CodeIcon } from '@heroicons/react/outline';

import { ProjectType } from '@/types/index';

import Container from '@/components/Container';
import MarkdownWrapper from '@/components/MarkdownWrapper';

const ProjectTemplate = ({
  children,
  frontMatter,
}: {
  children?: React.ReactNode;
  frontMatter: ProjectType;
}) => {
  const { title, year, type, slug, featuredImage, categories } = frontMatter;

  const featuredImageSrc =
    featuredImage && require(`../content/${type}/${slug}/featuredImage.png`);

  return (
    <section className="pt-12 pb-20 md:min-h-screen">
      <Container>
        <h2 className="text-gray-800 dark:text-gray-600 text-sm mb-2">
          <Link href="/portfolio">
            <a className="uppercase hover:text-blue-500">{type}</a>
          </Link>
          <span className="mx-1">/</span>
        </h2>
        <h1 className="mb-2 text-gray-800 dark:text-gray-400 font-medium">
          {title}
        </h1>
        <h2 className="text-gray-600 text-sm mb-4">
          <span className="mr-4">
            <CalendarIcon className="w-4 h-4 mr-1 inline-block" />
            <span className="align-middle">{year}</span>
          </span>
        </h2>
        {featuredImage && (
          <figure className="rounded-lg p-1.5 bg-gradient-to-r from-pink-400 via-indigo-500 to-blue-500 mb-4">
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
            <CodeIcon className="w-4 h-4 mr-1 inline-block" />
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

export default ProjectTemplate;
