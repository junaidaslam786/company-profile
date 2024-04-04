import Link from "next/link";
import Image from "next/image";

const ServiceCard = ({ detail }) => {
  return (
    <div>
      <Link
        href="/"
        className="flex flex-col p-8 pb-10 w-full bg-gray-50 border"
      >
        <div className="flex justify-between">
          <Image
            src="/images/644a9965b4060da6a3dbc180_libraria-logo.svg"
            width={200}
            height={200}
            alt="A picture"
            className="pt-16"
          />
          <button className="h-[5vmin] w-[15vmin] bg-sky-600 text-white rounded-full text-[0.7vw]">
            SERVICES
          </button>
        </div>
        <p className="w-[95%] mt-6 text-gray-500 text-[1.1vw]">{detail}</p>
      </Link>
    </div>
  );
};

export default ServiceCard;
