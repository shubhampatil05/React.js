import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Style.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <>
      <div className="container-fluid">
        <span className="Logo">
          <img
            src="https://download.logo.wine/logo/Snapdeal/Snapdeal-Logo.wine.png"
            alt=""
            className="logo"
          />
        </span>

        <div>
          <NavLink className="Navlink" to="/Home">
            <i className="fa-solid fa-arrow-left back"></i>
          </NavLink>
          <NavLink className="Navlink" to="/Cart">
            <span className="CartCount">
              <ShoppingCartIcon className="Cart-Icon" />
              <span className="Items">{items.length}</span>
            </span>
          </NavLink>
        </div>
      </div>
    </>
  );
};
