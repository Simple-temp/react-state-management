import React, { useContext } from 'react';
import { Counter } from '../../App';

const About = () => {
    const [Count, setCount] = useContext( Counter ) ;
    return (
        <div>
            <h1>This is about : {Count}</h1>
            <button onClick={()=>setCount(Count + 1)}>Increment</button>
        </div>
    );
};

export default About;