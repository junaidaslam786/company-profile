import React from "react";
import AboutCard from "@/components/constants/aboutus/AboutCard";

const AboutCards = () => {
  return (
    <div className="w-full flex flex-col md:flex-row py-[20vw] md:py-[7vw]">
      <div className="flex flex-col items-start hover:z-50">
        <div>
          <AboutCard
            id={"01"}
            title={"STRATEGY"}
            content={"We plan and build for the long term and the best strategy."}
            hoveredColor={"hover:bg-orange-400"}
          />
        </div>
      </div>
      <div className="flex flex-col items-end md:mt-[3vw] md:-ml-[8vw] z-[2] hover:z-50">
        <AboutCard
          id={"02"}
          title={"TRANSPARENCY"}
          content={"We are a mindful, transparent, and human business."}
          hoveredColor={"hover:bg-sky-500"}
        />
      </div>
      <div className="flex flex-colitems-start md:mt-[5vw] md:-ml-[8vw] z-[3] hover:z-50">
        <AboutCard
          id={"03"}
          title={"INTEGRITY"}
          content={
            "We uphold the highest standards of integrity in all of our actions."
          }
          hoveredColor={"hover:bg-red-400"}
        />
      </div>
      <div className="flex flex-col items-end md:mt-[3vw] md:-ml-[8vw] z-[4] hover:z-50">
        <AboutCard
          id={"04"}
          title={"CRAFTSMANSHIP"}
          content={
            "We value craftsmanship in all we make and strive for excellence."
          }
          hoveredColor={"hover:bg-purple-500"}
        />
      </div>
      <div className="flex flex-col items-start md:-ml-[8vw] z-[5] hover:z-50">
        <AboutCard
          id={"05"}
          title={"COLLABORATION"}
          content={
            "We are mindful and work together, across boundaries, to meet the needs of our customers."
          }
          hoveredColor={"hover:bg-green-500"}
        />
      </div>
    </div>
  );
};

export default AboutCards;
