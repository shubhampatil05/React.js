import React, { useState } from "react";
import "./Hooks.css";

const Hooks = () => {
  let [Count, SetCount] = useState(0);

  const IncreamentCount = () => {
    SetCount(Count + 1);
  };

  const DecreamentCount = () => {
    SetCount(Count - 1);
  };

  const Color = {};

  if (Count > 0) {
    Color.color = "yellow";
  } else if (Count < 0) {
    Color.color = "indianRed";
  } else {
    Color.color = "black";
  }

  return (
    <>
      <div className="Main">
        <h1 style={Color}>{Count}</h1>
        <button onClick={IncreamentCount}>Increament</button>
        <button onClick={DecreamentCount}>Decreament</button>
      </div>
    </>
  );
};

export { Hooks };
