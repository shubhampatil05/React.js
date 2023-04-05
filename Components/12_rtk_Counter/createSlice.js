import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    inc: (state) => {
      state.value += 1;
    },

    dec: (state) => {
      state.value > 0 ? (state.value -= 1) : (state.value = 0);
    },

    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { inc, dec, reset } = counterSlice.actions;

export default counterSlice.reducer;
