export const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: {
      id: Math.random(),
      item: item,
    },
  };
};
export const deleteItem = (id) => {
  return {
    type: "DELETE_ITEM",
    id,
  };
};

export const removeAll = () => {
  return {
    type: "REMOVE_ALL",
  };
};
