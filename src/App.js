import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import ProductsApi from "./components/ProductsApi";
import About from "./components/About";
import Cart from "./components/shared/Cart";
import ProductDetail from "./components/ProductDetail";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<ProductsApi />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetail/> }/>
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
