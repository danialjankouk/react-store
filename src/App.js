import './App.css';
import { Route, Routes } from "react-router-dom";

// Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/Navbar';
import ShopCart from './components/ShopCart';
import About from "./components/About"
import Landing from "./components/Landing"
import Footer from "./components/Footer"
// Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/" element={<Landing />} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
