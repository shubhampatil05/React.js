import { createSlice } from "@reduxjs/toolkit";

const catSlice = createSlice({
  name: "cats",
  initialState: {
    catsResult: [],
    isLoading: false,
  },

  reducers: {
    getCatsFetch: (state) => {
      state.isLoading = true;
    },
    getCatsSuccess: (state, action) => {
      state.catsResult = action.payload;
      state.isLoading = false;
    },
    getCatsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getCatsFetch, getCatsSuccess, getCatsFailure } =
  catSlice.actions;
export default catSlice.reducer;
