import React from "react";
import { UseFetch } from "./useFetch";
import { Card , Button } from "flowbite-react";
import { Spinner } from 'flowbite-react';


export const CardPokemon = ({url}) => {
  const estado = UseFetch(url)
  const {cargando, pokemon} = estado
  
  return (
    <>
      {
        cargando
        ?
        <Spinner
          aria-label="Failure spinner example"
          color="failure"
        />
        :
        <div>
          <Card className="w-52 h-100 my-5 fondo justify-center ">
            <img className="w-52 h-52 justify-center" src={pokemon.sprites.other.dream_world.front_default}></img>
            <h5 className=" fondo text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              <p>{pokemon.forms[0].name}</p>
            </h5>
            <p className=" colorleblanca font-normal text-gray-700 dark:text-gray-400">
              
            </p>
            <p className="colorleblanca text-center font-normal text-gray-700 dark:text-gray-400">
              {pokemon.types[0].type.name}
            </p>
          </Card>
        </div>
      }
    </>
  );
}
