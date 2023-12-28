import MyComponent from './components/MyComponent.jsx'
import Title from './components/Title.jsx'

import { useState } from 'react'

import './App.css'

function App() {
  
  const num = 15

  const [redTitle, setRedTitle] = useState(true)

  return (
    <>
    {/* Global */}
      <h1>React com Css</h1>
    {/* De componente */}
      <MyComponent/>
    {/* Inline-CSS */}
      <p style={{color: 'blue', padding: "2vw", borderTop: "2px solid red", backgroundColor:"Gold", marginTop:"2vh"}} >Este elemento foi estilizado de maneira inline</p>
    {/* Inline-CSS dinâmico */}
      <h2 style={num < 10 ? ({ color:'gold' }) : ({ color:'purple' })}>CSS DINAMICO</h2>
      <h2 style={num > 10 ? ({ color:'gold' }) : ({ color:'purple' })}>CSS DINAMICO</h2>
    {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Esse título terá classe dinâmica</h2>
      <button onClick={() => (redTitle ? (setRedTitle(false)) : (setRedTitle(true)))}>Mudar State</button>
    {/* CSS Modules */}
      <Title/>
    </>
  )
}

export default App
