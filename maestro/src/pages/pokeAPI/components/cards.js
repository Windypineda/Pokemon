import React from "react";
import { CardPokemon } from "./cardPokemon";

export const Cards = ({results}) => {

    return (
        <div >
            <ul className="flex flex-wrap justify-center shadow-xl">
                {
                    results.map(p => (
                        <li className="mx-5" key={p.name}>
                            <CardPokemon url={p.url}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}