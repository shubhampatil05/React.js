import React from "react";
import { add, sub, div, mul } from "./Challenge";

export const App = () => {
  return (
    <>
      <>
        <ol>
          <li>The Sum Of Two Num is {add(30, 3)}</li>
          <li>The Sub Of Two Num is {sub(30, 3)}</li>
          <li>The Div Of Two Num is {div(10, 3)}</li>
          <li>The Mul Of Two Num is {mul(10, 3)}</li>
        </ol>
      </>
      ;
    </>
  );
};
