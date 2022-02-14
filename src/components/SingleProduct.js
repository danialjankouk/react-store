import React from 'react';
import Store from "./Store"
const SingleProduct = ({productId}) => {
    if (productId < 4) {
        <div>
            <Store/>
        </div>
    } else {
        return <Store/>
    }
};

export default SingleProduct;