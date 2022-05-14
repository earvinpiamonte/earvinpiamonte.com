import { ExternalLinkIcon } from '@heroicons/react/outline';

import getConfig from 'next/config';

import Container from '@/components/Container';
import NowPlaying from '@/components/NowPlaying';
import CustomLink from '@/components/CustomLink';

const { publicRuntimeConfig } = getConfig();

const { name } = publicRuntimeConfig.site;

const Footer = () => {
  return (
    <>
      <div className="py-3 border-t-2 border-blue-500">
        <Container>
          <NowPlaying />
        </Container>
      </div>
      <section className="pt-6 pb-12 border-t dark:border-gray-800">
        <Container>
          <div className="flex space-x-4">
            <div className="flex-1">
              <h2 className="font-semibold text-sm mb-3 uppercase">
                Open source
              </h2>
              <ul className="list-none list-outside pl-0 mb-0 text-sm space-y-3 text-gray-800 dark:text-gray-400">
                <li>
                  <CustomLink
                    className="text-normal hover:text-blue-500 hover:underline"
                    href="https://github.com/earvinpiamonte"
                  >
                    GitHub
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    className="text-normal hover:text-blue-500 hover:underline"
                    href="https://codepen.io/earvinpiamonte"
                  >
                    CodePen
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    className="text-normal hover:text-blue-500 hover:underline"
                    href="https://codesandbox.io/u/earvinpiamonte"
                  >
                    CodeSandbox
                  </CustomLink>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-sm mb-3 uppercase">Hire me</h2>
              <ul className="list-none list-outside pl-0 mb-0 text-sm space-y-3 text-gray-800 dark:text-gray-400">
                <li>
                  <CustomLink
                    className="text-normal hover:text-blue-500 hover:underline"
                    href="https://www.freelancer.com/u/earvinpiamonte"
                  >
                    Freelancer.com
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    className="text-normal hover:text-blue-500 hover:underline"
                    href="https://www.linkedin.com/in/earvinpiamonte"
                  >
                    LinkedIn
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    className="text-normal hover:text-blue-500 hover:underline"
                    href="https://ko-fi.com/earvinpiamonte"
                  >
                    Ko-fi
                  </CustomLink>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-sm mb-3 uppercase">
                Other links
              </h2>
              <ul className="list-none list-outside pl-0 mb-0 text-sm space-y-3 text-gray-800 dark:text-gray-400">
                <li>
                  <CustomLink
                    className="text-normal hover:text-blue-500 hover:underline"
                    href="https://www.earv.in/resume"
                  >
                    Resume
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    className="text-normal hover:text-blue-500 hover:underline"
                    href="mailto:earvin.piamonte@gmail.com"
                  >
                    Email
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    className="text-normal hover:text-blue-500 hover:underline"
                    href="https://about.me/earvinpiamonte"
                  >
                    about.me
                  </CustomLink>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <footer className="py-8 border-t dark:border-gray-800">
        <Container>
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 md:col-span-12 md:order-first">
              <p className="text-sm text-gray-800 dark:text-gray-400 md:mb-0 mb-0">
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
