import Link from 'next/link';

import {
  CalendarIcon,
  LightningBoltIcon,
  BookmarkIcon,
} from '@heroicons/react/outline';

import { PostType } from '@/types/index';

const BlogPostItem = ({ ...post }: PostType) => {
  const { type, title, slug, date, categories, readingTime } = post;

  return (
    <div className="mb-16">
      <h2 className="text-xl mb-1">
        <Link href={`/${type}/${slug}`}>
          <a className="text-gray-800 dark:text-gray-400 font-medium hover:text-purple-500 hover:underline">
            {title}
          </a>
        </Link>
      </h2>
      <p className="mb-2 text-gray-600 text-sm">
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
      </p>
      <p className="mb-0 text-gray-600 text-sm">
        <BookmarkIcon className="w-4 h-4 mr-1 inline-block" />
        <span className="align-middle">{categories.join(', ')}</span>
      </p>
    </div>
  );
};

export default BlogPostItem;
