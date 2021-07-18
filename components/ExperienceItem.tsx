import { CheckCircleIcon } from '@heroicons/react/outline';

const ExperienceItem = ({ ...experienceItem }) => {
  const { title, company, location, yearStart, yearEnd, tools } =
    experienceItem;

  return (
    <>
      <div className="flex items-center">
        <CheckCircleIcon className="w-6 h-6 mr-2 text-purple-500" />
        <p className="font-medium mb-0 text-gray-800 dark:text-gray-400">
          {title}
        </p>
      </div>
      <div className="ml-8 mb-4 text-gray-600">
        <p className="mb-0">
          <span className="font-medium">{company}</span> &middot; {location}
        </p>
        <p className="mb-1 text-sm">
          {yearStart}{' '}
          {yearStart !== yearEnd && <>&mdash; {`${yearEnd ?? 'Present'}`}</>}
        </p>
        {tools.length > 0 && <p className="mb-0">{tools.join(', ')}.</p>}
      </div>
    </>
  );
};

export default ExperienceItem;
