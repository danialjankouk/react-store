import React, { Component } from "react";
import Banner from "./Banner";
import Products from "./Products";
import Searchbar from "./Searchbar";
class Landing extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Products />
        <Searchbar/>
      </div>
    );
  }
}

export default Landing;
