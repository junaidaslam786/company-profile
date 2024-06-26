import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";

const BasicCard = ({ src, dateTime, title, content, time, href }) => {
  return (
    <Link
      href={href}
      className="w-full h-full flex flex-col md:flex-row gap-0 md:gap-[5vw] lg:gap-0 lg:flex-col items-start md:items-center lg:items-start"
    >
      <Image
        src={src}
        width={500}
        height={500}
        alt={"Image Failed to Load"}
        className="w-screen h-[50vw] md:h-[25vw] lg:h-[17vw]"
      />
      <div className="h-2/3 w-full flex flex-col justify-between">
        <div className="w-full flex flex-row items-center justify-between mt-[3vh] md:mt-0 lg:mt-[3vh]">
          <p className="uppercase text-blueColor-0 text-[1.5vw] lg:text-[0.8vw]">
            {time}
          </p>
          <p className="uppercase text-blueColor-0 text-[1.5vw] lg:text-[0.8vw]">
            {dateTime}
          </p>
        </div>
        <p className="text-[3vw] md:text-[2.5vw] lg:text-[1.8vw] mt-[3vh] md:mt-0 lg:mt-[3vh] leading-tight text-blueColor-0 font-bold">
          {title}
        </p>
        <p className="text-[2vw] md:text-[1.5vw] lg:text-[1vw] mt-[3vh] text-gray-600">{content}</p>
      </div>
    </Link>
  );
};

export default BasicCard;
