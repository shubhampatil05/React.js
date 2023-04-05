import { useState } from "react";
import "./ToDoList.css";
import { Comp } from "./Comp";

const ToDoList = () => {
  const [List, setList] = useState("");
  const [Items, setItems] = useState([]);

  const Event = (e) => {
    setList(e.target.value);
  };

  const AddItem = () => {
    setItems((preValue) => {
      return [...preValue, List];
    });

    setList("");
  };

  const Delete = (id) => {
    setItems((preItem) => {
      return preItem.filter((CurrElement, index) => {
        return index != id;
      });
    });
  };

  return (
    <>
      <div className="Main">
        <div className="Inner">
          <br />

          <h1>Shopping List</h1>
          <input
            type="text"
            placeholder="Add Item"
            onChange={Event}
            value={List}
          />
          <button onClick={AddItem}>+</button>

          <ul>
            {Items.map((Itemvalue, Index) => {
              return (
                <Comp
                  key={Index}
                  id={Index}
                  text={Itemvalue}
                  onSelect={Delete}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export { ToDoList };
