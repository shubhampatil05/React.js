import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, removeAll } from "./action";
import "./style.css";

export const Todo = () => {
  const [inputData, setInputData] = useState("");

  const myData = useSelector((state) => state.todoReducers.todoList);
  const dispatch = useDispatch();

  const eventHandle = (e) => {
    setInputData(e.target.value);
  };

  const add = () => {
    inputData === "" ? alert("Add Item") : dispatch(addItem(inputData));

    setInputData("");
  };
  const del = (id) => {
    dispatch(deleteItem(id));
  };

  const remove = (id) => {
    dispatch(removeAll(id));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="inputBtn">
          <input
            type="text"
            placeholder="Add Item"
            onChange={eventHandle}
            value={inputData}
          />
          <button className="btn btn-outline-dark" onClick={() => add()}>
            Add
          </button>
        </div>
        {myData.map((currEle, index) => {
          return (
            <div className="addedItem" key={index}>
              <h3>{index + 1}</h3>
              <h3>{currEle.item}</h3>
              <button
                className="btn btn-danger"
                onClick={() => del(currEle.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
        <button className="btn btn-dark" onClick={() => remove()}>
          CLEAR_ALL
        </button>
      </div>
    </>
  );
};
