

export default function CartItem({ item, onUpdateQuantity }) {
    return (
        <div className="cart-item">
            <span className="plant-img">{item.image}</span>
            <p>{item.name}</p>
            <div className="cart-controls">
                <button
                    className="decrement"
                    onClick={() => onUpdateQuantity(item.id, -1)}
                >
                    − 
                </button>
            <span className="quantity">{item.quantity}</span>
                <button
                    className="increment"
                    onClick={() => onUpdateQuantity(item.id, 1)}
                >
                    +
                </button>
            </div>
      </div>
    );
  }

