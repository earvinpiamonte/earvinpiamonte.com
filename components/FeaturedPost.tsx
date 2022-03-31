import React from 'react';

import Image from 'next/image';
import { ExternalLinkIcon } from '@heroicons/react/outline';

import Button from '@/components/Button';

const FeaturedPost = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-gray-200 text-gray-600 dark:bg-gray-900 dark:text-gray-200 rounded-lg px-4 py-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2">
          <Image
            src="/images/daylight-icon.jpg"
            alt="Picture of the author"
            width={92}
            height={92}
            className="rounded-lg"
            draggable={false}
          />
        </div>
        <div className="col-span-10 md:col-span-7">
          <h4 className="mb-2 font-medium">Get daylight on Web Store</h4>
          <p className="mb-0 text-sm">
            Write down temporary notes on the new tab page of your Google Chrome
            browser.
          </p>
        </div>
        <div className="col-span-10 col-start-3 md:col-span-3 md:self-center md:text-center">
          <Button
            color={'purple'}
            pill={true}
            src="https://chrome.google.com/webstore/detail/daylight/acfblhlodbfnocogojghkgnpoellplll"
            className="text-sm"
          >
            <ExternalLinkIcon className="w-4 h-4 mr-1 inline-block" />
            <span className="align-middle">Install</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
