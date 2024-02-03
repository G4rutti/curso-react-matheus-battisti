import { NavLink } from "react-router-dom"
import { useState } from "react"

// context
import { useAuthentication } from "../hooks/useAutentication.jsx"
import { useAuthValue } from "../context/AuthContext.jsx"

const NavBar = () => {
    const {user} = useAuthValue()
    const {logout} = useAuthentication()
    const [showMenu, setShowMenu] = useState("col-span-2 justify-end flex-1 hidden md:flex text-white  my-auto mr-5")
    const [buttonSair, setButtonSair] = useState("mx-5 my-auto bg-red-600 py-2 px-4 rounded-md hover:text-red-900 transition-all duration-500")
    const [bar, setBar] = useState('fas fa-bars')
    const [buttons, setButtons] = useState("mx-5 my-auto hover:text-slate-700 transition-all duration-500")
    const [menu, setMenu] = useState(false)

    function showTheMenu(){
        setMenu(!menu)
        if(menu){
            setBar('fas fa-bars')
            setShowMenu("flex justify-end flex-1 hidden md:flex text-white  my-auto mr-5")
            setButtons("mx-5 my-auto hover:text-slate-700 transition-all duration-500")
            setButtonSair("mx-5 my-auto bg-red-600 py-2 px-4 rounded-md hover:text-red-900 transition-all duration-500")
        }else{
            setBar('fa-solid fa-x')
            setShowMenu("col-span-2 flex-1 md:flex text-white my-auto")
            setButtonSair("my-2 justify-center flex")
            setButtons("my-2 justify-center flex")
        }
    }

  return (
        <nav className='grid grid-cols-2 md:flex w-full bg-slate-800 text-white py-5 md:py-10'>
            <div className="my-auto">
                <NavLink className='col-span-1 md:flex ml-5 text-2xl font-semibold md:ml-20 md:text-2xl my-auto' to="/">
                    Mini<span className="font-extrabold">Blog</span>
                </NavLink>
            </div>
            <div className="col-span-1 flex justify-end flex-1 md:hidden text-white text-3xl my-auto mr-5">
                <i className={bar} onClick={showTheMenu}></i>
            </div>
            <div className={showMenu}>
                <ul  className='md:flex md:flex-row flex flex-col text-center mt-5 md:my-auto'>
                    <li className={buttons}>
                        <NavLink to="/"
                        className={({ isActive }) => (isActive ? 'bg-slate-700 py-2 px-4 rounded-md' : "")}
                        >Home</NavLink>
                    </li>
                    <li className={buttons}>
                        <NavLink to="/about"
                        className={({ isActive }) => (isActive ? 'bg-slate-700 py-2 px-4 rounded-md' : "")}>Sobre</NavLink>
                    </li>
                    {!user && (
                    <>
                            <li className={buttons}>
                                <NavLink to="/register"
                                className={({ isActive }) => (isActive ? 'bg-slate-700 py-2 px-4 rounded-md' : "")}>Cadastrar-se</NavLink>
                            </li>
                            <li className={buttons}>
                                <NavLink to="/login"
                                className={({ isActive }) => (isActive ? 'bg-slate-700 py-2 px-4 rounded-md' : "")}>Entrar</NavLink>
                            </li>
                    </> 
                    )}
                    {user && (
                        <>
                            <li className={buttons}>
                                <NavLink to="/dashboard"
                                className={({ isActive }) => (isActive ? 'bg-slate-700 py-2 px-4 rounded-md' : "")}>Dashboard</NavLink>
                            </li>
                            <li className={buttons}>
                                <NavLink to="/posts/create"
                                className={({ isActive }) => (isActive ? 'bg-slate-700 py-2 px-4 rounded-md' : "")}>Criar Post</NavLink>
                            </li>
                            <li className={buttonSair}>
                                <button onClick={logout} className="">Sair</button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar