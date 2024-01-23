import React, { useContext } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { PetContext } from "../../context/PetState";
import AdoptedPets from "./AdoptedPets";

const Adopt = () => {
  const { dispatch, state } = useContext(PetContext);

  const ClearPet = () => {
    dispatch({ type: "ClearPet" });
  };

  return (
    <React.Fragment>
      <Navbar />
      {state.cart.length > 0 ? (
        <div className="p-4 font-serif flex flex-col items-center justify-center  gap-16 mt-20">
          <div>
            <div className="flex flex-wrap justify-center gap-5">
              {state.cart.map((item) => (
                <AdoptedPets item={item} />
              ))}
            </div>
          </div>
          <div className="w-full flex justify-between lg:py-10 lg:px-32">
            <button className="bg-green-600 py-1 px-5 lg:text-[#FFF] text-[12px] w-[20%] lg:text-[16px]  2xl:text-[30px] border-2 border-[#0a0e19] hover:bg-green-800 hover:text-[#FFF]  duration-300">
              Adopt
            </button>
            <button
              className=" py-1 px-5 lg:text-[#000000] text-[12px] w-[20%] lg:text-[16px]  2xl:text-[30px] border-2 border-[#0a0e19] hover:bg-red-600 hover:text-[#FFF]  duration-300"
              onClick={ClearPet}
            >
              Clear
            </button>
          </div>
        </div>
      ) : (
        <div className="h-screen">
          <h1 className="flex justify-center items-center h-[100%] font-extrabold text-[28px]">
            You have not pick any pet...
          </h1>
        </div>
      )}

      <Footer />
    </React.Fragment>
  );
};

export default Adopt;
