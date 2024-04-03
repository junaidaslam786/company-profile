import React from "react";

const AnimationCard = ({ id, title, content }) => {
  return (
    <div className="border border-gray-600 w-3/4 flex flex-col justify-start items-start p-[15vmin] hover:bg-orange-400 hover:-translate-y-16 duration-700">
      <p className="text-white text-[1vw]">[{id}]</p>
      <p className="text-white text-[3.5vw] font-bold">{title}</p>
      <p className="text-white text-[1.2vw] mb-[30%]">{content}</p>
    </div>
  );
};

export default AnimationCard;
