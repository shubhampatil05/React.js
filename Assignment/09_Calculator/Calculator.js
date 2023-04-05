import React, { useReducer, useState } from "react";
import { ReactDOM } from "react";
import "./Calculator.css";

export const Calculator = () => {
  const [Value, setValue] = useState("");

  const Num = (e) => {
    setValue(Value + e.target.value);
  };

  const Equal = () => {
    try {
      setValue(eval(Value));
    } catch {
      setValue("Error");
    }
  };

  const Clear = () => {
    setValue("");
  };

  return (
    <>
      <div className="Main">
        <div className="calculator card">
          <input
            type="text"
            className="calculator-screen z-depth-1"
            defaultValue={Value}
          />

          <div className="calculator-keys">
            <button
              type="button"
              className="operator btn btn-info"
              value="+"
              onClick={Num}
            >
              +
            </button>
            <button
              type="button"
              className="Num btn btn-info"
              value="-"
              onClick={Num}
            >
              -
            </button>
            <button
              type="button"
              className="Num btn btn-info"
              value="*"
              onClick={Num}
            >
              &times;
            </button>
            <button
              type="button"
              className="operator btn btn-info"
              value="/"
              onClick={Num}
            >
              &divide;
            </button>

            <button
              type="button"
              value="7"
              className="btn btn-light waves-effect"
              onClick={Num}
            >
              7
            </button>
            <button
              type="button"
              value="8"
              className="btn btn-light waves-effect"
              onClick={Num}
            >
              8
            </button>
            <button
              type="button"
              value="9"
              className="btn btn-light waves-effect"
              onClick={Num}
            >
              9
            </button>

            <button
              type="button"
              value="4"
              className="btn btn-light waves-effect"
              onClick={Num}
            >
              4
            </button>
            <button
              type="button"
              value="5"
              className="btn btn-light waves-effect"
              onClick={Num}
            >
              5
            </button>
            <button
              type="button"
              value="6"
              className="btn btn-light waves-effect"
              onClick={Num}
            >
              6
            </button>

            <button
              type="button"
              value="1"
              className="btn btn-light waves-effect"
              onClick={Num}
            >
              1
            </button>
            <button
              type="button"
              value="2"
              className="btn btn-light waves-effect"
              onClick={Num}
            >
              2
            </button>
            <button
              type="button"
              value="3"
              className="btn btn-light waves-effect"
              onClick={Num}
            >
              3
            </button>

            <button
              type="button"
              value="0"
              className="btn btn-light waves-effect"
              onClick={Num}
            >
              0
            </button>
            <button
              type="button"
              className="decimal function btn btn-secondary"
              value="."
              onClick={Num}
            >
              .
            </button>
            <button
              type="button"
              className="all-clear function btn btn-danger btn-sm"
              onClick={Clear}
            >
              AC
            </button>

            <button
              type="button"
              className="equal-sign operator btn btn-default"
              onClick={Equal}
              value="="
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
