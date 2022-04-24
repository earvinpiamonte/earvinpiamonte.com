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
      {!data && <TopTracksPlaceholder />}
      <div className="mb-8">
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
                  className="-top-0.5 absolute left-0 right-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={-1}
                  aria-label="Play"
                >
                  <PlayIcon className="inline-block w-5 h-5 opacity-0 group-hover:opacity-100 text-purple-500" />
                </a>
              </div>
              <div className="flex-none w-10 h-10 mr-4 relative">
                <Image
                  src={albumImageUrl}
                  alt="Cover art"
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
      </div>
      <p className="mb-0 text-gray-600 text-sm">
        Top tracks and currently playing data source:{' '}
        <CustomLink href="https://developer.spotify.com/documentation/web-api/">
          Spotify
        </CustomLink>
        .
      </p>
    </div>
  );
};

const TopTracksPlaceholder = () => {
  return (
    <>
      <div className="flex mb-4 items-center py-2 pl-4 animate-pulse cursor-wait">
        <div className="flex-none mr-4">
          <div className="bg-gray-200 dark:bg-gray-800 h-4 rounded w-5"></div>
        </div>
        <div className="bg-gray-200 dark:bg-gray-800 flex-none h-10 mr-4 relative rounded w-10"></div>
        <div className="flex-1 space-y-2">
          <div className="bg-gray-200 dark:bg-gray-800 h-4 md:w-80 rounded w-40"></div>
          <div className="bg-gray-200 dark:bg-gray-800 h-4 md:w-52 rounded w-32"></div>
        </div>
        <div className="flex-none pr-4">
          <div className="bg-gray-200 dark:bg-gray-800 h-4 rounded w-8"></div>
        </div>
      </div>
      <div className="flex mb-4 items-center py-1 pl-4 animate-pulse cursor-wait">
        <div className="flex-none mr-4">
          <div className="bg-gray-200 dark:bg-gray-800 h-4 rounded w-5"></div>
        </div>
        <div className="bg-gray-200 dark:bg-gray-800 flex-none h-10 mr-4 relative rounded w-10"></div>
        <div className="flex-1 space-y-2">
          <div className="bg-gray-200 dark:bg-gray-800 h-4 md:w-32 rounded w-20"></div>
          <div className="bg-gray-200 dark:bg-gray-800 h-4 md:w-64 rounded w-36"></div>
        </div>
        <div className="flex-none pr-4">
          <div className="bg-gray-200 dark:bg-gray-800 h-4 rounded w-8"></div>
        </div>
      </div>
      <div className="flex mb-4 items-center py-1 pl-4 animate-pulse cursor-wait">
        <div className="flex-none mr-4">
          <div className="bg-gray-200 dark:bg-gray-800 h-4 rounded w-5"></div>
        </div>
        <div className="bg-gray-200 dark:bg-gray-800 flex-none h-10 mr-4 relative rounded w-10"></div>
        <div className="flex-1 space-y-2">
          <div className="bg-gray-200 dark:bg-gray-800 h-4 md:w-80 rounded w-40"></div>
          <div className="bg-gray-200 dark:bg-gray-800 h-4 md:w-52 rounded w-32"></div>
        </div>
        <div className="flex-none pr-4">
          <div className="bg-gray-200 dark:bg-gray-800 h-4 rounded w-8"></div>
        </div>
      </div>
      <div className="flex mb-4 items-center py-1 pl-4 animate-pulse cursor-wait">
        <div className="flex-none mr-4">
          <div className="bg-gray-200 dark:bg-gray-800 h-4 rounded w-5"></div>
        </div>
        <div className="bg-gray-200 dark:bg-gray-800 flex-none h-10 mr-4 relative rounded w-10"></div>
        <div className="flex-1 space-y-2">
          <div className="bg-gray-200 dark:bg-gray-800 h-4 md:w-32 rounded w-20"></div>
          <div className="bg-gray-200 dark:bg-gray-800 h-4 md:w-64 rounded w-36"></div>
        </div>
        <div className="flex-none pr-4">
          <div className="bg-gray-200 dark:bg-gray-800 h-4 rounded w-8"></div>
        </div>
      </div>
    </>
  );
};

export default TopTracks;
