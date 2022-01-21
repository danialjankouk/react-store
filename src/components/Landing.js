import React, { Component } from "react";
import Banner from "./Banner";
import Products from "./Products";
class Landing extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Products />
      </div>
    );
  }
}

export default Landing;
