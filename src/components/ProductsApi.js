import React, { Component } from "react";
import Styles from "./ProductsApi.module.css";
import axios from "axios";
import SingleProduct from "./SingleProduct";
import Loading from "../images/loading.gif";
class ProductsApi extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => this.setState({ products: response.data }));
  }
  render() {
    const { products } = this.state;
    return (
      <>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Products
        </h1>
        <div className={Styles.container}>
          {products.length ? (
            products.map((res) => (
              <SingleProduct
                image={res.image}
                name={res.title}
                price={`${res.price} $`}
                key={res.id}
              />
            ))
          ) : (
            <img src={Loading} style={{width:'400px',height:"500px"}}/>
          )}
        </div>
      </>
    );
  }
}

export default ProductsApi;
