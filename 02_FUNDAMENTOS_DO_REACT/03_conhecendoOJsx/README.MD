# JSX

* **JSX** é o HTML do React;
* Onde vamos declarar as tags de HTML que serão exibidas no navegador;
* Ficam no **return** do componente;
* Temos algumas diferenças do HTML, por exemplo: `class=""` será `className=""`
* Isso se dá pelas instruções semelhantes do JS e HTML, pois o JSX é o JavaScript, então terão nomes diferentes;
* O JSX pode ter apenas **UM elemento pai** 

## Exemplos:

*Isso não pode:
```
const FirstComponent = () => {
    return(
        <h2>It's my first component!!</h2>
        <p>Hello world<p/>
    )
}

```
*Isso pode:
```
const FirstComponent = () => {
    return(
        <div>
            <h2>It's my first component!!</h2>
            <p>Hello world<p/>
        </div>
    )
}
```