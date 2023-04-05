import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, fulfil, edit, update } from "./todoSlice";

export const Todo = () => {
  const myData = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const eventHandle = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    inputValue === "" ? alert("Add Item") : dispatch(add(inputValue));

    setInputValue("");
  };

  const deteteItem = (id) => {
    dispatch(remove(id));
  };

  const fulfilItem = (id) => {
    dispatch(fulfil(id));
  };
  const editItem = (id) => {
    dispatch(edit());
    setInputValue(myData[id].item);
  };

  const updateItem = (id) => {
    dispatch(update({ id: id, inputValue: inputValue }));
    setInputValue("");
  };

  return (
    <>
      <div className="container">
        <div>
          <input type="search" onChange={eventHandle} value={inputValue} />

          <button className="btn" onClick={() => addItem()}>
            Add
          </button>
        </div>

        {myData.map((currEle, index) => {
          return (
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              key={index}
            >
              <h2>{index}</h2>
              <h2>{currEle.item}</h2>
              <h2>{currEle.status}</h2>

              <button
                className="btn btn-danger"
                onClick={() => deteteItem(index)}
              >
                delete
              </button>
              <button
                className="btn btn-info"
                onClick={() => fulfilItem(index)}
              >
                Fulfil
              </button>

              <button
                className="btn btn-success"
                onClick={() => editItem(index)}
              >
                Edit
              </button>

              <button
                className="btn btn-primary"
                onClick={() => updateItem(index)}
              >
                Update
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
