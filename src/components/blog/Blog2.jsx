import React from "react";
import BlogsLayout from "@/components/constants/blog/blogsLayout";
import BasicCard from "@/components/constants/blog/BasicCard";

const Blog2 = () => {
  return (
    <div className="w-full">
      <BlogsLayout
        title={"How to Articles"}
        id={"1"}
        button={"Browse all How to articles"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[3vw]">
          <BasicCard
            src={"/images/b07e0ebccccfcba7c2801f90a44e6158.jpg"}
            dateTime={"Apr 10, 2024 12:48 pm"}
            title={"Mastering Software Localization for New Market"}
            content={
              "Find out how to organize the localization of your software for new markets effectively"
            }
            time={"15 minutes read"}
          />
          <BasicCard
            src={"/images/b07e0ebccccfcba7c2801f90a44e6158.jpg"}
            dateTime={"Apr 10, 2024 12:48 pm"}
            title={"Mastering Software Localization for New Market"}
            content={
              "Find out how to organize the localization of your software for new markets effectively"
            }
            time={"15 minutes read"}
          />
          <BasicCard
            src={"/images/b07e0ebccccfcba7c2801f90a44e6158.jpg"}
            dateTime={"Apr 10, 2024 12:48 pm"}
            title={"Mastering Software Localization for New Market"}
            content={
              "Find out how to organize the localization of your software for new markets effectively"
            }
            time={"15 minutes read"}
          />
        </div>
      </BlogsLayout>
    </div>
  );
};

export default Blog2;
