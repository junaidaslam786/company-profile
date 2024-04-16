import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BlogsLayout = ({ title, id, button, children }) => {
  return (
    <div className="flex flex-col py-[5vw] w-full">
      <div className="flex flex-row w-full items-baseline justify-between py-[0.3vw] border-b border-blueColor-0">
        <p className="text-[3.5vw] text-blueColor-0 font-sans font-extrabold uppercase">
          {title}
        </p>
        <p className="text-[1vw] font-semibold text-blueColor-0">[{id}]</p>
      </div>
      <div className="mt-[3vw]">{children}</div>
      <div className="w-full flex flex-col items-center mt-[8vw]">
        <button className="p-[1vw] text-white bg-sky-500 group hover:bg-blueColor-0 uppercase flex flex-row items-center">
          <p className="text-[0.8vw] font-semibold">{button}</p>
          <FaArrowRight className="text-[1.2vw] transition-transform transform -rotate-45 group-hover:rotate-0 ml-[1vw] duration-300" />
        </button>
      </div>
    </div>
  );
};

export default BlogsLayout;
