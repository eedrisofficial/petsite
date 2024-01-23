import React from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex  flex-row gap-6 p-2 md:gap-16 lg:gap-14 animate-pulse">
      <a
        href="https://www.linkedin.com/in/haruna-idris-68aa3223a/"
        className="text-[#FFBD59] hover:-translate-y-1 hover:scale-105  duration-300 "
      >
        <BsLinkedin size={25} />
      </a>
      <a
        href="https://twitter.com/I_am_eedris"
        className=" text-[#FFBD59] hover:-translate-y-1 hover:scale-105  duration-300 "
      >
        <BsTwitter size={28} />
      </a>
      <a
        href="https://www.instagram.com/eedrisofficial/"
        className=" text-[#FFBD59] hover:-translate-y-1 hover:scale-105  duration-300"
      >
        <FaInstagramSquare size={28} />
      </a>
      <a
        href="https://www.facebook.com/IdrisHarunaAlih"
        className="text-[#FFBD59] hover:-translate-y-1 hover:scale-105  duration-300 "
      >
        <FaFacebookSquare size={28} />
      </a>
    </div>
  );
};

export default SocialMedia;
