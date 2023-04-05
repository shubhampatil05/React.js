import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./Home";
import { Account } from "./Account";
import { Login } from "./Login";
import { Protected } from "./Protected";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/Account">Account</NavLink>
          </li>
        </ul>
        <Routes>
          <Route extact path="/" element={<Home />} />
          <Route
            extact
            path="/Account"
            element={<Protected Component={Account} />}
          />
          <Route extact path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
