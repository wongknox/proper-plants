import { useState } from "react";
import "./App.css";
import Plants from "./components/Plants";
import Cart from "./components/Cart";
import PLANTS from "./data";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    const plantExists = cart.find((i) => i.id === plant.id);
    if (plantExists) {
      setCart(
        cart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      const item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (plantToRemoveId) => {
    setCart(
      cart
        .map((item) =>
          item.id === plantToRemoveId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <>
      <Plants plants={PLANTS} addToCart={addToCart} />
      <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
    </>
  );
}
