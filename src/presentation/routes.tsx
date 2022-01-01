import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ProductsFactory } from '../main/factories/pages/Products'

export const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductsFactory />} />
            </Routes>
        </BrowserRouter>
    )
}