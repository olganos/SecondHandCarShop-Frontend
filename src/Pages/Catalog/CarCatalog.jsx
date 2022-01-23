import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAll } from '../../Services/carApi';
import { transformCars } from './transformCars';
import "./CarCatalog.css";

export const CarCatalog = () => {
    const [cars, setCars] = useState(null);

    useEffect(async () => {
        const carsResponse = await getAll();
        if (carsResponse) {
            setCars(transformCars(carsResponse).sort((a, b) => a.date_added_as_date - b.date_added_as_date))
        }
    }, []);

    if (!cars)
        return null;
    console.log(cars);
    return (
        <>
            <h1>
                Catalog
            </h1>
            {cars.map((car, index) => (
                <div
                    key={`car${index}`}
                    className="catalog-item"
                >
                    <p>
                        <Link to={`/cars/${car._id}`}>{car.make} {car.model}</Link>
                    </p>
                    <p>
                        made: {car.year_model} - price: {car.price}
                    </p>
                    <p>
                        {car.date_added}
                    </p>
                </div>
            ))}
        </>
    );
};
