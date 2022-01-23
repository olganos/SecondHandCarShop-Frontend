import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { getCar } from '../../Services/carApi';
import "./Car.css";

export const Car = () => {
    const [car, setCar] = useState(null);

    const { id } = useParams();

    useEffect(async () => {
        const carResponse = await getCar(id);
        if (carResponse) {
            setCar(carResponse);
        }
    }, []);

    if (!car)
        return null;

    console.log(car);
    return (
        <>
            <h1>
                {car.name}
            </h1>            
        </>
    );
};
