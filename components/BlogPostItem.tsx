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
    <div className="border dark:border-gray-600 flex mb-16 rounded-lg">
      <div className="border-r dark:border-gray-600 flex-none rounded-l-lg w-28">
        <div className="bg-purple-500 border-b border-purple-500 font-medium px-1 py-1 rounded-tl-lg text-center text-gray-200 uppercase">
          {shortMonth}
        </div>
        <div className="bg-gray-100 dark:bg-gray-900 py-2 text-center">
          <h3 className="dark:text-gray-400 font-medium mb-0 text-4xl text-gray-800">
            {day}
          </h3>
        </div>
        <div className="bg-gray-200 border-gray-200 border-t dark:bg-gray-800 dark:border-gray-600 rounded-bl-lg text-center">
          <p className="dark:text-gray-400 mb-0 text-gray-600">{year}</p>
        </div>
      </div>
      <div className="overflow-hidden px-4 py-3">
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
