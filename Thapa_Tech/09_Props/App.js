import React from "react";
import { Dis, Info, Shop } from "./Props";

export const App = () => {
  return (
    <>
      <Dis Name={Info[0].Name} />
      <Dis Name={Info[0].Age} />
      <Shop />
    </>
  );
};
