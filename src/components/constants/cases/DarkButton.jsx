import React from "react";

const DarkButton = ({ button }) => {
  return (
    <p className="text-[0.7vw] font-light bg-gray-200 py-[1.5vmin] px-[2vmin] rounded-[1.5vmin] text-center uppercase text-gray-600">
      {button}
    </p>
  );
};

export default DarkButton;
