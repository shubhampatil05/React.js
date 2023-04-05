import { useState } from "react";
import { New } from "./Comp";

export const Cart = () => {
  const [List, setList] = useState();
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
    setItems((Element) => {
      return Element.filter((CurrVal, index) => {
        return index != id;
      });
    });
  };
  return (
    <>
      <h1>Shopping Cart</h1>
      <input type="text" placeholder="Add Item" onChange={Event} value={List} />
      <button onClick={AddItem}>Add</button>
      <ul>
        {Items.map((Val, Index) => {
          return <New key={Index} id={Index} text={Val} onSelect={Delete} />;
        })}
      </ul>
    </>
  );
};
