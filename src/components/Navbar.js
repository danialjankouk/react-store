import React, { Component } from "react";
import Styles from "../components/Navbar.module.css";
import { Link } from "react-router-dom";
import LogoNav from "../images/logo.jpg";
import ShopIcon from "../images/shop.svg"
class Navbar extends Component {
  render() {
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
        </div>
      </header>
    );
  }
}

export default Navbar;
