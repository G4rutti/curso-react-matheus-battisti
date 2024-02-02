
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
    <>
      <div className="container w-full mx-auto bg-slate-900 h-72 md:h-48 md:mb-20">
        <h1 className="pt-10 text-2xl font-bold uppercase text-slate-400">Veja os nossos posts mais recentes</h1>
        <form onSubmit={handleSubmit} className="my-10 flex-col md:flex-row flex justify-center">
          <input type="text" placeholder="Ou busque por tags..." className="w-60 mx-auto  px-4 py-2 outline-none mb-4 rounded-lg
          md:mx-0 md:w-80"  onChange={(e) => setQuery(e.target.value)}/>
          <button className="bg-slate-400 w-40 mx-auto py-2 rounded-lg text-slate-800
          md:mx-0 md:ml-5 md:h-10">Pesquisar</button>
        </form>
      </div>
      <div className="mt-10">
        {loading && <p>Carregando...</p>}
        {error && <p>Erro ao carregar os posts: {error}</p>}
        {posts && posts.map((post) => (
          <PostDetail key={post.id} post={post}/>
        ))}
        {posts && posts.length === 0 && (
          <div>
            <p>Não foram encontrados posts</p>
            <Link to='/posts/create' className="btn">Criar primeiro post</Link>
          </div>
        )}

      </div>
      
    </>
    
  )
}

export default Home