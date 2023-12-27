# Modulo 3 - Avançando no React:

## Desafio 3:

* Crie um projeto para a nova seção;
* Limpe o arquivo do componente principal;
* E por fim coloque o título de "Seção 3"

## Aula 01 - Imagens no React - Pasta public:

* As imagens públicas do nosso projeto podem ficar na pasta `../public`;
* De lá, elas podem ser chamadas pelas tags img diretamente pelo `/nome.jpg`;
* Pois a pasta public fica linkada com o scr das imagens.

```
function App() {
  return (
    <div>
      {/* Imagem em public*/}
      <img src="/neymar01.jpg" alt="neymar" />
    </div>
  )
}
```

## Aula 02 - Imagens no React - Pasta em asset:

* A pasta public pode ser utilizada para colocar imagens, como fizemos na aula passada;
* Mas um padrão bem utilizado para imagens do projeto é colocar em uma pasta chamada `assets`, em src;
* Em assets precisamos importar as imagens, e o src é dinamico com o nome de importação.

```
    import Neymar from './assets/neymar02.jpg'
    <div>
        {/* Imagem em asset*/}
        <img src={Neymar} alt="neymar" />
    </div>
```

## Aula 03 - O que são Hooks? - React Hooks:

* Recursos do React que tem diversas funções;
* Como: guardar e alterar o estado de algum dado na nossa aplicação;
* Todos os hooks começam com **use**, por exemplo: `useState`;
* Os hooks precisam ser importados;
* Geralmente, são úteis em todas as aplicações, utilizaremos diversos ao longo do curso.

## Aula 04 - useState na prática - React Hooks:

* O hook de `useState` é um dos mais utilizados;
* Utilizamos para gerenciar o estado de algum dado, variáveis não funcionam corretamente, o componente não re-renderiza;
* Para guardar o dado, definimos o nome da variável e para alterar, vamos utilizar o `setNome`, onde o nome é o nome do nosso dado.

### Código do componente
```
import { useState } from "react"
const ManageData = () => {
    const [number, setNumber] = useState(0)
  return (
    <div>
        <p>Valor de cliques: {number}</p>
        <button onClick={() => setNumber(number + 1)}>Acrescentar um número</button>
    </div>
  )
}

export default ManageData
```
`useState(0)` = o 0 é o número que aquela variável `number` irá receber inicialmente.
`setNumber(number + 1)` = ele altera a variável que está dentro do `number` para acrescentar mais um, ou seja, se antes estava 0, ao clicar, se tornará 1.

## Aula 05 - Renderização de lista:

* Uma outra ação bem comum é renderizar listas de dados no template;
* Fazemos isso com os dados com tipo de array;
* Utilizando o método `map()` para nos auxiliar;
* Além dos dados podemos inserir JSX em cada iteração.

### Código do componente
```
import { useState } from "react"
const ListRender = () => {
    const [list] = useState(["Nine", "Tails", "9219", "Davi", "oTÁVIO"])
    return (
        <div>
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}
export default ListRender
```
> [!NOTE]
> Para os códigos de interpolação no `map()` é preciso utilizar o `()` ao invés de `{}`. ex: `list.map((i) => (<código>))`.

## Aula 06 - Propriedade key - List no react:

* Iterar listas sem a prorpiedade key gera avisos, podemos verificar no console;
* O react precisa de uma chave única em cada item iterado;
* isso serve para ajudar na renderização do componente;
* Geralmente teremos um array de objetos e podemos colocar key como chave única. como o id de algum dado;
* Em último caso, devemos utilizao o index do método `map()`.

### Código do componente:
```
import { useState } from "react"
const ListRender = () => {
    const [users] = useState([
        {id: 1, nome: "Nine"},
        {id: 2, nome: "Tails"},
        {id: 3, nome: "#9219"}
    ])
    return (
        <div>
            <ul>
                {users.map((item) => (
                    <li key={item.id}>{item.nome}</li>
                ))}
            </ul>
        </div>
    )
}
export default ListRender
```

## Aula 07 - Previous state:

* Previous state é um recurso que nos permite pegar o dado em seu alor original dentro de um set de dado;
* Isso é muito utilizado para modificar listar, pois temos o valor antigo e transformamos em um valor novo;
* O primeiro argumento de um set sempre será o previous state.

### Código do componente:
```
import { useState } from "react"
const deleteRandom = () =>{
  const [users, setUsers] = useState([
    {id: 1, nome: "Nine"},
    {id: 2, nome: "Tails"},
    {id: 3, nome: "#9219"}
  ])
  const randomNumber = Math.floor(Math.random() * 3)

  setUsers((prevUsers) => {
    return prevUsers.filter((user) => randomNumber !== user.id)
  })
  }
```

## Criando react-app pelo vite:
`npm create vite@latest`