import PlantCard from "./PlantCard";

function PlantsList({ plants, onAddToCart }) {
  return (
    <section className="plants-section">
      <h2>Available Plants</h2>
      <div className="plants-grid">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
}

export default PlantsList;
