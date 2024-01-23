import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { PetContext } from "../../context/PetState";

const AdoptedPets = ({ item }) => {
  const id = uuidv4();
  const { dispatch } = useContext(PetContext);

  const removePet = () => {
    dispatch({ type: "RemoveFromAdopt", payload: item.id });
  };
  return (
    <div key={id} className="flex flex-col items-start gap-2">
      <img
        src={item.Image}
        className=" w-[480px] h-[320px]   2xl:w-[550px] 2xl:h-[400px]   overflow-hidden"
        alt=""
      />
      <p>{item.name}</p>
      <button
        onClick={removePet}
        className=" bg-[#000] rounded-none w-full py-2 text-white hover:bg-red-600 duration-300"
      >
        Delete
      </button>
    </div>
  );
};

export default AdoptedPets;
