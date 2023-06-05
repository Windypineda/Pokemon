import { useState, useEffect } from "react";
import Layout from "@/layout/layout";
import { Carousel } from "flowbite-react";
import { ProductoCard } from "./components/productoCard";
export default function TvPokemon() {
  const [productos, actualizarProductos] = useState(null);
  const [alerta, actualizarAlerta] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  useEffect(() => {
    async function llamarProductos() {
      const solicitud = await fetch("./tvPokemon.json");
      const respuesta = await solicitud.json();
      actualizarProductos(respuesta.productos);
    }
    llamarProductos();
  }, []);
  function volver(producto) {
    console.log(producto);
    setMostrarModal(false);
  }
  return (
    <Layout>

      <section class="bg-white dark:bg-gray-900">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">

            <div class="titulos">
              TvPokemon
            </div>
            <p class="colorletranegro">Ve increíbles aventuras de dibujos animados Pokémon con Ash, Pikachu y sus amigos como protagonistas. ¡No te pierdas las películas, los episodios y otros especiales de dibujos animados!</p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="data:image/jpeg;base64,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" alt="office content 1" />
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://assets.pokemon.com/assets/cms2-es-xl/img/watch-pokemon-tv/pokemon-tv-app/season18/season18-1660x940-es.png" alt="office content 2" />
          </div>
        </div>
      </section>

      <div>
        <div className="flex flex-wrap justify-around ">
          {productos ? (
            productos.map((producto, index) => {
              return (
                <>
                  <ProductoCard
                    key={index}
                    producto={producto}
                    setMostrarModal={!setMostrarModal}
                  ></ProductoCard>
                </>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </Layout>
  );
}