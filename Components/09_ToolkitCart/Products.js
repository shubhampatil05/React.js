import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./cartSlice";

export const Products = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const FetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");

    const data = await res.json();

    // console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    FetchProducts();
  }, []);

  const addHandle = (currEle) => {
    dispatch(add(currEle));
  };

  return (
    <>
      <div className="ProductsWrapper">
        {products.map((currEle) => {
          const { id, image, price, title } = currEle;

          return (
            <div className="cart" key={id}>
              <img className="img" src={image} />
              <p className="title">{title}</p>
              <h5 className="price">{price}$</h5>
              <button
                className="btn btn-success"
                onClick={() => addHandle(currEle)}
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
