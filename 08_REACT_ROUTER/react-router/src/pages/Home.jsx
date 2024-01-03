import {Link} from "react-router-dom"
import {useFetch} from "../hooks/useFetch.jsx"

const Home = () => {
    const url = 'http://localhost:3000/products'
    const {data: itens, loading, error} = useFetch(url)
  return (
    // Carregamento de dados
    <div>
        <h1>Produtos</h1>
        {error && <p>{error}</p>}
        <ul className="products">
            {itens && itens.map(item => (
                <li key={item.id}>
                    <h2>{item.name}</h2>
                    <p>R$: {item.price}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Home