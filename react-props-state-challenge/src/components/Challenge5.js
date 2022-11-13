import React from 'react';
import boxes from '../data/boxes';

export default function Challenge5(props) {
    
    const [boxesArray, setBoxesArray] = React.useState(boxes);

    const style = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc",
        color: props.darkMode ? "#ffffff" : "#000000"
    }

    const mappedBoxes = boxesArray.map(box => <p key={box.id} style={style}>box {box.id}</p>);

    return (
        <>
            {mappedBoxes}
        </> 
    )
}