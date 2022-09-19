import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashBoard from '../../pages/dashboard/dashboard';
import LanderPage from '../../pages/lander/lander';
import MyCart from '../mycart/mycart';
import MyWishList from '../mywishlist/mywishlist';
import OrderSuccess from '../ordersuccess/ordersuccess';

function RouterOne() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element={<LanderPage />} />
                    <Route exact path='/dashboard' element={<DashBoard />} />
                    <Route path='/mycart' element={<MyCart />} />
                    <Route path='/ordersuccess' element={<OrderSuccess />} />
                    <Route path='/mywishlist' element={<MyWishList />} />
                </Routes>
            </Router>
        </div>
    )
}

export default RouterOne
