import { useState, useEffect } from "react";
import Layout from "@/layout/layout";

export default function Home() {
  return (
    <Layout>
      <div className="max-w-full flex justify-center p-2" id="video" >
        <video loop autoPlay muted height="70%" width="70%"><source src="/videos/pokemon.mp4"></source></video>
      </div>
      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Pokémon sus Inicios !</h2>
            <p class="mb-4">POKEMON es una franquicia de medios que originalmente comenzó como un videojuego RPG, pero debido a su popularidad ha logrado expandirse a otros medios de entretenimiento como series de televisión, películas, juegos de cartas, ropa, entre otros, convirtiéndose en una marca que es reconocida en el mercado mundial.</p>
            <p>Cuando  su creador Satoshi Tajiri era joven, una de sus actividades favoritas era la recolección y colección de insectos, el otro eran los videojuegos. Estos dos pasatiempos fueron el germen de inicio para la creación del mundo Pokémon. Junto a su amigo Ken Sugimori (el diseñador artístico de los primeros 151 Pokémon) crearon una revista llamada Game Freak en 1982, y es cuando tuvo la idea de crear un videojuego. Luego de 6 años de intenso trabajo, Pokémon vio la luz el 27 de febrero de 1996 bajo el nombre de Pocket Monsters. Inicialmente el videojuego no tuvo éxito, pero al alcanzar un año, se había llegado a la marca de un millón de copias.</p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="/imagenes/satoshi.png" alt="office content 1" />
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="/imagenes/PocketMonsters.jpg" alt="office content 2" />
          </div>
        </div>
      </section>
    </Layout>
  );

}
