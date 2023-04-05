import React, { useState } from "react";
import "./DigiClock.css";

const DigiClock = () => {
  let Time = new Date().toLocaleTimeString();

  let [CurrentTime, setCurrentTime] = useState(Time);

  setInterval(() => {
    let UpdateTime = new Date().toLocaleTimeString();

    setCurrentTime(UpdateTime);
  }, 1000);

  return (
    <>
      <div className="Clock">
        <h1>{CurrentTime}</h1>
      </div>
    </>
  );
};

export { DigiClock };
