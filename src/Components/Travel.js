import React from 'react';
// import ReactDOM from 'react-dom',

const Travel = props => (
    <div>
        <p> Destination: {props.travelObject.destination} </p>
        <p> Country: {props.travelObject.country} </p>
        <img src={props.travelObject.photo} />
        <p> Distance: {props.travelObject.distance} </p>
    </div>
)


export default Travel;