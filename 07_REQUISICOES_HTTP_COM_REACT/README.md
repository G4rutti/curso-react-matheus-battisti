# Modúlo 07 - Requisições HTTP com React

## Aula 01 - JSON SERVER:

* O json server é um pacote npm;
* ele simula uma API, e isso nos possibilita fazer requisições HTTP;
* Vamos aprender a integrar este recurso com o React;
* Podemos entender isso como uma etapa de preparação para APIs reais;
* Ou seja, atingir o mesmo resultado mas sem precisar de uma estrutura no back-end.

1.`npm install json-server`
2.`"server": "json-server --watch data/db.json"` No package.json;
3.`npm run server` no terminal;
4. `npm run dev` em outro terminal;

## Aula 02 - A importância do `useEffect()`:

* O `useEffect()` faz com que determinada ação seja executada apenas uma vez;
* Isso é interessante pois os componenetes estão sempre se re-renderizando, entao precisamos ter ações únicas, as vezes;
* O `useEffect()` ainda possui um array de dependencias, que deve conter os dados que ativem a função de forma automática;
* O `useEffect()` estará presente sempre nas requisições assíncronas!

## Aula 03 - Resgatando dados da API:

* Para trazer os dados vamos ter que utilizar vários recursos;
* Primeiramente, ter um local para salvá-los: `useState()`;
* Renderizar a chamada a API apenas uma vez: `useEffect()`;
* Um meio de fazer a requisição assíncrona: `Fetch API`.

### Código:
```
const [products, setProducts] = useState([])

useEffect(() => {
    async function fetchData(){
      const res = await fetch(url)
      const data = await res.json()
  
      setProducts(data)
    }
    fetchData()
  }, [products])
```


## Aula 04 - Adicionando dados com React:

* Para adicionar um item, vamos precisar resgatar os dados do form com o `useState`;
* Reunir eles em uma função após o submit e enviar um request de POST para a nossa API;
* O processo é bem parecido com o resgate de dados, mas agora estamos enviando dados.

### Código:
```
const produto ={
      name,
      price
    }

const res = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type" : "application/json"
  },
  body: JSON.stringify(produto)
})
```

## Aula 05 - Carregamento de dados dinâmicos:

* Se a requisição foi feita com sucesso, podemos adicionar o item a lista após o request;
* Isso torna a nossa aplicação mais performática;
* Utilizaremos o set do useState para isso;

### Código:
```
const addedProduct = await res.json()
setProducts((previousProducts) => [...previousProducts, addedProduct])
```

## Aula 06 - Custon Hook para resgate de dados:

* É normal dividir funções que podem ser reaproveitadas em hooks;
* Esta técnica é chamada de custom hook, e vamos criar um para o resgate de dados;
* Os hooks geralmente ficam na pasta hooks;
* Devemos utilizar o padrão `useName`;
* Basicamente criamos uma função e exportamos ela.

## Aula 07 - Refatorando o POST:

* Podemos utilizar o mesmo hook para incluir uma etapa de POST;
* Vamos criar um novo useEffect que mapeia uma outra mudança de estado;
* Apos ela ocorrer executamos a adição do produto;
* **OBS:** nem sempre reutilizar um hook é a melhor estratégia.

## Aula 08 - Estado de loading:

* Quando fizermos requisições para API's é normal que haja um intervalo de loading entre a requisição e o recebimento da resposta;
* Podemos fazer isso no nosso hook também;
* Identificar quando começa e termina esse estado.

## Aula 09 - Loading no POST:

* Podemos bloquear ações indevidas em outras requests também, como no POST;
* Uma ação interessante é remover a achao de adicionar outro item enquanto o resquest ainda nao finalizou;

## Aula 10 - Tratando erros:

* Podemos tratar os erros das requisições por meio de um `try catch`
* Além de pegar os dados do erro, também podemos alterar um state para imprimir um elemento caso algo der errado;
* Desta maneira conseguimos prever vários cenarios.

## Desafio:
1. Crie um botão nos produtos:
```
<ul>
    {itens && itens.map((item) => (
      <li key={item.id}>{item.name} - R$: {item.price} - <button key={item.id} id={item.id} onClick={() => handleDelete(item.id)}>Delete</button></li>
    ))}
</ul>
```
2. Este botão deve disparar uma função de remoção de produto:
```
const handleDelete = async(id) => {
    deletarPorId(url, id)
}
```
3. A url deve ser a mesma da API + o id do produto: products/1:
```
const deletarPorId = async (url, id) => {
        setLoading(true)
        try {
            const fetchDados = await fetch(`${url}/${id}`,{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const result = await fetchDados.json()
            console.log("Success:", result)
            setMethod("DELETE")
            setLoading(false)           
        } catch (error) {
            setError("Houve um erro ao carregar os dados")
        }
        
    }
```
4. Você vai precisar identificar quando é uma requisição delete, para mudar o verbo a http das configurações:
5. Utilize a ideia do método de POST para derivar para o delete, pode ser com if/else:
