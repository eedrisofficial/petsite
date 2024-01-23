import React, { useState } from "react";
import { MacawParrot } from "./MacawParrot";
import ViewAllFrame from "../../ViewAllFrame";
import { Link } from "react-router-dom";
import { TbArrowBigLeftLineFilled } from "react-icons/tb";
import { MdAccountCircle } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

const Mascaw = () => {
  const [mascawParrots] = useState(MacawParrot);
  const [logout, setLogout] = useState(false);
  return (
    <React.Fragment>
      <div className="flex justify-center items-center pt-10 px-4 lg:px-0 cursor-pointer p-10">
        <div className="flex flex-col items-start">
          <div className="flex justify-between items-center w-full lg:px-32">
            <Link
              to="/"
              className="text-red-600 hover:text-red-800 duration-300 text-[2rem]"
            >
              <TbArrowBigLeftLineFilled />
            </Link>
            <div className="flex items-center gap-0">
              <p className="flex flex-col gap-1">
                <MdAccountCircle className="text-[#0A1D56] text-[2rem]" />
                <ul className={logout ? "flex" : "hidden"}>
                  <li className="text-[0.65rem] text-red-600 font-semibold">
                    Logout
                  </li>
                </ul>
              </p>
              <span>
                <RiArrowDropDownLine onClick={() => setLogout(!logout)} />
              </span>
            </div>
          </div>
          <h1 className="py-1 lg:px-32 text-[16px] font-bold flex gap-3 items-center lg:text-[20px] 2xl:text-[60px]">
            Mascaw Parrots
            <span className="border-2 border-[#e5e5e5] text-[10px] text-[#7a7878] font-normal rounded-full p-1 px-2  lg:text-[14px]  2xl:text-[40px]">
              4
            </span>
          </h1>
          <div className="flex flex-wrap justify-center  gap-4 lg:gap-10">
            {mascawParrots.map((animal) => (
              <ViewAllFrame animal={animal} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Mascaw;
