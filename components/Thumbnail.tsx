import Image from 'next/image';

const Thumbnail = (props) => {
  return (
    <div className="app-thumbnail">
      <Image
        layout="responsive"
        width={720}
        height={405}
        draggable={false}
        {...props}
      />
    </div>
  );
};

export default Thumbnail;
