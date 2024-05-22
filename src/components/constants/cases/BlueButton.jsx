import React from "react";

const BlueButton = ({ button }) => {
  return (
    <p className="text-[2vw] md:text-[0.7vw] font-light bg-sky-100 py-[1.4vw] md:py-[0.7vw] px-[2vw] md:px-[1vw] rounded-full text-center uppercase text-sky-600">
      {button}
    </p>
  );
};

export default BlueButton;
