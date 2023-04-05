import React from "react";
export const Defaultprops = (props) => {
  return (
    <>
      <h1>{props.Name}</h1>
      <h1>{props.Age}</h1>
      <h1>{props.City}</h1>
      <h1>{props.Address}</h1>
    </>
  );
};

Defaultprops.defaultProps = {
  Name: "Jenny",
  Age: "25",
  City: "New York",
};
