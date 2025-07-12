import Image from "next/image";

const Thumbnail = (props) => {
  return (
    <div className="app-thumbnail">
      <Image
        width={1200}
        height={630}
        draggable={false}
        {...props}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto"
        }} />
    </div>
  );
};

export default Thumbnail;
