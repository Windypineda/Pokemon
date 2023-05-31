import { useState, useEffect } from "react";
import { ProductoCard } from "./components/productoCard";
import { AlertaExito } from "../components/alertas";
import ReactPlayer from "react-player";

export default function Productos() {
  const [productos, actualizarProductos] = useState(null);
  const [alerta, actualizarAlerta] = useState(false);

  useEffect(() => {
    async function llamarProductos() {
      const solicitud = await fetch("./productos.json");
      const respuesta = await solicitud.json();
      actualizarProductos(respuesta.productos);
    }

    llamarProductos();
  }, []);

  function agregarAlCarrito() {
    actualizarAlerta(true);
  }

  return (
    <>
      <h6>Home</h6>

      <div align="center">
        <a href="/home">
          <img src="/imagenes/VS7z.gif" alt="" height="500" width="500" a />
        </a>
      </div>


      <nav class="">

        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4" >

          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/500/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>

          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/home" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                  <img src="/imagenes/inicio.png" alt="" height="200" width="200" />
                </a>
              </li>
              <li>
                <a href="/categorias" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                  <img src="/imagenes/categorias.png" alt="" height="200" width="200" />
                </a>
              </li>
              <li>
                <a href="/tvPokemon" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                  <img src="/imagenes/tvpokemon.png" alt="" height="200" width="200" />
                </a>
              </li>

              <li>
                <a href="/carrito" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                  <img src="/imagenes/carrito.png" alt="" height="150" width="150" />

                </a>
              </li>
              <li>
                <a href="/login" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                  <img src="/imagenes/login.png" alt="" height="200" width="200" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex justify-center mt-5">
        {alerta ? (
          <AlertaExito mensaje="Se ha enviado el producto al carrito!!"></AlertaExito>
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-wrap justify-around">
        {productos ? (
          productos.map((producto) => {
            return (
              <ProductoCard
                producto={producto}
                agregarAlCarrito={agregarAlCarrito}
              ></ProductoCard>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
