import React, { useState } from 'react';

const About = (props) => {
    const {Count, setCount} = props;
    return (
        <div>
            <h1>This is about : {Count}</h1>
            <button onClick={()=>setCount(Count + 1)}>Increment</button>
        </div>
    );
};

export default About;