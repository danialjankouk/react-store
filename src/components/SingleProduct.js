import React, { Component } from "react";
import Styles from "./SingleProduct.module.css";
import Iphone11 from "../images/iphone11.jpg";
import up from "../images/up.svg";
import down from "../images/down.svg";
class SingleProduct extends Component {
  render() {
    return (
      <div className={Styles.product}>
        <div className={Styles.imgProduct}>
          <img src={Iphone11} alt="phone" />
        </div>
        <h1>iphone11</h1>
        <p className={Styles.price}>500</p>
        <div className={Styles.counter}>
          <img src={up} alt="up arrow" className={Styles.upArrow} />
          <p className={Styles.count}>0</p>
          <img src={down} alt="down arrow" className={Styles.downArrow} />
        </div>
      </div>
    );
  }
}

export default SingleProduct;
