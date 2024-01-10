import styles from "./NavBar.module.css"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
        <nav className={styles.navbar}>
            <NavLink className={styles.brand} to="/">
                Mini <span>Blog</span>
            </NavLink>
            <ul  className={styles.links_list}>
                <li>
                    <NavLink to="/"
                    className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/register"
                    className={({ isActive }) => (isActive ? styles.active : "")}>Cadastrar-se</NavLink>
                </li>
                <li>
                    <NavLink to="/about"
                    className={({ isActive }) => (isActive ? styles.active : "")}>Sobre</NavLink>
                </li>
                <li>
                    <NavLink to="/login"
                    className={({ isActive }) => (isActive ? styles.active : "")}>Entrar</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar