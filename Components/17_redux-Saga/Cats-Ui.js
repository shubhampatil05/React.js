import React from "react";
import { getCatsFetch } from "./catSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const Cats = () => {
  const myData = useSelector((state) => state.cats.catsResult);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  console.log(myData);

  return (
    <>
      <div className="container-fluid">
        <h1>Cats Species Gallary</h1>
        <hr />

        <div className="gallary">
          {myData.map((currEle) => {
            return (
              <div key={currEle.id}>
                <h1>{currEle.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
