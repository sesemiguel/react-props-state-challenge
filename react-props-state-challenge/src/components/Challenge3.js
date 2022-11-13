import React from 'react';
import Count from './Count';

export default function Challenge3(props){

    const [count, setCount] = React.useState(0);

    const handleAdd = () => setCount(prevCount => prevCount + 1);
    const handleSubtract = () => setCount(prevCount => prevCount - 1);

    return (
        <>
            <button onClick={handleSubtract}>-</button>
            <Count number={count}/>
            <button onClick={handleAdd}>+</button>
        </>
    )
}