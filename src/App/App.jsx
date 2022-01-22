import { Route, Routes } from 'react-router-dom';

import { Layout } from '../Components/Layout';
import { NotFound } from '../Components/NotFound';
import { CarCatalog } from '../Pages/Catalog/CarCatalog';

export const App = () => (
    <div>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<CarCatalog />} />
                <Route path="*" element={<NotFound />} />
                {/*<Route path="/mybooks" component={MyBooks} />*/}
                {/*<Route path="/favorites" component={Favorites} />*/}
            </Route>
        </Routes>
    </div>
)
