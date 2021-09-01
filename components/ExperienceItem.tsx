import { CheckCircleIcon } from '@heroicons/react/solid';

const ExperienceItem = ({ ...experienceItem }) => {
  const { title, company, location, yearStart, yearEnd, tools } =
    experienceItem;

  return (
    <>
      <div className="flex items-center -mt-1">
        <CheckCircleIcon className="w-6 h-6 mr-2.5 text-purple-500 flex-none" />
        <p className="font-medium mb-0 text-purple-500 truncate">{title}</p>
      </div>
      <div className="ml-3 -mt-1 pl-6 pb-6 text-gray-600 border-l border-purple-500">
        <p className="mb-0">
          <span className="font-medium">{company}</span> &middot; {location}
        </p>
        <p className="mb-0 text-sm">
          {yearStart}{' '}
          {yearStart !== yearEnd && <>&mdash; {`${yearEnd ?? 'Present'}`}</>}
        </p>
        {tools.length > 0 && <p className="mb-0">{tools.join(', ')}</p>}
      </div>
    </>
  );
};

export default ExperienceItem;
