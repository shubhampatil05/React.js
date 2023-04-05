import React from "react";
import Data from "./Data";
import "./index.css";
function Cards(Props) {
  return (
    <>
      <div className="Main">
        <div className="Card">
          <a href={Props.Link}>
            <img src={Props.ImgSrc} className="Card_Img" />
          </a>
          <p className="Title">{Props.Title}</p>
        </div>
      </div>
    </>
  );
}

export default Cards;
