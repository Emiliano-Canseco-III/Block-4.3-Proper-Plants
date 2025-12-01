import { useState } from "react";
import PlantsList from "./Plants/PlantsList";
import Cart from "./Cart/Cart";
import { plants } from "../data";

// Initial cart state is an empty array
function App() {
  const [cart, setCart] = useState([]);

  // --- Cart Modification Functions ---

  const updateQuantity = (plantId, change) => {
    setCart((prevCart) => {
      // 1. Map over the existing cart to create a NEW array
      const newCart = prevCart.map((item) => {
        if (item.id === plantId) {
          // 2. If IDs match, return a NEW item object with updated quantity
          return { ...item, quantity: item.quantity + change };
        }
        // 3. If IDs don't match, return the original item object
        return item;
      });

      // 4. Filter the new array to remove items where quantity is 0 or less
      return newCart.filter((item) => item.quantity > 0);
    });
  };

  const addToCart = (plantToAdd) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === plantToAdd.id);

      if (existingItem) {
        // If plant exists, INCREMENT quantity (by calling updateQuantity logic)
        return prevCart.map((item) =>
          item.id === plantToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If plant is new, create a NEW item and add it to a NEW array
        const newItem = {
          ...plantToAdd,
          quantity: 1,
        };
        // Use spread syntax to create a new array
        return [...prevCart, newItem];
      }
    });
  };

  // --- Render ---
  return (
    <div className="app-container">
      <header>
        <h1>🌱 Proper Plants Nursery</h1>
      </header>
      <main>
        {/* Pass state and functions down to the list component */}
        <PlantsList plants={plants} cart={cart} onAddToCart={addToCart} />

        {/* Pass state and functions down to the cart component */}
        <Cart cart={cart} onUpdateQuantity={updateQuantity} />
      </main>
    </div>
  );
}

export default App;
