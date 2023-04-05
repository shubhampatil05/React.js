import React from "react";
import { Gallary } from "./Gallary";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import gallarySlice from "./gallarySlice";

const store = configureStore({
  reducer: {
    Gallary: gallarySlice,
  },
});

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Gallary />
      </Provider>
    </>
  );
};
