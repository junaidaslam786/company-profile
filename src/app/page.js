"use client";

import { useState, useEffect } from "react";

import HeroSection from "@/components/home/HeroSection";
import HomeServices from "@/components/home/HomeServices";
import HomeUpdates from "@/components/home/HomeUpdates";
import HomeCases from "@/components/home/HomeCases";
import HomeIndustries from "@/components/home/HomeIndustries";
import HomeTextScroll from "@/components/home/HomeTextScroll";
import HomeCards from "@/components/home/HomeCards";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeTeamMembers from "@/components/home/HomeTeamMembers";
import HomeBlogs from "@/components/home/HomeBlogs";
import HomeWorkText from "@/components/home/HomeWorkText";
import HomeQuestions from "@/components/home/HomeQuestions";

const Home = () => {
  const [bgColor, setBgColor] = useState("#ffffff");

  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = scrollPosition / totalHeight;

    if (scrollPercentage <= 0.2 || scrollPercentage >= 0.73) {
      setBgColor("#ffffff");
    } else {
      setBgColor("#141b4d");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const style = {
    transition: "background-color 1s ease",
    backgroundColor: bgColor,
  };

  return (
    <main
      style={style}
      className="flex font-sans min-h-screen flex-col items-center justify-between"
    >
      <HeroSection />
      <HomeServices />
      <HomeUpdates />
      <HomeCases />
      <HomeIndustries />
      <HomeTextScroll />
      <HomeCards />
      <HomeTestimonials />
      <HomeTeamMembers />
      <HomeBlogs />
      <HomeWorkText />
      <HomeQuestions />
    </main>
  );
};

export default Home;
