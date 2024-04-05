import React from "react";
import ReviewCard from "@/components/constants/home/ReviewCard";
import { IoRemoveOutline } from "react-icons/io5";

const HeroSection10 = () => {
  return (
    <div className="w-full mt-32">
      <div className="flex flex-col w-full items-center">
        <div className="w-[90%] flex flex-row items-center text-orange-500 text-[1vw] font-semibold">
          <IoRemoveOutline />
          <p className="tracking-widest uppercase">blog</p>
        </div>
        <div className="w-[90%]">
          <p className="text-blue-950 text-[3.5vw] font-bold tracking-wide mt-10">
            Tech insights collected for you
          </p>
        </div>
      </div>
      <div className="w-full mt-10">
        <ReviewCard
          src="/images/b07e0ebccccfcba7c2801f90a44e6158.jpg"
          main={"What effect on ecommerce app cost"}
          content={"Lorem Ipsum dolor simet.Lorem Ipsum dolor simet.Lorem Ipsum dolor simet.Lorem Ipsum dolor simet.Lorem Ipsum dolor simet."}
          date={"April 05, 25"}
          time={"15 minutes read"}
        />
        <ReviewCard
          src="/images/b07e0ebccccfcba7c2801f90a44e6158.jpg"
          main={"What effect on ecommerce app cost"}
          content={"Lorem Ipsum dolor simet.Lorem Ipsum dolor simet.Lorem Ipsum dolor simet.Lorem Ipsum dolor simet.Lorem Ipsum dolor simet."}
          date={"April 05, 25"}
          time={"15 minutes read"}
        />
        <ReviewCard
          src="/images/b07e0ebccccfcba7c2801f90a44e6158.jpg"
          main={"What effect on ecommerce app cost"}
          content={"Lorem Ipsum dolor simet.Lorem Ipsum dolor simet.Lorem Ipsum dolor simet.Lorem Ipsum dolor simet.Lorem Ipsum dolor simet."}
          date={"April 05, 25"}
          time={"15 minutes read"}
        />
        <ReviewCard
          src="/images/b07e0ebccccfcba7c2801f90a44e6158.jpg"
          main={"What effect on ecommerce app cost"}
          content={"Lorem Ipsum dolor simet.Lorem Ipsum dolor simet.Lorem Ipsum dolor simet.Lorem Ipsum dolor simet.Lorem Ipsum dolor simet."}
          date={"April 05, 25"}
          time={"15 minutes read"}
        />
      </div>
    </div>
  );
};

export default HeroSection10;
