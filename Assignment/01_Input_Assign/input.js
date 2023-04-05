import React, { useState } from "react";

export const Input = () => {
  const [name, setName] = useState("");
  const [newName, getName] = useState();

  return (
    <>
      <h1>Hi! {newName} </h1>

      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          getName(name);
          setName("");
        }}
      >
        Click
      </button>
    </>
  );
};
