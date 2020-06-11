import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //



const Car = (props) => {
    const id = props.match.params.id;
    let car;
    for (let i=0; i<cars.length; i++) {
        if (cars[i].id === parseInt(id)) {
            car = cars[i]
        }
    }
    return (
        <h1>{car.Name}</h1>
    )
}

export default Car