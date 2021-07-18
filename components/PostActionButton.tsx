import { ExternalLinkIcon } from '@heroicons/react/solid';

const PostActionButton = ({ src, title }) => {
  return (
    <a
      href={src}
      className="px-4 py-1 border border-purple-500 rounded-full inline-block mr-2 text-sm text-purple-500 hover:text-white hover:bg-purple-800 hover:border-purple-800"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ExternalLinkIcon className="w-4 h-4 inline-block mr-1" />
      <span className="align-middle">{title}</span>
    </a>
  );
};

export default PostActionButton;
