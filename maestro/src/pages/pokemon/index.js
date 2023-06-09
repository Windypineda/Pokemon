import { useState, useEffect } from "react";
import Layout from "@/layout/layout";
import { Carousel } from "flowbite-react";
import { ProductoCard } from "./components/productoCard";

export default function Pokemon() {
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

  return (
    <Layout>

      <div class="titulos">
        Pokemon
      </div>

      <div>
        <div className="flex flex-wrap justify-around ">
          {productos ? (
            productos.map((producto, index) => {
              return (
                <ProductoCard
                  key={index}
                  producto={producto}
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