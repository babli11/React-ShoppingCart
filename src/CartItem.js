import React from "react";
import { useGlobalContext } from "./context";
const CartItem = ({ id, img_url, name, price, amount }) => {
  const { remove, toggleAmount } = useGlobalContext();
  return (
    <article className="cart-item">
      <div className="cart-item cart-box">
        <img src={img_url} alt={name} />
        <div className="item-name-price">
          <h4>{name}</h4>
          <h4 className="item-price">${price}</h4>
          {/* remove button */}
        </div>
        <div className="remove-container">
          <button className="remove-btn" onClick={() => remove(id)}>
            remove
          </button>
        </div>
      </div>

      {/* Button */}
      <div className="amount-change-div">
        {/* increase amount */}
        <button className="amount-btn" onClick={() => toggleAmount(id, "inc")}>
          +
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => toggleAmount(id, "dec")}>
          -
        </button>
      </div>
    </article>
  );
};

export default CartItem;
