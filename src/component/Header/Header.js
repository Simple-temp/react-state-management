import React from 'react';

const Header = (props) => {
    const {Count} = props;
    return (
        <div>
            <h1>this is header : {Count}</h1>
        </div>
    );
};

export default Header;