import React, { Component } from "react";
import Styles from "../components/Footer.module.css";
import { FaHeart } from "react-icons/fa";
class Footer extends Component {
  render() {
    return (
      <div className={Styles.footer}>
        <h1>
          this template made with <FaHeart className={Styles.love} /> by danial
          jankouk
        </h1>
      </div>
    );
  }
}

export default Footer;
