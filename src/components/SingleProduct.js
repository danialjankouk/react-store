import React from 'react';
import Store from './Store';
import styles from "./SingleProduct.module.css";
const SingleProduct = () => {

    return (
      <>
        <div className={styles.container}>
          <Store />
        </div>
      </>
    );
};

export default SingleProduct;