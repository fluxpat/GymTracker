import React from 'react';

const Card = ({ name, category }) => {
    return (
        <div>
            <h2>{name}</h2>
            <h3>Category: {category}</h3>
        </div>
    )
};

export default Card;