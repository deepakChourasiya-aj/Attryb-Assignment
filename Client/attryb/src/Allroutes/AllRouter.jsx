import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Cars from '../pages/Cars'
import Admin from '../pages/Admin'
import Dealers from '../pages/Dealers'

function AllRoutes() {
  return (
    <div>
            <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/cars" element={<Cars />}></Route>
        <Route path="/dealers" element={<Admin />}></Route>
        <Route path="/dealersAccess" element={<Dealers />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
