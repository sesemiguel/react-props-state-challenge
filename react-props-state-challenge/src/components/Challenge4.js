import React from 'react';

export default function Challenge4(props){

    const [thingsArray, setThingsArray] = React.useState(['Thing 1', 'Thing 2'])
    const thingsArrayElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    return(
        <>
            <button onClick={() => setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length+1}`])}>Add Item</button>
            {thingsArrayElements}
        </>
    );
}