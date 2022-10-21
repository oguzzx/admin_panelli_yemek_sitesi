import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Cart({ cart, quantity, setQuantity, removeFromCart }) {
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div>
      {cart.length === 0 ? (
        <h2>Sepetiniz Boş</h2>
      ) : (
        <div className="carts">
          {cart.map((product) => (
            <div className="cart-item">
              <div className="cart-item-name">{product.name}</div>
              <div className="cart-item-price">
                {product.price * quantity} $
              </div>
              <label htmlFor={product.id}>Adet</label>
              <input
                type="number"
                id={product.id}
                min="1"
                value={quantity}
                onChange={handleQuantity}
                max="10"
                defaultValue={quantity}
              />

              <FontAwesomeIcon
                onClick={() => removeFromCart(product)}
                icon={faTimes}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
