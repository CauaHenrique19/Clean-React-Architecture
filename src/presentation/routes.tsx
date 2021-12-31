import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ProductsPage } from './pages/products'

export const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductsPage />} />
            </Routes>
        </BrowserRouter>
    )
}