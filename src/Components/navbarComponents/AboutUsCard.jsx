import React from "react";
import { HiUserGroup } from "react-icons/hi";

const AboutUsCard = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center pt-10">
      <div className="flex flex-col gap-0 items-center">
        <HiUserGroup className="text-[50px] text-indigo-950" />
        <h1 className="text-[30px] font-bold">Meet Our Team</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4 ">
        <div className=" text-white h-[180px] w-[250px] ">
          <div className="p-3 bg-slate-300 flex items-center gap-2 h-[50%]">
            <img
              className="h-[80px] w-[80px] object-cover rounded-full"
              src="/profile.jpeg"
              alt="profile_image"
            />
            <h4 className="text-indigo-950 font-bold">Idris Haruna</h4>
          </div>
          <div className="px-3 flex flex-col justify-center bg-indigo-900 h-[50%]">
            <p>CEO</p>
            <p>10yrs Experience</p>
          </div>
        </div>
        <div className=" text-white h-[180px] w-[250px] ">
          <div className="p-3 bg-slate-300 flex items-center gap-2 h-[50%]">
            <img
              className="h-[80px] w-[80px] rounded-full"
              src="/profile.jpeg"
              alt="profile_image"
            />
            <h4 className="text-indigo-950 font-bold">Idris Haruna</h4>
          </div>
          <div className="px-3 flex flex-col justify-center bg-indigo-900 h-[50%]">
            <p>CEO</p>
            <p>10yrs Experience</p>
          </div>
        </div>
        <div className=" text-white h-[180px] w-[250px] ">
          <div className="p-3 bg-slate-300 flex items-center gap-2 h-[50%]">
            <img
              className="h-[80px] w-[80px] rounded-full"
              src="/profile.jpeg"
              alt="profile_image"
            />
            <h4 className="text-indigo-950 font-bold">Idris Haruna</h4>
          </div>
          <div className="px-3 flex flex-col justify-center bg-indigo-900 h-[50%]">
            <p>CEO</p>
            <p>10yrs Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
