import Link from "next/link";
import Image from "next/image";

const ExpertCard = ({ src, heading, para }) => {
  return (
    <div>
      <Link href="/" className="flex flex-col pl-8 w-1/2 h-80 bg-slate-500">
        <div className="flex justify-around flow-row">
          <Image width={100} height={100} src={src} className="pt-12"/>
          <button className="w-40 h-8 mt-4 bg-blue-900 rounded-full">
            EXPERT MATERIAL
          </button>
        </div>
        <h5 className="font-extrabold w-80">{heading}</h5>
        <p className="font-light w-3/5">{para}</p>
      </Link>
    </div>
  );
};

export default ExpertCard;
