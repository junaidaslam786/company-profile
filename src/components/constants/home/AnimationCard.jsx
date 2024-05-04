import React from "react";

const AnimationCard = ({ id, title, content, hoveredColor }) => {
  return (
    <div className={`border group bg-blueColor-0 border-gray-600 rounded-[2vmin] w-[50vw] flex flex-col justify-start items-start p-[15vmin] ${hoveredColor} hover:-translate-y-16 duration-500`}>
      <p className="text-white text-[1vw]">[{id}]</p>
      <p className="text-white text-[3.5vw] font-bold">{title}</p>
      <p className="text-white text-[1.2vw] mb-[15%] opacity-0 group-hover:opacity-100 duration-500">{content}</p>
    </div>
  );
};

export default AnimationCard;
