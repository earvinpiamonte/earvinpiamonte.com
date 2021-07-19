import Link from 'next/link';
import Image from 'next/image';

import { CalendarIcon } from '@heroicons/react/outline';

import { ProjectType } from '@/types/index';

const ProjectItem = ({ ...project }: ProjectType) => {
  const { type, title, slug, year, categories, thumbnail } = project;

  const thumbnailSrc =
    thumbnail && require(`../data/${type}/${slug}/thumbnail.jpg`);

  return (
    <div className="mb-16">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-5 text-center">
          <figure className="rounded-xl p-1.5 bg-gradient-to-r from-green-400 via-indigo-500 to-purple-500">
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
          <h2 className="text-xl mb-0 truncate">
            <Link href={`/${type}/${slug}`}>
              <a className="text-gray-800 dark:text-gray-400 font-medium hover:text-purple-500 hover:underline dark:hover:text-purple-500">
                {title}
              </a>
            </Link>
          </h2>
          <p className="mb-4 text-gray-600 text-sm">
            <CalendarIcon className="w-4 h-4 mr-1 inline-block" />
            <span className="align-middle">{year}</span>
          </p>
          <p className="mb-0 md:truncate text-gray-600">
            {categories.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
