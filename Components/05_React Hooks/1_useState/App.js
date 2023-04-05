import React from "react";
import {
  Car,
  Counter,
  UseStateArray,
  UseStateObject,
  UseStateReduce,
} from "./useState";

export const App = () => {
  return (
    <>
      <UseStateArray />
      <hr />
      <UseStateObject />
      <hr />
      <UseStateReduce />
      <hr />
      <Counter />
      <hr />
      <Car />
    </>
  );
};
