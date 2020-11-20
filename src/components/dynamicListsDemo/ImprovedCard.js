import React from 'react';

const ImprovedCard = (props) => {
    return (
        <div className='movies-list-item'>
            <h2>{props.title}</h2>
            <p>Director: {props.director}</p>
            {
                props.hasOscars ? <p>Got the Oscar Award! </p>
                : <p>Great movie but no Oscars! </p>
            }
            <button onClick={props.clickToDelete}>Delete</button>
            <button onClick={props.clickToAdd}>Add Harry Potter</button>
        </div>
    )
};

export default ImprovedCard;