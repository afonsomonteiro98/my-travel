import React from 'react';
// import ReactDOM from 'react-dom',

const Travel = props => (
    <div>
        <p> Destination: {props.destination} </p>
        <p> Country: {props.country} </p>
        <img src={props.photo} />
        <p> Distance: {props.distance} </p>
    </div>
)

export default Travel;