import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
import { shoppingCartArray } from "./ProductReducer";
import { Typography } from "@material-ui/core";
import logo from "../images/logo.png";

export default function NavBar() {
  const state = useSelector(shoppingCartArray);
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <NavLink to="/">
          <img src={logo} alt="logo" width="128px" />{" "}
        </NavLink>
        <Nav className="ml-auto">
          <NavLink className="navLink" to="/" activeClassName="active" end>
            Home
          </NavLink>
          <NavLink className="navLink" to="/products" activeClassName="active">
            Products
          </NavLink>
          <NavLink className="navLink" to="/cart" activeClassName="active">
            {state.itemsLength > 0 ? (
              <div className="dot">
                <Typography style={{ color: "white", fontSize: "11px" }}>
                  {state.itemsLength}
                </Typography>
              </div>
            ) : null}
            <ShoppingCartIcon />
          </NavLink>
        </Nav>
      </Navbar>
    </>
  );
}
