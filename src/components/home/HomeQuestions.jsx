"use client";

import React, { useState, useEffect } from "react";
import FAQCard from "@/components/constants/home/FAQCard";
import { IoRemoveOutline } from "react-icons/io5";
import Loader from "@/components/constants/loader/Loader";

const HomeQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/questionanswers/`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching Questions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) {
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
    <div className="w-full flex flex-col items-center mb-[5vw]">
      <div className="w-[90%]">
        <div className="flex flex-col w-full items-center">
          <div className="w-full md:w-[90%] flex flex-row items-center text-orangeColor-0 text-[2.5vw] md:text-[1vw] font-semibold">
            <IoRemoveOutline />
            <p className="tracking-widest uppercase">faqs</p>
          </div>
          <div className="w-4/5">
            <p className="text-blueColor-0 text-[3.5vw] font-bold font-sans tracking-wide mt-[2.5vw]">
              Questions & Answers
            </p>
          </div>
          <div className="w-full md:w-4/5 mt-[2.5vw]">
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
    </div>
  );
};

export default HomeQuestions;
