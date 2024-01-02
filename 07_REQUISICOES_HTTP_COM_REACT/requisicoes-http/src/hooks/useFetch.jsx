import { useState, useEffect } from "react";

export const useFetch = (url) => {
    // --- VARIÁVEIS ---

    const [data, setData] = useState(null)
    // Aula 07 - Refatorando o post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    // Aula 08 - Estado de loading:
    const [loading, setLoading] = useState(false)

    // Aula 10 - Tratando erros
    const [error, setError] = useState(null)


    // --- CÓDIGOS ---
    useEffect(() => {
        const fetchData = async () => {
            // Aula 08 - Estado de loading:
            setLoading(true)
            try {
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
            } catch (error) {
                console.log(error.message)
                setError("Houve um erro ao carregar os dados")
            }
            
            setLoading(false)
        }
        fetchData()
    }, [url, callFetch])

    
    // Aula 07 - Refatorando o post

    const httpConfig = (data, method) => {
        if(method == "POST"){
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            setMethod(method)
        }
    }




    useEffect(() => {
        const httpRequestPost = async () => {
            if(method == "POST"){
                let fetchOptions = [url, config]
                const res = await fetch(... fetchOptions)
                const json = await res.json()
                setCallFetch(json)
            }else if( method == "DELETE"){
                const res = await fetch(url)
                const json = await res.json()
                setCallFetch(json)
            }
        }

        httpRequestPost()
        
    }, [config, method, url])

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


    return { data, httpConfig, loading, error, deletarPorId }
}

