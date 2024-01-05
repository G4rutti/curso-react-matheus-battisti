# Módulo 09 - Context API

## Aula 01 - O que é Context API:
* Um recurso que facilita o compartilhamento de um estado entre componentes;
* Ou seja, quando precisamos de dados globais, provavelmente precisamos utilizar o Context;
* O Context precisa encapsular os componentes que receberão seus valores, geralmente colocamos no App.jsx ou Index.jsx;
* Os contextos geralmente ficam na pasta context;

## Aula 02 - Criando o contexto:
* Primeiramente vamos ter que criar o Context;
* O arquivo deve ter semper a primeira letra maiúscula no nome, e geralmente termina em context: `SomeContext.jsx`;
* A convenção é deixar na pasta context, em src;
* Onde vamos utilizar o valor do contexto, o arquivo precisa ser importado.

```
// Criar context
import { createContext, useState } from "react";


export const CounterContext = createContext()
```

## Aula 03 - Criando o provider:
* O provider vai delimitar onde o contexto é utilizado;
* Vamos criar uma espécie de componente com a prop children;
* E este provider deve encapsular os demais componenetes em que precisamos consultar ou alterar o valor;
* Geralmente ele fica em App.jsx ou em index.jsx;
* Agora poderemos compartilhar o valor do contexto em todos os componentes.

```
// Criar provider
export const CounterContextProvider = ({children}) => {

    const [counter, setCounter] = useState(5)
    return(
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
 
}
```
Main.jsx:
```
<CounterContextProvider>
    <App />
</CounterContextProvider>
```
Home.jsx
```
import { useContext } from "react"
import { CounterContext }from "../context/CounterContext.jsx"

const Home = () => {
  const {counter} = useContext(CounterContext)
  return (
    <div>
      <h1>Home</h1>
      <p>Valor do Contador = {counter}</p>
    </div>
  )
}

export default Home
```

## Aula 04 - Alterando o Contexto:

* Para alterar o valor do contexto precisamos criar um componente que utilize a função da mudança de contexto;
* Esta mudança ocorrerá no Context e poderá ser consumida por todos os componentes que recebem o contexto;
* E assim finalizamos o ciclo da Context API

```
// Alterando contexto
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext.jsx"

const ChangeCounter = () => {
    const {counter, setCounter} = useContext(CounterContext)
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>Incremente no valor</button>
        </div>
    )
}

export default ChangeCounter
```

## Aula 05 - Refatorando o contexto para hook:
* Podemos criar um hook para utilizar o contexto, isso nos da algumas vantagens;
* Não precisamos importar o useContext em todos os lugares que vamos usar o contexto, só o hook;
* Temos um espaço para fazer uma validação do contexto;

## Aula 06 - Criando um contexto mais complexo:
* Contextos mais complexos podem ter variações no comportamento;
* Para isso, vamos utilizar um hook chamado useReducer;
* Que é como o useState, mas para controle de dados mais complexos;
* No reducer teremos diferentes ações com um switch;
* E na aplicação vamos consumir o esdado atual do dado que está no reducer.

## Aula 07 - Alterando contexto complexo:
* Para alterar o contexto vamos utilizar uma função chamada dispatch;
* Ela estará no reducer também;
* E deve conter todas as informações necessárias para a alteração do valor do contexto;
* Ou seja, o switch entra em ação e retorna um novo contexto;