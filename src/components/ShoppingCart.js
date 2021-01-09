import React from "react";
import { useSelector } from "react-redux";
import { shoppingCartArray } from "./ProductReducer";

export const ShoppingCart = () => {
  const shoeArr = useSelector(shoppingCartArray);

  return <div></div>;
};
