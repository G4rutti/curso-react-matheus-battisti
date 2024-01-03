import { useNavigate } from "react-router-dom"
import { useState } from "react"

const SearchForm = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/search?q='+query)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Pesquisa
                <input type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Pesquisa"/>
            </label>
            <input type="submit" value="Buscar"/>
        </form>
    )
}

export default SearchForm