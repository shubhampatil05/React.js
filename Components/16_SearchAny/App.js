import React, { useState } from "react";
import { Result } from "./Result";
import "./Style.css";

export const App = () => {
  const [state, setState] = useState("");
  const eventHandle = (e) => {
    setState(e.target.value);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="search">
          <input
            type="taxt"
            placeholder="Search Anything"
            onChange={eventHandle}
            value={state}
          />
        </div>

        {state === "" ? null : <Result name={state} />}
      </div>
    </>
  );
};
