import Link from 'next/link';

type PaginationItemPropsType = {
  path?: string;
  page?: number;
  isActive?: boolean;
  isFirstItem?: boolean;
  isLastItem?: boolean;
};

const PaginationItem = ({
  path,
  page,
  isActive,
  isFirstItem,
  isLastItem,
}: PaginationItemPropsType) => {
  return (
    <Link href={path ?? '#'}>
      <a
        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
          isActive
            ? 'z-10 bg-purple-50 border-purple-500 text-purple-600'
            : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
        } ${isFirstItem && 'rounded-l-md'} ${isLastItem && 'rounded-r-md'}`}
      >
        {page}
      </a>
    </Link>
  );
};

export default PaginationItem;
