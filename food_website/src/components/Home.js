import React from "react";
import Products from "./Products";
import Slider from "./Slider";

function Home({ products, addToCart, quantity, setQuantity }) {
  return (
    <div className="home">
      <Slider />
      <Products
        products={products}
        addToCart={addToCart}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
}

export default Home;
