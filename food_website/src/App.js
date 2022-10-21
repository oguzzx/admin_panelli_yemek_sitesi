import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./product.json";

function App() {
  const [products, setProducts] = useState([Products][0]);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
  };

  return (
    <div className="App">
      <Router>
        <Header cart={cart} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                addToCart={addToCart}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                quantity={quantity}
                setQuantity={setQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/admin"
            element={<Admin products={products} setProducts={setProducts} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
