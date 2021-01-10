import { createSlice } from "@reduxjs/toolkit";
import shoes from "../shoes.json";

const productReducer = createSlice({
  name: "productReducer",
  initialState: {
    shoeArray: [],
    itemsLength: 0,
    totalPrice: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const { keyName } = action.payload;
      if (state.itemsLength > 0) {
        for (let i = 0; i < state.shoeArray.length; i++) {
          if (state.shoeArray[i].id === keyName) {
            console.log(state.shoeArray[i].quantity);
            state.shoeArray[i].quantity += 1;
            break;
          } else if (i === state.shoeArray.length - 1) {
            state.shoeArray.push(shoes[keyName]);
            break;
          }
        }
        state.totalPrice += Number(shoes[keyName].price.substring(1));
      } else {
        state.shoeArray.push(shoes[keyName]);
        state.totalPrice += Number(state.shoeArray[0].price.substring(1));
      }
      state.itemsLength += 1;
      console.log(keyName);
    },
    removeProduct: (state, action) => {
      const { keyName } = action.payload;
      state.shoeArray.forEach((shoe, ind) => {
        if (shoe.id === keyName) {
          if (shoe.quantity > 1) {
            shoe.quantity -= 1;
          } else {
            state.shoeArray.splice(ind, 1);
          }
          state.totalPrice -= Number(shoe.price.substring(1));
          state.itemsLength -= 1;
        }
      });
    },
  },
});
export const shoppingCartArray = (state) => ({
  shoeArray: state.shoeArray,
  itemsLength: state.itemsLength,
  totalPrice: state.totalPrice,
});
export const { addProduct, removeProduct } = productReducer.actions;
export default productReducer.reducer;
