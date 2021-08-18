import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Experiences from '@/components/Experiences';
import FeaturedPost from '@/components/FeaturedPost';

import { ExperienceType } from '@/types/index';
import { getAllFilesFrontMatter } from '@/lib/mdx';

const Home = ({ experiences }: { experiences: ExperienceType[] }) => {
  return (
    <Layout>
      <section className="pt-12 pb-20">
        <Container>
          <h1 className="mb-6 tracking-wider">
            <span className="block text-lg">Hello, I'm</span>{' '}
            <span className="text-5xl font-semibold text-purple-500">
              Noel Earvin Piamonte.
            </span>
          </h1>
          <div className="mb-12 text-xl tracking-wide">
            <p className="mb-6">
              I'm a software developer based in Mandaluyong City, Philippines. I
              work at{' '}
              <a
                href="https://www.infor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="app-link"
              >
                Infor
              </a>{' '}
              as a Software Engineer.
            </p>
            <p>
              Outside work, I build{' '}
              <a
                href="https://github.com/earvinpiamonte"
                target="_blank"
                rel="noopener noreferrer"
                className="app-link"
              >
                things
              </a>{' '}
              for the web with React and Tailwind CSS.
            </p>
          </div>
          <div className="mb-20">
            <h2 className="text-xl text-gray-800 font-medium dark:text-gray-400">
              Timeline
            </h2>
            <Experiences data={experiences} />
          </div>
          <div className="mb-0">
            <FeaturedPost />
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
