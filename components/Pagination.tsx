import PaginationItem from '@/components/PaginationItem';

const Pagination = () => {
  return (
    <nav
      className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
      aria-label="Pagination"
    >
      <PaginationItem page={1} isFirstItem={true} />
      <PaginationItem page={2} isActive={true} />
      <PaginationItem page={3} />
      <PaginationItem page={4} isLastItem={true} />
    </nav>
  );
};

export default Pagination;
