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
import Search from './pages/Search/Search.jsx'
import Post from './pages/Post/Post.jsx'
import EditPost from './pages/EditPost/EditPost.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

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
    <div className='w-full'>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
            <Route path='/posts/create' element={user ? <CreatePost /> : <Navigate to="/login" />} />
            <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path='/search' element={<Search />} />
            <Route path='/posts/:id' element={<Post />} />
            <Route path='/posts/edit/:id' element={user ? <EditPost /> : <Navigate to="/login" />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
