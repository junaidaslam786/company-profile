import React from "react";
import BlueButton from "@/components/constants/cases/BlueButton";
import DarkButton from "@/components/constants/cases/DarkButton";
import RedButton from "@/components/constants/cases/RedButton";

const Case2 = () => {
  return (
    <div className="border-t w-full py-[3vw] grid grid-cols-[0.3fr,1fr,0.9fr] grid-rows-auto gap-x-[1.11vw]">
      <div className="col-span-1 row-span-1">
        <p className="text-[1vw] text-gray-500 mb-[2vh]">Select by type:</p>
        <div className="flex flex-wrap gap-[0.69vw] justify-start">
          <DarkButton button={"Both"} />
          <DarkButton button={"Web App"} />
          <DarkButton button={"Mobile App"} />
        </div>
      </div>
      <div className="col-span-1 row-span-1">
        <p className="text-[1vw] text-gray-500 mb-[2vh]">Select by industry:</p>
        <div className="flex flex-wrap gap-[0.69vw] justify-between">
          <BlueButton button={"Automotive"} />
          <BlueButton button={"Education"} />
          <BlueButton button={"Finance"} />
          <BlueButton button={"Adtech"} />
          <BlueButton button={"Insurance"} />
          <BlueButton button={"Social"} />
          <BlueButton button={"Hr & Recruitment"} />
          <BlueButton button={"Internet services"} />
          <BlueButton button={"sport"} />
          <BlueButton button={"Logistics"} />
          <BlueButton button={"Real Estate"} />
        </div>
      </div>
      <div className="col-span-1 row-span-1">
        <p className="text-[1vw] text-gray-500 mb-[2vh]">Select by technology:</p>
        <div className="flex flex-wrap gap-[0.69vw] justify-between">
          <RedButton button={"React"} />
          <RedButton button={"Node.js"} />
          <RedButton button={"Java"} />
          <RedButton button={"Php"} />
          <RedButton button={"Obj-C"} />
          <RedButton button={"Kotlin"} />
          <RedButton button={"Swift"} />
          <RedButton button={"Flutter"} />
          <RedButton button={"React Native"} />
          <RedButton button={"Javascript"} />
          <RedButton button={"UX/UI Solution"} />
          <RedButton button={"Python"} />
        </div>
      </div>
    </div>
  );
};

export default Case2;
