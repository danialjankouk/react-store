import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import ProductsApi from "./components/ProductsApi";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<ProductsApi />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
