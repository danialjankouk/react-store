import React, { Component } from "react";
import Background from "../assets/icons/banner.jpg";
import Styles from "../components/Banner.module.css";
class Banner extends Component {
  render() {
    return (
      <div className={Styles.bannerContainer}>
        <img src={Background} alt="banner" />
        <div className={Styles.texts}>
          <h1>Market Place</h1>
          <p>into the future</p>
        </div>
      </div>
    );
  }
}

export default Banner;
