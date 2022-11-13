import React from 'react';

export default function Challenge2(props){

    const [isImportant, setIsImportant] = React.useState("Yes");

    return(
        <>
            <h1>Is state important to know?</h1>
            <div className='state--value' onClick={() => setIsImportant("No")}>
                <h2 >{isImportant}</h2>
            </div>
        </>
    );
}