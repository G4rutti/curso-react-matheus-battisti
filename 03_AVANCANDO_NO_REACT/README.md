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

## Aula 08 - Renderização condicional:

* Renderização condicional é quando imprimimos uma parte do template baseado em um condição;
* Ou seja, utilizando uma chegagem com `if`;
* Isso é interessante em situações como: usuário autenticado/não autenticado.

### Código do componente:
```
const [x] = useState(true)
{x && <p>Se x for true</p>}
{!x && <p>Se x for false</p>}
```

## Aula 09 - if e else no JSX:
> [!NOTE]
> As condicionais são utilizadas o **If ternário**, ou seja: `<condição> ? <primeiroBloco> : <segundoBloco>`.

### Código do componente:
```
const [name, setName] = useState("João")
{name === "Davi" ? (
  <p>O nome é Davi</p>
) : (
  <p>O nome não foi encontrado</p>
)}
```

## Aula 10 - Introdução aos `props`:

* Props é outro recurso fundamental do React;
* Nos permite passar valores de um componente pai para um componente filho;
* Isso será muito útil quando os dados forem carregados via banco de dados, por exemplo;
* As props vem em um objeto no argumento da função do componente.

### Código do componente:
```
const ShowUserName = (props) => {
  return (
    <div>
        <h2>O nome do usuário é: {props.name}</h2>
    </div>
  )
}

export default ShowUserName
```
```
import ConditionalRender from './components/ConditionalRender.jsx'
function App() {
  return (
    <div>
      <ShowUserName name="Rogério"/>
    </div>
    
  )
}
```

## Aula 11 - Desestruturando props:

* É super comom passar mais de uma prop em um componente;
* Para facilitar isso, o React nos permite desestruturar as propriedades que chegam, com o recurso de destructuring; 
* Se temos duas props: name e age;
* Podemos fazer assim `function MyComponent({name, age})`
* Agora nao precisamos mais utilizar props.alguma coisa.

### Código do componente:
```
const CarDetails = ({brand, km, color}) => {
  return (
    <div>
        <h1>Detalhes do carro:</h1>
        <ul>
            <li>Marca: {brand}</li>
            <li>Quilometragem: {km}km(s) rodados</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}
```
No app.jsx
`<CarDetails brand="Porshe" km={5000} color="Preto"/>`

## Aula 12 - Reutilização de componentes:

* Com props a reutilização de componente começa a fazer muito sentido;
* Se temos os dados de 1000 carros por exemplo, podemos reaproveitar o nosso `CarDetails.JSX` 1000 vezes;
* Isso torna o código mais padronizado, facilitando a manutenção.

## Aula 13 - Renderização de Lista em componente:

* Os arrays de dados podem ter muitos itens também;
* Então o correto é utilizar uma estrutura de loop `map()` para sua exibição;
* E com isso, conseguimos conciliar os três conceitos: Renderização de listas, reaproveitamento de componentes e props!

### Código no App.js:
```
function App() {
  const cars = [
    {id: 1, brand: "Fiat", color: "Branco", km: 5500},
    {id: 2, brand: "Ford", color: "Azul-Marinho", km: 3120},
    {id: 3, brand: "Ferrari", color: "Vermelha", km: 0}
  ]
  return (
    <div>
      {/* Loop com array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.key} brand={car.brand} km={car.km} color={car.color}/>
      ))}
    </div>
    
  )
}
```

## Aula 14 - React Fragments:

* Os React Fragments são interessantes para quando precisamos ter mais de um elemento pai em um componente;
* Criamos uma tag vazia: `<> </>`
* E ela serve como elemento pai, não alterando a estrutura do HTML com uma div, por exemplo.

## Aula 15 - Children prop:

* Children prop é um recurso utilizado para quando um componente precisa ter JSX dentro dele;
* Porém este JSX vem do componente pai;
* Então o componente age como um container, abraçnado estes elementos;
* E children é considerada uma prop do container.

### Código do component:
```
const Container = ({children}) => {
  return (
    <div>
        <h2>Este é o título do container</h2>
        {children}
    </div>
  )
}
```
### Código do app.js:
```
function App() {
  return (
    <div>
      {/* Children props */}
      <Container>
        <p>Hello, World! Its my container.</p>
      </Container>
      <Container>
        <h3>Thats my second cotnainer</h3>
      </Container>
    </div>
    
  )
}
```

## Aula 16 - Funções em props:

* As funções podem ser passadas para as props normalmente;
* Basta criar a função no componente pai e enviar como prop para o componente;
* No componente filho ela pode ser ativada por um evento, por exemplo.

### Código do componente:

```<ExecuteFunction myFunction={sendMessage}/>```
```
const ExecuteFunction = ({myFunction}) => {
  return (
    <div><button onClick={myFunction}>Clique aqui para executar a função</button></div>
  )
}

```

## Aula 17 - State Lift:

* Elevação de state ou State lift é quando um valor é elevado do componente filho para o componente pai;
* Geralmente temos um componente que usa o state e outro que o altera;
* Então precisamos passar a alteração para o componente pai, e esta passa para o componente que usa o state.

### App.jsx:
```
const [message, setMessage] = useState('')

const handleMessage = (msg) => {
  setMessage(msg)
}

function App() {
  return (
    <div>
      {/* State Lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  )
}
```
### Message.jsx:
```
const Message = ({msg}) => {
  return (
    <div>A mensagem é: {msg}</div>
  )
}

export default Message
```
### ChangeMessageState.jsx:
```
import React from 'react'

const ChangeMessageState = ({handleMessage}) => {
    const messages = ["oi", "olá", "Oi, tudo bem?"]
  return (
    <div>
        <button onClick={() => handleMessage(messages[0])}>1</button>
        <button onClick={() => handleMessage(messages[1])}>2</button>
        <button onClick={() => handleMessage(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessageState
```
## Desafio 4:
1. Crie um array de objetos compostos de pessoas, com as propriedades de: nome, idade e profissao (ao menos 3 itens):
```
const persons = [
    {id: 1, nome: "Davi", idade: 17, profissao: "Programador"},
    {id: 2, nome: "José", idade: 35, profissao: "Zelador"},
    {id: 3, nome: "Carlos", idade: 22, profissao: "Velocista"},
  ]
```
2. Os dados devem ser exibidos em um componente UserDetails, que você deve criar, todas as informações devem ser exibidas:
```
const CarDetails = ({brand, km, color}) => {
  return (
    <div>
        <h1>Detalhes do carro:</h1>
        <ul>
            <li>Marca: {brand}</li>
            <li>Quilometragem: {km}km(s) rodados</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails
```
3. Faça uma renderização condicional que exibe se o usuário pode tirar carteira de habilitação ou não, imprima isso também no componente:
```
{persons.map((person) => (
        <UserDetails key={person.id} nome={person.nome} idade={person.idade} profissao={person.profissao}/>
))}
```
4. A informação pode ser exibida num paragrafo.

## Criando react-app pelo vite:
`npm create vite@latest`