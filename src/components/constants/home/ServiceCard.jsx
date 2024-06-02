import Link from "next/link";
import Image from "next/legacy/image";

const ServiceCard = ({ detail, src, type }) => {
  return (
    <Link
      href="/"
      className="flex flex-col p-[5vmin] pb-[10vh] w-full border"
    >
      <div className="flex justify-between">
        <Image
          src={src}
          width={200}
          height={200}
          alt="Image failed to load"
          className="pt-[7vh] w-[25vmin]"
        />
        <button className="h-[5vmin] uppercase w-[15vmin] bg-sky-600 text-white rounded-full text-[1.4vmin]">
          {type}
        </button>
      </div>
      <p className="w-[95%] mt-[5vmin] text-gray-500 text-[1.1vw]">{detail}</p>
    </Link>
  );
};

export default ServiceCard;
