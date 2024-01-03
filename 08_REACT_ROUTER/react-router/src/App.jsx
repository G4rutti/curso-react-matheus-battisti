// Importando React Routes
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Importando React Pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

// Components
import NavBar from './components/NavBar.jsx'

import './App.css'

function App() {
  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/sobre' element={ <About/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
