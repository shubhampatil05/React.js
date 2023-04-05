import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { ContactUs } from "./ContactUs";

export const App = () => {
  const navigate = useNavigate();
  const navigatePage = (url) => {
    navigate(url);
  };

  return (
    <div>
      <button onClick={() => navigatePage("/Home")}>Navigate to Home</button>
      <button onClick={() => navigatePage("/ContactUs")}>
        Navigate to ContactUs
      </button>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
};
