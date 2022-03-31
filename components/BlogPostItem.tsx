import Link from 'next/link';

import { LightningBoltIcon, BookmarkIcon } from '@heroicons/react/outline';

import { PostType } from '@/types/index';

const BlogPostItem = ({ ...post }: PostType) => {
  const { type, title, slug, date, categories, readingTime } = post;

  const locale = 'en-US';
  const postDate = new Date(date);
  const shortMonth = postDate.toLocaleString(locale, { month: 'short' });
  const day = postDate.toLocaleString(locale, { day: 'numeric' });
  const year = postDate.toLocaleString(locale, { year: 'numeric' });

  return (
    <div className="flex mb-16">
      <div className="flex-none rounded-lg w-28 p-1 bg-gradient-to-r from-green-400 via-indigo-500 to-purple-500">
        <div className="bg-gray-900 font-medium px-1 py-1 rounded-t-lg text-center text-gray-200 uppercase">
          {shortMonth}
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 py-1 text-center">
          <h3 className="dark:text-gray-400 font-medium mb-0 text-4xl text-gray-800">
            {day}
          </h3>
        </div>
        <div className="bg-gray-200 dark:bg-gray-700 rounded-b-lg text-center">
          <p className="dark:text-gray-400 mb-0 text-gray-600">{year}</p>
        </div>
      </div>
      <div className="overflow-hidden px-4 py-1">
        <h2 className="mb-1 text-xl truncate">
          <Link href={`/${type}/${slug}`}>
            <a className="dark:hover:text-purple-500 dark:text-gray-400 font-medium hover:text-purple-500 hover:underline text-gray-800">
              {title}
            </a>
          </Link>
        </h2>
        <p className="mb-2 text-gray-600 text-sm">
          <span>
            <LightningBoltIcon className="h-4 inline-block mr-1 w-4" />
            <span className="align-middle">
              {readingTime.text ?? '1 min read'}
            </span>
          </span>
        </p>
        <p className="mb-0 text-gray-600 text-sm truncate">
          <BookmarkIcon className="h-4 inline-block mr-1 w-4" />
          <span className="align-middle">{categories.join(', ')}</span>
        </p>
      </div>
    </div>
  );
};

export default BlogPostItem;
