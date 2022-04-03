import Image from 'next/image';
import useSWR from 'swr';
import { ClockIcon, PlayIcon } from '@heroicons/react/solid';

import fetcher from '@/lib/fetcher';
import CustomLink from './CustomLink';

const TopTracks = () => {
  const { data } = useSWR('/api/spotify/top-tracks?limit=15', fetcher);

  return (
    <div className="mb-16">
      <div className="flex mb-4 items-center pt-1 pl-4 pb-4 border-b">
        <div className="flex-none w-5 text-right mr-4 relative">
          <span>#</span>
        </div>
        <div className="flex-1">
          <h4 className="uppercase text-base mb-0">Title</h4>
        </div>
        <div className="flex-none pr-4">
          <ClockIcon className="inline-block w-5 h-5 text-gray-800 dark:text-gray-400" />
        </div>
      </div>
      {data &&
        data.map(({ title, songUrl, artist, albumImageUrl, duration }, i) => (
          <div
            key={title}
            className="flex mb-4 items-center hover:bg-gray-100 py-1 pl-4 rounded group dark:hover:bg-gray-900"
          >
            <div className="flex-none w-5 text-right mr-4 relative">
              <span className="group-hover:opacity-0">{`${i + 1}.`}</span>
              <a
                href={songUrl}
                className="top-0 absolute left-0 right-0"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
              >
                <PlayIcon className="inline-block w-5 h-5 opacity-0 group-hover:opacity-100 text-purple-500" />
              </a>
            </div>
            <div className="flex-none w-10 h-10 mr-4 relative">
              <Image
                src={albumImageUrl}
                alt="Album art"
                draggable={false}
                layout="fill"
                className="rounded"
              />
            </div>
            <div className="flex-1 overflow-hidden">
              <h4 className="font-medium text-base mb-0 truncate">{title}</h4>
              <p className="mb-0 truncate">{artist}</p>
            </div>
            <div className="flex-none pr-4">{duration}</div>
          </div>
        ))}
      <p className="mb-0 text-gray-600 text-sm text-right">
        Top tracks, currently playing data and images source:{' '}
        <CustomLink href="https://developer.spotify.com/documentation/web-api/">
          Spotify
        </CustomLink>
        .
      </p>
    </div>
  );
};

export default TopTracks;
