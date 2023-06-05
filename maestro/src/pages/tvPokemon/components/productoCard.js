import { Button, Card } from "flowbite-react";

export function ProductoCard({ producto, agregarAlCarrito }) {
  return (

    <Card className="fondovideos w-200 my-100">

      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>{producto.titulo}</p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>{producto.descripcion}</p>
      </p>
      <img  src={producto.imagen}></img>
      <a href={producto.video} >
        <div class="colorletranegro">
          Ver Video
        </div> </a>
    </Card>
  );
}
