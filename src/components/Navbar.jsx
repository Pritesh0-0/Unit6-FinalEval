import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
      <Link className='buts' to="/login">Login ☞</Link>
      <Link className='buts' to="/">Home 🏠</Link>
      <Link className='buts' to="/cart">Cart 🛒</Link>
    </div>
  )
}

export default Navbar