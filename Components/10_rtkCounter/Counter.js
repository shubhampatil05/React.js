import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, devide, multiply } from "./createSlice";

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <h3>{count}</h3>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(devide())}>/</button>
      <button onClick={() => dispatch(multiply())}>*</button>
    </div>
  );
};
