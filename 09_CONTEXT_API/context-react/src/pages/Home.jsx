// import { useContext } from "react"
// import { CounterContext }from "../context/CounterContext.jsx"
import { useCounterContext } from "../hooks/useCounterContext.jsx"
import { useTitleColorContext } from "../hooks/useTitleColorContext.jsx"


import ChangeCounter from "../components/ChangeCounter.jsx"


const Home = () => {
  // const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()
  const {color, dispatch} = useTitleColorContext()
  const setTitleColor = (color) => {
    dispatch({type:color})
  }
  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do Contador = {counter}</p>
      <ChangeCounter/>
      {/* Alterando cotexto complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home