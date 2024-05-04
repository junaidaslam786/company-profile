"use client";

import React, { useState, useEffect, useRef } from "react";
import StoryCard from "@/components/constants/home/StoryCard";
import Image from "next/image";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { IoRemoveOutline } from "react-icons/io5";

const HeroSection4 = () => {
  const [activeImage, setActiveImage] = useState(0);
  const storyRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const images = [
    "/images/65425876546fc7b49bafdd28_aws-mockup.png",
    "/images/b07e0ebccccfcba7c2801f90a44e6158.jpg",
    "/images/pexels-gdtography-911738.jpg",
  ];

  const backgroundColors = ["bg-pink-400", "bg-sky-400", "bg-lime-400"]; // Example background colors

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveImage(parseInt(entry.target.getAttribute("data-index")));
          }
        });
      },
      { threshold: 0.5 }
    );

    storyRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      storyRefs.current.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-row w-full mt-32">
      <div className="w-1/2 flex flex-col items-center">
        <div className="w-5/6">
          <div className="w-2/3 mt-32">
            <div className="flex flex-row items-center text-orangeColor-0 font-semibold text-[1vw]">
              <IoRemoveOutline />
              <p className="uppercase">SUCCESS STORIES</p>
            </div>
            <p className="text-white font-semibold leading-tight text-[4vw] mt-24">
              Custom business software development
            </p>
          </div>
        </div>
        <div className="w-3/5 mt-32">
          {[
            {
              id: "01",
              title: "Intelligent property management software",
              detail:
                "Fazile is an intelligent and flexible property management software that gives an overview of the company's real estate portfolio.",
            },
            {
              id: "02",
              title: "Specialized hiring platform for student-athletes",
              detail:
                "Podium X helps student-athletes create standout CVs and find fitting jobs.",
            },
            {
              id: "03",
              title: "Web application for post-mini-offices",
              detail:
                "Point24 for Meest offers scalable software to enhance the operational activities of post offices.",
            },
          ].map((story, index) => (
            <div
              key={index}
              ref={storyRefs.current[index]}
              data-index={index}
              className="mb-32"
            >
              <StoryCard
                id={story.id}
                business={"Real Estate"}
                country={"Norway"}
                countryFlag={<LiaFlagUsaSolid className="text-pink-700" />}
                about={"Web App"}
                title={story.title}
                detail={story.detail}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={`w-1/2 ${backgroundColors[activeImage]}`}>
        <div
          style={{
            width: "100%",
            position: "sticky",
            top: "12vh",
            height: "88vh",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={images[activeImage]}
              alt={"Active Image"}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection4;
