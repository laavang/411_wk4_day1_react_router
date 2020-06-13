import React from 'react'
import cars from '../cars.json'
import { Container, Paper, Chip } from '@material-ui/core'


const Car = (props) => {
    console.log(cars);
    const id = parseInt(props.match.params.id);
    let car = cars.find(car => car.id === (id + 1));

    return (
        <Container style={{ width: "600px", paddingTop: "30px" }}>
            <Paper style={{ padding: "10px 40px 40px 40px" }}>
                <h1 style={{textTransform: "capitalize"}}>{car.Name}</h1>
                <div>
                    {Object.entries(car).map((property, i) => (
                        <Chip style={{margin:"5px 6px 5px 0px"}} key={i} label={`${property[0]}: ${property[1]}`} />
                    ))}
                </div>
            </Paper>
        </Container>
    )
}

export default Car