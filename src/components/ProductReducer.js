import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import shoes from "../shoes.json";

const productReducer = createSlice({
  name: "productReducer",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      const { keyName } = action.payload;
      console.log(keyName);
      state.push(shoes[keyName]);
      console.log(state);
    },
    removeProduct: (state, action) => {},
  },
});
export const shoppingCartArray = (state) => state;
export const { addProduct, removeProduct } = productReducer.actions;
export default productReducer.reducer;
