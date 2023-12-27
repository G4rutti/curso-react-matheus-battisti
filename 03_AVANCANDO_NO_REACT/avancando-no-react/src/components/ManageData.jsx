import { useState } from "react"

const ManageData = () => {
    const [number, setNumber] = useState(0)
  return (
    <div>
        <p>Valor de cliques: {number}</p>
        <button onClick={() => setNumber(number + 1)}>Acrescentar um número</button>
    </div>
  )
}

export default ManageData