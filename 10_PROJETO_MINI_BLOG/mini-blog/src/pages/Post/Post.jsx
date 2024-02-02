// Hooks
import { useParams } from "react-router-dom"
import { useFetchDocument } from "../../hooks/useFetchDocument.jsx";

const Post = () => {
    const {id} = useParams();
    const {document: post, loading} = useFetchDocument('posts', id)
  return (
    <div className="flex flex-col">
        {loading && (
            <p>Carregando post...</p>
        )}
        {post && (
            <>
                
                <h1 className="my-10 text-2xl uppercase font-bold text-center">{post.title}</h1>
                <div className="flex flex-col">
                    <div className="w-80vw mx-auto md:flex md:h-auto md:max-h-50vh md:justify-center">
                        <img src={post.image} alt={post.title} className="mb-10 rounded-lg 
                        md:w-auto md:max-w-40vw md:h-auto " />
                        <p className="text-justify mb-10 md:w-30vw md:ml-20">{post.body}</p>
                    </div>
                    <div className="flex flex-col ">
                        <h3 className="mx-auto mb-10">Este post trata sobre:</h3>
                        <div className="flex justify-center">
                            {post.tags.map((tag) => (
                                <p key={tag} className="mx-2 mb-20 uppercase">{tag}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )}
    </div>
  )
}

export default Post