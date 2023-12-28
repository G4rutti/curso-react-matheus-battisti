import { useState } from 'react'

import './MyForm.css'

const MyForm = ({user}) => {

    // Aula 06 - Controlled Inputs


    // Aula 3 - Gerenciamento de dados: 
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (e) => [
        setName(e.target.value)
    ]
    
    // Aula 05
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Enviando formulário... Nome: ${name} | E-mail: ${email} | Biografia: ${bio} | Função: ${role}`)
        
        // Aula 07 - limpar formulário:
        setEmail('')
        setName('')
        setBio('')
    }

    return (
        <div>
            {/* Aula 05 - Envio de form */}
            <form onSubmit={handleSubmit}>
                {/* Aula 1 - Criação do form */}
                <div className="inputSection">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder='Digite o seu nome' onChange={handleName} value={name}/>
                </div>
                {/* Aula 2 - Envonvendo o input com a label */}
                <label>
                    {/* Aula 4 - Forma mais simples para ver o valor do input */}
                    <span>E-mail</span>
                    <input type="email" name='email' placeholder='Digite o seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email}/>
                </label>
                {/* Aula 08 - TextArea */}
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>
                {/* Aula 09 - Select */}
                <label>
                    <span>Função no sistema</span>
                    <select name="roles" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Admnistrador</option>
                    </select>
                </label>
                <input type="submit" value='Enviar'/>
                
                
            </form>
        </div>
    )
}

export default MyForm