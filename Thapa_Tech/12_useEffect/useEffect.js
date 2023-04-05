import React, { useEffect, useState } from "react";

const Counter = () => {
  let [Count, setCount] = useState(0);
  let [Calculation, setCalculation] = useState();

  const Fire = (value) => {
    setCount(Count + 1);
  };

  useEffect(() => {
    setCalculation(Count * 2);
  });

  return (
    <>
      <p>{Count}</p>
      <button onClick={Fire}>Click</button>
      <p>{Calculation}</p>
    </>
  );
};

const Clear = () => {
  let [value, setValue] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setValue(value + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <p>{value}</p>
    </>
  );
};

export { Counter, Clear };
