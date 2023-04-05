import React from "react";
import { Child } from "./Child";

export const Parent = () => {
  function setData(data) {
    console.log(data);
  }

  return (
    <>
      <Child setData={setData} />
    </>
  );
};
