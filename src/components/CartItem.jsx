import React from "react";

function CartItem({ item, addToCart, removeFromCart }) {
  return (
    <li className="cart-item">
      <div className="item-image">{item.image}</div>
      <span className="item-name">{item.name}</span>
      <div className="quantity-controls">
        <button onClick={() => removeFromCart(item.id)} className="remove-item">
          -
        </button>
        <span className="item-quantity">{item.quantity}</span>
        <button onClick={() => addToCart(item)} className="add-item">
          +
        </button>
      </div>
    </li>
  );
}

export default CartItem;
