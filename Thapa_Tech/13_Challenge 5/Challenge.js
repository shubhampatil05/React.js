import React, { useState } from "react";
import "./Challenge.css";
let _Time = new Date().toLocaleTimeString();

const Challenge = () => {
  let [UpdateTime, ChangeTime] = useState(_Time);

  const UpdateClock = () => {
    let New_Time = new Date().toLocaleTimeString();

    ChangeTime(New_Time);
  };

  return (
    <>
      <div className="Clock">
        {" "}
        <h2>{UpdateTime}</h2>
        <button onClick={UpdateClock}>Click</button>
      </div>
    </>
  );
};
export { Challenge };
