import React from 'react';
import Card from './Card';

const numbers = [1,2,3,4,5];

export const listItems = numbers.map((el, index) => <li key={index}>{el}</li>);

const workout = [
    { name: 'bench press', category: 'push'},
    { name: 'tricep pushdown', category: 'push' },
    { name: 'bicep curl', category: 'pull' }
];

export const WorkoutList = () => {
    return (
    <ul>
        { workout.map((el,index) => 
            <Card key={index} name={el.name} category={el.category} />
        )}
    </ul>
    )
} 