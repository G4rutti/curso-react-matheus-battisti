import './App.css'

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"

// Hooks
import {useState, useEffect} from "react"
import { useAuthentication } from './hooks/useAutentication.jsx'

// Pages
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About.jsx"
import CreatePost from './pages/CreatePost/CreatePost.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Login from "./pages/Login/Login.jsx"
import Register from "./pages/Register/Register.jsx"

// Components
import NavBar from "./components/NavBar.jsx"
import Footer from "./components/Footer.jsx"


//Context
import { AuthProvider } from "./context/AuthContext.jsx"

function App() {
  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/login" 
                element={!user ? <Login/>: <Navigate to="/"/> } />
                <Route path="/register" 
                element={!user ? <Register/>: <Navigate to="/"/>} />
                <Route path='/create_post' 
                element={user ? <CreatePost/> :<Navigate to="/login"/>}/>
                <Route path='/dashboard' 
                element={user? <Dashboard/> : <Navigate to="/login"/>  }/>
              </Routes>
            </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App