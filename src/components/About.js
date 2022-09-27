import React, { Component } from "react";
import Styles from "../components/About.module.css";
import cat from "../assets/icons/cat.png";
import zara from "../assets/icons/zara.png";
import gucci from "../assets/icons/gucci.png";
class About extends Component {
  render() {
    return (
      <>
        <h1 className={Styles.support}>Who Supports Us?</h1>
        <div className={Styles.container}>
          <img src={cat} alt="cat" className={Styles.zara} />
          <img src={zara} className={Styles.zara} alt="zara" />
          <img src={gucci} alt="gucci" className={Styles.zara} />
        </div>
      </>
    );
  }
}

export default About;
