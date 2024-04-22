import React from "react";

const BlogForm = () => {
  return (
    <div className="w-full py-[7vw] px-[6vw] flex flex-row gap-[3vw] items-center border-[0.1vw] border-skyColor-0 bg-sky-100 rounded-[1vw]">
      <div className="w-1/2 flex flex-col">
        <p className="text-[5vw] text-blueColor-0 font-extrabold leading-none">
          NEED ESTIMATION?
        </p>
        <p className="text-[1.5vw] tracking-tight font-lato text-blueColor-0 font-medium mt-[2vw]">
          Leave your contacts and get clear and realistic estimations in the
          next 24 hours.
        </p>
      </div>
      <form className="w-1/2 flex flex-col">
        <div className="flex flex-row gap-[1vw] w-full mb-[1vw]">
          <input
            type="text"
            placeholder="Your name*"
            className="w-full bg-transparent focus:outline-none border-b border-skyColor-0 py-[1vw] text-blue-900 placeholder-blue-900 font-medium text-[1.2vw]"
          />
          <input
            type="email"
            placeholder="Email*"
            className="w-full bg-transparent focus:outline-none border-b border-skyColor-0 py-[1vw] text-blue-900 placeholder-blue-900 font-medium text-[1.2vw]"
          />
        </div>
        <div className="w-full my-[1vw] border-b border-skyColor-0 py-[2vw]">
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Message"
            className="w-full bg-transparent focus:outline-none text-blue-900 placeholder-blue-900 font-medium text-[1.2vw]"
          ></textarea>
        </div>
        <button className="uppercase w-full mt-[3vw] bg-skyColor-0 py-[1vw] font-medium text-white hover:bg-orangeColor-0 hover:translate-y-[-0.3vw] duration-300">
          submit
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
