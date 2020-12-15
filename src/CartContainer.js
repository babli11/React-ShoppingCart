import React from "react";
import CartItem from "./CartItem";

import { useGlobalContext } from "./context";

const CartContainer = () => {
  const discount = 15;
  const { cart, total, clearCart } = useGlobalContext();
  const priceAfterDicsount = (total * discount) / 100;
  const allTotal = total - priceAfterDicsount;
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>Your Cart</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="entire-data">
      <section className="cart">
        {/* cart header */}
        <section>
          <header>
            <h2>Order Summary</h2>
          </header>
          {/* cart items */}
          <div>
            {cart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
        </section>

        <section className="order-description">
          <table className="order-details-table">
            <thead>
              <tr>
                <th colSpan="2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <div className="table-label-items">
                  <td></td>
                  <td>Items({cart.length}):</td>
                  <td>${total}</td>
                </div>
              </tr>
              <div className="table-label">
                <td>Discount(-{discount}%):</td>
                <td>-${priceAfterDicsount}</td>
              </div>
            </tbody>
          </table>
          <div className="all-total">
            total <span>${allTotal}</span>
          </div>

          <button className="btn clear-btn" onClick={clearCart}>
            clear cart
          </button>
        </section>
      </section>
    </section>
  );
};

export default CartContainer;
