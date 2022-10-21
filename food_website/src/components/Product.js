import React, { useState } from "react";

function Product({ product, addToCart }) {
  return (
    <div className="product">
      <div className="name">{product.name}</div>
      <div className="ingredients">{product.ingredients}</div>
      <div className="price">{product.price} $</div>

      <button onClick={() => addToCart(product)} className="btn">
        Add
      </button>
    </div>
  );
}

export default Product;
