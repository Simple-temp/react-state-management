import React, { createContext, useState } from 'react';
import './App.css';
import About from './component/About/About';
import Header from './component/Header/Header';
import Blog from './component/Blog/Blog';

export const Counter = createContext();

function App() {
  const [Count, setCount] = useState(0);

  return (
    <div className="App">
      <Counter.Provider value={[Count, setCount]}>
        <Header></Header>
        <About></About>
        <Blog></Blog>
      </Counter.Provider>
    </div>
  );
}

export default App;
