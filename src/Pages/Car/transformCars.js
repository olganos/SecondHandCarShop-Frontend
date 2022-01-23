export const transformCars = (carResponse) => {
    return carResponse.reduce((accumulator, currentValue) => {
        return accumulator.concat(currentValue.cars.vehicles.map((vehicle) => {
            return {
                warehouse: {
                    _id: currentValue._id,
                    name: currentValue.name,
                    location: currentValue.location,
                    locationName: currentValue.cars.location,
                },
                ...vehicle,
                date_added_as_date: new Date(vehicle.date_added)
            }
        }))
    }, [])
}