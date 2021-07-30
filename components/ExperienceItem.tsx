import { CheckCircleIcon } from '@heroicons/react/outline';

const ExperienceItem = ({ ...experienceItem }) => {
  const { title, company, location, yearStart, yearEnd, tools } =
    experienceItem;

  return (
    <>
      <div className="flex items-center -mt-1">
        <CheckCircleIcon className="w-8 h-8 mr-2.5 text-purple-500 flex-none" />
        <p className="font-medium mb-0 text-gray-800 dark:text-gray-400 truncate">
          {title}
        </p>
      </div>
      <div className="ml-4 -mt-1 pl-6 pb-6 text-gray-600 border-l-2 border-purple-500">
        <p className="mb-0">
          <span className="font-medium">{company}</span> &middot; {location}
        </p>
        <p className="mb-0 text-sm">
          {yearStart}{' '}
          {yearStart !== yearEnd && <>&mdash; {`${yearEnd ?? 'Present'}`}</>}
        </p>
        {tools.length > 0 && <p className="mb-0">{tools.join(', ')}.</p>}
      </div>
    </>
  );
};

export default ExperienceItem;
