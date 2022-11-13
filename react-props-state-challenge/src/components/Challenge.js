import React from 'react';

export default function Challenge(props){

    const date = new Date();
    const hours = date.getHours();

    let timeOfDay;

    if (hours >= 4 && hours < 12){
        timeOfDay = "morning";
    }
    else if (hours >= 12 && hours < 17){
        timeOfDay = "afternoon";
    }
    else if (hours >= 17 && hours < 20){
        timeOfDay = "evening";
    }
    else if (hours >= 20 && hours < 4){
        timeOfDay = "night";
    }

    return(
        <p>Good {timeOfDay}, {props.name}!</p>
    );
}