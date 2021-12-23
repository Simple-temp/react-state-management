import React from 'react';
import Product from '../Product/Product';
import './Blog.css';

const Blog = (props) => {
    const {Count} = props;
    return (
        <div className='blog'>
            <h1>this is blog : {Count}</h1>
            <Product Count={Count}></Product>
        </div>
    );
};

export default Blog;