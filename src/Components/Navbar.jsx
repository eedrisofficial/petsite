import React, { useState } from "react";
import { FaPaw } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import NavbarUl from "./NavbarUl";
import MobileNavbar from "./MobileNavbar";
import { Link } from "react-router-dom";
import NavbarButton from "./NavbarButton";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <React.Fragment>
      <nav className="hidden font-semibold font-sans  px-[50px] py-[30px] text-[#494949] lg:flex  justify-between 2xl:justify-evenly 2xl:py-[60px] ">
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex gap-1 items-center"
          >
            <p className="bg-[#FFBD59] p-2 rounded-md">
              <FaPaw className="text-[#000000]" />
            </p>
            <h1 className="font-bold text-[14px] xl:text-[20px] 2xl:text-[30px]">
              iPET
            </h1>
          </motion.div>
        </Link>
        <NavbarUl />
        <NavbarButton />
      </nav>
      <div
        onClick={() => setMobileNav(!mobileNav)}
        className="cursor-pointer flex p-2 md:p-4 lg:hidden"
      >
        {/* HAMBURGER OUTLINE ICON */}
        <AiOutlineMenu className="text-[24px] md:text-[60px]" />
        <MobileNavbar mobileNav={mobileNav} setMobileNav={setMobileNav} />
      </div>
    </React.Fragment>
  );
};

export default Navbar;
