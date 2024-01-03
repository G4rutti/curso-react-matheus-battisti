# Módulo 08 - React Router:

## Aula 01 - O que é um React Router:

* React Router é um dos pacores mais utilizados para criar uma estrutura de rotas em aplicações do React;
* Ou seja, permite que nossas SPAs tenham multiplas páginas;
* Precisamos instalar no nosso projeto;
* A configuração e utilização é simples;
* Também temos outras funções como: Redirect, Nested Routes, Not Found Routes e outros.

## Aula 02 - Configurando o React Router:

* Para configurar o React Router, vamos ter que importar tres elementos de react-router-dom;
* BrowserRouter: Define onde a área do nosso app que vai trocar as páginas;
* Routes: Define as rotas;
* Route: Um elemento deste para cada rota, configurar com path e componente da rota.

### Código:
```
// Importando React Routes
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Importando React Pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/sobre' element={ <About/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
```

## Aula 03 - Adicionando links:

* Para criar links para as páginas vamos precisar utilizar o Link do React Router;
* No link configuramos o parâmetro `to`, que recebe a URL/Path que será redirecionado quem clicar no link

## Aula 04 - Carregando dados:

* Vamos exercitar novamente o carregamento de dados com o nosso hook useFetch;
* Depois poderemos utilizá-los para o carregamento de dados individuais;
* Utilizaremos o hook igual ao da última seção e vamos imprimir os produtos na Home da mesma forma.