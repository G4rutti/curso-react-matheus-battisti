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

## Criando react-app pelo vite:
`npm create vite@latest`