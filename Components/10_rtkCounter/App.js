import React from "react";
import { Counter } from "./Counter";
import { Provider } from "react-redux";
import { store } from "./store";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
};
