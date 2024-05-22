import React from "react";

const RedButton = ({ button }) => {
  return (
    <p className="text-[2vw] md:text-[0.7vw] font-light bg-orange-50 py-[1.4vw] md:py-[0.7vw] px-[2vw] md:px-[1vw] text-center uppercase text-orange-500">
      {button}
    </p>
  );
};

export default RedButton;
