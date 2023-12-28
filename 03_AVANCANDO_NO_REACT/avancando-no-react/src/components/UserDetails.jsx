const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <h2> Dados do usuário</h2>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissao: {profissao}</li>
            {idade < 18 ? (
                <li>Usuário: {nome}, é menor de idade, ele tem {idade} ano(s)</li>
            ) : (
                <li>Usuário: {nome}, é maior de idade!</li>
            )}
        </ul>
    </div>
  )
}

export default UserDetails