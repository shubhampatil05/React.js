import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import Data from "./Data";
import Cards from "./Cards";
import Footer from "./Footer";
import "./index.css";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="Flex">
        {Data.map(function (value) {
          return (
            <Cards
              ImgSrc={value.ImgSrc}
              Link={value.Link}
              Title={value.Title}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};
