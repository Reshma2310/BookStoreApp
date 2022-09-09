import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashBoard from '../../pages/dashboard/dashboard';
import MyCart from '../mycart/mycart';

function RouterOne() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/' element={<DashBoard />}/>
                <Route path='/mycart' element={<MyCart />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default RouterOne
