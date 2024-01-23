import React from "react";
import { Link } from "react-router-dom";

const NavbarUl = () => {
  return (
    <ul
      className="flex flex-col  items-center gap-4 text-[14px] md:text-[28px] lg:text-[14px] cursor-pointer lg:flex-row
      2xl:text-[30px]"
    >
      <Link
        to="/"
        className=" hover:underline lg:hover:no-underline lg:hover:bg-[#f4f4f4] p-1 rounded-md"
      >
        Home
      </Link>
      <Link
        to="/about"
        className=" hover:underline lg:hover:no-underline lg:hover:bg-[#f4f4f4] p-1 rounded-md"
      >
        About us
      </Link>
      <Link
        to="/adopt"
        className=" hover:underline lg:hover:no-underline lg:hover:bg-[#f4f4f4] p-1 rounded-md"
      >
        Adopt
      </Link>
      <Link
        to="/donate"
        className=" hover:underline lg:hover:no-underline lg:hover:bg-[#f4f4f4] p-1 rounded-md"
      >
        Donate
      </Link>
      <Link
        to="/event"
        className=" hover:underline lg:hover:no-underline lg:hover:bg-[#f4f4f4] p-1 rounded-md"
      >
        Events
      </Link>
      <Link
        to="/contact"
        className=" hover:underline lg:hover:no-underline lg:hover:bg-[#f4f4f4] p-1 rounded-md"
      >
        Contact us
      </Link>
      {/* <Link
        to="/blog"
        className=" hover:underline lg:hover:no-underline lg:hover:bg-[#f4f4f4] p-1 rounded-md"
      >
        Blog
      </Link> */}
    </ul>
  );
};

export default NavbarUl;
