"use client";

import React, { useState, useEffect } from "react";
import FAQCard from "@/components/constants/home/FAQCard";
import { IoRemoveOutline } from "react-icons/io5";
import Loader from "@/components/constants/loader/Loader";

const HeroSection12 = () => {
  const [questions, setQuestions] = useState([]);
  const [fetchingData, setFetchingData] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/questionanswers/`);
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching Questions:", error);
      } finally {
        setFetchingData(false);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (loading || fetchingData) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <p>No faq available</p>
      </div>
    );
  }
  return (
    <div className="w-full mb-20">
      <div className="flex flex-col w-full items-center">
        <div className="w-full md:w-[90%] flex flex-row items-center text-orangeColor-0 text-[1vw] font-semibold">
          <IoRemoveOutline />
          <p className="tracking-widest uppercase">faqs</p>
        </div>
        <div className="w-4/5">
          <p className="text-blueColor-0 text-[3.5vw] font-bold font-sans tracking-wide mt-10">
            Questions & Answers
          </p>
        </div>
        <div className="w-4/5 mt-10">
          {questions.map((question) => (
            <FAQCard
              key={question.id}
              question={question.Question}
              answer={question.Answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection12;
