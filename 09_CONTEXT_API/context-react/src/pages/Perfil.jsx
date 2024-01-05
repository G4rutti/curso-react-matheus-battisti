import { useCounterContext} from "../hooks/useCounterContext.jsx"


const Perfil = () => {
  const {counter, setCounter} = useCounterContext()
  return (
    <div>
      <p>Número = {counter}</p>
      <button onClick={() => setCounter(0)}>Zerar Cliques</button>  
    </div>
  )
}

export default Perfil