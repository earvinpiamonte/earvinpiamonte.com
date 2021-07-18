import { PostType } from '@/types/index';

import BlogPostItem from '@/components/BlogPostItem';

const BlogPosts = ({ data }: { data?: PostType[] }) => {
  const posts = data ?? [];

  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {posts.length > 0 && (
        <>
          <div className="mb-20">
            {sortedPosts.map((post, i) => (
              <BlogPostItem key={i} {...post} />
            ))}
          </div>
          <div className="mb-0">{/* <Pagination /> */}</div>
        </>
      )}
    </>
  );
};

export default BlogPosts;
