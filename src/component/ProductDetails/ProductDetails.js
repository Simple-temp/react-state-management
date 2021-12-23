import React from 'react';

const ProductDetails = (props) => {
    const {Count} = props;
    return (
        <div>
           <h5>This is ProductDetails : {Count}</h5> 
        </div>
    );
};

export default ProductDetails;