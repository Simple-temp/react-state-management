import React, { useContext } from 'react';
import { Counter } from '../../App';

const ProductDetails = () => {
    const [Count] = useContext(Counter) ;
    return (
        <div>
           <h5>This is ProductDetails : {Count}</h5> 
        </div>
    );
};

export default ProductDetails;