import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import { Todo } from "./todo";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Todo />
      </Provider>
    </>
  );
};
