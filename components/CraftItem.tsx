import Link from 'next/link';
import Image from 'next/image';

import { CraftType } from '@/types/index';

const CraftItem = ({ ...craft }: CraftType) => {
  const { type, title, slug, categories, thumbnail } = craft;

  const thumbnailSrc =
    thumbnail && require(`../content/${type}/${slug}/thumbnail.png`);

  return (
    <div className="mb-16">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-5 text-center">
          <figure className="rounded-xl p-1.5 bg-gradient-to-r from-pink-400 via-indigo-500 to-blue-500">
            {thumbnail && (
              <Link href={`/${type}/${slug}`}>
                <a>
                  <Image
                    src={thumbnailSrc}
                    className="rounded-lg"
                    placeholder="blur"
                    draggable={false}
                    layout="responsive"
                    alt={`Screenshot of ${title}`}
                  />
                </a>
              </Link>
            )}
          </figure>
        </div>
        <div className="col-span-12 md:col-span-7">
          <h2 className="text-xl mb-1 truncate">
            <Link href={`/${type}/${slug}`}>
              <a className="text-gray-800 dark:text-gray-400 font-medium hover:text-blue-500 hover:underline dark:hover:text-blue-500">
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

export default CraftItem;
