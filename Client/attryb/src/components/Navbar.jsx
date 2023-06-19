import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div style={navbarStyles}>
      <Link to="/" style={linkStyles} >Login</Link>
      <Link to="/signup" style={linkStyles}>Signup</Link>
      <Link to="/cars"  style={linkStyles}>Cars</Link>
      <Link to="/dealers" style={linkStyles}>Dealers</Link>
      <Link to="/dealersAccess" style={linkStyles}>Add Cars</Link>
    </div>  
  )
}
const navbarStyles = {
    background: '#004080',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
  };
  
  const linkStyles = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
    fontWeight: 'bold',
  };
  
export default Navbar
