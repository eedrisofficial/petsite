import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import NavbarUl from "./NavbarUl";
import NavbarButton from "./NavbarButton";

const MobileNavbar = ({ mobileNav, setMobileNav }) => {
  return (
    <div>
      {mobileNav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      <div
        className={
          mobileNav
            ? "fixed top-0 left-0 w-[100%] h-screen bg-transparent z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white/100 z-10 duration-300"
        }
      >
        {/* close icon for hamburger */}
        <AiOutlineClose
          size={40}
          onClick={() => setMobileNav(!mobileNav)}
          className="absolute right-8 top-4  cursor-pointer text-white hover:rounded "
        />
        <h1 className="text-[20px] p-4 md:p-6  text-white bg-[#000] font-bold cursor-pointer">
          iPET
        </h1>
        <nav className="text-white md:tex-[30px] font-bold">
          <NavbarUl />
          <div className="pt-5 text-white ">
            <NavbarButton />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
