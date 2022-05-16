import { CheckCircleIcon } from '@heroicons/react/solid';

const ExperienceItem = (props) => {
  const { index, title, company, location, yearStart, yearEnd, tools } = props;

  return (
    <>
      <div className="flex">
        <div className="relative before:h-full before:w-[1px] before:bg-gray-200 before:dark:bg-gray-600 before:absolute before:left-3 before:top-1 before:-z-10">
          <CheckCircleIcon
            className={`w-6 h-6 flex-none dark:bg-black bg-white rounded-full p-0 ${
              index === 0 ? 'text-blue-500' : 'text-blue-500'
            }`}
          />
        </div>
        <div className="px-4 mb-6 text-gray-600">
          <p className="font-medium mb-0 text-blue-500">{title}</p>
          <p className="mb-0">
            <span className="font-medium">{company}</span> &middot; {location}
          </p>
          <p className="mb-0 text-sm">
            {yearStart}{' '}
            {yearStart !== yearEnd && <>&mdash; {`${yearEnd ?? 'Present'}`}</>}
          </p>
          {tools.length > 0 && <p className="mb-0">{tools.join(', ')}</p>}
        </div>
      </div>
    </>
  );
};

export default ExperienceItem;
