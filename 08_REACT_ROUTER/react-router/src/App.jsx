// Importando React Routes
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// Components
import NavBar from './components/NavBar.jsx'
import SearchForm from './components/SearchForm.jsx'

import './App.css'

// Importando React Pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import Info from './pages/Info.jsx'
import NotFound from './pages/NotFound.jsx'
import Search from './pages/Search.jsx'

function App() {
  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        <NavBar/>
        {/* Search Params */}
        <SearchForm/>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/sobre' element={ <About/> }/>
          {/* Nested Routes */}
          <Route path='/products/:id/info' element={ <Info/> }/>
          {/* Rota dinamica */}
          <Route path='/products/:id' element={ <Product/> }/>
          {/* Search */}
          <Route path='/search' element={ <Search/> }/>
          {/* Redirect */}
          <Route path='/company' element={ <Navigate to='/about'/> }/>
          {/* Página 404 */}
          <Route path='*' element={ <NotFound/> }/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
