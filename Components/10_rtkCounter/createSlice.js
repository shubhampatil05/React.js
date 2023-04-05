import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    devide: (state) => {
      state.value /= 2;
    },
    multiply: (state) => {
      state.value *= 2;
    },
  },
});

export const { increment, decrement, devide, multiply } = counterSlice.actions;

export default counterSlice.reducer;
