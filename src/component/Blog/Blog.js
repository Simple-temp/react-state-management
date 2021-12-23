import React, { useContext } from 'react';
import { Counter } from '../../App';
import Product from '../Product/Product';
import './Blog.css';

const Blog = () => {

    const [Count] = useContext( Counter );

    return (
        <div className='blog'>
            <h1>this is blog : {Count}</h1>
            <Product></Product>
        </div>
    );
};

export default Blog;