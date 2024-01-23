import React, { createContext, useReducer } from "react";

//creating d createContext
export const PetContext = createContext();

//Declaring the initial state of the Cart
const initialState = {
  cart: [],
  total: 0,
  cartItem: [],
};

//THE REDUCER FUNC
const reducer = (state, action) => {
  switch (action.type) {
    case "AddToAdopt":
      const newCart = [...state.cart, action.payload];
      return {
        ...state,
        cart: newCart,

        // total: newCart.reduce((total, item) => {
        //   return total + item.price;
        // }, 0),
      };
    case "RemoveFromAdopt":
      //Delete func for the items in cart
      const removedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      //returning the other left after deleting
      return {
        ...state,
        cart: removedCart,
      };
    case "ClearPet":
      return { ...state, cart: [] };

    default:
      return state;
  }
};

//The global func that pass the value as children to all component
const PetState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const CartValue = { state, dispatch }; //distructuring

  return (
    <PetContext.Provider value={CartValue}>{children}</PetContext.Provider>
  );
};

export default PetState;
