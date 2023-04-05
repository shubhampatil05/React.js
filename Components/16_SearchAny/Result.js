import React from "react";

export const Result = (props) => {
  const img = `https://source.unsplash.com/400x300/?${props.name}`;

  return (
    <>
      <div className="result">
        <img src={img} alt="img" />
      </div>
    </>
  );
};
