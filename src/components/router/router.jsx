import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashBoard from '../../pages/dashboard/dashboard';
import LanderPage from '../../pages/lander/lander';
import MyCart from '../mycart/mycart';

function RouterOne() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element={<LanderPage />} />
                    {/* <Route path='/signup' element={<SignUp />} /> */}
                    <Route exact path='/dashboard' element={<DashBoard />} />
                    <Route path='/mycart' element={<MyCart />} />
                </Routes>
            </Router>
        </div>
    )
}

export default RouterOne
