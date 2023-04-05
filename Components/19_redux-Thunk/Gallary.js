import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./gallarySlice";

export const Gallary = () => {
  const myGallary = useSelector((state) => state.Gallary.gallaryResult);
  const dispatch = useDispatch();
  // useDispatch allow us to call redux actions
  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);
  console.log(myGallary);

  return (
    <>
      <div
        className="Container-fluid"
        style={{
          display: "grid",
          gridTemplateColumns: "25% 25% 25%",
          justifyContent: "space-around",
        }}
      >
        {myGallary.map((currEle) => {
          return (
            <div key={currEle.id}>
              <img
                src={currEle.download_url}
                alt="img"
                width="300px"
                height="200px"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
