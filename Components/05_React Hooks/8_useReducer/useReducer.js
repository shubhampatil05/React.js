import React, { useReducer } from "react";

// const initialState = 0;

// const reducer = (state, action) => {
//   console.log(state, action);

//   if (action.type === "INCREMENT") {
//     return state + 1;
//   }
//   if (action.type === "DECREMENT") {
//     return state - 1;
//   } else {
//     return state;
//   }
// };

// export const Reducer = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <>
//       <h3>{state}</h3>

//       <button
//         onClick={() => {
//           dispatch({ type: "INCREMENT" });
//         }}
//       >
//         Increment
//       </button>
//       <button
//         onClick={() => {
//           dispatch({ type: "DECREMENT" });
//         }}
//       >
//         Decrement
//       </button>
//     </>
//   );
// };

//-------------------------------------------------------------------------

const reduce = (state, action) => {
  console.log(state, action);

  if (action.type === "MULTIPLY") {
    return state * 2;
  }
  if (action.type === "DEVIDE") {
    return state / 2;
  } else {
    return state;
  }
};

export const MulDiv = () => {
  const [state, dispatch] = useReducer(reduce, 1);

  return (
    <>
      <h4>{state}</h4>
      <button
        onClick={() => {
          dispatch({ type: "MULTIPLY" });
        }}
      >
        Multiply
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DEVIDE" });
        }}
      >
        Devide
      </button>
    </>
  );
};

//----------------------------------------------------------------------

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

export const Reducer = () => {
  // using useReducer()

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <p>{state}</p>
        <button
          onClick={() => {
            dispatch("INCREMENT");
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch("DECREMENT");
          }}
        >
          Decrement
        </button>

        <button
          onClick={() => {
            dispatch("RESET");
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};
