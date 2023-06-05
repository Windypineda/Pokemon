import { Button, Card } from "flowbite-react";

export function ProductoCard({ producto, agregarAlCarrito,titulo }) {
  return (
    <>
      <Card className="fondovideos w-52 my-5 fondo">
      {titulo}
        <img className="w-52" src={producto.imagen}></img>
        <h5 className=" fondo text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>{producto.nombre}</p>
        </h5>
        <p className=" colorleblanca font-normal text-gray-700 dark:text-gray-400">
          {producto.descripcion}
        </p>

        <p className="colorleblanca text-center font-normal text-gray-700 dark:text-gray-400">
          {producto.tipo}
        </p>
        <Button
          onClick={() => agregarAlCarrito(producto)}
          gradientDuoTone="purpleToBlue"
          outline
        >

          <p>Verdetalle</p>
        </Button>
      </Card>
    </>
  );
}
