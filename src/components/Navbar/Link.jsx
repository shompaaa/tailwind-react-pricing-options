import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li className='mr-10'>{route.name}</li>
        </div>
    );
};

export default Link;