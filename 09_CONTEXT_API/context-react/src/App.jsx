import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

import Home from "./pages/Home.jsx"
import Perfil from "./pages/Perfil.jsx"
import Sobre from "./pages/Sobre.jsx"
import Error404 from "./pages/Erro.jsx"

import NavBar from './components/NavBar.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
