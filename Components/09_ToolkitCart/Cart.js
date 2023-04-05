import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./cartSlice";
import "./Style.css";

export const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <>
      <div className="cartWrapper">
        {products.map((curr, index) => {
          const { id, image, price, title } = curr;

          return (
            <div className="cartCard" key={index}>
              <img className="img" src={image} />
              <p className="cartTitle">{title}</p>
              <h5 className="price">{price}$</h5>
              <button
                className="btn btn-danger"
                onClick={() => handleRemove(index)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
