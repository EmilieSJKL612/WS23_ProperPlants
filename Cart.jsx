
import CartItem from "./CartItem";

export default function Cart({ cart, onUpdateQuality }){
    return(
        <div className="cart">
            <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>The cart is empty.</p>
        ) : 
        (
            cart.map((item) => (
                <CartItem key={item.id} item={item} onUpdateQuantity={onUpdateQuantity} />
            ))
        )}
      </div>
    );
}



