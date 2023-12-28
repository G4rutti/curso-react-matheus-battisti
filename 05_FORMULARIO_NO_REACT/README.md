# Módulo 05 - React e formulários:

## Aula 01 - Criando fomulários:

* No react, vamos também utilizar a tag `<form/>` para formulários;
* As labels dos inputs contem o atributo `htmlFor`, que deve ter o valor do name do input;
* Não utilizamos o action, pois o processamento será feito de forma assíncrona.

## Aula 02 - Label envolvendo input:

* Em react, um padrão comum é a tag `label` envolvendo o `input`;
* Isso faz com que o atributo for se torne opcional;
* Simplificando nossa estrutura de HTML, sem perder a semantica

## Aula 03 - Gerenciamento de dados de input:

* Para manipular os valores do inputs, vamos utilizar o hook `useState`;
* Ou seja, podemos armazenar na variável e utilizar o set para alterar o valor;
* Vamos criar uma função para alterar o valor no evento `onChange`;
* Deixando nosso código fácil de trabalhar nas próximas etapas: como o envio dos dados para o bd e validação.

### Código JSX:

```
    const [name, setName] = useState()
    const handleName = (e) => [
        setName(e.target.value)
    ]
    <input type="text" name="name" placeholder='Digite o seu nome' onChange={handleName}/>
```
O código acima é uma maneira para obter o valor de um input.

## Aula 04 - Alteração do state inline:

* Quando temos vários inputs podemos realizar a manipulação de forma mais simples;
* Basicamente criamos uma função inline no onChange;
* Ele vai alterar o valor do state com o método `set`, da mesma forma que a função isolada;

### Código JSX:
`<input type="email" name='email' placeholder='Digite o seu e-mail' onChange={(e) => setEmail(e.target.value)}/>`

## Aula 05 - Envio de FORM:

* Para enviar um form, vamos utilizar o evento `onSubmit`;
* Ele chamará uma função, e nesta devemos lembrar de parar a submissão com o `preventDefault`;
* Nesta etapa podemos realizar validações, envio de form para o servidor, reset de form e outras ações.

### Código:
`<form onSubmit={handleSubmit}></form>`
```
const handleSubmit = (e) => {
    e.preventDefault()
}
```

## Aula 06 - Controlled Inputs:

* Controlled inputs é um recurso que nos permite mais flexibilidade nos forms de React;
* Precisamos apenas igualar o valor ao state;
* Um uso muito comum: Formulários de edição, que os dados vem do back-end, conseguiremos preencher o input mais facilmente.

### Código: 
`<MyForm user={{ name: 'Davi', email:'davigarutti5@gmail.com' }}/>`
```

const MyForm = ({user}) => {

    // Aula 06 - Controlled Inputs
    // Aula 3 - Gerenciamento de dados: 
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    return (
        <input type="text" name="name" placeholder='Digite o seu nome' onChange={handleName} value={name}/>
        <input type="email" name='email' placeholder='Digite o seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email}/>
    )
}
```
**value={name} e value={email}**

## Aula 07 - Resetando Formulários;

* Com o controller inputs, limpar o form será fácil;
* Basta atribuir um calor de uma string vazia aos states e pronto!
* Isso será feito após o envio, em formulários que o usuário precisa preencher novamente.

### Código:
```
const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Enviando formulário... Nome: ${name} | E-mail: ${email}`)
        
        // Aula 07 - limpar formulário:
        setEmail('')
        setName('')
    }
```

## Aula 08 - Textarea no React:

* O textarea pode ser considerado um input de texto normal;
* Utilizaremos o value para alterar o state inicial;
* E o evento onChange para modificar o valor do state.

## Aula 09 - Select no React:

* O select é semelhante aos outros inputs;
* Quando temos a alteração de um valor o evento onchange pode captar isso;
* O value também pode atribuir qual option estará selecionada;

