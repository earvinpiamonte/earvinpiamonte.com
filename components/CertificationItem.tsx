import Image from "next/image";

import { CertificationType } from '@/types/index';

const CertificationItem = ({ ...certification }: CertificationType) => {
  const { type, title, slug, date, url, provider, categories, thumbnail } = certification;

  const thumbnailSrc =
    thumbnail && require(`../content/${type}/${slug}/thumbnail.png`);

  return (
    <div className="mb-16">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-5 text-center">
          <figure className="rounded-xl p-1.5 bg-gradient-to-r from-green-400 via-indigo-500 to-blue-500">
            {thumbnail && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={thumbnailSrc}
                  className="rounded-lg"
                  placeholder="blur"
                  draggable={false}
                  alt={`Screenshot of ${title}`}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto"
                  }} />
              </a>
            )}
          </figure>
        </div>
        <div className="col-span-12 md:col-span-7">
          <h2 className="text-xl mb-1 truncate">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-400 font-medium hover:text-blue-500 hover:underline dark:hover:text-blue-500">
              {title}
            </a>
          </h2>
          <p className="mb-1 text-gray-600">
            {provider} · {date}
          </p>
          <p className="mb-0 md:truncate text-gray-600">
            {categories?.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificationItem;
