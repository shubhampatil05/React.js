import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <h1>About Page</h1>
      <p>This is About page of this page</p>
      <p>We are learning Router</p>
      <Link to="/">Go To Home Page</Link>
    </>
  );
};
