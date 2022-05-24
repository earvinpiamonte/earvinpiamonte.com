import Image from 'next/image';

import useSWR from 'swr';
import { MusicNoteIcon } from '@heroicons/react/solid';

import fetcher from '@/lib/fetcher';

const NowPlaying = () => {
  const { data } = useSWR('/api/spotify/now-playing', fetcher);

  return (
    <div className="flex items-center text-sm">
      <>
        <MusicNoteIcon
          className={`h-5 w-5 mr-2 flex-none text-gray-600 ${
            data?.songUrl ? 'text-green-500 animate-pulse' : ''
          }`}
        />
        <span className="dark:text-gray-400 flex-none md:mr-4 mr-2 text-gray-800">
          <span>
            Now playing <span className="hidden md:inline">on Spotify</span>:
          </span>
        </span>
        {data?.songUrl ? (
          <span className="flex flex-1 overflow-hidden">
            <span className="bg-gray-500 flex-none h-5 inline-block mr-2 relative rounded w-5">
              <Image
                src={data?.albumImageUrlSmall}
                alt="Cover art"
                draggable={false}
                layout="fill"
                className="rounded"
              />
            </span>
            <a
              className="truncate flex-1"
              href={data.songUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="animate-marquee flex space-x-2">
                <span className="dark:text-gray-400 font-medium text-gray-800">
                  {data.title}
                </span>
                <span>&middot;</span>
                <span className="text-gray-600">{data?.artist}</span>
              </span>
            </a>
          </span>
        ) : (
          <span className="text-gray-600">Not playing any music.</span>
        )}
      </>
    </div>
  );
};

export default NowPlaying;
