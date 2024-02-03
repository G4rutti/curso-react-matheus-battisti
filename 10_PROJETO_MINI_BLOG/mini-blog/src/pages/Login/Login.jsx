import React from 'react'

import { useState, useEffect } from 'react'

// Hooks
import { useAuthentication } from '../../hooks/useAutentication'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const {login, error: authError, loading} = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    const user = {
      email,
      password
    }

    const res = await login(user)

    console.log(res)
  }
  useEffect(() => {
    if(authError){
      setError(authError)
    }
  }, [authError])

  return (
    <>
      <div className='flex flex-col justify-center mx-auto animate-fadeIn'>
        <h1 className='mx-auto mt-10 mb-5 text-2xl font-bold uppercase text-slate-800'>Entrar</h1>
        <p className='w-80vw mx-auto mb-10 text-slate-500 text-center md:text-2xl'>Faça o seu login!</p>
        <form onSubmit={handleSubmit} className='flex flex-col w-80vw mx-auto'>
          <label className='flex flex-col '>
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
          <label className='flex flex-col '>
            <span>Senha:</span>
            <input 
            required
            type="password" 
            name='password'
            placeholder='Senha do usuário'
            value={password}
            onChange={(e) => setPassword(e.target.value)
            }
            className='border border-slate-600 px-4 mb-5 py-3 placeholder-slate-600'
            />
          </label>
          {!loading && <button className='bg-slate-600 py-4 text-slate-300 mb-20 hover:text-slate-700 transition-all duration-500'>Entrar</button>}
          {loading && <button className='bg-slate-600 py-4 text-slate-300 mb-20' disabled>Aguarde...</button>}
          {error && <p className='error'>{error}</p>}
        </form>
      </div>
    </>
  )
}

export default Login