import { useState } from "react";
import "./ShoppingList.css";

const ShoppingList = () => {
  let [AddItem, setItem] = useState();
  let [AddItemList, setItemList] = useState();
  const Change = (e) => {
    setItem(e.target.value);
  };
  const AddList = (e) => {
    setItemList(AddItem);
    document.getElementById("Clear").value = null;
  };

  return (
    <>
      <div>
        <div className="Inner">
          <input
            onChange={Change}
            placeholder="Enter Your Items"
            id="Clear"
          ></input>
          <button onClick={AddList}>AddItem</button>

          <ul>
            <li>{AddItemList}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export { ShoppingList };
