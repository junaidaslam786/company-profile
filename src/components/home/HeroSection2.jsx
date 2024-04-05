"use client";

import React from "react";
import ScrollCard from "@/components/constants/ScrollCard";
import { IoRemoveOutline } from "react-icons/io5";

const Herosection2 = () => {
  return (
    <div className="flex w-full bg-white relative">
      <div className="flex flex-col items-center w-1/3 pl-6 sticky top-[8vh] h-[80vh] ">
        <div className="w-5/6">
          <div className="flex flex-row items-center text-orange-500 text-[1vw] font-semibold">
            <IoRemoveOutline />
            <p className="tracking-widest uppercase">WE PROVIDE</p>
          </div>
          <h5 className="text-[3.5vw] w-[12vw] font-bold leading-tight text-blue-950 mt-7">
            Custom software development services
          </h5>
          <p className="text-[1.3vw] mt-6 text-blue-950">
            Full-cycle custom software services to develop unique software
            solutions.
          </p>
        </div>
      </div>
      <div className="w-2/3">
        <div className="flex">
          <div className="flex flex-col">
            <ScrollCard
              title="Custom Software Development"
              content="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard
              title="Custom Software Development"
              content="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard
              title="Custom Software Development"
              content="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard
              title="Custom Software Development"
              content="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard
              title="Custom Software Development"
              content="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard
              title="Custom Software Development"
              content="Building scalable customized software solution by applying innovative technology"
            />
          </div>
          <div className="flex flex-col mt-[18%]">
            <ScrollCard
              title="Custom Software Development"
              content="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard
              title="Custom Software Development"
              content="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard
              title="Custom Software Development"
              content="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard
              title="Custom Software Development"
              content="Building scalable customized software solution by applying innovative technology"
              bottoms={'border-b'}
            />
            <ScrollCard
              title="Custom Software Development"
              content="Building scalable customized software solution by applying innovative technology"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection2;
