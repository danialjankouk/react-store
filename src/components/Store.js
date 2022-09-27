import React, { useContext } from "react";

// Components
import Product from "./shared/Product";

// Context
import { ProductsContext } from "../context/ProductContextProvider";

// Style
import styles from "./Store.module.css";
import Load  from "../assets/icons/loading.gif";
const Store = () => {
  const products = useContext(ProductsContext);

  return (
    <div className={styles.container}>
      {Product.length ? (
        products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      ) : (
        <img src={Load} alt="loading" />
      )}
    </div>
  );
};

export default Store;
