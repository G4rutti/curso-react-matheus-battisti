import styles from './CreatePost.module.css'

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
    <div>
      <h2>Criar post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título</span>
          <input type="text" 
          name="title" 
          required 
          placeholder='Pense num bom título'
          onChange={(e) => (setTtile(e.target.value))}
          value={title} />
        </label>
        <label>
          <span>URL da imagem</span>
          <input type="text" 
          name="image" 
          required 
          placeholder='Insira uma imagem que represente seu post'
          onChange={(e) => (setImage(e.target.value))}
          value={image} />
        </label>
        <label>
          <span>Conteúdo</span>
          <textarea type="text" 
          name="image" 
          required 
          placeholder='Insira o conteúdo do seu post'
          onChange={(e) => (setBody(e.target.value))}
          value={body}>
          </textarea>
        </label>
        <label>
          <span>Tags</span>
          <input type="text" 
          name="image" 
          required 
          placeholder='Insira tags separadas por vírgulas'
          onChange={(e) => setTags(e.target.value)}
          value={tags} />
        </label>
        {!response.loading && <button className='btn'>Cadastrar</button>}
        {response.loading != null && <button className='btn' disabled>Aguarde...</button>}
        {response.error && <p className='error'>{response.error}</p>}
        {formError && <p className='error'>{formError}</p>}

      </form>
    </div>
  )
}

export default CreatePost