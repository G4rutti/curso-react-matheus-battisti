import React from 'react'

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
    <div className='flex flex-col justify-center mx-auto'>
      <h2 className='mx-auto mt-10 mb-5 text-2xl font-bold uppercase text-slate-800'>Cadastre-se para postar:</h2>
      <p className='w-80vw mx-auto mb-10 text-slate-500 text-center md:text-2xl'>Crie seu usuário e compartile suas histórias!</p>
      <form onSubmit={handleSubmit}  className='flex flex-col w-80vw mx-auto'>
        <label className='flex flex-col'>
          <span>Nome:</span>
          <input 
          required
          type="text" 
          name='displayName'
          placeholder='Nome do usuário'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className='border border-slate-600 px-4 mb-5 py-3 placeholder-slate-600'
          />
        </label>
        <label className='flex flex-col'>
          <span>Email:</span>
          <input 
          type="email"
          name="email"
          placeholder='Email do usuário'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className='border border-slate-600 px-4 mb-5 py-3 placeholder-slate-600'
          />
        </label>
        <label className='flex flex-col'>
          <span>Senha:</span>
          <input 
          required
          type="password" 
          name='password'
          placeholder='Senha do usuário'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='border border-slate-600 px-4 mb-5 py-3 placeholder-slate-600'
          />
        </label>
        <label className='flex flex-col'>
          <span>Confirmação senha:</span>
          <input 
          type="password" 
          name='confirmPassword'
          required
          placeholder='Confirme sua senha'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className='border border-slate-600 px-4 mb-5 py-3 placeholder-slate-600'
          />
        </label>
        {!loading && <button className='bg-slate-600 py-4 text-slate-300 mb-20 hover:text-slate-700 transition-all duration-500'>Cadastrar</button>}
        {loading && <button className='bg-slate-600 py-4 text-slate-300 mb-20' disabled>Aguarde...</button>}
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
    
  )
}

export default Register