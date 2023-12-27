const MyEvent = () => {
    const handleConsoleLogEvent = () => {
        console.log("Davi Garutti é foda!")
    }

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando true</h1>
        }else{
            return <h1>Renderizando false</h1>
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleConsoleLogEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log('Clicou aqui tamem')}>Clique aqui tamem!</button>
            </div>
            <div>
                <button onClick={() => {
                    if(true){
                        console.log('to complicando p crl mlk porra')
                    }
                }}>Se você ja clicou em tudo, clica aqui tbm</button>
            </div>
            {renderSomething(true)}
        </div>
    )
}

export default MyEvent