import styles from "./NavBar.module.css"
import { NavLink } from "react-router-dom"

// context
import { useAuthentication } from "../hooks/useAutentication.jsx"
import { useAuthValue } from "../context/AuthContext.jsx"

const NavBar = () => {
    const {user} = useAuthValue()
    const {logout} = useAuthentication()

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
                    <NavLink to="/about"
                    className={({ isActive }) => (isActive ? styles.active : "")}>Sobre</NavLink>
                </li>
                {!user && (
                   <>
                        <li>
                            <NavLink to="/register"
                            className={({ isActive }) => (isActive ? styles.active : "")}>Cadastrar-se</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login"
                            className={({ isActive }) => (isActive ? styles.active : "")}>Entrar</NavLink>
                        </li>
                   </> 
                )}
                {user && (
                    <>
                        <li>
                            <NavLink to="/dashboard"
                            className={({ isActive }) => (isActive ? styles.active : "")}>Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/create_post"
                            className={({ isActive }) => (isActive ? styles.active : "")}>Criar Post</NavLink>
                        </li>
                        <li>
                            <button onClick={logout}>Sair</button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default NavBar