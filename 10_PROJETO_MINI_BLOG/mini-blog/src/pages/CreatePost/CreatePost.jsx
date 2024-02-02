import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from "../../context/AuthContext.jsx"
import { useInsertDocument } from '../../hooks/useInsertDocument.jsx'

const CreatePost = () => {
  const [title, setTtile] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")
  const navigate = useNavigate()

  const {insertDocument, response} = useInsertDocument("posts")
  const {user} = useAuthValue()

  const handleSubmit = async(e) => {
    e.preventDefault()
    setFormError('')

    // Validar URL da imagem
    try {
      new URL(image)
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.")
      return
    }

    // Criar o array de tags
    const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase())

    // Checar todos os valores
    if(!title || !image || !tags || !body){
      setFormError("Por favor, preencha todos os campos!")
      return
    }

    try {
      await insertDocument({
        title,
        image,
        body,
        tags: tagsArray,
        uid: user.uid,
        createdBy: user.displayName,
      });
  
      // Redirect to home page after the document is successfully inserted
      navigate('/');
    } catch (error) {
      console.error('Error inserting document:', error.message);
    }
  }
  useEffect(() => {
    console.log(response);
  }, [response]);

  return (
    <div className='flex flex-col justify-center mx-auto'>
      <h2 className='mx-auto mt-10 mb-5 text-2xl font-bold uppercase text-slate-800'>Criar post</h2>
      <p className='w-80vw mx-auto mb-10 text-slate-500 text-center'>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit} className='flex flex-col w-80vw mx-auto'>
        <label className='flex flex-col '>
          <span className='mb-2 '>Título</span>
          <input type="text" 
          name="title" 
          required 
          placeholder='Pense num bom título'
          onChange={(e) => (setTtile(e.target.value))}
          value={title}
          className='border border-slate-600 px-4 mb-5 py-3 placeholder-slate-600' />
        </label>
        <label className='flex flex-col '>
          <span className='mb-2 '>URL da imagem</span>
          <input type="text" 
          name="image" 
          required 
          placeholder='Insira uma imagem que represente seu post'
          onChange={(e) => (setImage(e.target.value))}
          value={image}
          className='border border-slate-600 px-4 mb-5 py-3 placeholder-slate-600' />
        </label>
        <label className='flex flex-col '>
          <span className='mb-2 '>Conteúdo</span>
          <textarea type="text" 
          name="image" 
          required 
          placeholder='Insira o conteúdo do seu post'
          onChange={(e) => (setBody(e.target.value))}
          value={body}
          className='border border-slate-600 px-4 mb-5 py-3 placeholder-slate-600'>
          </textarea>
        </label>
        <label className='flex flex-col '>
          <span className='mb-2 '>Tags</span>
          <input type="text" 
          name="image" 
          required 
          placeholder='Insira tags separadas por vírgulas'
          onChange={(e) => setTags(e.target.value)}
          value={tags}
          className='border border-slate-600 px-4 mb-5 py-3 placeholder-slate-600' />
        </label>
        {!response.loading && <button className='bg-slate-600 py-4 text-slate-300 mb-20 hover:text-slate-700 transition-all duration-500'>Cadastrar</button>}
        {response.loading != null && <button className='bg-slate-600 py-4 text-slate-300 mb-20' disabled>Aguarde...</button>}
        {response.error && <p className='error'>{response.error}</p>}
        {formError && <p className='error'>{formError}</p>}

      </form>
    </div>
  )
}

export default CreatePost