import React from 'react';
import Count from './Count';

export default function Challenge3(props){

    const [count, setCount] = React.useState(0);

    return (
        <>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <Count number={count}/>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </>
    )
}