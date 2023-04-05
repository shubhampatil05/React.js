import React from "react";
import { Todo } from "./todo";
import { store } from "./store";
import { Provider } from "react-redux";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Todo />
      </Provider>
    </>
  );
};
