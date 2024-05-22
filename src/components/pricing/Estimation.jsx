"use client";

import React, { useState } from "react";
import questions from "./Questions";

const Estimation = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [userData, setUserData] = useState({ name: "", email: "" });
  const [displayFinalForm, setDisplayFinalForm] = useState(false);

  const handleOptionChange = (option) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.multiple) {
      const currentAnswers = userAnswers[currentQuestionIndex] || [];
      if (currentAnswers.includes(option)) {
        setUserAnswers({
          ...userAnswers,
          [currentQuestionIndex]: currentAnswers.filter((o) => o !== option),
        });
      } else {
        setUserAnswers({
          ...userAnswers,
          [currentQuestionIndex]: [...currentAnswers, option],
        });
      }
    } else {
      setUserAnswers({
        ...userAnswers,
        [currentQuestionIndex]: [option],
      });
    }
  };

  const navigateNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Transition to the final form once all questions are answered
      setDisplayFinalForm(true);
    }
  };

  const navigateBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (displayFinalForm) {
      setDisplayFinalForm(false); // Go back to the last question when in final form
      setCurrentQuestionIndex(questions.length - 1);
    }
  };

  const handleSubmit = async () => {
    const finalData = {
      answers: userAnswers,
      user: userData,
    };
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
    const response = await fetch(`${apiUrl}/api/pricing/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    });

    if (response.ok) {
      console.log("Data submitted successfully");
    } else {
      console.log("Failed to submit data");
    }
  };

  if (!displayFinalForm && currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    return (
      <div className="mt-[10vw] md:mt-[5vw] w-full flex flex-col items-center">
        <div>
          <p className="text-[5vw] md:text-[2.5vw] text-center font-sans text-blueColor-0 font-semibold">
            {currentQuestion.question}
          </p>
          <p className="text-[3vw] md:text-[1.2vw] text-center font-lato text-grayPrimary-0 font-medium">
            {currentQuestion.description}
          </p>
        </div>
        <div className="mt-[4vh] flex flex-wrap flex-row gap-[4vw] md:gap-[2vw] justify-between">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionChange(option)}
              className={`border border-skyColor-0 hover:border-orangeColor-0 rounded mx-[6vw] md:mx-[3vw] text-[3vw] md:text-[1.2vw] font-semibold ${
                userAnswers[currentQuestionIndex]?.includes(option)
                  ? "bg-skyColor-0 text-white"
                  : "border-skyColor-0 text-blueColor-0"
              } ${
                currentQuestion.multiple
                  ? "p-[2vw] md:p-[1vw]"
                  : "p-[8vw] md:p-[4vw]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="absolute w-5/6 top-[95vh] md:top-[75vh] flex flex-row items-center justify-between">
          <button
            onClick={navigateBack}
            className="border border-skyColor-0 text-[2.5vw] md:text-[1vw] text-skyColor-0 hover:text-white py-[2vw] md:py-[1vw] px-[4vw] md:px-[2vw] hover:bg-skyColor-0 duration-300 rounded"
          >
            Back
          </button>
          <button
            onClick={navigateNext}
            className="border border-skyColor-0 text-[2.5vw] md:text-[1vw] text-skyColor-0 hover:text-white py-[2vw] md:py-[1vw] px-[4vw] md:px-[2vw] hover:bg-skyColor-0 duration-300 rounded"
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center mt-[10vh]">
      <div className="flex flex-col items-center">
        <p className="text-[5vw] md:text-[2.5vw] text-center font-sans text-blueColor-0 font-semibold">
          That&apos;s it. You have accomplished the poll
        </p>
        <p className="text-[3vw] md:text-[1.2vw] text-center font-lato text-grayPrimary-0 font-medium">
          Please, leave your contact details, and our specialist will send you
          pricing within 24 hours.
        </p>
      </div>
      <div className="w-[80%] md:w-[45%] flex flex-col items-center mt-[5vh]">
        <div className="w-full flex flex-col md:flex-row items-center gap-[2vw]">
          <input
            type="text"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            placeholder="Full Name*"
            className="border-b border-skyColor-0 my-[4vw] md:my-0 py-[0.5vw] w-full focus:border-orangeColor-0 focus:outline-none placeholder-blueColor-0 text-[3vw] md:text-[1.2vw]"
          />
          <input
            type="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            placeholder="Email*"
            className="border-b border-skyColor-0 my-[4vw] md:my-0 py-[0.5vw] w-full focus:border-orangeColor-0 focus:outline-none placeholder-blueColor-0 text-[3vw] md:text-[1.2vw]"
          />
        </div>
        <div className="w-full">
          <button
            onClick={handleSubmit}
            className="uppercase text-[3vw] md:text-[1.2vw] w-full mt-[6vw] md:mt-[3vw] bg-skyColor-0 py-[1vw] font-medium text-white hover:bg-orangeColor-0 hover:translate-y-[-0.3vw] duration-300"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="absolute w-5/6 top-[75vh] flex flex-row items-center justify-between">
        <button
          onClick={navigateBack}
          className="border border-skyColor-0 text-[2.5vw] md:text-[1vw] text-skyColor-0 hover:text-white py-[2vw] md:py-[1vw] px-[4vw] md:px-[2vw] hover:bg-skyColor-0 duration-300 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Estimation;
