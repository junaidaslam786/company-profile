import React from "react";
import Link from "next/link";

const RecommendationCard = ({ content, company, date, rating }) => {
  return (
    <div className="w-[38vw] h-[22vw] border flex flex-row items-center justify-center">
      <div className="h-2/3 w-5/6 flex flex-col items-start justify-between">
        <div className="flex flex-row items-center text-orangeColor-0">
          {rating}
        </div>
        <p className="text-blueColor-0 text-[1.3vw] line-clamp-4 font-medium">
          {content}
        </p>
        <div className="flex flex-row items-center">
          <p className="mr-3 text-gray-500 text-[1vw] font-medium">{company}</p>
          |
          <Link href={"/"} className="text-sky-600 ml-3 text-[1vw] underline">
            Read full review
          </Link>
        </div>
        <p className="text-gray-400 text-[1vw]">{date}</p>
      </div>
    </div>
  );
};

export default RecommendationCard;
