import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk(
  "Gallary/getPhotos", // this is just a name to identify a perticular action..

  async () => {
    const res = await fetch("https://picsum.photos/v2/list?page=3&limit=9");

    const data = await res.json();
    return data;
  }
);

export const gallarySlice = createSlice({
  name: "Gallary",
  initialState: {
    gallaryResult: [],
    isLoading: false,
  },
  reducers: {},

  //to use a externel actions we have to use extraReducers instead of reducers
  // because externel actions not a part of createSlice/gallarySlice

  // extraReducers: {
  //   [getPhotos.pending]: (state) => {
  //     state.isLoading = true;
  //     console.log(state.isLoading);
  //   },
  //   [getPhotos.fulfilled]: (state, action) => {
  //     // this payload coming from API call
  //     state.gallaryResult = action.payload;
  //     state.isLoading = false;

  //     // once the API call is finish means data is fetched
  //     // isLoading is set to be false, coz there is no longer waiting/pending status
  //   },

  //   [getPhotos.rejected]: (state) => {
  //     state.isLoading = false;
  //   },
  // },

  extraReducers: (builder) => {
    builder
      .addCase(getPhotos.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(getPhotos.fulfilled, (state, action) => {
        state.gallaryResult = action.payload;
        state.isLoading = false;
      })
      .addCase(getPhotos.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default gallarySlice.reducer;
