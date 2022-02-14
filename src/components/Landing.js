import React, { Component } from "react";
import Banner from "./Banner";
import Searchbar from "./Searchbar";
import SingleProducts from "./SingleProduct"
import About from "./About";
class Landing extends Component {
  render() {
    return (
      <div>
        <Banner />
        {/* <SingleProducts /> */}
        <Searchbar />
        <About />
      </div>
    );
  }
}

export default Landing;
