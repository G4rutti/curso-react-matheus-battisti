# Módulo 04 - React e CSS:

## Aula 01 - CSS Global:

* O css global é utilizado para estilizar diversos elementos em comum ou fazer um reset no CSS;
* Utilizamos o arquivo `index.css` para isso;
* Ele está na pasta src;

## Aula 02 - CSS de componentes:

* O css de componente é utilizado para um componenete em específico;
* Geralmente é criado um arquivo com o mesmo nome do componente e este é importado no componente;
* Note que este método não é `scoped`, ou seja, o css vaza para outros componentes se houver uma regra em colisão;
* O React ja cria um exemplo desta técnica com o `App.css/jsx`.

> [!NOTE]
> Pelo fato do css de componente sempre vazar, sempre ultilize classes para estilizar o componente, como: `<p className="my-component">Este parágrafo é de myComponent</p>`, assim só o css irá passar apenas para os elementos com a classe `.my-component`, por exemplo.

## Aula 03 - CSS-Inline:

* O inline style do React é igual do css;
* Por meio de um atributo style conseguimos aplicar regras diretamente em um elemento;
* Devemos optar por outras maneiras de CSS, o inline pode dificultar a manutenção ou deixar o código imprevisivel em algumas situações.

### Código do estilo inline:
```
      <p style={{color: 'blue', padding: "2vw", borderTop: "2px solid red", backgroundColor:"Gold", marginTop:"2vh"}} >Este elemento foi estilizado de maneira inline</p>

```

> [!NOTE]
> Quando algum elemento do css tem mais de uma palavra, como por exemplo: `border-top`, no React, você utilizará o camelCase: `borderTop`.

## Aula 04 - CSS-Inline dinâmico:

* O CSS dinâmico inline aplica estilo baseado em uma condicional;
* Vamos inserir no atributo um `if ternário`;
* Dependendo da condição podemos mudar que regras de estilo um elemento recebe.

### Código de exemplo:

```
const num = 15
<h2 style={num < 10 ? ({ color:'gold' }) : ({ color:'purple' })}>CSS DINAMICO</h2>
<h2 style={num > 10 ? ({ color:'gold' }) : ({ color:'purple' })}>CSS DINAMICO</h2>
```

## Aula 05 - Classes dinâmicas:

* Podemos também aplicar lógica para mudar a classe de CSS de um elemento;
* Também utilizaremos o `if ternário`; 
* Essa abordagem é mais interessante que o css inline;
* Pois as classes estarão isoladas no arquivo de CSS, resolvendo o problema de organização de código

```
const [redTitle, setRedTitle] = useState(true)
<h2 className={redTitle ? "red-title" : "title"}>Esse título terá classe dinâmica</h2>
<button onClick={() => (redTitle ? (setRedTitle(false)) : (setRedTitle(true)))}>Mudar State</button>
```

## Aula 06 - CSS Modules:

* O CSS Modules é um recurso de CSS `scoped`;
* Ou seja, ele vai ser exclusivo do componente;
* O nome do arquivo é: `Componente.module.css`;
* Precisamos importá-lo também no componente.

### Exemplo de código:

```
import styles from './Title.module.css'
<h1 className={styles.myTitle}> Meu Título </h1>
```

## Desafio 05:

1. Crie um novo projeto challengeCss;
2. No CSS Global zere a margin, padding e coloque uma fonte q você goste;
```
*{
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

```
3. Crie um componente que exibe detalhes de carros, este componente deve ser estilizado em escoped;
### Código do componente: 
```
import styles from "./CarInfos.module.css"

const CarInfos = ({marca, modelo, cor, preco}) => {
  return (
    <div className={styles.cardCars}>
        <h2>{modelo}</h2>
        <ul>
            <li>{marca}</li>
            <li>{cor}</li>
            <li>{preco}</li>
        </ul>
    </div>
  )
}

export default CarInfos
```

### Código do CSS: 
```
.cardCars{
    display: flex;
    flex-direction: column;
    padding: 3vw;
    margin: 2vw;
    border: 4px solid gold;
    background-color: black;
    color: white;
}

.cardCars h2{
    text-align: center;
}

.cardCars li{
    border-bottom: 2px solid gold;
    margin-top: 2vh;
    list-style: none;
    text-align: center;
}

.cardCars ul{
    margin-top: 2vh;
}
```
4. Exiba pelo menos 3 carros:

### Código do App.jsx:
```
function App() {

  const [cars] = useState([
    {id: 1, marca: "Ford", modelo:"Fiesta", cor:"Azul Marinho", preco: 30000},
    {id: 2, marca: "Fiat", modelo:"Uno", cor:"Vermelho", preco: 24500},
    {id: 3, marca: "Ferrari", modelo:"F-40", cor:"Vermelho", preco: 300000},
    {id: 4, marca: "Porshe", modelo:"Spyder 918", cor:"Prateado", preco: 189000},
  ])

  return (
    <>
      <h1>Infos de Carros:</h1>
      <div className='carros'>
        {cars.map((carro) => (
          <CarInfos key={carro.id} marca={carro.marca} modelo={carro.modelo} cor={carro.cor} preco={carro.preco}/>
        ))}
      </div>
      
    </>
  )
}
```
5. Coloque um título em `App.jsx` para o seu projeto, estilize com o `App.css`:

### Código do App.jsx:
```
function App() {
  return (
    <>
      <h1>Infos de Carros:</h1>
    </>
  )
}
```

### Código do App.css:
```
h1{
    margin-top: 5vh;
    margin-bottom: 5vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    color: blue;
}
```

## Criando react-app pelo vite:
`npm create vite@latest`