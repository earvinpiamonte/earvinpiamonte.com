import Image from 'next/image';
import { useRouter } from 'next/router';

const SocialPreview = () => {
  const router = useRouter();

  const {
    title = 'Noel Earvin Piamonte',
    subTitle = 'Software Engineer',
    text = 'Mandaluyong City, Philippines',
    url = 'earvinpiamonte.com',
  } = router.query;

  return (
    <div
      style={{ width: '1200px', height: '630px' }}
      className="bg-gray-900 text-white pt-20 pb-10 px-14 mx-auto"
    >
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <h1 className="text-6xl mt-10 mb-12 font-bold truncate bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-purple-500">
            {title}
          </h1>
          <h2 className="text-4xl truncate">{subTitle}</h2>
          <p className="text-2xl truncate mb-12">{text}</p>
          <p className="text-4xl font-bold">{url}</p>
        </div>
        <div className="col-span-4 relative">
          <Image
            src="/images/avatar.jpeg"
            layout="fill"
            className="rounded-lg"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialPreview;
