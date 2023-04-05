import { json } from "react-router-dom";

const getLocalData =
  localStorage.getItem("myList") !== null
    ? JSON.parse(localStorage.getItem("myList"))
    : [];

const initialData = {
  todoList: getLocalData,
};

export const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const { id, item } = action.payload; // distructuring

      // id: action.payload.id,
      // item: action.payload.item,

      const addItem = {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: id,
            item: item,
          },
        ],
      };

      localStorage.setItem("myList", JSON.stringify(state.todoList));

      return addItem;

    case "DELETE_ITEM":
      const filteredItem = state.todoList.filter(
        (currEle) => currEle.id !== action.id
      );

      return {
        ...state,
        todoList: filteredItem,
      };

    case "REMOVE_ALL":
      return {
        todoList: [],
      };

    default:
      return state;
  }
};
