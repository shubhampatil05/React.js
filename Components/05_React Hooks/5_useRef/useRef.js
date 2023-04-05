import React, { useEffect, useRef, useState } from "react";

// useRef does not cause re-renders..

export const UsingRef = () => {
  const [inputVal, setInputVal] = useState("");
  const Count = useRef(0);
  // {current:0}

  useEffect(() => {
    Count.current = Count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />

      <h2>{Count.current}</h2>
    </>
  );
};

//------------------------------------------------------

// useRef Accesing DOM element..

export const UseRefDOM = () => {
  const inputElement = useRef();

  const event = () => {
    inputElement.current.focus();
    inputElement.current.style.backgroundColor = "indianred";
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={event}>Click</button>
    </>
  );
};

//------------------------------------------------------

// The useRef Hook can also be used to keep track of previous state values..

export const TrackPreState = () => {
  const [inputVal, setInputVal] = useState("");

  const preInputValue = useRef();
  // {current:}

  useEffect(() => {
    preInputValue.current = inputVal;
  }, [inputVal]);

  return (
    <>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
      <h3>Current Value : {inputVal}</h3>
      <h3>Previous Value : {preInputValue.current}</h3>
    </>
  );
};

//------------------------------------------------------

// To display the total no. of characters..
// Count and characters should be counted individually..

export const DisplayCount = () => {
  const [count, setcount] = useState(0);
  const preCount = useRef(0);

  // {current:0}

  useEffect(() => {
    console.log("Count", count, "preCount", preCount.current);
  }, [preCount, count]);

  return (
    <>
      <h1>{count}</h1>

      <button
        onClick={() => {
          setcount((val) => {
            preCount.current = val;
            return val + 1;
          });
        }}
      >
        Increment
      </button>
      <h3>{`Count :  ${count} preCount : ${preCount.current}`}</h3>
    </>
  );
};
