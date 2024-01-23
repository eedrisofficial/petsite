import React from "react";
import Navbar from "../Navbar";

const Donate = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section className="py-10 md:py-0 flex flex-col-reverse items-center gap-6 md:flex-row">
        <div className="w-[100%] md:w-[50%]">
          <img src="/donate2.jpeg" alt="" />
        </div>
        <div className="w-[100%] md:w-[50%] px-10 flex flex-col gap-8">
          <h1 className="text-[20px] font-extrabold ">
            To donate a pet; Please fill the form below{" "}
          </h1>
          <form action="" className="w-[100%]  flex flex-col gap-4 ">
            <div className="flex flex-col ">
              <label
                htmlFor="name"
                className="font-semibold text-[14px] text-indigo-900"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                className="w-[100%] md:w-[80%] border border-indigo-900 focus:border-[#FFBD59] outline-none placeholder:text-[12px] p-1"
              />
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor="address"
                className="font-semibold text-[14px] text-indigo-900"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Enter Your home address"
                className="w-[100%] md:w-[80%] border border-indigo-900 focus:border-[#FFBD59] outline-none placeholder:text-[12px] p-1"
              />
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor="name"
                className="font-semibold text-[14px] text-indigo-900"
              >
                Pet Name
              </label>
              <input
                type="text"
                id="petName"
                placeholder="Enter Your Pet Name"
                className="w-[100%] md:w-[80%] border border-indigo-900 focus:border-[#FFBD59] outline-none placeholder:text-[12px] p-1"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="category"
                className="font-semibold text-[14px] text-indigo-900"
              >
                Pet Category
              </label>
              <input
                type="text"
                id="category"
                placeholder="Example: cat, dog ...."
                className="w-[100%] md:w-[80%] border border-indigo-900 focus:border-[#FFBD59] outline-none placeholder:text-[12px] p-1  "
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="font-semibold text-[14px] text-indigo-900"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter Your Phone Number"
                className="w-[100%] md:w-[80%] border border-indigo-900 focus:border-[#FFBD59] outline-none placeholder:text-[12px] p-1"
              />
            </div>
            <div className="flex flex-col ">
              <label
                htmlFor="aboutPet"
                className="font-semibold text-[14px] text-indigo-900"
              >
                About Pet
              </label>
              <textarea
                type="text"
                id="aboutPet"
                placeholder="Tell us little about your pet"
                className="w-[100%] md:w-[80%] h-[100px] border border-indigo-900 focus:border-[#FFBD59] outline-none placeholder:text-[12px] p-1 "
              />
            </div>
            <button className="bg-[#2C3639] w-[25%] text-[#FFFFFF] text-[18px] font-bold px-2 py-1 hover:bg-indigo-950  duration-500">
              Send
            </button>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Donate;
