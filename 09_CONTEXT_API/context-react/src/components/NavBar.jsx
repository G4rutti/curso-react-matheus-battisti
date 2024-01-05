import { NavLink } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/perfil'>Perfil</NavLink>
        <NavLink to='/sobre'>Sobre</NavLink>
    </nav>
  )
}

export default NavBar