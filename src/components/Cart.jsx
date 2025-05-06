import React from "react";
import CartItem from "./CartItem";

function Cart({ cart, addToCart, removeFromCart }) {
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
