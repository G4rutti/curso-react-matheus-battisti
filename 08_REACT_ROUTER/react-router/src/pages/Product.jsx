import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

import { Link } from "react-router-dom"

const Product = () => {
    const { id } = useParams()

    // Carregameto individual
    const url = "http://localhost:3000/products/" + id
    const { data: product, loading, error } = useFetch(url)
    return (
        <>
            <p>Id do produto {id}</p>
            {error && <p>Ocorreu um erro...</p>}
            {loading && <p>Carregando...</p>}
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <h1>R$: {product.price}</h1>
                    {/* Nested Route */}
                    <Link to={`/products/${product.id}/info`}>Mais informações</Link>
                </div>
            )}
        </>
    )
}

export default Product