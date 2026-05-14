import Image from "next/image";
import { ExternalLinkIcon } from '@heroicons/react/solid';

import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Experiences from '@/components/Experiences';
import CertificationsList from '@/components/CertificationsList';
import FeaturedPost from '@/components/FeaturedPost';
import Button from '@/components/Button';
import CustomLink from '@/components/CustomLink';

import { ExperienceType, CertificationType } from '@/types/index';
import { getAllFilesFrontMatter, getAllPostsFrontMatter } from '@/lib/mdx';

const Home = ({ experiences, certifications }: { experiences: ExperienceType[]; certifications?: CertificationType[] }) => {
  return (
    <Layout>
      <section className="pt-12 pb-20">
        <Container>
          <div className="h-36 lg:h-52 bg-gray-200 dark:bg-gray-900 rounded-md relative overflow-hidden border-2 border-blue-500">
            <Image
              src="/images/StockSnap_N9ATOCDXW5.jpg"
              priority={true}
              draggable={false}
              alt="cover"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover"
              }} />
          </div>
          <div className="flex justify-between items-center -mt-16 lg:-mt-20">
            <figure className="lg:w-44 lg:h-44 h-32 w-32 bg-gray-200 dark:bg-gray-900 rounded-full border-4 border-blue-500 relative mb-6 ml-2 lg:ml-6 overflow-hidden">
              <Image
                src="/images/avatar.jpeg"
                priority={true}
                draggable={false}
                alt="profile"
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover"
                }} />
            </figure>
            <div className="mt-12 lg:mt-6">
              <Button color={'blue'} pill={true} src="https://www.earv.in/git">
                <ExternalLinkIcon className="w-5 h-5 mr-1 inline-block" />
                <span className="align-middle">GitHub</span>
              </Button>
            </div>
          </div>
          <h1 className="text-blue-500 font-bold mb-1 text-2xl">
            Noel Earvin Piamonte
          </h1>
          <div className="mb-10">
            <div className="text-gray-600 mb-4 font-medium">
              Software Engineer,{' '}
              <CustomLink href="https://www.infor.com">Infor</CustomLink>
            </div>
            <div className="text-lg">
              <p className="mb-2">
                Building and enhancing the{" "}
                <CustomLink href="https://apps.apple.com/ph/app/infor-mscm-l/id1600517747">
                  Infor MSCM
                </CustomLink>{" "}
                mobile app for{" "}
                <abbr title="Mobile Supply Chain Management">MSCM</abbr>.
              </p>
              <p>
                Outside work, I build things for the web with React/ Next.js,
                TypeScript and Tailwind CSS.
              </p>
            </div>
          </div>
          {certifications && certifications.length > 0 && (
            <div className="mb-20">
              <h2 className="text-xl text-gray-800 font-medium dark:text-gray-400">
                Certifications
              </h2>
              <CertificationsList data={certifications} />
            </div>
          )}
          <div className="mb-20">
            <h2 className="text-xl text-gray-800 font-medium dark:text-gray-400">
              Experience
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
  const certifications = await getAllPostsFrontMatter('certification');

  return { props: { experiences, certifications } };
};

export default Home;
