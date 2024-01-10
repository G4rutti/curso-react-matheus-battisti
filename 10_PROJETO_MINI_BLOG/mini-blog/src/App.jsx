import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import './App.css'

// Pages
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About.jsx"

// Components
import NavBar from "./components/NavBar.jsx"
import Footer from "./components/Footer.jsx"
import Login from "./pages/Login/Login.jsx"
import Register from "./pages/Register/Register.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
