import Image from 'next/image';
import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import CustomLink from './CustomLink';

const Movies = () => {
  const { data } = useSWR('/api/movies/recommended-list', fetcher);

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {data &&
          data.map(({ id, title, thumbnail, date }) => (
            <div key={id}>
              <div>
                <Image
                  src={thumbnail}
                  draggable={false}
                  width={500}
                  height={750}
                  className="rounded"
                  alt={`Screenshot of ${title}`}
                />
              </div>
              <div className="overflow-hidden mb-4">
                <p className="mb-0 truncate font-medium">{title}</p>
                <p className="mb-0">{date}</p>
              </div>
            </div>
          ))}
      </div>
      <p className="mb-0 text-gray-600 text-sm text-right">
        Movies, TV shows data and images source:{' '}
        <CustomLink href="https://developers.themoviedb.org/3">TMDB</CustomLink>
        .
      </p>
    </>
  );
};

export default Movies;
