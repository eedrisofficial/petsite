import React, { useContext } from "react";
import { PetContext } from "../context/PetState";
import { v4 as uuidv4 } from "uuid";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const ViewAllFrame = ({ animal }) => {
  const id = uuidv4();
  const { dispatch } = useContext(PetContext);

  //add func for moving cloth from product to cart onClick
  const addPet = () => {
    dispatch({ type: "AddToAdopt", payload: { ...animal, id } });
    // toast.success("Pet added");
    console.log(animal);
  };

  return (
    <React.Fragment>
      {/* <ToastContainer /> */}
      <div className="relative flex flex-col shadow-lg  overflow-hidden  ">
        <div className="">
          <img
            src={animal.Image}
            alt={animal.category}
            className=" w-[480px] h-[320px]   2xl:w-[550px] 2xl:h-[400px]   overflow-hidden"
          />
        </div>

        <div className=" flex flex-col gap-3 text-[#7a7878] p-2">
          <p className=" text-[12px] font-semibold  md:text-[16px] lg:text-[14px]  2xl:text-[40px]">
            Color : {animal.color}
          </p>
          <p className=" text-[12px] font-semibold  md:text-[16px] lg:text-[14px]  2xl:text-[40px]">
            Age : {animal.age}
          </p>
          <button
            onClick={addPet}
            className="bg-[#0A1D56] py-2 px-6 font-medium text-white hover:bg-[#07080f] duration-300"
          >
            Adopt
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ViewAllFrame;
