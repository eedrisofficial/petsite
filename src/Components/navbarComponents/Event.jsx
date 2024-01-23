import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Event = () => {
  return (
    <React.Fragment>
      <Navbar />

      <div className="bg-gradient-to-r from-slate-300 via-cyan-600 to-gray-400  w-full relative text-[#FFF]">
        <img
          className="h-full w-full absolute object-cover mix-blend-overlay"
          src="/event.jpeg"
          alt=""
        />
        <div className=" relative px-10 h-screen flex flex-col justify-evenly items-center font-semibold">
          <p className="text-[20px] text-center">
            Thank you for checking our event calender but we don't have any
            upcoming event at the moment.
          </p>
          <h1 className="font-bold tracking-[0.23rem] text-[20px] md:tracking-[1rem] md:text-[40px]">
            Please check back!
          </h1>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Event;
