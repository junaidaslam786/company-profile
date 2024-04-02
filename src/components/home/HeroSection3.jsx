import React from "react";
import ExpertCard from "../constants/ExpertCard";
import ServiceCard from "../constants/ServiceCard";

const HeroSection3 = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-around">
        <ExpertCard
          src="/65425876546fc7b49bafdd28_aws-mockup.png"
          heading={
            " Free DPF: AWS Cost Optimization: Tools,Best Practices, And Case Studies"
          }
          para={
            "Explore how LabVerse software engineers navigate AWS cost optimization.We'll explain the stratagies LabVerse use to achieve significant cost saving,improved agility,streamlined resources. "
          }
        />
      </div>
      <div>
        <ServiceCard 
        
        />
      </div>
    </div>
  );
};

export default HeroSection3;
