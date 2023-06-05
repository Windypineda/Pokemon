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
            </div><br></br>
            <h1 class= "colorletranegro">Serie Pokémon XY-Expediciones en Kalos</h1>
            <p>TEMPORADA 18</p>
            <p class="colorletranegro">
              No te pierdas las aventuras de Ash a través de la región Kalos en la serie Pokémon XY-Expediciones en Kalos, ¡ya disponible en TV Pokémon!
            </p> <br></br>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="/imagenes/xy.png" alt="office content 1" />
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