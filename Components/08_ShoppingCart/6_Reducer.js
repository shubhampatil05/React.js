export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      items: state.items.filter((curr) => {
        return curr.id !== action.payload;
      }),
    };
  }

  if (action.type === "INCREMENT") {
    let UpdateCount = state.items.map((currEle) => {
      if (currEle.id === action.payload) {
        return { ...currEle, quantity: currEle.quantity + 1 };
      }
      return currEle;
    });
    return { ...state, items: UpdateCount };
  }

  if (action.type === "DECREMENT") {
    let UpdateCount = state.items
      .map((currEle) => {
        if (currEle.id === action.payload) {
          return { ...currEle, quantity: currEle.quantity - 1 };
        }
        return currEle;
      })
      .filter((currEle) => {
        return currEle.quantity !== 0;
      });

    return { ...state, items: UpdateCount };
  }
  if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount } = state.items.reduce(
      (accum, currVal) => {
        let { quantity, price } = currVal;

        let updateAmount = price * quantity;

        accum.totalAmount += updateAmount;

        accum.totalItem += quantity;
        return accum;
      },

      {
        totalItem: 0,
        totalAmount: 0,
      }
    );

    return { ...state, totalItem, totalAmount };
  }

  return state;
};
