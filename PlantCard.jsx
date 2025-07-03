
export default function PlantCard({ plant, onAddToCart }){
    return (
        <div className="plant-card">
          <span className="plant-img">{plant.image}</span>
          <p>{plant.name}</p>
          <button onClick={() => onAddToCart(plant)}>Add to Cart</button>
        </div>
      );
}

