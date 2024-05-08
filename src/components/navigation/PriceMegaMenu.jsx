import React from "react";
import MegaMenuLayout from "./MegaMenuLayout";
import Link from "next/link";

const PriceMegaMenu = () => {
  return (
    <>
      <div className="hidden md:block">
        <MegaMenuLayout>{Content()}</MegaMenuLayout>
      </div>
      <div className="md:hidden">{Content()}</div>
    </>
  );
};

const Content = () => (
  <div className="bg-white text-blueColor-0 mt-[4vw] md:mt-0 w-full">
    <h1 className="text-[1.9vw] md:text-[0.95vw] font-semibold mb-[2vw] md:mb-[1vw] font-sans underline">
      PRICING
    </h1>
    <div className="w-full md:w-1/2">
      <Link href={'/'}>
        <div className="p-[2vw] md:p-[1vw] border border-blue-300 bg-sky-50 hover:bg-sky-100 rounded-md md:rounded-lg">
          <h2>
            <p className="text-[2.4vw] md:text-[1.2vw] font-semibold">
              AWS Costs Calculator
              <span className="text-[1.5vw] md:text-[0.75vw] ml-[0.8vw] md:ml-[0.4vw] text-white bg-green-500 p-[0.4vw] md:p-[0.2vw] rounded-sm md:rounded-md">
                NEW
              </span>
            </p>
          </h2>
          <p className="text-[1.8vw] md:text-[0.95vw]">
            Get monthly AWS budget estimation in 5 steps
          </p>
        </div>
      </Link>
      <Link href={'/'}>
        <div className="p-[2vw] md:p-[1vw] hover:bg-sky-100 hover:text-skyColor-0 rounded-md md:rounded-lg mt-[1.4vw] md:mt-[0.7vw]">
          <h2>
            <p className="text-[2.4vw] md:text-[1.2vw] font-semibold">Kick-off our project</p>
          </h2>
          <p className="text-[1.8vw] md:text-[0.95vw]">
            Check your readiness for starting a software project in 10 steps
          </p>
        </div>
      </Link>
      <Link href={'/pricing/estimate'}>
        <div className="p-[2vw] md:p-[1vw] hover:bg-sky-100 hover:text-skyColor-0 rounded-md md:rounded-lg mt-[1.4vw] md:mt-[0.7vw]">
          <h2>
            <p className="text-[2.4vw] md:text-[1.2vw] font-semibold">Estimate Your App</p>
          </h2>
          <p className="text-[1.8vw] md:text-[0.95vw] tracking-tighter">
            Take a quick poll and get a clear estimation for your future mobile
            app
          </p>
        </div>
      </Link>
    </div>
  </div>
);

export default PriceMegaMenu;
