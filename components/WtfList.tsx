import { WtfType } from '@/types/index';

import WtfItem from '@/components/WtfItem';

const WtfList = ({ data }: { data?: WtfType[] }) => {
  const wtfs = data ?? [];

  return (
    <>
      {wtfs.length > 0 && (
        <>
          <div className="mb-20">
            {wtfs.map((item, i) => (
              <WtfItem key={i} {...item} />
            ))}
          </div>
          <div className="mb-0">{/* <Pagination /> */}</div>
        </>
      )}
    </>
  );
};

export default WtfList;
