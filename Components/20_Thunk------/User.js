import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./userSlice";

export const User = () => {
  const myUser = useSelector((state) => state.user.userResult);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  console.log(myUser);

  return (
    <div>
      {myUser.map((currEle) => {
        return (
          <div key={currEle.id}>
            <span>{currEle.id}</span> -<span>{currEle.name}</span>
          </div>
        );
      })}
    </div>
  );
};
