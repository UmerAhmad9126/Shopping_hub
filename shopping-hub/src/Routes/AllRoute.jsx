import React from 'react'
import { Routes, Route } from "react-router-dom"
import CartPage from '../Pages/CartPage'
import CheckoutPage from '../Pages/CheckoutPage'
import Homepage from '../Pages/Homepage'
import LoginPage from '../Pages/LoginPage'
import PageNotfound from '../Pages/PageNotfound'
import ProductDetailsPage from '../Pages/ProductDetailsPage'
import ProductPage from '../Pages/ProductPage'
import RegisterPage from '../Pages/RegisterPage'

const AllRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/products' element={<ProductPage />} />
            <Route path='/products/:id' element={<ProductDetailsPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/*' element={<PageNotfound />} />
        </Routes>
    )
}

export default AllRoute