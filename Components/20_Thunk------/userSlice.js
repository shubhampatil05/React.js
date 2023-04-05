import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
  "user/getUser", // this is just a name to identify a perticular action..

  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = response.json();
    return data; // this means getUser function has a data..
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userResult: [],
    status: "",
  },

  reducers: {},

  //to use a externel actions we have to use extraReducers instead of reducers
  // because externel actions not a part of createSlice/userSlice..

  extraReducers: (builder) => {
    // bulider is a callback function used to add more reducers or builder is a case creator
    builder
      .addCase(getUser.pending, (state) => {
        state.status = "Pending";
        console.log(state.status);
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.userResult = action.payload;
        state.status = "Fulfilled";
        console.log(state.status);
      })
      .addCase(getUser.rejected, (state) => {
        state.status = "Rejected";
        console.log(state.status);
      });
  },
});

export default userSlice.reducer;
