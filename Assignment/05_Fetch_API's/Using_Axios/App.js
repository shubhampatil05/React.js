import React from "react";
import {
  FetchData,
  FetchDataBtn,
  FetchDataInput,
  FetchDataUsingInputAndBtn,
} from "./FetchAxios";

export const App = () => {
  return (
    <>
      <FetchData />
      <hr />
      <FetchDataInput />
      <hr />
      <FetchDataBtn />
      <hr />
      <FetchDataUsingInputAndBtn />
    </>
  );
};
