import { Button, Card } from "flowbite-react";

export function PokemonDetalle({ producto, volver,titulo  }) {
  return (
    <>
         
      <a href="#" class=" flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
       
      
       <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="" />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <p class="colorletranegro mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-whit">Numero {producto.id}</p>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{producto.nombre}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{producto.descripcion}</p>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src={producto.imagen} alt="office content 1" />
          </div>
          <div class="columna">

          </div>
          {titulo}
          <table class="table-auto">

            <tbody>
              <tr>
                <td>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Categoria </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{producto.categoria}</p>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Peso </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{producto.peso}</p></td>
                <td> <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Habilidad </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{producto.Habilidad}</p>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sexo </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{producto.sexo}</p>
                </td>

              </tr>
              <tr>

                <td>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Debilidad </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{producto.Debilidad}</p>
                </td>
              </tr>
            </tbody>
          </table>

          <Button
          onClick={() => volver(producto)}
          gradientDuoTone="purpleToBlue"
          outline
        >

          <p>Volver</p>
        </Button>
        </div>
      </a>

    </>
  );
}
