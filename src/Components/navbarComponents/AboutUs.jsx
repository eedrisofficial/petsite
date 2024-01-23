import Navbar from "../Navbar";
import Footer from "../Footer";
import React from "react";
import AboutUsCard from "./AboutUsCard";

const AboutUs = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="mb-10">
        <div className="bg-gradient-to-r from-slate-800 to-gray-800  w-full relative">
          <img
            className="w-full h-full object-cover absolute mix-blend-overlay"
            src="/aboutimg.jpeg"
            alt=""
          />
          <div className=" flex flex-col justify-center items-center  text-[#FFF] p-10 px-2 lg:px-[50px] text-center">
            <h1 className="text-[#FFBD59] relative font-extrabold text-[30px]">
              About Us
            </h1>
            <p className="relative">
              Welcome to iPet - Where
              <span className="text-[#FFBD59] ">
                Compassion Meets Companionship!
              </span>
              At iPet, our mission is simple yet profound: to connect loving
              homes with furry friends and to make a positive impact on the
              lives of pets and people. We are dedicated to the welfare of
              animals, and we believe that every pet deserves a safe, loving,
              and forever home. iPet was born out of our deep love for animals.
              As pet enthusiasts, we've witnessed the joy and happiness that
              pets bring into our lives, and we want to share that joy with
              others. Our passionate team is made up of animal lovers and
              dedicated professionals who work tirelessly to make a difference
              in the lives of pets and their human companions. Together, we are
              committed to providing a safe and caring environment for animals
              in need. We believe in the power of community and kindness.
              Through iPet, we aim to foster a sense of responsibility and
              compassion toward animals while creating a supportive community of
              pet lovers. Join us in our mission to change lives, one paw at a
              time. Whether you're looking to adopt a new furry family member,
              make a donation, volunteer your time, or simply share our cause,
              your support makes a world of difference. Thank you for choosing
              iPet. Together, we can make the world a better place for pets.
            </p>
          </div>
        </div>
        <AboutUsCard />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default AboutUs;
