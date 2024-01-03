import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <h1>Erro 404</h1>
            <p>Não há nada aqui =)</p>
            <Link to={"/"}>Voltar</Link>
        </div>
    )
}

export default NotFound