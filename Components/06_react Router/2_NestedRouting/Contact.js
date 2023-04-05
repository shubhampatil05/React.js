import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const Contact = () => {
  const Location = useLocation();
  console.log(Location);

  return (
    <>
      <h1>Contact Us</h1>

      <ul>
        <li>
          <Link to="/Info">Info</Link>
        </li>
        <li>
          <Link to="/More">More</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};
