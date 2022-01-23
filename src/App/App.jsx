import { Route, Routes } from 'react-router-dom';

import { Layout } from '../Components/Layout';
import { NotFound } from '../Components/NotFound';
import { CarCatalog } from '../Pages/Catalog/CarCatalog';
import { Car } from '../Pages/Car/Car';

export const App = () => (
    <div>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<CarCatalog />} />
                <Route exact path="/cars/:id" element={<Car />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </div>
)
