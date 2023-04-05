import React from "react";
import { FetchAPIUsingAsyncAwait, FetchAPIUsingPromise } from "./FetchPromise";

export const App = () => {
  return (
    <>
      <FetchAPIUsingPromise />
      <hr />
      <hr />
      <FetchAPIUsingAsyncAwait />
    </>
  );
};
