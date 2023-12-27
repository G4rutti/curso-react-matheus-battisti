const TemplateExpressions = () =>{
    const data = {
        nome: "Davi",
        idade: 21,
    }
    
    return(
        <div>
            <p>Olá, {data.nome}. Tudo bem? Eu sei que você tem {data.idade} anos!! Não adianta mentir para mim!</p>
        </div>
    )
}

export default TemplateExpressions