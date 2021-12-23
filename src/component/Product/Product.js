import React from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';

const Product = (props) => {
    const {Count} = props;
    return (
        <div>
            <h3>This is Product : {Count}</h3>
            <ProductDetails Count={Count}></ProductDetails>
        </div>
    );
};

export default Product;