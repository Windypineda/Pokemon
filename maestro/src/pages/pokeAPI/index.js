import Layout from "@/layout/layout";
import React, { useState } from "react";
import { UseFetch } from "./components/useFetch";
import { Cards } from "./components/cards";
import { Spinner } from 'flowbite-react';


const Pokemon = () => {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=151')
  const estado = UseFetch(url)
  const {cargando, pokemon} = estado
  cargando ? console.log('cargando'):console.log(pokemon.results)

  return (
    <Layout>
      <>
        {
          cargando
          ?
          <Spinner
            aria-label="Failure spinner example"
            color="failure"
          />
          :
          <div className="">
            <Cards results={pokemon.results}/>
          </div>
        }
      </>
    </Layout>
  )
}

export default Pokemon;