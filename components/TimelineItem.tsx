const TimelineItem = ({ ...timelineItem }) => {
  const { title, summary } = timelineItem;
  return (
    <>
      <div className="flex items-center">
        <svg
          className="w-6 h-6 mr-2 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="font-medium mb-0">{title}</p>
      </div>
      <p className="ml-8 mb-4 text-gray-700">{summary}</p>
    </>
  );
};

export default TimelineItem;
