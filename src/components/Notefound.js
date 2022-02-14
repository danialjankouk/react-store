import React from 'react';
import { Link } from 'react-router-dom';
import Style from "./Notefound.module.css";
const Notefound = () => {
    return (
      <div className={Style.container}>
        <div className={Style.number}>
          <h1>404</h1>
        </div>
        <h1 className={Style.content}>Notound</h1>
        <Link to="/">
          <button>back to Home</button>
        </Link>
      </div>
    );
};

export default Notefound;