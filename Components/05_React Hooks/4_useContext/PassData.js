import React, { useContext } from "react";
import { FirstName, LastName } from "./Data";

export const PassData = () => {
  let fName = useContext(FirstName);
  let lName = useContext(LastName);
  return (
    <>
      <h1>
        {fName} {lName}
      </h1>
    </>
  );
};
