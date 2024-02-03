
import {Link} from 'react-router-dom'

const PostDetail = ({post}) => {
  return (
    <div className='container w-80vw flex flex-col mx-auto animate-fadeIn
    md:w-40vw'>
        <img src={post.image} alt={post.title} className='w-80vw rounded-xl mb-5
        md:w-40vw'/>
        <span className='border-slate-700 border w-70vw mx-auto mb-4
        md:w-30vw'></span>
        <h2 className='w-70vw mx-auto h-auto text-wrap font-semibold mb-2 text-center
        md:w-30vw '>{post.title}</h2>
        <p className='text-slate-500 text-center'>Criado por: {post.createdBy}</p>
        <div className='flex w-70vw mx-auto mb-5 justify-center
        md:w-30vw'>
            {post.tags.map((tag) => (
                <p key={tag}><span>#</span>{tag}</p>
            ))}
        </div>
        <Link className="mx-auto py-2 px-8 bg-slate-700 rounded-full mb-20 text-slate-500 
        hover:bg-slate-900 hover:tracking-widest hover:text-slate-100
        transition-all duration-700" to={`/posts/${post.id}`}>Ler</Link>
    </div>
  )
}

export default PostDetail