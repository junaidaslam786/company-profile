import React from "react";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";

const FAQCard = ({ question }) => {
  return (
    <Link href={"/"} className="w-full">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="text-[1.5vw] font-medium text-blue-950 w-3/4 py-8 border-b">
          {question}
        </div>
        <div className="w-1/5">
          <div className="w-full flex flex-col items-start">
            <div className="text-orange-400 text-[2vw] bg-orange-100 p-3 rounded-full">
              <FiPlus />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FAQCard;
