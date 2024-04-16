import React from "react";
import BlogsLayout from "@/components/constants/blog/BlogsLayout";
import IndustrialArticle from "../constants/blog/IndustrialArticle";
import Link from "next/link";

const Blog3 = () => {
  return (
    <div className="w-full">
      <BlogsLayout
        title={"Expert material"}
        id={"1"}
        button={"Browse all ecstatic articles"}
      >
        <div className="flex flex-wrap gap-[1vw] justify-start items-center max-w-full mb-[1vw]">
          <Link
            href={"/blog"}
            className="uppercase text-blueColor-0 hover:text-white text-[1.5vw] lg:text-[0.8vw] bg-blue-100 hover:bg-blueColor-0 duration-500 px-[2vw] py-[1vw] rounded-full"
          >
            Ecstatic
          </Link>
          <Link
            href={"/blog"}
            className="uppercase text-blueColor-0 hover:text-white text-[1.5vw] lg:text-[0.8vw] bg-blue-100 hover:bg-blueColor-0 duration-500 px-[2vw] py-[1vw] rounded-full"
          >
            insurance
          </Link>
          <Link
            href={"/blog"}
            className="uppercase text-blueColor-0 hover:text-white text-[1.5vw] lg:text-[0.8vw] bg-blue-100 hover:bg-blueColor-0 duration-500 px-[2vw] py-[1vw] rounded-full"
          >
            real estate
          </Link>
          <Link
            href={"/blog"}
            className="uppercase text-blueColor-0 hover:text-white text-[1.5vw] lg:text-[0.8vw] bg-blue-100 hover:bg-blueColor-0 duration-500 px-[2vw] py-[1vw] rounded-full"
          >
            education
          </Link>
          <Link
            href={"/blog"}
            className="uppercase text-blueColor-0 hover:text-white text-[1.5vw] lg:text-[0.8vw] bg-blue-100 hover:bg-blueColor-0 duration-500 px-[2vw] py-[1vw] rounded-full"
          >
            ad tech
          </Link>
          <Link
            href={"/blog"}
            className="uppercase text-blueColor-0 hover:text-white text-[1.5vw] lg:text-[0.8vw] bg-blue-100 hover:bg-blueColor-0 duration-500 px-[2vw] py-[1vw] rounded-full"
          >
            finance
          </Link>
        </div>
        <div className="flex flex-col -mb-[7vw]">
          <IndustrialArticle
            src={"/images/b07e0ebccccfcba7c2801f90a44e6158.jpg"}
            title={"Lorem Ipsum dolor simet kiat behmis fahsiq kideut khoted"}
            industry={"Ecstatic"}
            dateTime={"apr 07, 2024"}
            time={"15 minutes read"}
          />
          <IndustrialArticle
            src={"/images/b07e0ebccccfcba7c2801f90a44e6158.jpg"}
            title={"Lorem Ipsum dolor simet kiat behmis fahsiq kideut khoted"}
            industry={"Ecstatic"}
            dateTime={"apr 07, 2024"}
            time={"15 minutes read"}
          />
          <IndustrialArticle
            src={"/images/b07e0ebccccfcba7c2801f90a44e6158.jpg"}
            title={"Lorem Ipsum dolor simet kiat behmis fahsiq kideut khoted"}
            industry={"Ecstatic"}
            dateTime={"apr 07, 2024"}
            time={"15 minutes read"}
          />
        </div>
      </BlogsLayout>
    </div>
  );
};
export default Blog3;
