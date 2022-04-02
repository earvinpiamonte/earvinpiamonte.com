import Image from 'next/image';
import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

const Movies = () => {
  const { data } = useSWR('/api/movies/recommended-list', fetcher);

  return (
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
  );
};

export default Movies;
