import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { ProjectType } from '@/types/index';

import Layout from '@/components/Layout';
import MDXComponents from '@/components/MDXComponents';

import ProjectTemplate from '@/templates/ProjectTemplate';

import { getAllPosts, getPostBySlug } from '@/lib/mdx';

const ProjectPost = ({
  mdxSource,
  frontMatter,
}: {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: ProjectType;
}) => {
  const { title } = frontMatter;

  return (
    <Layout {...{ title, description: '' }}>
      <ProjectTemplate frontMatter={frontMatter}>
        <div className="relative">
          <MDXRemote
            {...mdxSource}
            components={{
              ...MDXComponents,
            }}
          />
        </div>
      </ProjectTemplate>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts('project');

  return {
    paths: posts.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostBySlug('project', params.slug);

  return { props: { ...post } };
};

export default ProjectPost;
