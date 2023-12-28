import { useState } from "react"

const ConditionalRender = () => {
  const [x] = useState(true)

  const [name, setName] = useState("João")

  return (
    <div>
      <div>
        <h1>Isso será exibido se:</h1>
        {x && <p>Se x for true</p>}
        {!x && <p>Se x for false</p>} 
      </div>
      <div>
        <h1>If ternário</h1>
        {name === "Davi" ? (
          <p>O nome é Davi</p>
        ) : (
          <p>O nome não foi encontrado</p>
        )}
        <button onClick={() => setName("Davi")}>Clique aqui para alterar o nome</button>
      </div>
    </div>
  )
}

export default ConditionalRender