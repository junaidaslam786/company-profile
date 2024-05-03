import React from "react";

const MegaMenuLayout = ({ children }) => {
  return (
    <div className="fixed inset-x-0 top-[12vh] border z-50 w-full cursor-default h-[80vh] overflow-y-auto bg-white shadow-lg">
      <div className="h-full flex overflow-hidden">
        <div className="w-[26%] bg-gray-50 border-r border-gray-200 flex flex-col items-center justify-center">
          <div className="w-3/4">
            <h2 className="text-[2.9vw] font-sans leading-none font-extrabold text-blueColor-0">
              CHOOSE YOUR PAGE
            </h2>
            <p className="mt-[1vw] text-[1.1vw] text-gray-700">
              Here&apos;s how we helped 130+ companies build brilliant software
            </p>
          </div>
        </div>
        <div className="w-[74%] p-[3vw]">{children}</div>
      </div>
    </div>
  );
};

export default MegaMenuLayout;
