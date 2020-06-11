import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //


//need to fix index problem
const Car = (props) => {
    console.log(cars);
    const id = parseInt(props.match.params.id);
    let car = cars.find(car => car.id === (id+1));
    return (
        <h1>{car.Name}</h1>
    )
}

export default Car