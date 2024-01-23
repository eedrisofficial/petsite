import React, { useState } from "react";
import { dog } from "../Local DB/Dog";
import SingleFrame from "./SingleFrame";

const Dog = () => {
  const [pet] = useState(dog);
  return (
    <React.Fragment>
      <div className="flex justify-center items-center pt-10 px-4 lg:px-0 cursor-pointer ">
        <div className="flex flex-col items-start">
          <h1 className="py-1 text-[16px] font-bold flex gap-3 items-center lg:text-[20px] 2xl:text-[60px]">
            Dogs
            <span className="border-2 border-[#e5e5e5] text-[10px] text-[#7a7878] font-normal rounded-full p-1 px-2  lg:text-[14px]  2xl:text-[40px]">
              35
            </span>
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center  gap-4 lg:gap-10">
            {pet.map((animal) => (
              <SingleFrame animal={animal} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dog;
