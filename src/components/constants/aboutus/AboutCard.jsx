import React from "react";

const AboutCard = ({ hoveredColor, id, title, content }) => {
  return (
    <div
      className={`bg-white border hover:border-none group border-gray-600 rounded-[0.6vw] md:rounded-[0.3vw] w-[70vw] md:w-[25vw] p-[2vw] flex flex-col items-start ${hoveredColor} hover:-translate-y-16 duration-500`}
    >
      <p className="text-blueColor-0 text-[2.5vw] md:text-[1vw]">[{id}]</p>
      <div className="flex flex-col items-center justify-center py-[5vw]">
        <p className="text-blueColor-0 text-[5vw] md:text-[2.2vw] font-bold">
          {title}
        </p>
        <p className="font-lato text-blueColor-0 text-center text-[3vw] md:text-[1.2vw] mb-[15%] opacity-0 group-hover:opacity-100 duration-500">
          {content}
        </p>
      </div>
    </div>
  );
}

export default AboutCard;
