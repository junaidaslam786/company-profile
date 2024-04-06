import React from "react";
import Link from "next/link";
import Image from "next/image";

const EventCard = ({ src, dateTime, title, content }) => {
  return (
    <Link href={"/events"} className="w-full h-full flex flex-col items-start">
      <Image
        src={src}
        width={500}
        height={500}
        className="w-full"
      />
      <div className="w-full flex flex-row items-center justify-between mt-[3vh]">
        <button className="uppercase text-blue-950 text-[0.7vw] bg-blue-100 py-[0.7vw] px-[1.5vw] rounded-full">
          Webinar
        </button>
        <p className="uppercase text-blue-950 text-[0.8vw]">{dateTime}</p>
      </div>
      <p className="text-[2vw] mt-[3vh] leading-tight text-blue-950 font-bold">
        {title}
      </p>
      <p className="text-[1vw] mt-[3vh] text-gray-600">{content}</p>
    </Link>
  );
};

export default EventCard;
