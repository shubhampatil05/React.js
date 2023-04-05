import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Scrollbars } from "react-custom-scrollbars";
import { useContext, useState } from "react";
import { Products } from "./3_Products";
import { Items } from "./2_Items";
import { CartContext } from "./1_Cart";

export const HeaderData = () => {
  //   const [items, setItems] = useState(Products);

  const { items, totalItem, totalAmount } = useContext(CartContext);

  return (
    <>
      <header>
        <div className="Continue-Shopping">
          <ArrowLeftIcon className="Arrow" />
          <h3 className="heading">Continue Shopping</h3>
        </div>

        <div className="Icon">
          <ShoppingCartIcon className="Cart-Icon" />
          <p>{totalItem}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          You have <span>{totalItem}</span> items in your shopping cart
        </p>
        <div className="Cart-items">
          <Scrollbars>
            {items.map((currEle) => {
              return <Items key={currEle.id} {...currEle} />;
            })}
          </Scrollbars>
        </div>

        <div className="Cart-total">
          <p>
            Cart total : <span>{totalAmount}₹</span>
          </p>
          <button className="btn btn-primary">Checkout</button>
        </div>
      </section>
    </>
  );
};
