import { BiSolidCloudUpload } from "react-icons/bi";
import { GiSittingDog } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-16 mt-5 font-sans text-[#494949] text-[16px] lg:mt-10  ">
      <div className="flex flex-col gap-6 items-center text-center 2xl:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-[#2C3639] font-bold  "
        >
          <p className="text-[20px] md:text-[36px] lg:text-[40px]  2xl:text-[100px]">
            Every Pet Deserves a{" "}
            <span className="text-[#FFBD59]"> Loving </span>
            Home.
          </p>
          <p className="text-[20px] md:text-[35px] lg:text-[38px]  2xl:text-[90px]">
            <span className="text-[#FFBD59]">Adopt</span> a Pet Today.
          </p>
        </motion.div>
        <p className="px-[10px] text-[12px] md:text-[18px] md:px-[60px] lg:px-[80px] xl:px-[120px] xl:text-[20px] 2xl:text-[50px]">
          Check out the animals we have available and discover more about the
          adoption procedure.
          <span className="font-semibold px-1">
            Together, we can save, care for, and rehome pets in need.
          </span>
          We appreciate your support in helping us spread happiness to families
          by encouraging pet adoption.
        </p>
      </div>
      <div>
        <div className="hidden md:flex gap-1">
          <div className="flex text-[#000000] font-semibold 2xl:text-[40px]">
            <p className="bg-[#E9E9E9] flex items-center py-1 gap-6 px-2 xl:py-2 2xl:py-4 2xl:px-16">
              <GiSittingDog className="text-[#000000] text-[40px] 2xl:text-[80px]" />
              <span className="bg-[#E9E9E9]">
                <div name="" id="" className="bg-[#E9E9E9] border-0">
                  <p>Dog</p>
                </div>
              </span>
            </p>
            <input
              type="text"
              placeholder="Search pet..."
              className="border-1 p-1 focus:border-2 outline-none font-normal text-[12px] bg-[#f5f5f5] focus:bg-white 2xl:w-[600px] 2xl:p-6  2xl:text-[50px]"
            />
            <p className="flex items-center gap-1 bg-[#E9E9E9] px-2">
              <BiSolidCloudUpload className="cursor-pointer text-[20px] 2xl:text-[80px]" />
              <span>Search by image</span>
            </p>
          </div>
          <button className="bg-[#2C3639] px-2 w-[100px]  text-white rounded-md text-[18px] flex justify-center items-center gap-1 font-semibold hover:bg-[#495e64] duration-500  2xl:w-[300px] 2xl:text-[60px]">
            <span>
              <AiOutlineSearch className="text-[20px] 2xl:text-[50px]" />
            </span>
            Search
          </button>
        </div>
        <div className="flex gap-1 items-center  2xl:text-[50px]">
          <p className="font-semibold">Frequents:</p>
          <ul className="flex gap-2 text-[14px] underline  2xl:text-[40px]">
            <li>Parrot,</li>
            <li>Cat,</li>
            <li>Black-dog</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
