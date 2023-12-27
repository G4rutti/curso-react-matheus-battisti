import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Nine", "Tails", "9219", "Davi", "oTÁVIO"])
    const [users, setUsers] = useState([
        {id: 1, nome: "Nine"},
        {id: 2, nome: "Tails"},
        {id: 3, nome: "#9219"}
    ])

    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 3)

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((item) => (
                    <li key={item.id}>{item.nome}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Deletar Aleatóriamente</button>
        </div>
    )
}

export default ListRender