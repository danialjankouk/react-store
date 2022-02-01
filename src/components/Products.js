import React, { Component } from "react";
import Styles from "./Products.module.css";
import SingleProduct from "./SingleProduct";
import iphone11 from "../images/iphone11.jpg"
import iphone12 from "../images/iphone12.jpg";
import iphone13 from "../images/iphone13.png";
class Products extends Component {
  render() {
    return (
      <div className={Styles.products}>
        <SingleProduct image={iphone11} name="iphone11" price="600" />
        <SingleProduct image={iphone12} name="iphone12" price="1000" />
        <SingleProduct image={iphone13} name="iphone13" price="1500" />
      </div>
    );
  }
}

export default Products;
