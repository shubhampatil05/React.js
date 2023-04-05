import React from "react";
import { User } from "./User";
import { Provider } from "react-redux";
import { store } from "./Store";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <User />
      </Provider>
    </>
  );
};
