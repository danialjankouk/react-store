import React, { Component } from "react";
import Styles from "./Products.module.css";
import SingleProduct from "./SingleProduct";
class Products extends Component {
  render() {
    return (
      <div className={Styles.products}>
        <SingleProduct />
      </div>
    );
  }
}

export default Products;
