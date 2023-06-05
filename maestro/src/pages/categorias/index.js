import { useState, useEffect } from "react";
import Layout from "@/layout/layout";
import { Carousel } from "flowbite-react";
import { ProductoCard } from "./components/productoCard";
import { PokemonDetalle } from "./components/pokemonDetalle";
export default function Categorias() {
  const [productos, actualizarProductos] = useState(null);
  const [alerta, actualizarAlerta] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  let titulo = "Pokemon";
  useEffect(() => {
    async function llamarProductos() {
      const solicitud = await fetch("./pokemon.json");
      const respuesta = await solicitud.json();
      actualizarProductos(respuesta.productos);
    }
    llamarProductos();
  }, []);

  function agregarAlCarrito(producto) {
    console.log(producto);
    let productosjson= [
        { 
          "id": producto.id,
          "nombre": producto.nombre,
          "descripcion": producto.descripcion,
          "tipo": producto.tipo,
          "altura": producto.altura,
          "categoria": producto.categoria,
          "peso": producto.peso,
          "Habilidad": producto.Habilidad,
          "sexo": producto.sexo,
          "Debilidad": producto.Debilidad,
          "imagen": producto.imagen
        }];
    setMostrarModal(true);
    actualizarProductos(productosjson);
  }
  function volver(producto) {
    console.log(producto);
    setMostrarModal(false);
    async function llamarProductos() {
      const solicitud = await fetch("./pokemon.json");
      const respuesta = await solicitud.json();
      actualizarProductos(respuesta.productos);
    }
    llamarProductos();

  }

  return (
    <Layout>

      <div class="titulos">
        Categorias
      </div>

      <div>
        <div className="flex flex-wrap justify-around ">
          {productos ? (
            productos.map((producto, index) => {
              return (
                <>
                  {!mostrarModal && (
                    <ProductoCard
                      key={index}
                      titulo={titulo}
                      producto={producto}
                      agregarAlCarrito={agregarAlCarrito}
                      setMostrarModal={!setMostrarModal}
                    ></ProductoCard>
                  )}
                  {mostrarModal && (
                    <PokemonDetalle
                      key={index}
                      titulo={titulo}
                      producto={producto}
                      volver={volver}
                      setMostrarModal={setMostrarModal}
                    ></PokemonDetalle>
                  )}
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