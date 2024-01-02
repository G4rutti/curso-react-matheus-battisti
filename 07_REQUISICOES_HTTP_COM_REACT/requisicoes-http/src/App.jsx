import { useFetch } from './hooks/useFetch.jsx'

import './App.css'

import { useState, useEffect } from 'react'

const url = "http://localhost:3000/products"

function App() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)

  // Aula 06 - Custom Hook:
  const {data: itens, httpConfig, loading, error, deletarPorId} = useFetch(url)


  // Aula 04 - Fazendo o POST
  const handleSubmit = async(e) => {
    e.preventDefault()

    const produto ={
      name,
      price
    }

    httpConfig(produto, "POST")
    setName("")
    setPrice("")
  }

  const handleDelete = async(id) => {
    deletarPorId(url, id)
  }



  return (
    <>
      <div className="top">
        <h1>Lista de produtos:</h1>
        {/* Aula 08 - Loading */}
        {loading && <p>Carregando dados</p>}
        {error && <p>{error}</p>}
        {!loading && (
          <ul>
            {itens && itens.map((item) => (
              <li key={item.id}>{item.name} - R$: {item.price} - <button key={item.id} id={item.id} onClick={() => handleDelete(item.id)}>Delete</button></li>
            ))}
          </ul>
        )}
      </div>

      <div className="formulario">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </label>
          <label>
            Preço:
            <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </label>
          {/* Aula 09 - LOADING NO POST */}
          {loading && <input type="submit" value="Aguarde" disabled />}
          {!loading && <input type="submit" value="Criar Produto" />}
          
        </form>
      </div>
    </>
  )
}

export default App
