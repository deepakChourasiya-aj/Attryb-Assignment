import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Cars from '../pages/Cars'

function AllRoutes() {
  return (
    <div>
            <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/cars" element={<Cars />}></Route>

        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
    </div>
  )
}

export default AllRoutes
