function PlantCard({ plant, onAddToCart }) {
  const { name, image } = plant;

  // The button logic is simple: always call onAddToCart with the plant object.
  // The logic inside App.jsx handles whether to add or increment.

  return (
    <div className="plant-card">
      <div className="plant-emoji">{image}</div>
      <h3>{name}</h3>
      <button onClick={() => onAddToCart(plant)}>Add to cart</button>
    </div>
  );
}

export default PlantCard;
