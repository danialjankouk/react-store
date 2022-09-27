import React from "react";
import styles from "./SingleProduct.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const SingleProduct = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Let's Shop</h1>
        <Link to="/products">
          <button>
            Explore
            <span>
              <AiOutlineArrowRight />
            </span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default SingleProduct;
