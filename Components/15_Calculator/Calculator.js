import React, { useState } from "react";
import "./Style.css";

export const Calculator = () => {
  const [result, setResult] = useState("");

  const eventHandle = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, result.length - 1)); //or
    // setResult(result.slice(0, - 1));
  };

  const equal = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult("Error");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="content">
          <form>
            <input type="text" autoComplete="off" defaultValue={result} />
          </form>

          <div className="buttons">
            <button onClick={clear} className="clear">
              Clear
            </button>
            <button onClick={backspace} className="backspace">
              <i className="fa-solid fa-delete-left"></i>
            </button>
            <button onClick={eventHandle} name="/" className="devide">
              /
            </button>
            <button name="7" onClick={eventHandle}>
              7
            </button>
            <button name="8" onClick={eventHandle}>
              8
            </button>
            <button name="9" onClick={eventHandle}>
              9
            </button>
            <button name="*" onClick={eventHandle} className="multiply">
              *
            </button>
            <button name="4" onClick={eventHandle}>
              4
            </button>
            <button name="5" onClick={eventHandle}>
              5
            </button>
            <button name="6" onClick={eventHandle}>
              6
            </button>
            <button name="-" onClick={eventHandle} className="substract">
              -
            </button>
            <button name="1" onClick={eventHandle}>
              1
            </button>
            <button name="2" onClick={eventHandle}>
              2
            </button>
            <button name="3" onClick={eventHandle}>
              3
            </button>
            <button name="+" onClick={eventHandle} className="add">
              +
            </button>
            <button name="0" onClick={eventHandle}>
              0
            </button>
            <button name="." onClick={eventHandle}>
              .
            </button>
            <button name="=" onClick={equal} className="equal">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
