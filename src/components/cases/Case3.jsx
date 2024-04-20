"use client";

import React, { useState, useEffect } from "react";
import CaseCard from "@/components/constants/cases/CaseCard";
import Loader from "@/components/constants/loader/Loader";

const Case3 = () => {
  const [caseData, setCaseData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/cases/");
        const data = await response.json();
        setCaseData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching case data:", error);
        setLoading(false);
      }
    };

    fetchCaseData();
  }, []);

  if (loading || caseData === null) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (caseData.length === 0) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <p>No data available</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="py-[3vw] border-t">
        {caseData.map((caseItem) => (
          <CaseCard
            key={caseItem.id}
            industry={caseItem.title}
            businessType={"Social"}
            countrySource={"/images/644a9965b4060da6a3dbc180_libraria-logo.svg"}
            detail={caseItem.description}
            type={caseItem.resolution}
            tech1={"Flutter"}
            tech2={"Kotlin"}
            tech3={"Python"}
            feacturedImage={"/images/b07e0ebccccfcba7c2801f90a44e6158.jpg"}
            featuredBackground={"bg-sky-400"}
          />
        ))}
      </div>
    </div>
  );
};

export default Case3;
