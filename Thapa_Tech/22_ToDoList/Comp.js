import React from "react";

export const Comp = (props) => {
  return (
    <>
      <div className="font">
        <i
          className="fa-solid fa-xmark"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <li>{props.text}</li>
      </div>
    </>
  );
};
