import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/sobre">About</Link> */}
        <NavLink 
        to="/" 
        // className={({isActive}) => (isActive ? 'esta-ativo' : 'nao-ativo')}
        >Home</NavLink>
        <NavLink to="/sobre">About</NavLink>
    </nav>
  )
}

export default NavBar