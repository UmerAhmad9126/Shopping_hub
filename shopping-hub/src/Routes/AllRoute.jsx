import React from 'react'
import { Routes, Route } from "react-router-dom"
import CartPage from '../Pages/CartPage'
import Homepage from '../Pages/Homepage'
import LaptopAndComputer from '../Pages/Laptop-and-computer'
import LoginPage from '../Pages/LoginPage'
import TvsAndProjector from '../Pages/Tvs-and-projector'
import VideoGame from '../Pages/VideoGame'
import PrivateRoute from './PrivateRoute'

const AllRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/laptopandcomputer' element={<LaptopAndComputer />} />
            <Route path='/tvsandprojector' element={<TvsAndProjector />} />
            <Route path='/videogame' element={<VideoGame />} />

            <Route path='/cart' element={<PrivateRoute><CartPage /></PrivateRoute>} />
            <Route path='/login' element={<LoginPage />} />
        </Routes>
    )
}

export default AllRoute