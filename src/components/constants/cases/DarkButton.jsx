import React from "react";

const DarkButton = ({ button }) => {
  return (
    <p className="text-[2vw] md:text-[0.7vw] font-light bg-gray-200 py-[1.4vw] md:py-[0.7vw] px-[2vw] md:px-[1vw] rounded-[1.5vmin] text-center uppercase text-gray-600">
      {button}
    </p>
  );
};

export default DarkButton;
