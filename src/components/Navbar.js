import React, { useContext } from "react";
import Styles from "../components/Navbar.module.css";
import { Link } from "react-router-dom";
import LogoNav from "../assets/icons/logo.jpg";
import ShopIcon from "../assets/icons/shop.svg"
import { CartContext } from "../context/CartContextProvider";
const Navbar =()=> {
  const {state} = useContext(CartContext)
    return (
      <header className={Styles.header}>
        <div className={Styles.listContainer}>
          <ul className={Styles.list}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="products">Products</Link>
            </li>
            <li>
              <Link to="about">About Us</Link>
            </li>
          </ul>
        </div>
        <div className={Styles.logo}>
          <img src={LogoNav} alt="logo" />
          <Link to="/cart"><img src={ShopIcon} alt="shop basket" /></Link>
          <span>{state.itemsCounter}</span>
        </div>
      </header>
    );
}

export default Navbar;
