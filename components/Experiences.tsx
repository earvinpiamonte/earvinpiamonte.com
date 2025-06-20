import { ExperienceType } from '../types';
import ExperienceItem from './ExperienceItem';

const Experiences = ({ data }: { data: ExperienceType[] }) => {
  return (
    <div>
      {data
        .sort(
          (a, b) =>
            Number(b.yearEnd) - Number(a.yearEnd ?? new Date().getFullYear())
        )
        .map((experienceItem, i) => (
          <ExperienceItem key={i} index={i} {...experienceItem} />
        ))}
    </div>
  );
};

export default Experiences;
