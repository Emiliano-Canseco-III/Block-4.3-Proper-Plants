function CartItem({ item, onUpdateQuantity }) {
  const { id, name, image, quantity } = item;

  // Handler for decrementing the quantity
  const handleDecrement = () => {
    // Pass the plant ID and the change (-1)
    onUpdateQuantity(id, -1);
  };

  // Handler for incrementing the quantity
  const handleIncrement = () => {
    // Pass the plant ID and the change (+1)
    onUpdateQuantity(id, 1);
  };

  return (
    <div className="cart-item">
      <span className="item-emoji">{image}</span>
      <span className="item-name">{name}</span>
      <div className="item-controls">
        <button onClick={handleDecrement} aria-label="Decrement quantity">
          -
        </button>
        <span className="item-quantity">{quantity}</span>
        <button onClick={handleIncrement} aria-label="Increment quantity">
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
