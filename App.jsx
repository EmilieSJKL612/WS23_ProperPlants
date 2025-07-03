
import { useState } from "react";
import PLANTS from "./data";
import PlantList from "./PlantList";
import Cart from "./Cart";


export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((prevCart) => {
      const item = prevCart.find((p) => p.id === plant.id);
      if (item) {
        return prevCart.map((p) =>
          p.id === plant.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prevCart, { ...plant, quantity: 1 }];
      }
    });

};

const updateQuantity = (plantId, amount) => {
  setCart((prevCart) => {
    return prevCart
      .map((item) =>
        item.id === plantId ? { ...item, quantity: item.quantity + amount } : item
      )
      .filter((item) => item.quantity > 0);
  });
};

return (
  <div className="container">
    <h1>Proper Plants</h1>
    <PlantList plants={PLANTS} onAddToCart={addToCart} />
    <Cart cart={cart} onUpdateQuantity={updateQuantity} />
  </div>
);

}
