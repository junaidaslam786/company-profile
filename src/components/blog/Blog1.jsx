import React from "react";
import BlogsLayout from "@/components/constants/blog/blogsLayout";
import ScrollSectionLeft from "../constants/blog/ScrollSectionLeft";
import ScrollSectionRight from "../constants/blog/ScrollSectionRight";

const Blog1 = () => {
  return (
    <div className="w-full mt-[5vw]">
      <BlogsLayout
        title={"Featured"}
        id={"1"}
        button={"Browse all featured articles"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3vw] w-full h-full">
          <div className="h-full lg:h-[70vh] lg:sticky lg:top-[15vh]">
            <ScrollSectionLeft
              src={"/images/b07e0ebccccfcba7c2801f90a44e6158.jpg"}
              time={"15 minutes read"}
              dateTime={"Apr 24, 2024"}
              title={"How to protect intellectual property of your clients"}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3vw]">
            <div className="lg:mb-[6vw] flex flex-col gap-[3vw]">
              <ScrollSectionRight
                src={"/images/b07e0ebccccfcba7c2801f90a44e6158.jpg"}
                time={"15 minutes read"}
                dateTime={"Apr 24, 2024"}
                title={"How to protect intellectual property of your clients"}
              />
              <ScrollSectionRight
                src={"/images/b07e0ebccccfcba7c2801f90a44e6158.jpg"}
                time={"15 minutes read"}
                dateTime={"Apr 24, 2024"}
                title={"How to protect intellectual property of your clients"}
              />
              <ScrollSectionRight
                src={"/images/b07e0ebccccfcba7c2801f90a44e6158.jpg"}
                time={"15 minutes read"}
                dateTime={"Apr 24, 2024"}
                title={"How to protect intellectual property of your clients"}
              />
              <ScrollSectionRight
                src={"/images/b07e0ebccccfcba7c2801f90a44e6158.jpg"}
                time={"15 minutes read"}
                dateTime={"Apr 24, 2024"}
                title={"How to protect intellectual property of your clients"}
              />
            </div>
            <div className="lg:mt-[6vw] flex flex-col gap-[3vw]">
              <ScrollSectionRight
                src={"/images/b07e0ebccccfcba7c2801f90a44e6158.jpg"}
                time={"15 minutes read"}
                dateTime={"Apr 24, 2024"}
                title={"How to protect intellectual property of your clients"}
              />
              <ScrollSectionRight
                src={"/images/b07e0ebccccfcba7c2801f90a44e6158.jpg"}
                time={"15 minutes read"}
                dateTime={"Apr 24, 2024"}
                title={"How to protect intellectual property of your clients"}
              />
              <ScrollSectionRight
                src={"/images/b07e0ebccccfcba7c2801f90a44e6158.jpg"}
                time={"15 minutes read"}
                dateTime={"Apr 24, 2024"}
                title={"How to protect intellectual property of your clients"}
              />
              <ScrollSectionRight
                src={"/images/b07e0ebccccfcba7c2801f90a44e6158.jpg"}
                time={"15 minutes read"}
                dateTime={"Apr 24, 2024"}
                title={"How to protect intellectual property of your clients"}
              />
            </div>
          </div>
        </div>
      </BlogsLayout>
    </div>
  );
};

export default Blog1;
