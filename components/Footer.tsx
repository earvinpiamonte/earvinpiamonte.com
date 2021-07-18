import React from 'react';

import getConfig from 'next/config';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

import Container from '@/components/Container';
import NowPlaying from '@/components/NowPlaying';
import Button from '@/components/Button';
import { ThemeContext } from '../providers/ThemeProvider';

const { publicRuntimeConfig } = getConfig();

const { name } = publicRuntimeConfig.site;

const Footer = () => {
  const { nextTheme, setTheme } = React.useContext(ThemeContext);

  return (
    <>
      <section className="py-3 border-0 border-t-2 border-purple-500">
        <Container>
          <NowPlaying />
        </Container>
      </section>
      <footer className="py-8 border-0 border-t dark:border-gray-800">
        <Container>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6">
              <div className="md:text-right">
                <Button
                  outlined={true}
                  narrow={true}
                  onClick={() => setTheme(nextTheme)}
                >
                  {nextTheme !== 'dark' ? (
                    <>
                      <SunIcon className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <MoonIcon className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:order-first">
              <p className="text-sm mb-0 text-gray-800 dark:text-gray-400">
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
