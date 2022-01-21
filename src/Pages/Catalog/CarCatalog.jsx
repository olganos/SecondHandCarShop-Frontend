import { useEffect, useState } from 'react';

import { getAll } from '../../Services/carApi';
import { transformCars } from './transformCars';

export const CarCatalog = () => {
    const [cars, setCars] = useState(null);

    useEffect(async () => {
        const carsResponse = await getAll();
        if (carsResponse) {
            setCars(transformCars(carsResponse).sort((a, b) => a.date_added - b.date_added))
        }
    }, []);

    if (!cars)
        return null;
    console.log(cars);
    return (
        <>
            {cars.map((car, index) => (
                <div key={`car${index}`}>
                    {car.make} {car.model}
                    <br />
                    {car.year_model} - {car.price}
                    <br />
                    <br />
                </div>                
            ))}
        </>
    );
};
