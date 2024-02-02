import { Link } from 'react-router-dom'

import { useFetchDocuments } from '../../hooks/useFetchDocuments.jsx'
import { useQuery } from '../../hooks/useQuery.jsx'

import PostDetail from '../../components/PostDetail.jsx'

const Search = () => {
    const query = useQuery()
    const search = query.get('q')

    const {documents: posts} = useFetchDocuments('posts', search)

    return (
        <div className='flex flex-col justify-center'>
            <div className='container w-full mx-auto bg-slate-900 h-42 md:h-40 md:mb-20'>
                <h2 className='my-10 flex flex-col mx-auto text-xl w-80vw uppercase font-bold text-slate-300
                md:text-center'>Resultados apartir da busca por: <span className='lowercase text-center mt-5'>{search}</span></h2>
            </div>
            
            <div>
                {posts && posts.map((post) => (
                    <PostDetail key={post.id} post={post}/>
                ))}
                {posts && posts.length === 0 && (
                    <div className='flex flex-col justify-center mx-auto w-80vw my-10'>
                        <p className='text-center text-2xl font-bold uppercase mb-10'>Não foram encontrados posts a partir da sua busca</p>
                        <Link className="w-30vw mx-auto my-2 bg-red-600 py-2 rounded-md hover:text-red-900 transition-all duration-500 text-slate-200 text-center
                        md:w-20" to='/'>
                            Voltar
                        </Link>
                    </div>
                    
                )}
            </div>
        </div>
    )
}

export default Search