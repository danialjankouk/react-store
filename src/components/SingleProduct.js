import React, { Component } from "react";
import Styles from "./SingleProduct.module.css";
import up from "../images/up.svg";
import { shorten } from "../components/helper/Function" ;
import down from "../images/down.svg";
import { Link } from "react-router-dom";
class SingleProduct extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  upHandler = () => {
    this.setState((preveState) => ({
      count: preveState.count + 1,
    }));
  };
  downHandler = () => {
    if (this.state.count >= 1) {
      this.setState((preveState) => ({
        count: preveState.count - 1,
      }));
    }
  };
  render() {
    const { name, price, image } = this.props;
    const { count } = this.state;
    return (
      <>
        <div className={Styles.container}>
          <img src={image} className={Styles.productimg} alt="product" />
          <h3>{shorten(name)}</h3>
          <p>
            {price}{" "}
            {count
              ? `* ${count} = ${count * Number(price.split(" ")[0])} $`
              : ""}
          </p>
          <div className={Styles.counter}>
            <button className={Styles.addButton}>Add To Cart</button>
            <img alt="up arrow" src={up} onClick={this.upHandler} />
            <span className={Styles.count}>{count}</span>
            <img
              alt="down arrow"
              src={down}
              onClick={this.downHandler}
              className={!this.state.count && Styles.deactive}
            />
            <Link to="/products" className={Styles.detailLink}><span>Detail</span></Link>
          </div>
        </div>
      </>
    );
  }
}

export default SingleProduct;
