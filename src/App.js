import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Cart from "./routes/Cart";
import { CartProvider } from "./components/CartContext";

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <CartProvider>
      <div>
        <Navbar
          cartCount={cartCount}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home setCartCount={setCartCount} searchQuery={searchQuery} />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
