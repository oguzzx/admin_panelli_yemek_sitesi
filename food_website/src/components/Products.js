import React from "react";

import Product from "./Product";

function Products({ products, addToCart, quantity, setQuantity }) {
  return (
    <div className="products">
      {products.map((product) => (
        <div className="product">
          <Product
            product={product}
            addToCart={addToCart}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>
      ))}
    </div>
  );
}

export default Products;
