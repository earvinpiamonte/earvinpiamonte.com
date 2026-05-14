import { CertificationType } from '@/types/index';

import CertificationItem from '@/components/CertificationItem';

const CertificationsList = ({ data }: { data?: CertificationType[] }) => {
  const certifications = (data ?? []).sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <>
      {certifications.length > 0 && (
        <>
          <div className="mb-20">
            {certifications.map((certification, i) => (
              <CertificationItem key={i} {...certification} />
            ))}
          </div>
          <div className="mb-0">{/* <Pagination /> */}</div>
        </>
      )}
    </>
  );
};

export default CertificationsList;
