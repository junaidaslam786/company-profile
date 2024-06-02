import Link from "next/link";
import Image from "next/legacy/image";

const ExpertCard = ({ src, heading, detail, type }) => {
  return (
    <Link
      href="/"
      className="flex flex-col p-[5vmin] pb-[10vh] w-full border"
    >
      <div className="flex justify-between">
        <Image
          width={100}
          height={100}
          src={src}
          className="pt-[7vh] w-[20vmin]"
          alt="Image failed to load"
        />
        <button className="h-[5vmin] uppercase w-[20vmin] bg-blueColor-0 text-white rounded-full text-[1.4vmin]">
          {type}
        </button>
      </div>
      <p className="font-bold w-[85%] mt-[5vmin] text-blueColor-0 text-[1.8vw]">
        {heading}
      </p>
      <p className="w-[95%] mt-6 text-gray-500 text-[1.1vw]">{detail}</p>
    </Link>
  );
};

export default ExpertCard;
