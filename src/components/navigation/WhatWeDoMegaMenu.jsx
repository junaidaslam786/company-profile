import React from "react";
import MegaMenuLayout from "./MegaMenuLayout";
import Link from "next/link";

const WhatWeDoMegaMenu = () => {
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
  <div className="bg-white mt-[4vw] md:mt-0 p-[1vw]">
    <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-[8vw] md:gap-[4vw]">
      <div>
        <h2 className="font-semibold ml-[1.5vw] md:ml-[0.75vw] text-blueColor-0 text-[1.8vw] md:text-[0.9vw] font-sans underline mb-[2vw] md:mb-[1vw]">
          <Link href={"/services"} className="hover:text-skyColor-0">
            SERVICES
          </Link>
        </h2>
        <ul className="text-[1.9vw] md:text-[0.95vw]">
          {[
            "Software Architecture",
            "Software Product Development",
            "Mobile Development",
            "UX/UI Design",
            "Quality Assurance",
            "Business Analysis",
            "Dedicated Teams",
            "Extended Teams",
          ].map((service) => (
            <Link href="/service-detail" key={service}>
              <li className="text-blueColor-0 hover:bg-sky-100 hover:text-skyColor-0 rounded-md md:rounded-lg p-[1.5vw] md:p-[0.75vw] mt-[1vw] md:mt-[0.5vw] cursor-pointer">
                {service}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="font-semibold ml-[1.5vw] md:ml-[0.75vw] text-blueColor-0 text-[1.8vw] md:text-[0.9vw] font-sans underline mb-[2vw] md:mb-[1vw]">
          <Link href={"/services"} className="hover:text-skyColor-0">
            INDUSTRIES
          </Link>
        </h2>
        <ul className="text-[1.9vw] md:text-[0.95vw]">
          {[
            "Real Estate",
            "Education",
            "Insurance",
            "Finance & Banking",
            "Marketing & Advertising",
            "Cryptocurrency",
            "Agriculture",
          ].map((industry) => (
            <Link href="/service-detail" key={industry}>
              <li className="text-blueColor-0 hover:bg-sky-100 hover:text-skyColor-0 rounded-md md:rounded-lg p-[1.5vw] md:p-[0.75vw] cursor-pointer">
                {industry}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="font-semibold ml-[1.5vw] md:ml-[0.75vw] text-blueColor-0 text-[1.8vw] md:text-[0.9vw] font-sans underline mb-[2vw] md:mb-[1vw]">
          <Link href={"/services"} className="hover:text-skyColor-0">
            EXPERTISE
          </Link>
        </h2>
        <ul className="text-[1.9vw] md:text-[0.95vw]">
          {[
            "DevOps & Infrastructure",
            "Cloud Architecture",
            "IoT Application Development",
          ].map((expertise) => (
            <Link href="/service-detail" key={expertise}>
              <li className="text-blueColor-0 hover:bg-sky-100 hover:text-skyColor-0 rounded-md md:rounded-lg p-[1.5vw] md:p-[0.75vw] cursor-pointer">
                {expertise}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default WhatWeDoMegaMenu;
