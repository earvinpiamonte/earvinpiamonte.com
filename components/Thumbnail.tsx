import Image from 'next/image';

const Thumbnail = (props) => {
  return (
    <div className="app-thumbnail">
      <Image
        layout="responsive"
        width={1200}
        height={630}
        draggable={false}
        {...props}
      />
    </div>
  );
};

export default Thumbnail;
