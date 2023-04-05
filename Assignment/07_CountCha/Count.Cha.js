import React, { useState } from "react";
import "./CountCha.css";

export const CountCharacters = () => {
  const [count, setCount] = useState("");
  const [Newcount, setNewCount] = useState("");

  const ClickEvent = () => {
    setNewCount(count);

    // let res = new Set([...count.toLowerCase()]);

    let obj = {};
    let res = [...count.toLowerCase()].reduce((pre, next) => {
      pre[next] = 1;
      return pre;
    }, obj);
    console.log(res);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button onClick={ClickEvent}>Click</button>
        <h3> Count : {Newcount.length}</h3>
      </div>
    </>
  );
};
