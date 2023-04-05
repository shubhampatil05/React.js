import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getfetchProducts } from "./productSlice";

export const Products = () => {
  const myProducts = useSelector((state) => state.products.productResult);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getfetchProducts());
  }, [dispatch]);

  // console.log(myProducts);

  return (
    <>
      <div className="container-fluid">
        {myProducts.map((currEle) => {
          return (
            <div key={currEle.id}>
              <div>
                <img src={currEle.image} alt="Img" width="200px" />
              </div>
              <div>
                <p>{currEle.title}</p>
              </div>
              <div>
                <p>{currEle.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
