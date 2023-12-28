import { useState } from 'react'
import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <h1>Formulário:</h1>
      <MyForm user={{ name: 'Davi', email:'davigarutti5@gmail.com' }}/>
    </>
  )
}

export default App
