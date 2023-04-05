import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    productResult: [],
    isLoading: false,
  },
  reducers: {
    getfetchProducts: (state) => {
      state.isLoading = true;
    },

    getProductSuccess: (state, action) => {
      state.productResult = action.payload;
    },
  },
});

export const { getfetchProducts, getProductSuccess } = productSlice.actions;

export default productSlice.reducer;
