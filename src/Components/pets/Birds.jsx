import SingleFrame from "./SingleFrame";
import React, { useState } from "react";
import { bird } from "../Local DB/Bird";

const Birds = () => {
  const [pet] = useState(bird);
  return (
    <React.Fragment>
      <div className="flex  justify-center items-center cursor-pointer pt-4 px-4 lg:px-0">
        <div>
          <h1 className="py-1 text-[14px] font-bold flex gap-3 items-center lg:text-[20px]  2xl:text-[60px]">
            Birds
            <span className="border-2 border-[#e5e5e5] text-[10px] text-[#7a7878] font-normal rounded-full p-1 px-2 lg:text-[14px]  2xl:text-[40px]">
              14
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

export default Birds;
