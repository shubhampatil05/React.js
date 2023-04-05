import React from "react";
import { Provider } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import catSlice from "./catSlice";
import { Cats } from "./Cats-Ui";
import { catSaga } from "./catSaga";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cats: catSlice,
  },
  middleware: [saga],
});
saga.run(catSaga);

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Cats />
      </Provider>
    </>
  );
};
