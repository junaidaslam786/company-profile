import React from "react";
import Image from "next/image";
import Link from "next/link";

const IndustrialArticle = ({ src, title, industry, dateTime, time }) => {
  return (
    <Link
      href={"/blog"}
      className="w-full flex gap-[2vw] flex-col lg:flex-row items-center justify-between border-b py-[2vw]"
    >
      <div className="w-full lg:w-3/5 flex flex-col md:flex-row items-center gap-[2vw]">
        <Image src={src} width={500} height={500} alt={"Image Failed to Load"} className="w-full md:w-1/3 h-[50vw] md:h-[15vw] lg:h-[10vw]" />
        <p className="text-[3vw] lg:text-[1.5vw] font-bold text-blueColor-0">{title}</p>
      </div>
      <div className="w-full lg:w-2/5 flex flex-row items-center justify-around lg:justify-between">
        <p className="uppercase text-blueColor-0 text-[1.5vw] lg:text-[0.8vw] bg-blue-100 px-[2vw] py-[1vw] rounded-full">
          {industry}
        </p>
        <p className="uppercase text-blueColor-0 text-[1.5vw] lg:text-[0.8vw]">
          {dateTime}
        </p>
        <p className="uppercase text-blueColor-0 text-[1.5vw] lg:text-[0.8vw]">
          {time}
        </p>
      </div>
    </Link>
  );
};

export default IndustrialArticle;
