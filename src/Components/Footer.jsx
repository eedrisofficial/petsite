import { RiUserFollowFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import React from "react";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const today = new Date();
  return (
    <React.Fragment>
      <div className="bg-[#2C3639] ">
        <div className="bottom-0 h-[200px] text-[#FFFFFF] font-bold grid grid-row-2  gap-6 lg:flex justify-around  items-center p-6  font-serif cursor-pointer">
          <div className="mt-5 ">
            <ul className="flex flex-row lg:flex-col gap-2 justify-center">
              <Link
                to="/adopt"
                className="hover:underline hover:scale-105 duration-300"
              >
                Adopt
              </Link>
              <Link
                to="/donate"
                className="hover:underline hover:scale-105 duration-300"
              >
                Donate
              </Link>
              <Link
                to="/event"
                className="hover:underline hover:scale-105 duration-300"
              >
                Events
              </Link>
              <Link
                to="/contact"
                className="hover:underline hover:scale-105 duration-300"
              >
                Contact us
              </Link>
            </ul>
          </div>
          <div className="">
            <h1 className="justify-center mt-4 flex">
              Follow us
              <span className="text-[#FFF] ml-2">
                <RiUserFollowFill size={25} />
              </span>
            </h1>
            <SocialMedia />
          </div>
        </div>
        <p className=" text-center p-6 text-[#FFFFFF] text-[18px] border-t-2 border-[#FFBD59]">
          &copy; {today.getFullYear()} || All Rights Reserved
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
