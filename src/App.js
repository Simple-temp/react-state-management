import React, { useState } from 'react';
import './App.css';
import About from './component/About/About';
import Header from './component/Header/Header';
import Blog from './component/Blog/Blog';
import Product from './component/Product/Product';
import ProductDetails from './component/ProductDetails/ProductDetails';

function App() {
  const [Count, setCount] = useState(0);

  return (
    <div className="App">
        <Header Count={Count}></Header>
        <About Count={Count} setCount={setCount}></About>
        <Blog Count={Count}></Blog>
        <Product></Product>
        <ProductDetails></ProductDetails>
    </div>
  );
}

export default App;
