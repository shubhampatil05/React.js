import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <p>This is Home page of this page</p>
      <p>We are learning Router</p>
      <Link to="/About">Go To About Page</Link>
    </>
  );
};
