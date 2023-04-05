import { useState } from "react";
import { Comp } from "./Comp";
import "./SelfList.css";

const ShoppingCart = () => {
  const [List, setList] = useState();
  const [Items, setItems] = useState([]);

  const Event = (e) => {
    setList(e.target.value);
  };
  const Submit = () => {
    setItems((prevalue) => {
      return [...prevalue, List];
    });

    setList("");
  };

  const Delete = (id) => {
    setItems((pre) => {
      return pre.filter((curr, next) => {
        return next != id;
      });
    });
  };

  const Remove = (id) => {
    setItems((prevalue) => {
      return prevalue.filter((currvalue, ind) => {
        return ind != id;
      });
    });
  };

  return (
    <>
      <div className="Main">
        <div className="Inner">
          <br></br>
          <h1>Shopping Cart</h1>
          <input onChange={Event} placeholder="AddItem" value={List} />
          <button onClick={Submit} className="btn_1">
            AddItem
          </button>
          <ul>
            {Items.map((ItemList, index) => {
              return (
                <Comp
                  key={index}
                  Id={index}
                  text={ItemList}
                  onSelect={Remove}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export { ShoppingCart };
