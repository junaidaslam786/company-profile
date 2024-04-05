import Link from "next/link";
import Image from "next/image";

const ServiceCard = ({ detail, src }) => {
  return (
    <div>
      <Link
        href="/"
        className="flex flex-col p-[5vmin] pb-[10vh] w-full bg-gray-50 border"
      >
        <div className="flex justify-between">
          <Image
            src={src}
            width={200}
            height={200}
            alt="A picture"
            className="pt-[7vh] w-[25vmin]"
          />
          <button className="h-[5vmin] w-[15vmin] bg-sky-600 text-white rounded-full text-[1.4vmin]">
            SERVICES
          </button>
        </div>
        <p className="w-[95%] mt-[5vmin] text-gray-500 text-[1.1vw]">{detail}</p>
      </Link>
    </div>
  );
};

export default ServiceCard;
