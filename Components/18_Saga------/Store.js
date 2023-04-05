import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import createSagaMiddleware from "@redux-saga/core";

import { productSaga } from "./productSaga";
const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    products: productSlice,
  },
  middleware: [saga],
});

saga.run(productSaga);
