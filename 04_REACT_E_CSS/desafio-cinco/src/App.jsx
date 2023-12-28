import CarInfos from './components/CarInfos.jsx'

import { useState } from 'react'

import './App.css'

function App() {

  const [cars] = useState([
    {id: 1, marca: "Ford", modelo:"Fiesta", cor:"Azul Marinho", preco: 30000},
    {id: 2, marca: "Fiat", modelo:"Uno", cor:"Vermelho", preco: 24500},
    {id: 3, marca: "Ferrari", modelo:"F-40", cor:"Vermelho", preco: 300000},
    {id: 4, marca: "Porshe", modelo:"Spyder 918", cor:"Prateado", preco: 189000},
  ])

  return (
    <>
      <h1>Infos de Carros:</h1>
      <div className='carros'>
        {cars.map((carro) => (
          <CarInfos key={carro.id} marca={carro.marca} modelo={carro.modelo} cor={carro.cor} preco={carro.preco}/>
        ))}
      </div>
      
    </>
  )
}

export default App
