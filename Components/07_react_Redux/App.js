import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Increment, Decrement } from "./Actions/Action_1";
import { Divide, Multiply } from "./Actions/Action_2";
export const App = () => {
  const firstValue = useSelector((state) => state.IncAndDec);
  const dispatch = useDispatch();

  const secondValue = useSelector((Data) => Data.MulAndDiv);

  const Inc = () => {
    dispatch(Increment());
  };
  const Dec = () => {
    dispatch(Decrement());
  };

  const Div = () => {
    dispatch(Divide());
  };
  const Mul = () => {
    dispatch(Multiply());
  };

  return (
    <>
      <button onClick={Inc}>+</button>
      <span>{firstValue}</span>
      <button onClick={Dec}>-</button>
      <hr />

      <button onClick={Div}>/</button>
      <span>{secondValue}</span>
      <button onClick={Mul}>*</button>
    </>
  );
};
