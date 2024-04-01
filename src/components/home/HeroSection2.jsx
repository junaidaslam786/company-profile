"use client";

import React, { useEffect, useRef, useState } from "react";
import Card from "../constants/Card";

const Herosection2 = () => {
  const leftDivRef = useRef(null); // Create a ref for the left div
  const rightDivRef = useRef(null); // Create a ref for the right div
  const [leftDivSticky, setLeftDivSticky] = useState(false); // State to track if the left div is sticky

  useEffect(() => {
    const handleScroll = () => {
      // Check if the left div is fully in the viewport
      if (leftDivRef.current) {
        const { top, bottom } = leftDivRef.current.getBoundingClientRect();
        setLeftDivSticky(top <= 0 && bottom >= window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex w-full h-screen bg-white">
      <div
        className={`w-1/3 pl-6 overflow-hidden ${
          leftDivSticky ? "sticky top-0" : ""
        }`}
        ref={leftDivRef}
      >
        <h2
          className="mt-6"
          style={{ fontSize: "1vw", color: "#ff9a54", fontWeight: "600" }}
        >
          — WE PROVIDE
        </h2>
        <h5 style={{ fontSize: "3.5vw", width: "12vw", fontWeight: "700" }}>
          Custom software development services
        </h5>
        <p>
          Full-cycle custom software services to develop unique software
          solutions.
        </p>
      </div>
      <div
        className="w-2/3 overflow-auto custom-scrollbar"
        style={{ scrollbarWidth: "none" }}
        ref={rightDivRef}
      >
        <div className="flex">
          <div className="flex flex-col">
            <Card
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
            />
            <Card
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
            />
            <Card
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
            />
            <Card
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
            />
            <Card
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
            />
          </div>
          <div className="flex flex-col mt-24">
            <Card
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
            />
            <Card
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
            />
            <Card
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
            />
            <Card
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
            />
            <Card
              title="Custom Software Development"
              para="Building scalable customized software solution by applying innovative technology"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection2;