import Plant from "./plant";

function Plants({ plants, addToCart }) {
  return (
    <div className="plants-container">
      <h2>Proper Plants</h2>
      <h3>Plants</h3>
      <div className="plants-grid">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <div className="plant-image">{plant.image}</div>
            <Plant plant={plant} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plants;
