import { useState, useEffect } from "react";

export const UseFetch = (url) => {
    const [resultado, setResultado] = useState({cargando:true, data:null})
    
    useEffect( ()=>{
        getDatos(url)
    },[url])
    
    async function getDatos(url){

        setResultado({cargando:true, pokemon:null})
        const resp = await fetch(url)
        const pokemon = await resp.json()
        setResultado({cargando:false, pokemon}) 
    }

    return resultado
}