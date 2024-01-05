// Alterando contexto
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext.jsx"

const ChangeCounter = () => {
    const {counter, setCounter} = useContext(CounterContext)
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>Incremente no valor</button>
        </div>
    )
}

export default ChangeCounter