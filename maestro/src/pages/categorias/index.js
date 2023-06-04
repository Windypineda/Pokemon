import { useState, useEffect } from "react";
import Layout from "@/layout/layout";
import { Carousel } from "flowbite-react";
import { ProductoCard } from "./components/productoCard";

export default function Categorias() {
  const [productos, actualizarProductos] = useState(null);
  const [alerta, actualizarAlerta] = useState(false);
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
                <ProductoCard
                  key={index}
                  producto={producto}
                  agregarAlCarrito={agregarAlCarrito}
                ></ProductoCard>
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