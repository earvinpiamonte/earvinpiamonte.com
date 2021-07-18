import { CraftType } from '@/types/index';

import CraftItem from '@/components/CraftItem';

const CraftsList = ({ data }: { data?: CraftType[] }) => {
  const crafts = data ?? [];

  return (
    <>
      {crafts.length > 0 && (
        <>
          <div className="mb-20">
            {crafts.map((craft, i) => (
              <CraftItem key={i} {...craft} />
            ))}
          </div>
          <div className="mb-0">{/* <Pagination /> */}</div>
        </>
      )}
    </>
  );
};

export default CraftsList;
