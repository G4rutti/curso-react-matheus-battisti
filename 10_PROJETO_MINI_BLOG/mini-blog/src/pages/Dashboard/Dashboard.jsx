
import {Link} from 'react-router-dom'

// Hooks
import {useAuthValue} from "../../context/AuthContext.jsx"
import {useFetchDocuments} from '../../hooks/useFetchDocuments.jsx'
import { useDeleteDocument } from '../../hooks/useDeleteDocument.jsx'

const Dashboard = () => {
  const {user} = useAuthValue()
  const uid = user.uid

  // Posts do usuário
  const {documents: posts, loading} = useFetchDocuments("posts", null, uid)
  const { deleteDocument } = useDeleteDocument("posts")

  return (
    <div className='flex flex-col mx-auto'>
      <div className=' w-full mx-auto bg-slate-900 h-42 md:h-40 md:mb-20'>
        <h2 className='my-10 text-center text-2xl font-bold uppercase text-slate-300'>Dashboard</h2>
        <p className='mb-10 text-center font-bold uppercase text-slate-500'>Gerencie os seus posts</p>
      </div>
      
      {loading && <p>Carregando...</p>}
      {posts && posts.length === 0 ? (
        <div className='flex flex-col justify-center mx-auto w-80vw my-10'>
          <p className='text-center text-2xl font-bold uppercase mb-10'>Não foram encontrados posts!</p>
          <Link to='/posts/create' className="w-50vw mx-auto mb-10 bg-slate-600 py-2 rounded-md hover:text-slate-900 transition-all duration-500 text-slate-200 text-center
            md:w-44">
            Criar o primeiro post
          </Link>          
        </div>
      ) : (
        <> 
          <div className='my-10 flex justify-center'>
            <span className='mx-5 uppercase font-semibold text-slate-600 text-xl '>Título</span>
            <span className='border border-t-4 border-slate-700'></span>
            <span className='mx-5 uppercase font-semibold text-slate-600 text-xl '>Ações</span>
          </div>

          {posts && posts.map((post) => (
            <>
              <div key={post.id} className='w-80vw flex mx-auto mb-10'>
                <div className='w-40vw flex justify-start
                md:justify-center'>
                  <p className='font-bold uppercase my-auto'>{post.title}</p>
                </div>
                <div className='w-40vw flex flex-col text-center
                md:flex-row md:justify-center'>
                  <Link className="mx-5 my-2 bg-slate-600 py-2 px-4 rounded-md hover:text-slate-900 transition-all duration-500 text-slate-200" to={`/posts/${post.id}`}>Ver</Link>
                  <Link className="mx-5 my-2 bg-green-600 py-2 px-4 rounded-md hover:text-green-900 transition-all duration-500 text-slate-200" to={`/posts/edit/${post.id}` }>Editar</Link>
                  <Link className="mx-5 my-2 bg-red-600 py-2 px-4 rounded-md hover:text-red-900 transition-all duration-500 text-slate-200" to={`/` } onClick={() => deleteDocument(post.id)}>
                    Excluir
                  </Link>
                </div>
              </div>
              <span className='border-y-2 border-slate-800 w-80vw mx-auto mb-10'></span>
            </>
            

          ))}
        </>
        
      )}
      
    </div>
  )
}

export default Dashboard