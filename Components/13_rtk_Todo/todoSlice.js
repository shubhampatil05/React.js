import { createSlice } from "@reduxjs/toolkit";

const getLocalData =
  localStorage.getItem("todoItem") !== null
    ? JSON.parse(localStorage.getItem("todoItem"))
    : [];

const initialState = {
  todos: getLocalData,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.todos.push({
        id: Math.random(),
        item: action.payload,
        status: "Pending",
      });

      localStorage.setItem("todoItem", JSON.stringify(state.todos));
    },

    remove: (state, action) => {
      //   state.pop(action.payload);

      const filtered = state.todos.filter(
        (currEle, index) => action.payload !== index
      );

      localStorage.setItem("todoItem", JSON.stringify(state.todos));
      state.todos = filtered;

      localStorage.setItem("todoItem", JSON.stringify(state.todos));
    },

    fulfil: (state, action) => {
      state.todos.filter((currEle, index) => {
        if (action.payload === index) {
          currEle.status = "Fulfilled";
        }
      });
      localStorage.setItem("todoItem", JSON.stringify(state.todos));
    },
    edit: (state, action) => {
      state.todos.filter((currEle, index) => {
        if (index === action.payload) {
          return state.todos[action.payload].item;
        }
      });
      localStorage.setItem("todoItem", JSON.stringify(state.todos));
    },

    update: (state, action) => {
      state.todos.filter((curr, id) => {
        if (id === action.payload.id) {
          state.todos[action.payload.id] = {
            item: action.payload.inputValue,
            status: "Pending",
          };
        }
      });
      localStorage.setItem("todoItem", JSON.stringify(state.todos));
    },
  },
});

export const { add, remove, fulfil, edit, update } = todoSlice.actions;

export default todoSlice.reducer;
