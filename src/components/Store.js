import React, { useContext } from "react";

// Components
import Product from "./shared/Product";
import Loading from "../assets/icons/loading.gif"
import styles from "./Store.module.css"
// Context
import { ProductsContext } from "../context/ProductContextProvider";

const Store = () => {
  const products = useContext(ProductsContext);

  return (
    <div
      className={styles.container}
    >
      {products.length ? (
        products.map((product) => (
          <Product
            key={product.id}
            productData={product}
            productId={product.id}
          />
        ))
      ) : (
        <img
          src={Loading}
          alt="loading"
          style={{ marginLeft: "20rem" , marginBottom:"50rem"}}
        />
      )}
    </div>
  );
};

export default Store;
