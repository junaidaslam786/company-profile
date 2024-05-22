"use client";

import React, { useState, useRef } from "react";
import { FiPlus } from "react-icons/fi";

const FAQCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); // Reference to the content div

  const toggleOpen = () => {
    const content = contentRef.current;
    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = 1;
    } else {
      content.style.maxHeight = 0;
      content.style.opacity = 0;
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="text-[3.5vw] md:text-[1.5vw] font-medium text-blueColor-0 w-full py-[4vw] md:py-[2vw] border-b">
          {question}
        </div>
        <div>
          <div className="w-full flex flex-col items-start ml-[10vw] md:ml-[5vw]">
            <button
              onClick={toggleOpen}
              className={`text-orangeColor-0 text-[4vw] md:text-[2vw] bg-orange-100 p-[1.4vw] md:p-[0.7vw] rounded-full transition duration-500 ${
                isOpen ? "rotate-[225deg]" : "rotate-[0deg]"
              }`}
            >
              <FiPlus />
            </button>
          </div>
        </div>
      </div>
      <div ref={contentRef} style={{ maxHeight: 0, overflow: 'hidden', transition: 'max-height 500ms ease-in-out, opacity 500ms ease-in-out', opacity: 0, width:'100%' }}>
        <p className="text-[2.5vw] md:text-[1vw] font-medium text-gray-600 w-5/6 py-[2vw]">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQCard;
