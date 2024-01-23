import React from "react";
import Navbar from "../Navbar";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import SocialMedia from "../SocialMedia";

const Contact = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section className=" flex items-center justify-center py-10 px-0 lg:px-[100px]">
        <div className="w-[100%]  flex items-center shadow-lg  ">
          <div className="lg:w-[50%] flex flex-col gap-4 p-5">
            <h2 className="font-bold text-2xl text-[#FFBD59]">
              Send us <span className="text-[#2C3639]">a message</span>{" "}
            </h2>
            <p className="">
              connect with us via our customer support or locate us on social
              media.
              <span className="font-bold">
                we're at your service round the clock, ready to engage.
              </span>
            </p>
            <form action className="flex flex-col gap-4">
              <input
                className="p-2 mt-4 border font-thin outline-none focus:border-[#FFBD59]"
                type="text"
                name="name"
                placeholder="Name *"
              />
              <input
                className="p-2 border font-thin outline-none focus:border-[#FFBD59]"
                type="text"
                name="number"
                placeholder="Phone Number"
              />
              <textarea
                className="p-2 border font-thin outline-none focus:border-[#FFBD59]"
                name="message"
                placeholder="Write Your Message..."
                cols={8}
                rows={5}
                defaultValue={""}
              />
              <button className="bg-[#2C3639] text-white py-2 hover:bg-indigo-950">
                SEND
              </button>
            </form>
            <div className="flex flex-col gap-8  pt-8 ">
              <div className="flex flex-col justify-between gap-10 lg:flex-row">
                <div className="text-[#2C3639] font-semibold  flex flex-col gap-1">
                  <p className="flex gap-2 items-center text-[#186f65]">
                    <span className="">
                      <BsFillTelephoneFill size={20} />
                    </span>
                    Telephone
                  </p>
                  <p>+2348132624679</p>
                </div>
                <div className="text-[#2C3639] font-semibold  flex flex-col gap-1">
                  <p className="flex gap-2 items-center text-[#186f65]">
                    <span className="">
                      <MdMarkEmailRead size={20} />
                    </span>
                    Email
                  </p>
                  <p>eedrisharuna3@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-col justify-start  font-extrabold text-black">
                <h1>You can reach us via social media </h1>
                <SocialMedia />
              </div>
            </div>
          </div>
          <div className="hidden lg:w-[50%] hidden lg:flex ">
            <img src="/contact.jpeg" alt="" className="w-full h-[100%]" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
