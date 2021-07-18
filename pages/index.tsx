import React from 'react';

import Image from 'next/image';

import { ExternalLinkIcon } from '@heroicons/react/outline';

import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Experiences from '@/components/Experiences';
import Button from '@/components/Button';

import { ThemeContext } from '../providers/ThemeProvider';

import { getAllFilesFrontMatter } from '@/lib/mdx';
import { ExperienceType } from '../types';

const Home = ({ experiences }: { experiences: ExperienceType[] }) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Layout>
      <section className="pt-12 pb-20">
        <Container>
          <h1 className="mb-6 tracking-wider">
            <span className="block text-lg">Hello, I'm</span>{' '}
            <span className="text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-500">
              Noel Earvin Piamonte.
            </span>
          </h1>
          <div className="mb-12 text-xl tracking-wide">
            <p className="mb-6">
              I'm a software developer based in the Mandaluyong City,
              Philippines. I work at{' '}
              <a
                href="https://www.infor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold text-purple-500"
              >
                Infor
              </a>{' '}
              as a Software Engineer.
            </p>
            <p>
              Outside work, I build things for the web with React and Tailwind
              CSS.
            </p>
          </div>
          <div className="mb-20">
            <h2 className="text-xl text-gray-800 font-medium dark:text-gray-400">
              Experience
            </h2>
            <Experiences data={experiences} />
          </div>
          <div className="mb-0">
            <div className="bg-purple-100 text-gray-600 dark:bg-purple-800 dark:text-gray-200 rounded-lg px-4 py-4">
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
                <div className="col-span-7">
                  <h4 className="mb-2 font-medium">
                    Get daylight on Web Store
                  </h4>
                  <p className="mb-0 text-sm">
                    Write down temporary notes on the new tab page of your
                    Google Chrome browser.
                  </p>
                </div>
                <div className="col-span-10 col-start-3 md:col-span-3 md:self-center md:text-center">
                  <Button
                    color={theme === 'dark' ? 'green' : 'purple'}
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
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const experiences = await getAllFilesFrontMatter('experience');

  return { props: { experiences } };
};

export default Home;
