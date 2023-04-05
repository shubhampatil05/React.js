import React from "react";

const Child = ({ Learning }) => {
  console.log("Child Component");
  return <div></div>;
};

export default React.memo(Child);
