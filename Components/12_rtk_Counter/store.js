import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./createSlice";

export const store = configureStore({
  reducer: { counter: counterSlice },
});
