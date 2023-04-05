import React from "react";
import { Posts } from "./Posts";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { postsApi } from "./ApiSlice";

export const App = () => {
  return (
    <>
      <ApiProvider api={postsApi}>
        <Posts />
      </ApiProvider>
    </>
  );
};
