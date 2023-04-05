const initialState = 5;

export const MulAndDiv = (state = initialState, action) => {
  switch (action.type) {
    case "DIVIDE":
      return state / 2;
    case "MULTIPLY":
      return state * 2;
    default:
      return state;
  }
};
