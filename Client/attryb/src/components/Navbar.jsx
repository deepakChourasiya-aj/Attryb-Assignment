import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <Link to="/">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/cars">Cars</Link>
    </div>
  )
}

export default Navbar
