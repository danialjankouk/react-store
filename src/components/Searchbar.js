import Style from "./Searchbar.module.css";
import React, { Component } from "react";

class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  changeHandler = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  render() {
    return (
      <div className={Style.container}>
        <h1>Search What You Want</h1>
        <input
          type="text"
          placeholder="search..."
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}

export default Searchbar;
