// export const reducer = (state, action) => {
//   switch (action.type) {
//     case "AddToCart":
//       const newCart = [...state.cart, action.payload];
//       return {
//         ...state,
//         cart: newCart,

//         total: newCart.reduce((total, item) => {
//           return total + item.price;
//         }, 0),
//       };
//     case "RemoveFromCart":
//       //Delete func for the items in cart
//       const removedCart = state.cart.filter(
//         (item) => item.id !== action.payload
//       );
//       //returning the other left after deleting
//       return {
//         ...state,
//         cart: removedCart,
//       };
//     case "ClearCart":
//       return { ...state, cart: [] };

//     default:
//       return state;
//   }
// };
