import React, { Component } from "react";
import Banner from "./Banner";
import Products from "./Products";
import Searchbar from "./Searchbar";
import About from "./About";
class Landing extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Products />
        <Searchbar />
        <About/>
      </div>
    );
  }
}

export default Landing;
