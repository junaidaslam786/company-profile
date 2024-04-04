import React from "react";
import FAQCard from "@/components/constants/FAQCard";

const HeroSection12 = () => {
  return (
    <div className="w-full mb-20">
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-row w-[90%] text-orange-500 text-[1vw] font-semibold">
          __<p className="tracking-widest">FAQS</p>
        </div>
        <div className="w-4/5">
          <p className="text-blue-950 text-[3.5vw] font-bold font-sans tracking-wide mt-10">
            Questions & Answers
          </p>
        </div>
        <div className="w-4/5 mt-10">
          <FAQCard question={"This is a question sample. And Now I'm extending it to understand its behaviour"} />
          <FAQCard question={"This is a question sample. And Now I'm extending it to understand its behaviour"} />
          <FAQCard question={"This is a question sample. And Now I'm extending it to understand its behaviour"} />
          <FAQCard question={"This is a question sample. And Now I'm extending it to understand its behaviour"} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection12;
