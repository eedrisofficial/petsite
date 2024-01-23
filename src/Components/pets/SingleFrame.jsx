import React from "react";
import { TbMathGreater } from "react-icons/tb";
import { Link } from "react-router-dom";

const SingleFrame = ({ animal }) => {
  return (
    <React.Fragment>
      <div className="relative flex flex-col shadow-lg  overflow-hidden ">
        <div className="">
          <img
            src={animal.Image}
            alt={animal.category}
            className=" w-[180px] h-[120px]   2xl:w-[550px] 2xl:h-[400px] hover:scale-150  duration-500 overflow-hidden"
          />
        </div>

        <div className=" flex justify-between text-[#7a7878]">
          <p className=" text-[12px] font-semibold  md:text-[16px] lg:text-[14px]  2xl:text-[40px]">
            {animal.name}
            <span className="text-[8px]  text-[#7a7878] font-light rounded-full px-2 md:text-[12px] lg:text-[12px]  2xl:text-[20px] ">
              {animal.number}.
            </span>
          </p>
          <Link to="/mascaw">
            <button className=" font-medium hover:underline text-[10px] ">
              View all...
            </button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleFrame;
