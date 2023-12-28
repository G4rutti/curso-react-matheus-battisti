import ManageData from './components/ManageData.jsx'
import ListRender from './components/ListRender.jsx'
import ConditionalRender from './components/ConditionalRender.jsx'
import ShowUserName from './components/ShowUserName.jsx'
import CarDetails from './components/CarDetails.jsx'
import Fragment from './components/Fragment.jsx'
import Container from './components/Container.jsx'
import ExecuteFunction from './components/ExecuteFunction.jsx'
import Message from './components/Message.jsx'
import ChangeMessageState from './components/ChangeMessageState.jsx'
import UserDetails from './components/UserDetails.jsx'

import './App.css'
import { useState } from 'react'


import Neymar from './assets/neymar02.jpg'


function App() {
  const cars = [
    {id: 1, brand: "Fiat", color: "Branco", km: 5500},
    {id: 2, brand: "Ford", color: "Azul-Marinho", km: 3120},
    {id: 3, brand: "Ferrari", color: "Vermelha", km: 0}
  ]

  const persons = [
    {id: 1, nome: "Davi", idade: 17, profissao: "Programador"},
    {id: 2, nome: "José", idade: 35, profissao: "Zelador"},
    {id: 3, nome: "Carlos", idade: 22, profissao: "Velocista"},
  ]

  function sendMessage(){
    console.log("A mensagem sendo exibida")
  }

  const [message, setMessage] = useState('')

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    
    <div>
      <div>
        {/* Imagem em public*/}
        <img src="/neymar01.jpg" alt="neymar" />
      </div>
      <div>
        {/* Imagem em asset*/}
        <img src={Neymar} alt="neymar" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      <ShowUserName name="Rogério"/>
      <CarDetails brand="Porshe" km={5000} color="Preto"/>
      {/* Loop com array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color}/>
      ))}
      {/* Fragment */}
      <Fragment/>
      {/* Children props */}
      <Container>
        <p>Hello, World! Its my container.</p>
      </Container>
      <Container>
        <h3>Thats my second cotnainer</h3>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={sendMessage}/>
      {/* State Lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/* Desafio 4 */}
      {persons.map((person) => (
        <UserDetails key={person.id} nome={person.nome} idade={person.idade} profissao={person.profissao}/>
      ))}
    </div>
    
  )
}

export default App
