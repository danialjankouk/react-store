import React, { Component } from "react";
import Styles from "./SingleProduct.module.css";
import up from "../images/up.svg";
import down from "../images/down.svg";
class SingleProduct extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  upHandler = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  downHandler = () => {
    if (this.state.count >= 1) {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    }
  };
  render() {
    const { count } = this.state;
    const { name, price, image } = this.props;
    return (
      <div className={Styles.product}>
        <div className={Styles.imgProduct}>
          <img src={image} alt="phone" />
        </div>
        <h1>{name}</h1>
        <p className={Styles.price}>
          {price} {count ? "=>" : ""} {count ? `${count * Number(price.split(" ")[0])} $` : ""}
        </p>
        <div className={Styles.counter}>
          <img
            src={up}
            alt="up arrow"
            onClick={this.upHandler}
            className={Styles.upArrow}
          />
          <p className={Styles.count}>{count}</p>
          <img
            src={down}
            alt="down arrow"
            onClick={this.downHandler}
            className={Styles.downArrow}
            className={!this.state.count ? Styles.opacit: ''}
          />
        </div>
      </div>
    );
  }
}

export default SingleProduct;
