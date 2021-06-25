import getConfig from "next/config";

import Layout from "@/components/Layout";

const { publicRuntimeConfig } = getConfig();
const { title } = publicRuntimeConfig.site;

const Home = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1>{title}</h1>
          <p>
            <a
              className="app-link"
              href="https://www.earvinpiamonte.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.earvinpiamonte.com
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
