import React, { Component } from "react";
import Background from "../images/banner.jpg";
import Styles from "../components/Banner.module.css";
class Banner extends Component {
  render() {
    return (
      <div className={Styles.bannerContainer}>
        <img src={Background} alt="banner" />
            <h1>Market Place</h1>
            <p>into the future</p>
      </div>
    );
  }
}

export default Banner;
