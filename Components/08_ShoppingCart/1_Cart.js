import { createContext, useEffect, useReducer } from "react";
import "./4_Style.css";
import { Products } from "./3_Products";
import { HeaderData } from "./5_HeaderData";
import { reducer } from "./6_Reducer";

export const CartContext = createContext();

const initialState = {
  items: Products,
  totalAmount: 0,
  totalItem: 0,
};

export const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const remItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const Increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const Decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.items]);

  useEffect(() => {
    dispatch({ type: "GET_AMOUNT" });
  }, [state.items]);

  return (
    <>
      <CartContext.Provider value={{ ...state, remItem, Increment, Decrement }}>
        <HeaderData />
      </CartContext.Provider>
    </>
  );
};
