import styles from "./Search.module.css"
import { Link } from 'react-router-dom'

import { useFetchDocuments } from '../../hooks/useFetchDocuments.jsx'
import { useQuery } from '../../hooks/useQuery.jsx'

import PostDetail from '../../components/PostDetail.jsx'

const Search = () => {
    const query = useQuery()
    const search = query.get('q')

    const {documents: posts} = useFetchDocuments('posts', search)

    return (
        <div>
            <h2>Search</h2>
            <div className={styles.search_container}>
                {posts && posts.map((post) => (
                    <PostDetail key={post.id} post={post}/>
                ))}
                {posts && posts.length === 0 && (
                    <div className={styles.noposts}>
                        <p>Não foram encontrados posts a partir da sua busca</p>
                        <Link to='/' className="btn btn-dark">
                            Voltar
                        </Link>
                    </div>
                    
                )}
            </div>
        </div>
    )
}

export default Search