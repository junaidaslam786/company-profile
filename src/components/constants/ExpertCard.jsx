import Link from "next/link";
import Image from "next/image";

const ExpertCard = ({ src, heading, detail }) => {
  return (
    <div>
      <Link href="/" className="flex flex-col p-[5vmin] pb-[10vh] w-full bg-gray-50 border">
        <div className="flex justify-between">
          <Image width={100} height={100} src={src} className="pt-[7vh] w-[20vmin]" alt="A picture"/>
          <button className="h-[5vmin] w-[20vmin] bg-blue-950 text-white rounded-full text-[1.4vmin]">
            EXPERT MATERIAL
          </button>
        </div>
        <h5 className="font-bold w-[85%] mt-[5vmin] text-blue-950 text-[1.8vw]">{heading}</h5>
        <p className="w-[95%] mt-6 text-gray-500 text-[1.1vw]">{detail}</p>
      </Link>
    </div>
  );
};

export default ExpertCard;
