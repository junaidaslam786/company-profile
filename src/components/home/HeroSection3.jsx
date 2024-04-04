import React from "react";
import ExpertCard from "../constants/ExpertCard";
import ServiceCard from "../constants/ServiceCard";

const HeroSection3 = () => {
  return (
    <div className="flex flex-col mt-16">
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col w-[90%]">
          <div className="flex flex-row text-orange-500 text-[1vw] font-semibold">__<p className="tracking-widest">UPDATES</p></div>
          <div className="flex flex-row justify-between items-center mt-16">
            <p className="text-blue-950 text-[3.5vw] font-bold tracking-widest">What's new?</p>
            <p className="w-1/3 text-blue-950 text-[1.3vw]">
              See fresh updates in our custom software development solutions and
              expert materials.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-8">
        <ExpertCard
          src="/images/65425876546fc7b49bafdd28_aws-mockup.png"
          heading={
            " Free DPF: AWS Cost Optimization: Tools,Best Practices, And Case Studies"
          }
          detail={
            "Explore how LabVerse software engineers navigate AWS cost optimization.We'll explain the stratagies LabVerse use to achieve significant cost saving,improved agility,streamlined resources. "
          }
        />
        <ExpertCard
          src="/images/65425876546fc7b49bafdd28_aws-mockup.png"
          heading={
            " Free DPF: AWS Cost Optimization: Tools,Best Practices, And Case Studies"
          }
          detail={
            "Explore how LabVerse software engineers navigate AWS cost optimization.We'll explain the stratagies LabVerse use to achieve significant cost saving,improved agility,streamlined resources. "
          }
        />
        <ServiceCard
          detail={
            "It's a detailed component to see what has naeem done in his whole career. It's a detailed component to see what has naeem done in his whole career"
          }
        />
        <ServiceCard
          detail={
            "It's a detailed component to see what has naeem done in his whole career. It's a detailed component to see what has naeem done in his whole career"
          }
        />
      </div>
    </div>
  );
};

export default HeroSection3;
