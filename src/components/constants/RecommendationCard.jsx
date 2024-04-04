import React from "react";
import Link from "next/link";

const RecommendationCard = ({content, company, date}) => {
  return (
    <div className="w-[85vmin] h-[50vmin] border p-16 flex flex-col items-start justify-between">
      <div>yellow stars representing rating</div>
      <p className="text-blue-950 text-[1.3vw] font-medium">
        {content}
      </p>
      <div className="flex flex-row items-center">
        <p className="mr-3 text-gray-500 text-[1vw] font-medium">
          {company}
        </p>
        |
        <Link href={"/"} className="text-sky-600 ml-3 text-[1vw] underline">
          Read full review
        </Link>
      </div>
      <p className="text-gray-400 text-[1vw]">{date}</p>
    </div>
  );
};

export default RecommendationCard;
