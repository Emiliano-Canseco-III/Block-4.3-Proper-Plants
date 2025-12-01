import CartItem from "./CartItem";

function Cart({ cart, onUpdateQuantity }) {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <section className="cart-section">
      <h2>Shopping Cart ({totalItems} items)</h2>
      <div className="cart-list">
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={onUpdateQuantity}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default Cart;
