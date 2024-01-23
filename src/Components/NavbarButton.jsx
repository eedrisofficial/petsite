import React from "react";
import { Link } from "react-router-dom";

const NavbarButton = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        <Link to="/signup">
          <button className="py-1 px-5 lg:text-[#FFF] bg-[#0A1D56] text-[12px]  border-[1px] rounded-md  lg:text-[16px]  2xl:text-[30px]  hover:bg-[#0a0e19] ">
            Sign up
          </button>
        </Link>
        <Link to="/signin">
          <button className="py-1 px-5 lg:text-[#000000] text-[12px]   rounded-md lg:text-[16px]  2xl:text-[30px] border-2 border-[#0a0e19] hover:bg-slate-100 hover:text-[#000]">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavbarButton;
