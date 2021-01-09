import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../components/ProductReducer";

export const store = configureStore({
  reducer: productReducer,
});
