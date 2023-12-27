const Challenge = () =>{
    const numa = 6
    const numb = 5
    const handleSoma = (a, b) => {
        const soma = a + b
        console.log(soma)
        return <p>o resultado é: {soma}</p>
    }
    
    return(
        
        <div>
            <h1>Números:</h1>
            <p>1° número = {numa}</p>
            <p>2° número = {numb}</p>
            
            <button onClick={() => handleSoma(numa,numb)}>Ver soma dos dois números</button>
            
        </div>
    )
}

export default Challenge

