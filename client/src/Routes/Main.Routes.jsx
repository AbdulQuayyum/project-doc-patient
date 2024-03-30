import React from 'react'
import { Routes, Route } from "react-router-dom";

import { Home, Payment, Pricing, Login, Register, Dashboard } from "../Views/Index"

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Payment' element={<Payment />} />
            <Route path='/Pricing' element={<Pricing />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Dashboard' element={<Dashboard />} />
        </Routes>
    )
}

export default MainRoutes