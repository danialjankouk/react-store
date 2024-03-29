import React, { Component } from "react";
import Banner from "./Banner";
import Searchbar from "./Searchbar";
import SingleProducts from "./SingleProduct";
import About from "./About";
import styles from "./Landing.module.css";
class Landing extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className={styles.container}>
        <Banner />
        <SingleProducts />
        <Searchbar />
        <About />
      </div>
    );
  }
}

export default Landing;
