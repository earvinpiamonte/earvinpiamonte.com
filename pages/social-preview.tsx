import { useRouter } from "next/router";

import { PencilIcon } from "@heroicons/react/solid";

const SocialPreview = () => {
  const router = useRouter();

  const { title, subTitle, text } = router.query;

  const previewTitle = title ?? "Noel Earvin Piamonte";
  const previewSubTitle = title ? subTitle || <>&nbsp;</> : "Software Engineer";
  const previewText = title ? text || <>&nbsp;</> : "Baguio City, Philippines";

  return (
    <div
      style={{ width: 1200, height: 630 }}
      className="bg-gray-900 text-white pt-20 pb-10 px-16 mx-auto"
    >
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <h1 className="text-6xl mt-10 mb-12 font-bold truncate bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-500">
            {previewTitle}
          </h1>
          <h2 className="text-4xl truncate">{previewSubTitle}</h2>
          <p className="text-2xl truncate mb-12">{previewText}</p>
          <p className="text-4xl font-bold">earvinpiamonte.com</p>
        </div>
        <div className="col-span-4 place-items-center content-center">
          <PencilIcon className="w-2/3 text-white bg-blue-500 rounded-full p-2 border-8 border-blue-800" />
        </div>
      </div>
    </div>
  );
};

export default SocialPreview;
