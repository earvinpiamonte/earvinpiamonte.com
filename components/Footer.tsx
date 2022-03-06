import { ExternalLinkIcon } from '@heroicons/react/outline';

import getConfig from 'next/config';

import Container from '@/components/Container';
import NowPlaying from '@/components/NowPlaying';

const { publicRuntimeConfig } = getConfig();

const { name } = publicRuntimeConfig.site;

const Footer = () => {
  return (
    <>
      <section className="py-3 border-0 border-t-2 border-purple-500">
        <Container>
          <NowPlaying />
        </Container>
      </section>
      <footer className="py-8 border-0 border-t dark:border-gray-800">
        <Container>
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 md:col-span-6">
              <div className="md:text-right md:mb-0 mb-4">
                <a
                  href="https://www.freelancer.com/u/earvinpiamonte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-link text-gray-800 dark:text-gray-400 text-sm font-normal"
                >
                  <ExternalLinkIcon className="w-4 h-4 mr-1 inline-block" />
                  <span className="align-bottom">Freelancer.com</span>
                </a>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 md:order-first">
              <p className="text-sm text-gray-800 dark:text-gray-400 md:mb-0 mb-4">
                Designed and built by {name}.
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
