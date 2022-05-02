import Link from 'next/link';

import { WtfType } from '@/types/index';

const WtfItem = ({ ...craft }: WtfType) => {
  const { type, title, slug, categories } = craft;

  return (
    <div className="mb-16">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <h2 className="text-xl mb-1 truncate">
            <Link href={`/${type}/${slug}`}>
              <a className="text-gray-800 dark:text-gray-400 font-medium hover:text-purple-500 hover:underline dark:hover:text-purple-500">
                {title}
              </a>
            </Link>
          </h2>
          <p className="mb-0 md:truncate text-gray-600">
            {categories.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WtfItem;
