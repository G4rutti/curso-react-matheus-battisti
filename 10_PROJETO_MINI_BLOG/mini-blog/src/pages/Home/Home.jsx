import styles from "./Home.module.css"

// Hooks
import{ useNavigate, Link, Navigate } from "react-router-dom"
import { useState } from "react"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"

// Components
import PostDetail from "../../components/PostDetail"

const Home = () => {
  const [query, setQuery] = useState("")
  const { documents: posts, loading, error } = useFetchDocuments("posts")
  const navigate = useNavigate()
  // const [posts] = useState([])
  // const [loading, setLoading] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(query){
      return navigate(`/search?q=${query}`)
    }
  }

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input type="text" placeholder="Ou busque por tags..." onChange={(e) => setQuery(e.target.value)}/>
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div  className="post-list">
        {loading && <p>Carregando...</p>}
        {error && <p>Erro ao carregar os posts: {error}</p>}
        {posts && posts.map((post) => (
          <PostDetail key={post.id} post={post}/>
        ))}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to='/posts/create' className="btn">Criar primeiro post</Link>
          </div>
        )}

      </div>
    </div>
  )
}

export default Home