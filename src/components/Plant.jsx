export default function Plant({ plant, addToCart }) {
  return (
    <div className="plant-info">
      <b>{plant.name}</b>
      <button onClick={() => addToCart(plant)} className="add-to-cart-button">
        Add to Cart
      </button>
    </div>
  );
}
