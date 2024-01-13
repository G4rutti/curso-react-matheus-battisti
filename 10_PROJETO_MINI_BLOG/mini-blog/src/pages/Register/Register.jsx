import React from 'react'
import styles from "./Register.module.css"

import { useState, useEffect } from 'react'

// Hooks
import { useAuthentication } from '../../hooks/useAutentication'

const Register = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const {createUser, error: authError, loading} = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    const user = {
      displayName,
      email,
      password
    }
    if(password !== confirmPassword){
      setError("As senhas nao parecem iguais")
      return
    }
    const res = await createUser(user)

    console.log(res)
    setDisplayName("")
    setEmail('')
    setPassword("")
    setConfirmPassword("")
  }
  useEffect(() => {
    if(authError){
      setError(authError)
    }
  }, [authError])


  return (
    <div className={styles.register}>
      <h2>Cadastre-se para postar:</h2>
      <p>Crie seu usuário e compartile suas histórias!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input 
          required
          type="text" 
          name='displayName'
          placeholder='Nome do usuário'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>Email:</span>
          <input 
          type="email"
          name="email"
          placeholder='Email do usuário'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input 
          required
          type="password" 
          name='password'
          placeholder='Senha do usuário'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirmação senha:</span>
          <input 
          type="password" 
          name='confirmPassword'
          required
          placeholder='Confirme sua senha'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && <button className='btn'>Cadastrar</button>}
        {loading && <button className='btn' disabled>Aguarde...</button>}
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
    
  )
}

export default Register