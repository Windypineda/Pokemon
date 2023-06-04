import { useState, useEffect } from "react";
import Layout from "@/layout/layout";
import { Carousel } from "flowbite-react";
import { ProductoCard } from "./components/productoCard";
import { PokemonDetalle } from "./components/pokemonDetalle";
export default function Categorias() {
  const [productos, actualizarProductos] = useState(null);
  const [alerta, actualizarAlerta] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  useEffect(() => {
    async function llamarProductos() {
      const solicitud = await fetch("./pokemon.json");
      const respuesta = await solicitud.json();
      actualizarProductos(respuesta.productos);
    }

    llamarProductos();
  }, []);

  async function agregarAlCarrito(producto) {
    console.log(producto);
    productos: [
      {
          "id": producto.id,
          "nombre": producto.nombre,
          "descripcion": producto.descripcion,
          "tipo":producto.tipo,
          "altura":producto.altura,
          "categoria": producto.categoria,
          "peso":producto.peso,
          "Habilidad":producto.Habilidad,
          "sexo":producto.sexo,
          "Debilidad":producto.Debilidad,
          "imagen": producto.imagen
      }];
    actualizarProductos(productos);
    setMostrarModal(true);
  }
  function volver(producto) {
    console.log(producto);
    setMostrarModal(false);
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
                    producto={producto}
                    agregarAlCarrito={agregarAlCarrito}
                    setMostrarModal={!setMostrarModal}
                  ></ProductoCard>
                  )}
                  {mostrarModal && (
                  <PokemonDetalle
                    key={index}
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