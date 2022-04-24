import Image from 'next/image';
import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import CustomLink from './CustomLink';

const Movies = () => {
  const { data } = useSWR('/api/movies/recommended-list', fetcher);

  return (
    <>
      <div className="mb-4">
        <div className="grid grid-cols-3 gap-4">
          {!data && <MoviesPlaceholder />}
          {data &&
            data.map(({ id, title, thumbnail, date }) => (
              <div key={id}>
                <div>
                  <Image
                    src={thumbnail}
                    draggable={false}
                    width={500}
                    height={750}
                    className="bg-gray-200 dark:bg-gray-800 rounded"
                    alt={`${title} poster`}
                  />
                </div>
                <div className="overflow-hidden mb-4">
                  <p className="mb-0 truncate font-medium">{title}</p>
                  <p className="mb-0">{date}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <p className="mb-0 text-gray-600 text-sm">
        Movies and TV shows data source:{' '}
        <CustomLink href="https://developers.themoviedb.org/3">TMDB</CustomLink>
        .
      </p>
    </>
  );
};

const MoviesPlaceholder = () => {
  return (
    <>
      <div className="animate-pulse cursor-wait">
        <div>
          <div className="bg-gray-200 dark:bg-gray-800 h-52 md:h-72 mb-2 rounded"></div>
        </div>
        <div className="space-y-2 mb-4">
          <div className="bg-gray-200 dark:bg-gray-800 h-4 w-20 rounded"></div>
          <div className="bg-gray-200 dark:bg-gray-800 h-4 w-10 rounded"></div>
        </div>
      </div>
      <div className="animate-pulse cursor-wait">
        <div>
          <div className="bg-gray-200 dark:bg-gray-800 h-52 md:h-72 mb-2 rounded"></div>
        </div>
        <div className="space-y-2 mb-4">
          <div className="bg-gray-200 dark:bg-gray-800 h-4 w-16 rounded"></div>
          <div className="bg-gray-200 dark:bg-gray-800 h-4 w-10 rounded"></div>
        </div>
      </div>
      <div className="animate-pulse cursor-wait">
        <div>
          <div className="bg-gray-200 dark:bg-gray-800 h-52 md:h-72 mb-2 rounded"></div>
        </div>
        <div className="space-y-2 mb-4">
          <div className="bg-gray-200 dark:bg-gray-800 h-4 w-20 rounded"></div>
          <div className="bg-gray-200 dark:bg-gray-800 h-4 w-10 rounded"></div>
        </div>
      </div>
      <div className="animate-pulse cursor-wait">
        <div>
          <div className="bg-gray-200 dark:bg-gray-800 h-52 md:h-72 mb-2 rounded"></div>
        </div>
        <div className="space-y-2 mb-4">
          <div className="bg-gray-200 dark:bg-gray-800 h-4 w-16 rounded"></div>
          <div className="bg-gray-200 dark:bg-gray-800 h-4 w-10 rounded"></div>
        </div>
      </div>
    </>
  );
};

export default Movies;
