import React, { Component } from "react";
import Styles from "../components/About.module.css";
import xiaomi from "../assets/icons/Xiaomi.png";
import apple from "../assets/icons/apple.png";
import samsung from "../assets/icons/samsung.png";
class About extends Component {
  render() {
    return (
      <>
        <h1 className={Styles.support}>Who Supports Us?</h1>
        <div className={Styles.container}>
          <img src={xiaomi} alt="xiaomi" />
          <img src={apple} className={Styles.apple} alt="apple" />
          <img src={samsung} alt="samsung" />
        </div>
      </>
    );
  }
}

export default About;
