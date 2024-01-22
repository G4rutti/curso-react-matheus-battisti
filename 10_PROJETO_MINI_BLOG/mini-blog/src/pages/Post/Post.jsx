import styles from "./Post.module.css"

// Hooks
import { useParams } from "react-router-dom"
import { useFetchDocument } from "../../hooks/useFetchDocument.jsx";

const Post = () => {
    const {id} = useParams();
    const {document: post, loading} = useFetchDocument('posts', id)
  return (
    <div className={styles.post_container}>
        {loading && (
            <p>Carregando post...</p>
        )}
        {post && (
            <>
                <h1>{post.title}</h1>
                <img src={post.image} alt={post.title} />
                <p>{post.body}</p>
                <h3>Este post trata sobre:</h3>
                {post.tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                ))}
            </>
        )}
    </div>
  )
}

export default Post