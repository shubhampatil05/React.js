import { useContext } from "react";
import { CartContext } from "./1_Cart";

export const Items = ({ id, title, discription, price, img, quantity }) => {
  const { remItem, Increment, Decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-Container">
        <div className="items-img">
          <img className="img" src={img} alt="" />
        </div>
        <div className="title">
          <h3>{title}</h3>
          <p>{discription}</p>
        </div>
        <div className="add-rem">
          <i className="fas fa-plus" onClick={() => Increment(id)}></i>
          <input type="text" placeholder={quantity} />
          <i className="fas fa-minus" onClick={() => Decrement(id)}></i>
        </div>
        <div className="price">
          <p>{price}</p>
        </div>
        <div className="delete">
          <button className="btn btn-light dlt" onClick={() => remItem(id)}>
            <i className="fas fa-trash-alt remove"></i>
          </button>
        </div>
      </div>
    </>
  );
};
