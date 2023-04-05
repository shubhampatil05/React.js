import React, { useMemo, useState } from "react";

export const UseMemo = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const IncOne = () => {
    setCountOne(countOne + 1);
  };
  const IncTwo = () => {
    setCountTwo(countTwo + 2);
  };

  // const MulCount = () => {
  //   console.log("function Render");
  //   return countOne * 5;
  // };

  // without useMemo funtions re-renders

  const MulCount = useMemo(() => {
    console.log("function Render");
    return countOne * 5;
  }, [countOne]);

  return (
    <>
      <button onClick={IncOne}>IncrementOne {countOne}</button>
      <span>{MulCount}</span>
      <button onClick={IncTwo}>IncrementTwo {countTwo}</button>
    </>
  );
};

//-------------------------------------------------------------------
