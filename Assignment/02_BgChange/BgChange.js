import React, { useState } from "react";

export const BgChange = () => {
  const [Bg, setBg] = useState("indianRed");
  const [num, setNum] = useState(0);

  const Colors = [
    "green",
    "red",
    "blue",
    "orange",
    "pink",
    "yellow",
    "gray",
    "cyan",
    "red",
    "black",
    "aliceblue",
    "lightblue",
    "darkGray",
    "wheat",
  ];

  let C = Colors.map((currEle, index) => {
    return index++;
  });

  return (
    <>
      <div style={{ backgroundColor: Bg, padding: "30px" }}>
        <button
          className="btn btn-success"
          onClick={() => {
            setBg(Colors[num]);

            num === Colors.length - 1 ? setNum(0) : setNum(num + 1);
          }}
        >
          Click
        </button>
      </div>
    </>
  );
};
