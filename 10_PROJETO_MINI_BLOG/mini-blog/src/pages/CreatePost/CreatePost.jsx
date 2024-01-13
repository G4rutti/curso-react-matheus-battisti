import styles from './CreatePost.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from "../../context/AuthContext.jsx"
import { useInsertDocument } from '../../hooks/useInsertDocument.jsx'

const CreatePost = () => {
  const [title, setTtile] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  const {insertDocument, response} = useInsertDocument("posts")
  const {user} = useAuthValue()

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError('')

    // Validar URL da imagem

    // Criar o array de tags

    // Checar todos os valores
    console.log(response)
    insertDocument({
      title,
      image,
      body,
      tags,
      uid: user.uid,
      createdBy: user.displayName
    })

    // Redirect to home page
  }

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
      </form>
    </div>
  )
}

export default CreatePost